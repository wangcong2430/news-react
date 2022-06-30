import React, { Component } from 'react';//核心库
import ReactDOM from 'react-dom'; //负责页面显示
import './style.css'

class Box extends Component {
    state={
        msg:'这是Box类组件'
    }
    UNSAFE_componentWillReceiveProps(nextProps){
         console.log(nextProps)//新的参数显示前触发
         console.log(1)
    }
    shouldComponentUpdate(){//返回值为false，阻止组件更新，不执行render（）方法
        return true
    }
    render() {
        console.log(2)
        return (
            <div>
                <h3>{this.state.msg}</h3>
                <div>{this.props.num}</div>                
            </div>
        );
    }
}
class App extends Component {
    state={
        msg:'这是App类根组件',
        num:999,
    }
    render() {
        console.log('aaaaa')
        return (
            <div>
                <h3>{this.state.msg}</h3>
                <Box num={this.state.num}></Box>
                <div onClick={()=>{
                    this.setState({
                        num:Math.random()*100
                    })
                }} className='addNum'>点击更新组件shouldComponentUpdate</div>
            </div>
        );
    }
}
ReactDOM.render(
    <App />,//引入最大类组件

    document.getElementById('root')//最大类组件放入的位置
);