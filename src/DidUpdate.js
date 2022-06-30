import React, { Component } from 'react';//核心库
import ReactDOM from 'react-dom'; //负责页面显示
import './style.css'

class Box extends Component {
    state={
        msg:'这是Box类组件',
        count:100
    }
    getSnapshotBeforeUpdate(){//获取更新前的快照（页面）
        let box=document.getElementById('box')
        console.log(box.innerHTML)
        console.log(this.state.count)
        return{
            aa:200
        }
    }
    componentDidUpdate(nextProps,nextState,shot){//更新后触发
        let box=document.getElementById('box')
        console.log(box.innerHTML)
        console.log(shot)//拿到更新前返回的东西
    }
    render() {
        return (
            <div>
                <h3>{this.state.msg}</h3>
                <h3 id='box'>count:{this.state.count}---num:{this.props.num}</h3>
                <div className='addNum' onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                    })
                }}>Box类组件更新count</div>                
            </div>
        );
    }
}
class App extends Component {
    state={
        msg:'这是App类根组件',
        num:200
    }
    render() {
        return (
            <div>
                <h3>{this.state.msg}</h3>
                <Box num={this.state.num}></Box>
                <div className='addNum' onClick={()=>{
                    this.setState({
                        num:Math.random()*200
                    })
                }}>App类组件更新num</div>  
            
            </div>
        );
    }
}
ReactDOM.render(
    <App />,//引入最大类组件

    document.getElementById('root')//最大类组件放入的位置
);