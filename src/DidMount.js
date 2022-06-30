import React, { Component } from 'react';//核心库
import ReactDOM from 'react-dom'; //负责页面显示

class Box extends Component {
    state={
        msg:'这是Box类组件',
        num:999,
    }
     UNSAFE_componentWillMount (){//组件挂载前
        let box=document.getElementById('box')
        console.log(box)
        
    }
    componentDidMount(){//组件已经挂载
        let box=document.getElementById('box')
        console.log(box.innerHTML)
       
    }

    render() {
        
       
        return (
            <div>
                <h3>{this.state.msg}</h3>
                <h3 id='box'>{this.state.num}</h3>                
            </div>
        );       
    }
}
class App extends Component {
    state={
        msg:'这是App类根组件'
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