import React, { Component } from 'react';//核心组件
import{renderRoutes}from 'react-router-config'//路由配置模块
class Mon extends Component {
     componentDidMount(){
         console.log(this.props)
     }
    render() {
        return (
            <div>
                <h2>这是mon组件</h2>
                {renderRoutes(this.props.route.routes)}
            </div>
        );
    }
}

export default Mon;
