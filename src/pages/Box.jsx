import React, { Component } from 'react';//核心页面
import {connect} from 'react-redux'//导入高阶组件的模块

class Box extends Component {
    render() {
        return (
            <div>
                <h2>Box组件</h2>
                <div>name:{this.props.user.name}--age:{this.props.user.age}</div>
                <div className='addNum' onClick={()=>{this.props.changename()}}>点击修改name和age的值</div>
                <div className='addNum' onClick={()=>{this.props.changename2('yyds',28)}}>点击修改name和age的值2</div>                      
            </div>
        );
    }
}
function stateToProps(state){//把仓库中的state展开到props中，形参为state
    return{
        user:state.user
    }
}
function actionToProps(dispatch){//把仓库中的action展开到props中，形参为store.dispatch方法 
    return{
        changename:()=>{
            dispatch({type:'changename'})
        },
        changename2:(name,age)=>{
            dispatch({type:'changename2',name:name,age:age})
        },
    
    }
}
// 使用高阶组件处理Box组件
// 括号1：// 
    // 参数1： 展开 state的方法
    // 参数2： 展开action的方法

// 括号2：
// 需要处理的组件
export default connect(stateToProps,actionToProps)(Box);
