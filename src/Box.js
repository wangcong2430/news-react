import React, { Component } from 'react';

class Box extends Component {
    constructor(props){
        super(props)
        console.log(this.props)//获取路由对象
    }
    render() {
        return (
            <div>
                <h2>这是box组件</h2>
            </div>
        );
    }
}

export default Box;
