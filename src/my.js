import React, { Component } from 'react';//核心库
//import ReactDOM from 'react-dom'; //负责页面显示
import './css/my.css'//引入自定义的局部样式
import './news_html/html/css/style.css'//引入公用的样式


class My extends Component {
    //constructor(props) {
        //super(props)
        //console.log(this.props)//获取路由对象
    //}
    state = {
        msg: '这是My类根组件',
        userinfo: '',
    }
    componentDidMount() {
        if (localStorage.getItem('userinfo')) {//判断是否有登录
            this.setState({
                userinfo: JSON.parse(localStorage.getItem('userinfo'))//将userinfo的用户信息从本地存储取出并转换数据格式
            })
        }
    }
    loginout = () => {//退出事件：清空本地存储，然后跳到首页
        localStorage.clear()
        this.props.history.push('/index0')
    }
    render() {
        if (this.state.userinfo.username) {//判断是否有登录,有登录呈现的页面
            return (
                <div className='index'>
                    <div className="my">
                        <div className="userinfo">
                            <img src={"https://www.young1024.com:3002/avatar/" + this.state.userinfo.avatar} alt='' />
                            <span>{this.state.userinfo.username}</span>
                        </div>
                        <div className="mylist">
                            <ul>
                                <li><a onClick={() => { this.props.history.push('/collect') }}>我的收藏</a></li>
                            </ul>
                        </div>
                        <div className="btnbox">
                            <a className="logout" onClick={this.loginout}>退出</a>
                        </div>
                    </div>
                </div>
            );
        } else {//无登录呈现的页面
            return (
                <div className='index'>
                    <div className="btnbox">
                        <a className="logout" onClick={() => { this.props.history.push('/login') }}>去登录</a>
                    </div>
                </div>
            )
        }

    }
}
export default My