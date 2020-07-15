import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Card,Avatar,List} from "antd";

export default class RelyList extends Component{
    render() {
        let {loading,replyCount,replies} = this.props;
        return (
            <Card
                loading={loading}
                title={replyCount+"条回复"}
                type="inner"
            >
                <List
                    dataSource={replies}
                    itemLayout="vertical"
                    renderItem={(item)=>(
                        <List.Item
                            key={item.id}
                            extra={item.ups.length>0?<span>有{item.ups.length}人认为很赞</span>:''}
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={item.author.avatar_url}/>}
                                description={<div>
                                    <Link to={"/user/"+item.author.loginname}>{item.author.loginname}</Link>
                                    <span style={{marginLeft:"5px"}}>发表于：{item.create_at.split('T')[0]}</span>
                                </div>}
                            />
                            <div dangerouslySetInnerHTML={{__html:item.content}}></div>
                        </List.Item>
                    )}
                />
            </Card>
        );
    }
}