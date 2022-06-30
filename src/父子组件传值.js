import React, { Component } from 'react';//核心库
import ReactDOM from 'react-dom'; //负责页面显示
import './style.css'
class Box extends Component {
    state={
        msg:'这是Box类组件',
        count:200
    }
    send=()=>{
       this.props.func(this.state.count)
    }
    render() {
        return (
            <div>
                <h3>{this.state.msg}</h3> 
                <div>{this.props.num}</div> 
                <div onClick={()=>{this.props.func(this.state)}} className='addNum'>点击向父组件传值1</div> 
                <div onClick={this.send} className='addNum'>点击向父组件传值2</div>             
            </div>
        );
    }
}
class App extends Component {
    state={
        msg:'这是App类根组件',
        num:'来自父组件的值100'
    
    }
    func=(obj)=>{
         console.log(obj)
    }
    render() {
        return (
            <div>
                <h3>{this.state.msg}</h3>
                <Box num={this.state.num} func={this.func}></Box>
            </div>
        );
    }
}
ReactDOM.render(
    <App />,//引入最大类组件

    document.getElementById('root')//最大类组件放入的位置
);