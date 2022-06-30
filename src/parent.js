import React, { Component } from 'react';//核心组件
import {Switch,Route}from 'react-router-dom'//路由组件
import Son1 from './son1';
import Son2 from './son2';

class Parent extends Component {
    render() {
        return (
            <div>
                <h2>这是parent父组件</h2>
                <Switch>
                    <Route path='/parent/son1' component={Son1}></Route>
                    <Route path='/parent/son2' component={Son2}></Route>
                </Switch>

            </div>
        );
    }
}

export default Parent;

