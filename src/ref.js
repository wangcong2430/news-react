import React, { Component } from 'react';//核心库
import ReactDOM from 'react-dom'; //负责页面显示
import './style.css'
class Box extends Component {
    state={
        msg:'这是Box类组件'
    }
    render() {
        return (
            <div>
                <h3>{this.state.msg}</h3>                
            </div>
        );
    }
}
class App extends Component {
    state={
        msg:'这是App类根组件'
    }
    boxRef=React.createRef()//1、创建ref对象
    h3Ref=React.createRef()
    imgRef=React.createRef()
    getRef=()=>{//3、获取组件实例box对象和原生h3对象
        console.log(this.boxRef.current)
        console.log(this.h3Ref.current)
        console.log(this.imgRef.current)
    }
    handle=(e)=>{
        let that=this
        let file=e.target.files[0] 
        let reader=new FileReader()
        reader.readAsDataURL(file)
        reader.onload=function(){
          that.imgRef.current.src=this.result
        }
    }
    render() {
        return (
            <div>{/* 2、绑定ref对象 */}
                <h3 ref={this.h3Ref}>{this.state.msg}</h3>
                <Box ref={this.boxRef} num={100}>调用组件的内容box</Box>
                <div><input type='file' accept='image/*' onChange={this.handle} ></input></div>
                <img ref={this.imgRef} src='' alt=''></img>
                <div className='addNum' onClick={this.getRef}>点击获取Box子组件和h3以及img原生组件对象</div>
            </div>
        );
    }
}
ReactDOM.render(
    <App />,//引入最大类组件

    document.getElementById('root')//最大类组件放入的位置
);