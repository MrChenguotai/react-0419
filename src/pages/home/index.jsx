import React,{Component} from 'react';
import Topic from './components/Topic.jsx';
import List from './components/List.jsx';
import Recommend from './components/Recommend.jsx';
import Writer from './components/Writer.jsx';
import {HomeWrapper,HomeLeft,HomeRight} from './style';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import { BackTop } from './style';
class Home extends Component{
    componentDidMount(){
        this.props.changeHomeData();
        console.log(this.props.showScroll);
        this.bindEvents();
    }
    handleScroll(){
        window.scrollTo(0,0);
    }
    componentWillUnmount() {
		window.removeEventListener('scroll', this.props.changeScrollTopShow);
	}

	bindEvents() {
		window.addEventListener('scroll', this.props.changeScrollTopShow);
	}
    render(){
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' alt='' src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                    <Topic />
                    <List />  
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>  
                {this.props.showScroll?<BackTop onClick={this.handleScroll}>顶部</BackTop>:null}  
            </HomeWrapper> 
        )
    }
}
const mapState=(state)=>({
    showScroll:state.getIn(['home','showScroll'])
})
const mapDispatch=(dispatch)=>({
    changeHomeData(){
        dispatch(actionCreators.getHomeInfo());
    },
    changeScrollTopShow(){
        if(document.documentElement.scrollTop>100){
            dispatch(actionCreators.toggleTopShow(true))
        }else{
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
})
export default connect(mapState,mapDispatch)(Home);