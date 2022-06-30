import React, { Component } from 'react';//核心库
//import ReactDOM from 'react-dom'; //负责页面显示
import './news_html/html/css/style.css'//引入公用的样式
import './css/search.css'//引入自定义的局部样式
import request from './utils/request'//引入封装的ajax请求
import formTime from './utils/formTime';//引入转换时间的模块


class Searchbox extends Component {
    state = {
        msg: '这是Searchbox类组件',
        keyword: ''
    }
    search = () => {
        if (this.state.keyword) {
            request.post('/search', {//发起搜索请求，获取搜索内容
                keyword: this.state.keyword
            }).then((res) => {
                console.log(res)
                //console.log(this.props)
                if (res.data.length > 0) {
                    this.props.sendSearchbox(res.data)//获取到的信息传回给父组件保存
                } else if (res.data.length === 0) {
                    alert('抱歉,未查到相关信息,请更换关键字')
                }
            }).catch((err) => {
                console.log(err)
            })
        } else {
            alert('搜索信息不能为空')
        }
    }
    handle = (e) => {
        //console.log(e.target.value)
        this.setState({
            keyword: e.target.value//更新保存keyword的数据
        })
    }
    render() {
        return (
            <div className="searchbox">
                <div className="searchbar">
                    <input type="text" onChange={this.handle}></input>
                    <span onClick={this.search}></span>
                </div>
            </div>
        );
    }
}
class Content extends Component {
    //constructor(props) {
        //super(props)
        // console.log(this.props)获取路由信息
    //}
    state = {
        msg: '这是Content类组件',
        //list: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        Contentobj: []
    }
    shouldComponentUpdate(nextprops) {
        //console.log(nextprops)
        return true
    }
    UNSAFE_componentWillReceiveProps(nextprops) {
        console.log(nextprops)
        this.setState({
            Contentobj: nextprops.sendContent
        }, function () {
            console.log(this.state.Contentobj)
        })

    }
    gonewsinfo = (newsid) => {
        this.props.sendmyProps.history.push('/newsinfo/' + newsid)
        //console.log(123)
        //console.log(this.props)        
    }
    render() {
        return (
            <div className='content'>
                <ul>{this.state.Contentobj.map((item, index) => {
                    return <li key={index} onClick={() => { this.gonewsinfo(item._id) }}>
                        <div className="info">
                            <div className="title">{item.title}</div>
                            <div className="something">
                                <span className="m_r10">{item.source}-{item.type}</span>
                                <span>{formTime.formTime(item.time - 0)}</span>
                            </div>
                        </div>
                        <div className="img">
                            <img src={item.img} alt='' />
                        </div>
                    </li>
                })

                }
                </ul>
            </div>
        );
    }
}
class Search extends Component {
    state = {
        msg: '这是Search类根组件',
        Searchobj: 5,
        myProps: this.props

    }
    componentDidMount() {
        //console.log(this.state.myProps)
    }

    getSearchbox = (obj) => {
        //console.log(obj)
        //console.log(this)
        this.setState({
            Searchobj: obj
        }, function () {
            console.log(this.state.Searchobj)
        })
    }
    render() {
        return (
            <div className='index'>
                <div className="head">
                    <a className="back_btn" onClick={() => { this.props.history.go(-1) }}>返回</a>
                </div>
                <Searchbox sendSearchbox={this.getSearchbox}></Searchbox>
                <Content sendContent={this.state.Searchobj} sendmyProps={this.state.myProps}></Content>
            </div>
        );
    }
}
export default Search