import React, { Component } from 'react';//核心库
//import ReactDOM from 'react-dom'; //负责页面显示
import './css/newsinfo.css'//导入自定义的局部样式
import './news_html/html/css/style.css'//导入公用的样式
import request from './utils/request';//导入封装的ajax请求
import formTime from './utils/formTime';//导入时间转换模块
import { Toast } from 'antd-mobile'//导入第三方组件

class Newsinfo extends Component {
    state = {
        msg: '这是Newsinfo类根组件',
        newsdetail: '',//保存具体新闻信息
        flag: true,//判断是否显示收藏和取消收藏的标识
        aid: '',//保存新闻id
        userinfo: ''//保存用户信息
    }
    componentDidMount() {
        //console.log(this.props.match.params.id)获取新闻id 
        this.setState({
            aid:this.props.match.params.id
        })      
        let that = this//更改this指向，因为要发送请求
        if (localStorage.getItem('userinfo')) {//判断是否从本地存储中获取到用户信息：已获取时
            this.setState({
                userinfo: JSON.parse(localStorage.getItem('userinfo'))//更新userinfo数据
            }, function () {//更新后发送请求获取检查是否收藏了该新闻数据
                request.post('/checkcollect', {
                    newsid: that.state.aid,
                    uid: that.state.userinfo._id
                }).then((res) => {
                    console.log(res)
                    if (res.data === true) {
                        that.setState({
                            flag: false
                        })
                    } else {
                        that.setState({
                            flag: true
                        })
                    }
                }).catch((err) => {
                    console.log(err)
                })
            })
        }
        request.post('/newsinfo', {//发送请求获取该条新闻详情信息
            newsid: this.props.match.params.id
        }).then((res) => {
            console.log(res)
            this.setState({
                newsdetail: res.data//更新保存获取到的新闻详情信息
            })
        }).catch((err) => {
            console.log(err)
        })
    }
    collect = () => {//收藏事件：收藏该条新闻信息
        //console.log(111)
        if (localStorage.getItem('userinfo')) {//判断是否登录：已登录
            this.setState({
                userinfo: JSON.parse(localStorage.getItem('userinfo'))
            }, function () {
                if (this.state.userinfo.username)
                    request.post('/collect', {
                        uid: JSON.parse(localStorage.getItem('userinfo'))._id,
                        aid: this.state.aid
                    }).then((res) => {
                        console.log(res)
                        if (res.msg === "收藏成功") {
                            this.setState({
                                flag: false//修改flag状态标识
                            })
                        }
                    })
            })
        } else {//未登录
            Toast.show({
                icon: 'fail',
                content: '还未登录无法收藏'
            })
        }
    }
    uncollect = () => {//取消收藏事件
        //console.log(222)
        if (localStorage.getItem('userinfo')) {
            this.setState({
                userinfo: JSON.parse(localStorage.getItem('userinfo'))
            }, function () {
                if (this.state.userinfo.username)
                    request.post('/cancelCollect', {
                        uid: JSON.parse(localStorage.getItem('userinfo'))._id,
                        aid: this.state.aid
                    }).then((res) => {
                        console.log(res)
                        if (res.msg === "取消收藏成功") {
                            this.setState({
                                flag: true
                            })
                        }
                    })
            })
        }
    }
    render() {
        return (
            <div className="index">
                <div className="head">
                    <a className="back_btn" onClick={() => { this.props.history.go(-1) }}>返回</a>
                </div>
                {this.state.newsdetail.type === '财经' ? <div className="content_info">
                    <div className="titlebox">
                        <h1>{this.state.newsdetail.title}</h1>
                        <div className="infoitem">
                            <span className="source">
                                来源：{this.state.newsdetail.media}
                            </span>
                            <span className="pubtime">{formTime.formTime(this.state.newsdetail.pubtime - 0)}</span>
                        </div>
                    </div>

                    <div className="infobox" dangerouslySetInnerHTML={{ __html: this.state.newsdetail.content }}>
                    </div>
                </div> : <div className="content_info">
                    <div className="titlebox">
                        <h1>{this.state.newsdetail.title}</h1>
                        <div className="infoitem">
                            <span className="source">
                                来源：{this.state.newsdetail.source}
                            </span>
                            <span className="pubtime">{formTime.formTime(this.state.newsdetail.time - 0)}</span>
                        </div>
                    </div>

                    <div className="infobox" dangerouslySetInnerHTML={{ __html: this.state.newsdetail.context }}>
                    </div>

                </div>
                }


                <div className="foot">
                    <div className="cbox">
                        {this.state.flag ? <a className="cancel_btn" onClick={this.collect}>收藏</a> : <a className="cancel_btn" onClick={this.uncollect}>取消收藏</a>}

                    </div>
                </div>
            </div>
        );
    }
}
export default Newsinfo