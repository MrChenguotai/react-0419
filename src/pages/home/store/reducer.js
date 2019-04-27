import {fromJS} from 'immutable';

const defaultState=fromJS({
    topicList:[{
        id:1,
        title:"社会热点",
        imgUrl:'//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    },{
        id:2,
        title:"手绘",
        imgUrl:'//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    }]
})
export default (state=defaultState,action)=>{
    // switch(action.type){
    //     default:
    //         return state;
    // }
    return state;
}