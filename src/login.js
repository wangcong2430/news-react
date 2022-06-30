import React, { Component } from 'react';//核心库
//import ReactDOM from 'react-dom'; //负责页面显示
import './news_html/html/css/style.css'//导入公用的样式
import './css/login.css'//导入自定义的局部样式
import request from './utils/request';//导入封装的ajax请求

class Login extends Component {
    //constructor(props) {
        //super(props)
        //console.log(this.props)//接收来自上层传下来的props
    //}
    componentDidMount() {
        request.post('/status', {//发起请求检查登录状态
            token: localStorage.getItem('token')
        }).then((res) => {
            //console.log(res)
        }).catch((err) => { console.log(err) })       
        this.setState({
            aid: this.props.match.params.id//更新保存该组件的数据
        })
    }
    state = {
        msg: '这是Login类根组件',
        username: '',
        password: ''
    }
    handle1 = (e) => {//绑定input标签为受控组件
        //console.log(e.target.value)
        this.setState({
            username: e.target.value
        })
    }
    handle2 = (e) => {//绑定input标签为受控组件
        //console.log(e.target.value)
        this.setState({
            password: e.target.value
        })
    }
    login = () => {//登录请求验证和发送
        if (this.state.username && this.state.password) {
            request.post('/login', {//发起登录请求
                username: this.state.username,
                password: this.state.password
            }).then((res) => {
                console.log(res)
                localStorage.setItem('token', res.data.token)//本地存储token值
                localStorage.setItem('userinfo', JSON.stringify(res.data.userinfo))//本地存储userinfo用户信息
                this.props.history.replace('/index0')//登录完跳到首页
            }).catch((err) => {
                console.log(err)
            })
        } else {
            alert('请输入完整信息')
        }

    }

    render() {
        return (
            <form>
            <div className="box">
                <div className="m_t25">
                    <input type="text" className="input1" value={this.state.username} placeholder="用户名" onChange={this.handle1} />
                </div>
                <div className="m_t25">
                    <input type="current-password" className="input1" value={this.state.password} placeholder="密码" onChange={this.handle2} />
                </div>

                <div className="m_t25" >

                    <input type="button" className="login_btn" value="登录" onClick={this.login} />


                </div>

                <div className="m_t15">

                    <div className="tar">
                        <a className="link_btn" onClick={() => { this.props.history.push('/sign') }}>注册</a>
                    </div>

                </div>
            </div>
            </form>
        );
    }
}
export default Login