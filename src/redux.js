import React, { Component } from 'react';//核心库
import ReactDOM from 'react-dom'; //负责页面显示
import { createStore } from 'redux'//1导入redux模块
import './style.css'
function countReducer(state = { value: 0 }, action) {//2创建方法
    switch (action.type) {
        case 'add':
            return { value: state.value + 1 }
        case 'sub':
            return { value: state.value - 1 }
        default:
            return state
    }
}
let store=createStore(countReducer)//3创建全局的一个实例
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
   constructor(props){
       super(props)
       this.state=store.getState()
       store.subscribe(()=>{//4监听状态的改变
        this.setState(store.getState())//修改内部状态
       })
   }
   add=()=>{
       //console.log(1223)
      store.dispatch({type:'add'})
      console.log(store.getState())
   }
   sub=()=>{
    //console.log(1223)
   store.dispatch({type:'sub'})
   console.log(store.getState())
}

    render() {
        return (
            <div>
                <h3>{this.state.msg}</h3>
                <div>count:{this.state.value}</div>
                <div onClick={this.add} className='addNum'>点击增加count+1</div>
                <div onClick={this.sub} className='addNum'>点击减少count-1</div>
                <Box></Box>
            </div>
        );
    }
}
ReactDOM.render(
    <App />,//引入最大类组件

    document.getElementById('root')//最大类组件放入的位置
);