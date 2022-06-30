import React, { Component } from 'react';//核心库
import ReactDOM from 'react-dom'; //负责页面显示
import { createStore, combineReducers } from 'redux'//1导入redux模块,解构创建仓库的方法和合并操作外部state的方法
import './style.css'
function countReducer(state = { value: 0 }, action) {//2创建外部state操作的方法，形参为外部state初始状态
    switch (action.type) {
        case 'add':
            return { value: state.value + 1 }
        case 'sub':
            return { value: state.value - 1 }
        default:
            return state
    }
}
function userReducer(state = { name: 'wang', age: 28 }, action) {
    switch (action.type) {
        case 'changename':
            return { name: 'yyyyy', age: state.age + 1 }
        case 'changename2':
            return { name: action.value, age: 28 }
        default:
            return state
    }
}
let reducers = combineReducers({ counter: countReducer, user: userReducer })//3合并外部state操作的方法方法

let store = createStore(reducers)//4创建全局的一个实例
class Box extends Component {
    state = {
        msg: '这是Box类组件'
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
    constructor(props) {
        super(props)
        this.state = store.getState()//将外部state赋值给内部state
        console.log(store.getState())
        store.subscribe(() => {//4监听状态的改变
            this.setState(store.getState())//修改内部state状态
        })
    }
    add = () => {
        //console.log(1223)
        store.dispatch({ type: 'add' })//调用操作外部state的方法
        console.log(store.getState())
    }
    sub = () => {
        //console.log(1223)
        store.dispatch({ type: 'sub' })//调用操作外部state的方法
        console.log(store.getState())
    }
    changename = () => {
        store.dispatch({ type: 'changename' })//调用操作外部state的方法
    }
    changename2 = () => {
        store.dispatch({ type: 'changename2', value: 'wangcong' })
    }
    render() {
        return (
            <div>
                <h3>{this.state.msg}</h3>
                <div>count:{this.state.counter.value}</div>
                <div>username:{this.state.user.name}--userage:{this.state.user.age}</div>
                <div onClick={this.add} className='addNum'>点击增加count+1</div>
                <div onClick={this.sub} className='addNum'>点击减少count-1</div>
                <div onClick={this.changename} className='addNum'>点击修改user中的name和age</div>
                <div onClick={this.changename2} className='addNum'>点击修改user中的name为传进来的name值</div>
                <Box></Box>
            </div>
        );
    }
}
ReactDOM.render(
    <App />,//引入最大类组件

    document.getElementById('root')//最大类组件放入的位置
);