import React, { Component } from 'react';//核心库
import ReactDOM from 'react-dom'; //负责页面显示
import {BrowserRouter as Router,Route,Link,Switch,Redirect}   from 'react-router-dom'//引入路由管理器的根组件，路由配置  path指定匹配的路径，声明式跳转组件，每次匹配路由只会匹配一次，重定向组件
import Index0 from './index0'
import My from './my'
import Login from './login'
import Newsinfo from './newsinfo'
import Search from './search'
import Collect from './collect'
import Sign from './sign'
import './style.css'
import Demo from './Demo'
import Box from './Box'
import Parent from './parent'

class App extends Component {
    state={
        msg:'这是App类根组件'
    }
    render() {
        return (
            <div>
                <h3>{this.state.msg}</h3>
               
                    <div>
                        <ul className='main'>
                            <li><Link to="/">首页</Link></li>
                            <li><Link to="/my">我的</Link></li>
                            <li><Link to="/login">登录</Link></li>
                            <li><Link to="/newsinfo">新闻详情</Link></li>
                            <li><Link to="/search">搜索</Link></li>
                            <li><Link to="/collect">收藏</Link></li>
                            <li><Link to="/sign">注册</Link></li>
                        </ul>
                    </div>
                    <Switch>
                    <Route path='/' exact>
                        <Index0></Index0>
                    </Route>
                    <Route path='/my' component={My}>
                       
                    </Route>
                    <Route path='/login' render={(props)=><Login myhistory={props.history}></Login>}>
                       
                    </Route>
                    <Route path='/newsinfo' component={Newsinfo}>
                    
                    </Route>
                    <Route path='/search' component={Search}>
                       
                    </Route>
                    <Route path='/collect' component={Collect}>
                        
                    </Route>
                    <Route path='/sign' component={Sign}>
                        
                    </Route> 
                    <Route path='/test' render={(props)=>{
                             return <>
                                 <h2>这是test组件</h2>                                 
                             </>
                    }}></Route>                    
                    
                    <Route path='/demo'>
                        <Redirect to='/my'></Redirect>
                    </Route>

                    <Route path='/box/:id' component={Box}>
                        
                    </Route>

                    <Route path='/parent' component={Parent}>

                    </Route>
                                             
                    </Switch>                
                               
            </div>
        );
    }
}
ReactDOM.render(
    <Router>
        <App></App>
    </Router>,
    document.getElementById('root')//最大类组件放入的位置
);