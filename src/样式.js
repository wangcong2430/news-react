//import React from 'react';//react核心库
import React,{Fragment} from 'react';
//import React,{Component} from 'react';
import ReactDOM from 'react-dom'; //负责页面显示
import './style.css';
import className from 'classnames';
import styled from 'styled-components'

let Demo=function(){//定义demo的函数式组件
  return <h2>这是函数式demo组件</h2>
}
let Box=function(props){//定义box的函数式组件并传参
  console.log(props)
  return <h4>这是函数式box组件带参数:{props.number}</h4>
}
let Demo3=<div><h3>这是普通组件Demo3</h3></div>
class Demo2 extends React.Component{//类组件Demo2
  render(){
    console.log(this.props.num)
    return(
      <div>
        Demo2类组件带参数:{this.props.num}
      </div>
    )
  }
}


class Demo4 extends  React.Component {//类组件Demo4原生jsx写的组件
  render() {
    return (
     React.createElement(
       'div',
       {id:'app',className:'box'},
       React.createElement('h2',null,'类组件Demo4中的h2标题'),
       React.createElement('p',null,'类组件Demo4中p标签的描述'),
       Demo3
     )
    );
  }
}

class App extends React.Component{//定义类组件
  state={//变量存储数据
    flag:true
  }

  render(){//接收输入的数据
    let str='';
    if(this.state.flag){
      str='box3'
    }else{
      str='box2'
    }

    let myclassname=className({
      'box4':true,
      'box3':this.state.flag
    })

    let Mydiv=styled.div`
       width:800px;
       height:400px;
       background:green;
       h2{
         width:600px;
         height:100px;
         background:pink;
         text-align: center;
         line-height:100px;
       }
       p{
        width:600px;
        height:100px;
        background:yellow;
        text-align: center;
        line-height:100px;
       }
       ul{
         li{
           width:300px;
           heght:50px;
           background:red;
           list-style:none;
           text-align: center;
           line-height:50px;
           margin-bottom:20px;
         }
       }

    `
    return (//返回需要展示的内容
      <div>
          函数式组件
          类组件         
          <Demo></Demo>
          <Box number='18'></Box>
          <Demo2 num='28'></Demo2>          
          <Fragment number='38'>
            <h2>这是fragment标签</h2>
          </Fragment>
          <div id='app'>
            <h2>这是直接引入标题</h2>
            <p>这是直接引入段落描述</p>
            {/*这是jsx里面的注释 */}
          </div>
          <Demo4></Demo4>
          <div className='box' id='app' style={{width:'300px',height:'150px',background:'yellow',border:'1px solid red'}}>
            <h2 style={{color:'red'}}>这是行内样式标题</h2>
            <p style={{width:'200px',height:'50px',background:'green',lineHeight:'50px'}}>这是行内样式描述段落</p>
          </div>
          <div className='box2' id='app2' >
            <h2 >这是导入外部样式标题</h2>
            <p>这是导入外部样式样式描述段落</p>
          </div>
          <div className={str} id='app3' >
            <h2 >这是动态渲染样式标题</h2>
            <p>这是动态渲染样描述段落</p>
          </div> 
          <div className={myclassname} id='app4' >
            <h2 >这是classnames渲染样式标题</h2>
            <p>这是classnames渲染样式描述段落</p>
          </div>
          <Mydiv id='root'>
            <h2 >这是styled-components渲染样式标题</h2>
            <p>这是styled-components渲染样式描述段落</p>
            <ul>
              <li>
                这是li标签第一个
              </li>
              <li>
                这是li标签第二个
              </li>
            </ul>
          </Mydiv>

      </div>
      
    )
  }
}




  








ReactDOM.render( 
  <App/>,//引入类组件
 
  document.getElementById('root')//组件放入的位置
);
