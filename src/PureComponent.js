import React, { Component, PureComponent } from 'react';//核心库
import ReactDOM from 'react-dom'; //负责页面显示
import './style.css'
class Box extends PureComponent {
    state={
        msg:'这是Box类组件'
    }
    render() {
        console.log(9999)
        return (
            <div>
                <h3>{this.state.msg}</h3>                
            </div>
        );
    }
}
class App extends Component {
    state={
        msg:'这是App类根组件',
        count:100
    }
    render() {
        return (
            <div>
                <h3>{this.state.msg}</h3>
                <h3>{this.state.count}</h3>
                <Box></Box>
                <div className='addNum' onClick={()=>{
                    this.setState({
                        count:++this.state.count
                    })
                }}>更新父组件PureComponent子组件不更新</div>
            </div>
        );
    }
}
ReactDOM.render(
    <App />,//引入最大类组件

    document.getElementById('root')//最大类组件放入的位置
);