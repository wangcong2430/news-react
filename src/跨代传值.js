import React, { Component } from 'react';//核心库
import ReactDOM from 'react-dom'; //负责页面显示

class Box extends Component {
    state={
        msg:'这是Box类组件'
    }
    render() {
        return (
            <div style={{width:'100%',height:'480px',background:'green'}}>
                <h3>{this.state.msg}</h3>
                <div>这是Box类组件接收的值:{this.props.num}</div>
                <Box2 num={this.props.num}></Box2>          
            </div>
        );
    }
}
class Box2 extends Component {
    state={
        msg:'这是Box2类组件'
    }
    render() {
        return (
            <div style={{width:'100%',height:'300px',background:'blue'}}>
                <h3>{this.state.msg}</h3>
                <div>这是Box2类组件接收的值:{this.props.num}</div>                                 
                <Box3 num={this.props.num}></Box3>               
            </div>
        );
    }
}
class Box3 extends Component {
    state={
        msg:'这是Box3类组件'
    }
    render() {
        return (
            <div style={{width:'100%',height:'150px',background:'yellow'}}>
                <h3>{this.state.msg}</h3>
                <div>这是Box3类组件接收的值:{this.props.num}</div>
            </div>
        );
    }
}
class App extends Component {
    state={
        msg:'这是App类根组件',
        num:1000
    }
    render() {
        return (
            <div style={{width:'100%',height:'600px',background:'red'}}>
                <h3>{this.state.msg}</h3><button onClick={()=>{this.setState({num:this.state.num+1})}}>点击修改祖先组件的值,逐级向下传递num值</button>
                <div>这是App类组件发送的值:{this.state.num}</div>
                <Box num={this.state.num}></Box>
            </div>
        );
    }
}
ReactDOM.render(
    <App />,//引入最大类组件

    document.getElementById('root')//最大类组件放入的位置
);