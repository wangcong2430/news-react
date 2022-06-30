import React, { Component } from 'react';//核心库
import ReactDOM from 'react-dom'; //负责页面显示

class Box extends Component {
    state = {
        msg: '这是Box类组件',
        text: '',
        list: [],
    }
   
    add = () => {
        console.log(123)
        this.state.list.push(this.state.text)        
        this.setState({
            list: this.state.list
        }, function () {
            
            this.setState({
                text: ''
            })
        })
        
    }
    handle = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    deletethis = (idx) => {
        this.state.list.splice(idx, 1)
        this.setState({
            list: this.state.list
        },function(){          
        })

    }
    render() {
        return (
            <div>
                <h3>{this.state.msg}</h3>
                <input type='text' name='text' value={this.state.text} onChange={this.handle}></input><button onClick={this.add}>添加代办事项</button>
                <div>
                    <ul>
                        {this.state.list && this.state.list.map((item, index) => {
                            return <li key={index}>{item}<button onClick={() => { this.deletethis(index) }}>x</button></li>
                        })}
                    </ul>
                </div>

            </div>
        );
    }
}
class App extends Component {
    state = {
        msg: '这是App类根组件'
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