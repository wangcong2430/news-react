import React from 'react';//react核心库
import ReactDOM from 'react-dom'; //负责页面显示

class App extends React.Component{
  // 定义state
  state = {
    msg: 'hello'
  }
  constructor(props){
    super(props)
    this.state = {
      msg: 'react'
    }
  }
  render(){
    return (
      <>
        <h2>这是app组件</h2>
        <div>{this.state.msg}</div>

        {/*  
          state中的数据发生改变,也会触发视图更新, 
          也就是重新执行render方法
        */}
        <button onClick={()=>{
          this.setState({
            msg: 'react ------- ok'
          },()=>{
            // 在这个函数中就可以拿到修改后的值
            console.log(this.state.msg)
          })
          console.log(this.state.msg)
        }}>
           改变自己
        </button>
        
        <button onClick={()=>{
          this.setState((prestate)=>{
            console.log(prestate) // 修改前的值
            return { // 把需要修改的值返回即可
              msg: '!!!!!!!!!!!!!'
            }
          },()=>{
            console.log(this.state.msg)
          })
         
        }}>
           改变自己!!!
        </button>
      </>
    )
  }
}

ReactDOM.render( 
  <App/>,
  
  document.getElementById('root')
);
