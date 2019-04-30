import {fromJS} from 'immutable';
import * as constants from './constants';

const defaultState=fromJS({
    topicList:[],
    articleList:[],
    recommendList:[],
    articlePage: 1,
    showScroll:false
})
const addArticleList=(state,action)=>{
    return state.merge({
        'articleList': state.get('articleList').concat(action.list),
		'articlePage': action.nextPage
    })
}
export default (state=defaultState,action)=>{
    switch(action.type){
        case constants.CHANGE_HOME_DATA:
            const newState=state.merge({
                topicList:fromJS(action.topicList),
                articleList:fromJS(action.articleList),
                recommendList:fromJS(action.recommendList)
            });
            console.log(newState);
            return newState;
        case constants.ADD_ARTICLE_LIST:
            return addArticleList(state, action);
        case constants.TOOGLE_TOP_SHOW:
            return state.set('showScroll',action.toogleFlag);
        default:
            return state;
    }
}