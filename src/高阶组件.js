import React, { Component } from 'react';//核心库
import ReactDOM, { render } from 'react-dom'; //负责页面显示
/*
  高阶组件就是一个函数
  接受一个组件,返回一个新组件

  组件公共的操作,就在这个新组件中操作

  然后在新组件中把传进来的组件渲染了
  公共的数据就通过props传给这个渲染的组件
*/ 

let withUsername = (Com) => {
    return class extends Component {
        state = {
            user: '',
        }
        componentDidMount() {
            let user = localStorage.getItem('user')//2取出本地存储信息，并修改状态值
            this.setState({
                user: user
            })
        }
        render() {//3最终返回一个带参数的jsx对象
            return <div>
                <Com user={this.state.user}></Com>
            </div>
        }
    }
}

class Box extends Component {
    render() {//5通过props接收来自新组件的参数
        return (
            <h3>来自高阶组件传回来的值：{this.props.user}</h3>
        );
    }
}
Box = withUsername(Box)//4将组件通过高阶组件更新
class App extends Component {
    state = {
        msg: '这是App类根组件'
    }
    componentDidMount() {
        localStorage.setItem('user', 'wang')//1本地存储用户信息
    }
    render() {
        return (
            <div>
                <h3>{this.state.msg}</h3>
                <Box></Box>
            </div>
        );
    }
}
ReactDOM.render(
    <App />,//引入最大类组件

    document.getElementById('root')//最大类组件放入的位置
);