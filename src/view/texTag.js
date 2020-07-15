import React,{Component} from "react";
import {Tag} from "antd";

const tab = {
    top: {
        color: "magenta",
        txt: "置顶"
    },
    good: {
        color: "geekblue",
        txt: "精华"
    },
    job: {
        color: "cyan",
        txt: "招聘"
    },
    share: {
        color: "purple",
        txt: "分享"
    },
    ask: {
        color: "green",
        txt: "问答"
    },
    dev: {
        color: "lime",
        txt: "测试"
    }
};
function getTab(data) {
    return (
        data.top?
            "top":
            data.good?
                "good":data.tab
    );
}
export default class TxtTag extends Component {
    render() {
        let nowTag = tab[getTab(this.props.data)];
        if(nowTag){
            return (
                <Tag color = {nowTag.color}>{nowTag.txt}</Tag>
            );
        }else{
            return (
                <Tag color = "lime">jack</Tag>
            );
        }
    }
}