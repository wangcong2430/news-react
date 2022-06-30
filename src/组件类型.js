import React, { Component } from 'react';//核心库
import ReactDOM from 'react-dom'; //负责页面显示
import './style.css'//引入样式库
import PropTypes from 'prop-types'//引入属性类型设置库
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
let Demo=function(){
    return <h3>这是Demo函数式组件</h3>
}

function Demo1(props) {
    console.log(props.children)
    return <div>这是demo1声明式函数组件{props.children}</div>
}
let Demo2 = function (props) {
    return <h3>这是demo2赋值式函数组件传参num:{props.num}-age:{props.age}-name:{props.name}</h3>
}
let Demo3 = (props) => {
    return <h3>这是demo3箭头函数组件{props.name}</h3>
}
Demo3.defaultProps = {
    name: 'wangcong123'
}
class Box1 extends Component {//设置props中默认的num的值
    static defaultProps = {
        name: 'wangcong456'
    }
    render() {
        return (
            <h3>这是Box1类组件传参num:{this.props.num}-age:{this.props.age}-name:{this.props.name}</h3>
        )
    }
}
class Box2 extends Component {//props.children属性
    render() {
        console.log(this.props.children)
        return (
            <div>这是Box2类组件{this.props.children}</div>
        )
    }
}
class Box3 extends Component {//获取外部props传过来的num的值
    render() {
        return (
            <div>这是Box3类组件{this.props.num}</div>
        )
    }
}
Box3.propTypes = {
    num: PropTypes.number.isRequired
}

class Box4 extends Component {//获取state的num的值
    state = {//直接定义state
        num: 100
    }
    render() {
        return (
            <div>这是Box4类组件取state的num:{this.state.num}</div>
        )
    }
}
class Box5 extends Component {//三目运算表达式
    constructor(props) {//构造函数定义state
        super(props)
        this.state = {
            num: 25,
            flag: false
        }
        console.log(this)//this指向当前组件对象box5        
    }
    render() {
        return (
            <div>
                <div>这是Box5类组件构造函数取state的num:{this.state.num}</div>
                <div>{this.state.flag ? '喜欢' : '不喜欢'}</div>
            </div>
        )
    }
}
class Box6 extends Component {//修改state中num的值
    state = {
        num: 120
    }
    //箭头函数定义方法
    add = () => {//增加state中num的值
        
        this.setState({
            num: this.state.num+1
        }, function () {
            console.log(this.state.num)
        })
    }


    sub = () => {//减少state中num的值
        this.setState(
            function () {
                return {
                    num: this.state.num - 1
                }
            }, function () {
                console.log(this.state.num)
            }
        )
    }
    render() {
        return (
            <div>
                <h3>这是Box6类组件取state的num:{this.state.num}</h3>
                <div>
                    <button onClick={this.add}>增加Box6类组件中state中的num</button>
                    <button onClick={this.sub}>减少Box6类组件中state中的num</button>
                </div>
            </div>
        )
    }
}
class Box7 extends Component {//Box7一般条件和三目条件渲染组件
    state={
        num:999,
        flag:true,
        flag2:false
    }
    updataFlag=()=>{
        this.setState({
            flag:!this.state.flag
        })
    }   
    render() {
        let com=''
        if(this.state.flag2){
            com=<div className='box7-1'>一般条件渲染组件flag2:true</div>
        }else{
            com=<div className='box7-2'>一般条件渲染组件flag2:false</div>
        }
        return (
            <div>
                 <h3>这是Box7类组件state中num:{this.state.num}</h3>
                 {this.state.flag?<div className='box7-1'>三目条件渲染组件flag:true</div>:<div className='box7-2'>三目条件渲染组件flag:false</div>}
                 {com}
                 <div className='addNum' onClick={this.updataFlag}>点击修改Box7类组件state中flag的值</div>
            </div>            
        )
    }
}

