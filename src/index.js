import React, { Component, } from 'react';//核心库
import ReactDOM from 'react-dom'; //负责页面显示
import { renderRoutes } from "react-router-config";//引入路由配置模块
import { BrowserRouter as Router } from 'react-router-dom'//1引入路由管理器的根组件
import './style.css'//导入样式
import routes from './routers';//导入自定义的路由组件
class App extends Component {
    state = {
        msg: '这是App类根组件'
    }
    render() {
        return (
            <>
                {renderRoutes(routes)}

            </>
        );
    }
}
ReactDOM.render(
    <Router>
        <App></App>
    </Router>,
    document.getElementById('root')//最大类组件放入的位置
);