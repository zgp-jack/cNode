import React, {Component} from "react";
import TxtDetails from "./txtDetails";
import RelyList from "./replyList";
import {connect} from "react-redux";
import axios from "axios";

class Details extends Component {
    constructor(arg){
        super(arg);
        let id = this.props.match.params.id;
        this.getData(id);
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //
    // }
    getData(id){
        this.props.dispatch((dispatch)=>{
            dispatch({
                type:"DETSILS_UPDATA"
            });
            axios.get(`https://cnodejs.org/api/v1/topic/${id}`)
                .then((res)=>{
                    dispatch({
                        type:"DETSILS_UPDATA_SUCC",
                        data: res.data
                    });
                })
                .catch((err)=>{
                    dispatch({
                        type:"DETSILS_UPDATA_ERROR",
                        data: err.data
                    });
                });
        })
    }
    render() {
        let {loading,data} = this.props;
        return (
            <div className="wrap">
                <TxtDetails
                    loading={loading}
                    data={data}
                />
                <RelyList
                    replies={data.replies}
                    replyCount={data.reply_count}
                />
            </div>
        );
    }
}

export default connect(state=>(state.details))(Details);
