import React, { Component } from 'react';//核心库
//import ReactDOM from 'react-dom'; //负责页面显示
import './css/collect.css'//导入自定义样式
import './news_html/html/css/style.css'//导入公用样式
import request from './utils/request';//导入请求
import formTime from './utils/formTime';//导入转换时间


class Collect extends Component {
    state = {
        msg: '这是Collect类根组件',
        listinfo: []
    }
    componentDidMount() {//从本地存储获取userinfo用户信息并转换格式
        //console.log(JSON.parse(localStorage.getItem('userinfo'))._id)
        request.post('/clist', {//发起请求获取收藏的新闻信息列表
            uid: JSON.parse(localStorage.getItem('userinfo'))._id
        }).then((res) => {
            //console.log(res)
            this.setState({
                listinfo: res.data//更新该组件数据
            }, function () { console.log(this.state.listinfo) })
        }).catch(err => console.log(err))
    }
    gonewsinfo = (newsid) => {//带具体的新闻id参数去往该新闻详情页面
        //console.log(123)
        this.props.history.push('/newsinfo/' + newsid)
    }
    render() {
        return (
            <div className="index">
                <div className="head">
                    <a className="back_btn" onClick={() => { this.props.history.go(-1) }} >返回</a>
                </div>
                <div className="content">
                    <ul>{this.state.listinfo.map((item, index) => {
                        return <li key={index} onClick={() => { this.gonewsinfo(item.aid._id) }}>
                            <div className="info">
                                <div className="title">{item.aid.title}</div>
                                <div className="something">
                                    <span className="m_r10">{item.aid.source}-{item.aid.type}</span>
                                    <span>{formTime.formTime(item.aid.time - 0)}</span>
                                </div>
                            </div>
                            <div className="img">
                                <img src={item.aid.img} alt='' />
                            </div>
                        </li>
                    })}
                    </ul>
                </div>
            </div>
        );
    }
}
export default Collect//设置导出的文件属性