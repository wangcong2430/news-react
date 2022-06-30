import React, { useRef } from 'react';//核心库
import ReactDOM from 'react-dom'; //负责页面显示

function App(){
    let inpRef=useRef()//创建ref对象
    let testRef=useRef(100)
    return(
        <div>
            <h2>App函数式组件</h2>
            <input type='text' ref={inpRef}></input>
            <button onClick={()=>{
                console.log(inpRef.current.value)//获取表单value值
            }}>get</button>
              <button onClick={()=>{
               inpRef.current.value=123//改变value的值
            }}>change</button>
               <button onClick={()=>{
               inpRef.current.value=123//显示testRef默认参数
            }}>test:{testRef.current}</button>
        </div>
    )
}
ReactDOM.render(
    <App />,//引入最大类组件

    document.getElementById('root')//最大类组件放入的位置
);