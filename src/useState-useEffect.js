import React, { useState, useEffect } from 'react';//函数式组件核心库
import ReactDOM from 'react-dom'; //负责页面显示
import './style.css'

function App() {

    const [num, setNum] = useState(100);//创建state
    const [count, setcount] = useState(60);
    useEffect(() => {//参数1为回调函数，state发生改变，该函数即可发生类比如 componentDidUpdate
        console.log(num)
        console.log('aaa')
    })
    useEffect(() => {//参数2为空数组，state发生改变，该函数即可发生类比如 componentDidMount
        console.log(num)
        console.log('bbb')

    }, [])
    useEffect(() => {//参数2为数组，有元素，state发生改变，该函数即可发生类比如 wantch
        console.log(num)
        console.log('ccc')
    }, [num])
    useEffect(() => {//参数2为数组，有元素，state发生改变，该函数即可发生类比如 wantch
        console.log(count)
        console.log('dddd')
    }, [count])




    return (
        <div>
            <h2>这是app函数式组件name:{num}--count:{count}</h2>
            <div onClick={
               ()=>{setNum(num+1)}
            }className='addNum'>点击修改name</div>
            <div onClick={
               ()=>{setcount(count+1)}
            } className='addNum'>点击修改count</div>
        </div>
    )
}

ReactDOM.render(
    <App />,//引入最大类组件

    document.getElementById('root')//最大类组件放入的位置
);

