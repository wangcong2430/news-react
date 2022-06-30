import React, { Component } from 'react';//核心库
import './css/indexparent.css'//导入自定义的局部样式
import './news_html/html/css/style.css'//导入公共的样式
import { renderRoutes } from "react-router-config";//导入路由配置的库
class Indexparent extends Component {
    componentDidMount() {
        //console.log(this.props)
    }
    goinde0 = () => {
        this.props.history.replace('/index0')//点击跳转到首页
    }
    gomy = () => {
        this.props.history.replace('/my')//点击跳转到my页
    }
    render() {
        return (
            <>
                {renderRoutes(this.props.route.routes)}
                <div className="foot" >
                    <a className={this.props.location.pathname === '/index0' ? 'sel' : ''} onClick={this.goinde0}>
                        <span className="indexicon" ></span>
                        <span>首页</span>
                    </a>
                    <a className={this.props.location.pathname === '/my' ? 'sel' : ''} onClick={this.gomy}>
                        <span className="myicon"></span>
                        <span>我的</span>
                    </a>
                </div>
            </>
        );
    }
}

export default Indexparent;
