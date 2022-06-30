import { Provider } from 'react-redux'//导入仓库组件模块
import store from "./store";//导入外部state仓库
import Demo from './pages/Demo'//导入外部demo组件
import Box from './pages/Box'//导入外部box组件


import React, { Component } from 'react';//核心页面
import ReactDOM from 'react-dom';  ;//负责页面显示

class App extends Component {//载入组件
    render() {
        return (
            <div>
                <h2>App组件</h2>
                <Demo></Demo>
                <Box></Box>
            </div>
        );
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,//引入仓库组件
    document.getElementById('root')//最大类组件放入的位置
);

