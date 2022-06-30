import React, { Component } from 'react';
import ReactDOM from 'react-dom'; //负责页面显示
import './style.css'



class Box extends Component{
    // 受控组件
    // state作为唯一的数据源，配合 value值使用
    // 配置onChange事件修改状态，状态的改变引起视图的二次渲染
    state={
        msg:'这是Box类组件处理input和textarea输入事件',
        firstname:'',
        lastname:'',
        username:'wangcong',
        note:''
    }
    handleFirst=(e)=>{
        console.log(e)
        this.setState({
            firstname:e.target.value
        })        
    }
    handleLast=(e)=>{
        console.log(e)
        this.setState({
            lastname:e.target.value
        })        
    }
    handle=(e)=>{
        console.log(e.target)
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handle2=(e)=>{        
        this.setState({
            username:e.target.value
        })
    }
    handle3=(e)=>{        
        this.setState({
            note:e.target.value
        })
    }

    render(){
        return(
            <div>
                <h3>{this.state.msg}</h3>
                <input type='text' placeholder='姓' onChange={this.handleFirst}></input>
                <input type='text' placeholder='民' onChange={this.handleLast}></input>
                <div>{this.state.firstname+this.state.lastname}</div>
                <input type='text' name='firstname'  placeholder='姓' onChange={this.handle}></input>
                <input type='text' name='lastname' placeholder='民' onChange={this.handle}></input>
                <div>{this.state.firstname+this.state.lastname}</div>                
                <input type='text'  defaultValue={this.state.msg}></input> 
                <div><input type='text'  value={this.state.username} onChange={this.handle2}></input></div>
                <div>{this.state.username}</div>
                <textarea  value={this.state.note} onChange={this.handle3} placeholder='备注'></textarea>
                <div>{this.state.note}</div>               
            </div>
        )
    }
}

class Box1 extends Component{
    state={
        msg:'这是Box1类组件测试select受控组件',
        ele:1
    }
    shw(str){//state状态改变会调用这个方法
        if(str==1){
            return <h5>一阶段</h5>
        }else if(str==2){
            return <h5>二阶段</h5>
        }else if(str==3){
            return <h5>三阶段</h5>
        }
    }
    handle=(e)=>{
        console.log(e)
        this.setState({
            ele:e.target.value //第二步state状态改变
        },function(){
            console.log(this.state.ele)
        })
    }
    render(){
        return(
            <div>
                <h2>{this.state.msg}</h2>
                {/*第一步切换事件触发*/}
                <select onChange={this.handle} value={this.state.ele}>
                    <option value='1'>一阶段</option>
                    <option value='2'>二阶段</option>
                    <option value='3'>三阶段</option>
                </select>
                 {/*第三步下面视图更新*/}
                <h3>{this.state.ele==1?'一阶段':this.state.ele=='2'?'二阶段':'三阶段'}</h3>
                {this.shw(this.state.ele)}
            </div>
        )
    }
}
class Box2 extends Component {//这是Box2类组件选择图片预览
    state={
        msg:'这是Box2类组件选择图片预览'
    }
    handle=(e)=>{
      let that=this
      console.log(e)
      console.log(e.target.files[0])
      let file=e.target.files[0]//获取第一个选择的文件图片信息数据
      let reader=new FileReader()//创建实例化对象
      reader.readAsDataURL(file)//调用方法将文件信息转换成图片格式的数据
      reader.onload=function(){//监听事件，
          console.log(this.result)//获取转换后的结果
          that.refs.img.src=this.result//改变视图src的值，从而将该图片显示          
      }
    }
    getbtn=()=>{
        console.log(this.refs.bth.value)
    }
    render() {
        return (
            <div>
                <h3>{this.state.msg}</h3>
                <input type='file' accept='image/*' onChange={this.handle}></input>
                <img ref='img' src=''/>
                <div>
                    <input ref='bth' type='text'></input>
                    <button onClick={this.getbtn}>getbtn</button>
                </div>
            </div>
        );
    }
}

class Box3 extends Component {
    constructor(props){//生命周期函数，组件创建时触发
         super(props)        
    } 
    state={
        msg:'这是Box3类组件constructor'
    }  
    render() {
        return (
            <div>
                <h3>{this.state.msg}</h3>
            </div>
        );
    }
}
class Box4 extends Component {
    
    state={
        msg:'这是Box4类组件getDerivedStateFromProps',
        num:'100'
    }
    static getDerivedStateFromProps(newprops,oldstate){
        
         console.log(newprops)
         console.log(oldstate)
         return newprops//此处必须返回一个对象，否则会报错
         
    }  
    render() {
        return (
            <div>
                <h3>{this.state.msg}</h3>
                <div>{this.state.num}</div>
                <div>{this.props.num}</div>
            </div>
        );
    }
}

class Box5 extends Component {
    state={
        msg:'这是Box5类组件改变颜色',
        rgb:'rgb(200,150,30)',
        oldrgb:'',//保存上一次的颜色值

    }
    static getDerivedStateFromProps(newprops,oldstate){//外部传过来的prop参数可通过这个函数覆盖原先的state
        //console.log(newprops)
        //return newprops
        if(newprops.rgb!==oldstate.oldrgb){
            return{
                rgb:newprops.rgb,
                oldrgb:newprops.rgb
            }
        }
        return null               
    }
    changeRgb=(e)=>{
        console.log(e)
        let r= Math.floor(Math.random()*256)
        console.log(r)
        this.setState({
            rgb:`rgb(${r+40},${r-80},${r+120})`
        })
    }
    render() {
        return (
            <div>
                <h3>{this.state.msg}</h3>
                <div style={{background:this.state.rgb,width:'400px',height:'100px',textAlign:'center',lineHeight:'100px',}}>{this.state.rgb}</div>
                <div onClick={this.changeRgb} className='addNum'>点击此按钮改变颜色1</div>
            </div>
        );
    }
}





class App extends Component { 
    state={
        bigrgb:'rgb(120,156,178)'        
    }
    changeRgb2=(e)=>{
        console.log(e)
        let r= Math.floor(Math.random()*256)
        console.log(r)
        this.setState({
            bigrgb:`rgb(${r+40},${r-80},${r+120})`
        })
    }   
    render() {
        return (
            <div>
                <Box></Box>
                <Box1></Box1>
                <Box2></Box2> 
                <Box3></Box3>
                <Box4 num='200'></Box4> 
                <Box5 rgb={this.state.bigrgb}></Box5> 
                <div onClick={this.changeRgb2} className='addNum'>点击此按钮改变颜色2</div>            
            </div>
        );
    }
}
ReactDOM.render(
    <App />,//引入最大类组件

    document.getElementById('root')//最大类组件放入的位置
);


