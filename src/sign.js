import React, { Component } from 'react';//核心库
//import ReactDOM from 'react-dom'; //负责页面显示
import './css/sign.css'//引入自定义的局部样式
import './news_html/html/css/style.css'//引入公共的样式
//import request from './utils/request';//引入封装的ajax请求
import axios from 'axios'//引入原生的axios库
import { Toast, Dialog } from 'antd-mobile'//引入第三方组件

class Sign extends Component {
    //constructor(props) {
        //super(props)
        //console.log(this.props)获取路由对象
    //}
    state = {
        msg: '这是Sign类组件',
        avatar: '',
    }
    //创建ref对象获取表单input的value值
    usernameRef = React.createRef()
    passwordRef = React.createRef()
    passwordRef2 = React.createRef()
    imgRef = React.createRef()
    sign = () => {
        let username = this.usernameRef.current.value
        let password = this.passwordRef.current.value
        let password2 = this.passwordRef2.current.value
        //console.log(122)
        //console.log(this.usernameRef.current.value)
        //console.log(this.passwordRef.current.value)
        if (username && password && this.state.avatar && password2) {//判断是否有填写完整的表单信息
            let dd = new FormData()//通过此方法将请求参数转成接口需要的数据格式
            dd.append('username', username)
            dd.append('password', password)
            dd.append('avatar', this.state.avatar)
            axios.post('https://www.young1024.com:3002/sign', dd).then((res) => {
                console.log(res)
                if (res.data.status === 'success') {
                    Dialog.alert({
                        content: '注册成功',
                        confirmText: '去登录',
                        onConfirm: () => {
                            this.props.history.replace('/login')
                        }
                    })
                } else if(res.data.status === 'fail'){
                    Toast.show({
                        icon: 'fail',
                        content: '注册失败'
                    })
                }
            }).catch((err) => {
                console.log(err)
            })
        } else {
            alert('请完整填写信息')
        }
    }

    handle = (e) => {
        let that = this
        let file = e.target.files[0]//获取到选择的第一个文件信息
        let reader = new FileReader()//new一个构造函数得到一个对象
        //console.log(e.target.files)
        this.setState({
            avatar: file//保存获取到的文件信息
        })
        reader.readAsDataURL(file)//调用该对象的方法转成64位图片格式
        reader.onload = function () {//监听事件
            that.imgRef.current.src = this.result
        }
    }
    render() {
        return (
            <form>
                <div className="box">
                    <div className="m_t25">
                        <input type="text" className="input1" placeholder="用户名" ref={this.usernameRef} />
                    </div>
                    <div className="m_t25">
                        <input type="new-password" className="input1" placeholder="密码" ref={this.passwordRef} />
                    </div>
                    <div className="m_t25">
                        <input type="new-password" ref={this.passwordRef2} className="input1" placeholder="重复密码" />
                    </div>
                    <div className="m_t25">
                        <div className="itemname">头像,请点击下方添加</div>
                        <div>
                            <a className="avater_btn">
                                <input type='file' accept='image/*' onChange={this.handle} className='avatar'></input>
                            </a>
                            <img ref={this.imgRef} src='' alt='' className='previewimg'></img>
                        </div>
                    </div>
                    <div className="m_t25" >
                        <input type="button" className="login_btn" value="注册" onClick={this.sign} />

                    </div>
                    <div className="m_t15">

                        <div className="tar">
                            <a onClick={() => { this.props.history.push('/login') }}>登录</a>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}
export default Sign