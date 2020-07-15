import React, {Component} from "react";
import {Card,List,Avatar} from "antd";
import {Link} from "react-router-dom";

export default class UserList extends Component {
    render() {
        let {loading,title,data} = this.props;
        return (
            <Card
                loading = {loading}
                title = {title}
                type="inner"
            >
                <List
                    className="userList"
                    itemLayout="vertical"
                    dataSource={data}
                    renderItem={(item)=>(
                        <List.Item
                            key={item.id}
                            extra={<span>最后的回复时间：{item.last_reply_at.split('T')[0]}</span>}
                        >
                            <Avatar src={item.author.avatar_url}/>
                            <Link to={"/user/"+item.author.loginname} className="userName">
                                {item.author.loginname}
                            </Link>
                            <Link to={"/details/"+item.id}>
                                {item.title}
                            </Link>
                        </List.Item>
                    )}
                >
                </List>
            </Card>
        );
    }
}