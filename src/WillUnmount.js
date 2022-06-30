import React, { Component } from 'react';//核心库
import ReactDOM from 'react-dom'; //负责页面显示
import './style.css'
class Box extends Component {
    state = {
        msg: '这是Box类组件'
    }
    timmer = null
    componentDidMount() {//组件加载完毕时执行
        this.timmer = setInterval(() => {
            console.log(123456)
        }, 1000)
    }
    componentWillUnmount() {//组件卸载时执行
        console.log('组件卸载时执行')
        clearInterval(this.timmer)
    }
    render() {
        return (
            <div>
                <h3>{this.state.msg}</h3>
            </div>
        );
    }
}
class App extends Component {
    state = {
        msg: '这是App类根组件',
        flag: true
    }
    render() {
        return (
            <div>
                <h3>{this.state.msg}</h3>
                {this.state.flag ? <Box></Box> : 'box组件已经没有了'}
                <div className='addNum' onClick={()=> {
                    this.setState({
                        flag: !this.state.flag
                    })
                }}>点击控制box组件</div>
            </div>
        );
    }
}
ReactDOM.render(
    <App />,//引入最大类组件

    document.getElementById('root')//最大类组件放入的位置
);