import React, { Component } from 'react';//核心库
import {connect} from 'react-redux'//引入react-redux库
import '../style.css'

class Demo extends Component {
    render() {
        return (
            <div>
                <h2>Demo组件</h2>
                <div>value:{this.props.counter.value}</div>
                <div onClick={()=>{this.props.add()}} className='addNum'>点击增加value值</div>
                <div onClick={()=>{this.props.sub()}} className='addNum'>点击减少value值</div>
            </div>
        );
    }
}
function stateToProps(state){
    return {
        counter:state.counter
    }
}
function actionToProps(dispatch){
    return {
        add:()=>{
            dispatch({type:'add'})
        },
        sub:()=>{
            dispatch({type:'sub'})
        },
        
    }
}
export default connect(stateToProps,actionToProps)(Demo)
