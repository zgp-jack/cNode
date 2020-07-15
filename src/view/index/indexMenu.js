import React,{Component} from "react";
import {Menu} from "antd";
import {Link,withRouter} from "react-router-dom";
class IndexMenu extends Component{
    constructor(arg){
        super(arg);
        let now = this.getNow(this.props.location);
        this.state = {
            now
        }
    }
    getNow(location) {
        let now = location.pathname.split('/');
        return now[2];
    }
    shouldComponentUpdate(nextProps){
        let now = this.getNow(nextProps.location);
        if(now !== this.state.now){
            this.setState({
                now
            })
            return false;
        }
        return true;
    }
    render() {
        return (
            <Menu
                id={this.props.id}
                mode={this.props.mode}
                selectedKeys={this.state.now}
            >
                <Menu.Item key="all">
                    <Link to="/index/all">全部</Link>
                </Menu.Item>
                <Menu.Item key="good">
                    <Link to="/index/good">精华</Link>
                </Menu.Item>
                <Menu.Item key="ask">
                    <Link to="/index/ask">问题</Link>
                </Menu.Item>
                <Menu.Item key="share">
                    <Link to="/index/share">分享</Link>
                </Menu.Item>
                <Menu.Item key="job">
                    <Link to="/index/job">招聘</Link>
                </Menu.Item>
                <Menu.Item key="dev">
                    <Link to="/index/dev">测试</Link>
                </Menu.Item>
            </Menu>
        );
    }
}
export default withRouter((props)=>{
    let {id,mode,location} = props;
    return (
        <IndexMenu
            mode={mode}
            id={id}
            location={location}
        />
    );
});