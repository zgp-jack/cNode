function details(state={
    data:{
        author: {
            loginname: "",
            avatar_url: ""
        },
        replies: [],
        reply_count: 0,
        create_at: "",
        good: true,
        tab: ""
    },
    loading: true
},action) {
    switch (action.type) {
        case "DETSILS_UPDATA":
            return ({
                data: state.data,
                loading: true
            });
        case "DETSILS_UPDATA_SUCC":
            return {
                data: action.data.data,
                loading: false
            };
        case "DETSILS_UPDATA_ERROR":
            return {
                data: [],
                loading: false
            };
        default:
            return state;
    }
}
export default details;