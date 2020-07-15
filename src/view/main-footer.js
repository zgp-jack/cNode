import React,{Component} from "react";
import {Layout} from "antd";
export default class MainFooter extends Component{
    render() {
        return (
            <Layout.Footer
                style={{textAlign:"center"}}
            >
                京ICP备08102442号-1 2007-2008 MIAOV.COM 版权所有
            </Layout.Footer>
        );
    }
}