class Box8 extends Component {//Box8类组件中jsx条件渲染
    state={
        num:666,
        flag3:true
    }
    render() {
       if(this.state.flag3){
           return <div className='box7-1'>Box8类组件中jsx条件渲染flag3:true</div>
       }else{
           return <div className='box7-2'>Box8类组件中jsx条件渲染flag3:false</div>
       }
    }
}
class Box9 extends Component {//数组渲染Box9组件
    state={
      arr:['a','b','c','d','e'],
      nums:[1,2,3,4,5,,6,7,8,9],
      list:[
          {name:'yy4',age:'23'},
          {name:'yy5',age:'28'},
          {name:'yy6',age:'32'}
      ],
      persons:[
          <li key={0}>name:'yy1'-age:'18'</li>,
          <li key={1}>name:'yy2',age:'25'</li>,
          <li key={2}>name:'yy3',age:'36'</li>
      ]
    }
    render() {
        let shouList=[]
        for (let index = 0; index < this.state.list.length; index++) {
            shouList.push(<li key={index}>name:{this.state.list[index].name}-age:{this.state.list[index].age}</li>)            
        }
        return (
            <div>
                <h3>这是Box9类组件数组渲染</h3>
                <div>Box9类组件数组arr字符串渲染:{this.state.arr}</div>
                <div>Box9类组件数组nums数值渲染:{this.state.nums}</div>
                <div>
                    <ul>
                    Box9类组件数组persons标签渲染:{this.state.persons}
                    </ul>                   
                </div>                
                <div>
                    <ul>
                    Box9类组件数组list对象for循环方式渲染:{shouList}
                    </ul>                   
                </div>
                <div>
                    <ul>
                    Box9类组件数组list对象map方式渲染:{this.state.list&&this.state.list.map((item,index)=>{
                      return  <li key={index}>name:{item.name}-age:{item.age}</li>
                    })}
                    </ul>                   
                </div>
            </div>            
        )
    }
}

class Box10 extends Component{//渲染html的box10组件
    state={
        ele:'<p>这是box10类组件渲染html的文字测试</p>'
    }
    render(){
        return(
            <div>
                <h3>{this.state.ele}</h3>
                <div dangerouslySetInnerHTML={ {__html:this.state.ele} }></div>
            </div>
        )
        
    }
}

class Box11 extends Component {//这是box11类组件测试绑定点击事件
    state={
        msg:'这是box11类组件'
    }
    constructor(props){
        super(props)
        this.func3=this.func3.bind(this)//在构造函数中先绑定了this,后面使用的时候就能拿到this了
    }
    func1=(e)=>{
     console.log(this)
     console.log(e)
     console.log('11111')
    }

    func2(e){
        console.log(this)
        console.log(e)
        console.log('2222')
      
    }
    func3(e){
        console.log(this)
        console.log(e)
        console.log('3333')
      
    }
    func4(name,age){
        console.log(name,age)
    }
    func5(name,age){
        console.log(name,age)
    }
    render() {
        return (
            <div>
                <h3>{this.state.msg}</h3>
                <div onClick={(e)=>{console.log(e)}} className="addNum">直接写箭头函数</div>
                <div onClick={this.func1} className="addNum">组件内箭头函数func1</div>
                <div onClick={this.func2} className="addNum">组件内非箭头函数func2</div>
                <div onClick={this.func2.bind(this)} className="addNum">组件内非箭头函数func2拿到this方式1</div>
                <div onClick={this.func3} className="addNum">组件内非箭头函数func2拿到this方式2</div>
                <div onClick={(e)=>{this.func4('wang',28,e)}} className="addNum">函数传参方式一func4</div>
                <div onClick={this.func5.bind(this,'wangcong',18)} className="addNum">函数传参方式二func5</div>
            </div>
        );
    }
}

class Box12 extends Component{
    state={
       msg:'这是Box12类组件取state中数组元素遍历',
       list: [
        {
          brand: '奔驰',
          items: [ 'S系列', 'E系列' ]
        },
        {
          brand: '奥迪',
          items: [ 'A系列', 'Q系列' ]
        }
      ]
    }
    render(){
       return(
           <div>
               <h3>{this.state.msg}</h3>
               <div>
                   {
                       this.state.list.map((item,index)=>{
                         return <div key={index}>
                             {item.brand}
                             <ul>
                               {item.items.map((itm,idx)=>{
                                   return <li key={idx}>{itm}</li>
                               })}
                             </ul>
                         </div>                         
                       })
                   }
               </div>
           </div>
       )
    }
}

class App extends Component {//最大类组件
    state = {
        num: 1
    }
    add = () => {//箭头函数定义方法
        this.setState({
            num: ++this.state.num
        })
    };
    render() {
        return (
            <div>
                <Box></Box>
                <Demo></Demo>
                <Demo1> <h4>Demo1组件内的标签内容1</h4><h5>Demo1组件内的标签内容2</h5> </Demo1>
                <Demo2 num={this.state.num} age='28' name='wang'></Demo2>
                <Demo3 ></Demo3>
                <Box1 num={this.state.num} age='29' ></Box1>
                <div>
                    <button onClick={this.add} className='addNum'>add-mum点击修改num值</button>
                </div>
                <Box2> <h3>Box2组件内的标签内容1</h3><h4>Box2组件内的标签内容2</h4> </Box2>
                <Box3 num={16}></Box3>
                <Box4></Box4>
                <Box5></Box5>
                <Box6></Box6>
                <Box7></Box7>
                <Box8></Box8>
                <Box9></Box9>
                <Box10></Box10>
                <Box11></Box11>
                <Box12></Box12>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,//引入最大类组件

    document.getElementById('root')//最大类组件放入的位置
);
