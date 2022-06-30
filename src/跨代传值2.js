import React, { Component } from 'react';//核心库
import ReactDOM from 'react-dom'; //负责页面显示
let CountContext=React.createContext()//1创建一个全局的上下文对象
class Box extends Component {
    state={
        msg:'这是Box类组件'
    }    
    render() {
        return (
            <div>
                <h3>{this.state.msg}</h3>
                <Box1></Box1> 
                <Box2></Box2>              
            </div>
        );
    }
}
class Box1 extends Component {
    state={
        msg:'这是Box1类组件'
    }
    static contextType=CountContext//3将上下文对象赋值给静态变量contextType，从而通过this.context获取父组件的value值
    render() {
        return (
            <div>
                <h3>{this.state.msg}</h3>
                <div>通过this.context获取祖先组件的value值:{this.context}</div>                
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
            <div>
                <h3>{this.state.msg}</h3>
                <CountContext.Consumer>
                    {(value)=>{return <div>通过CountContext.Consumer获取祖先组件的value值:{value}</div>}}
                </CountContext.Consumer>                
            </div>
        );
    }
}

class App extends Component {
    state={
        msg:'这是App类根组件',
        count:999
    }
    
    render() {
        return (
            <div>
                <h3>{this.state.msg}</h3>
                {/*2创建祖先组件，value值为要向子代传得值 */}
                <CountContext.Provider value={this.state.count}>
                    <Box></Box>                  
                </CountContext.Provider>
            </div>
        );
    }
}
ReactDOM.render(
    <App />,//引入最大类组件

    document.getElementById('root')//最大类组件放入的位置
);