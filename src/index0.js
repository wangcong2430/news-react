import React, { Component } from 'react';//核心库
//import ReactDOM from 'react-dom'; //负责页面显示
import { withRouter } from 'react-router-dom';//引入高阶组件可拿到路由对象
import request from './utils/request';//导入封装的ajax请求
import formTime from './utils/formTime';//导入时间转换模块
import './css/index.css'//导入自定义局部样式
import './news_html/html/css/style.css'//导入公用样式
import { InfiniteScroll } from 'antd-mobile'//导入无限滚动组件
//import axios from 'axios';//导入原生封装的axios请求模块
class Index0 extends Component {
    //constructor(props) {
        //super(props)
        //console.log(this.props)//获取路由对象
   // }
    state = {
        msg: '这是Index0类根组件',
        list: ['军事', '财经', 'NBA', '汽车', '文化', '股票', '时政'],
        cur: 0,
        newsinfo: [],
        hasMore: true,
        page: 1
    }
    componentDidMount() {

    }

    change = (idx) => {//切换分类
        this.setState({
            cur: idx
        }, () => {
            request.post('/news', {//发起获取新闻列表的请求
                type: this.state.list[this.state.cur]
            }).then((res) => {
                console.log(res)
                this.setState({
                    newsinfo: res.data
                })
            }).catch((error) => {
                console.log(error)
            })
        })
    }
    loadMore = async () => {//同步的方式加载更多的事件函数
        //console.log('aaaa')
        this.setState({
            hasMore: false
        })
        const res = await request.post('/news', {//发起获取新闻列表的请求
            type: this.state.list[this.state.cur],
            page: this.state.page
        })
        console.log(res)
        this.setState({
            newsinfo: [...this.state.newsinfo, ...res.data]//新的新闻数组列表加入到原来的数组列表中
        })
        if (res.data.length > 0) {
            this.setState({
                page: ++this.state.page,//更改当前的page页，从而获取更多的新闻列表数据
                hasMore: true,
            })
        }
    }

    gonewsinfo = (newsid) => {//通过带新闻id的参数跳转到新闻详情页
        this.props.history.push('/newsinfo/' + newsid)
    }
    render() {
        return (
            <div className="index">
                <div className="head">
                    <div className="nav">
                        <ul>
                            {this.state.list.map((item, index) => {
                                return (
                                    <li className={this.state.cur === index ? 'cur' : ''} key={index} ><a  onClick={() => { this.change(index) }}>{item}</a></li>
                                )
                            })}

                        </ul>
                    </div>
                    <div className="search">
                        <a className="s_btn"  onClick={()=>{this.props.history.push('/search')}}>-</a>
                    </div>
                </div>
                <div className="content">
                    <ul>{this.state.newsinfo.map((item, index) => {
                        if (item.type === '财经') {
                            return <li key={item._id} onClick={() => { this.gonewsinfo(item._id) }}>
                                <div className="info">
                                    <div className="title">{item.title}</div>
                                    <div className="something">
                                        <span className="m_r10">{item.media}-{item.type}</span>
                                        <span>{formTime.formTime(item.pubtime - 0)}</span>
                                    </div>
                                </div>
                                <div className="img">
                                    <div className='noimg'>无图</div>
                                </div>
                            </li>
                        } else {
                            return <li key={item._id} onClick={() => { this.gonewsinfo(item._id) }}>
                                <div className="info">
                                    <div className="title">{item.title}</div>
                                    <div className="something">
                                        <span className="m_r10">{item.source}-{item.type}</span>
                                        <span>{formTime.formTime(item.time - 0)}</span>
                                    </div>
                                </div>
                                <div className="img">
                                    {item.img === 'none' ? <div className='noimg'>无图</div> : <img src={item.img} alt='' />}
                                </div>
                            </li>
                        }
                    })
                    }
                    </ul>
                    <InfiniteScroll threshold="10" loadMore={this.loadMore} hasMore={this.state.hasMore}></InfiniteScroll>

                </div>
            </div>
        );
    }
}
export default withRouter(Index0)//设置导出属性，调用高阶组件