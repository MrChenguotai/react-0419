import React,{Component} from 'react';
import {HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button,SearchInfo,SearchInfoTitle,SearchInfoSwitch,SearchInfoItem,SearchWrapper,SearchInfoList} from './style.js';
import { CSSTransition } from 'react-transition-group';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import {Link} from 'react-router-dom';

class Header extends Component{
    getListArea(){
        const {focused,list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage }=this.props;
        const newList=list.toJS();
        const pageList=[];
        if(newList.length){
            for(let i=(page-1)*10;i<page*10;i++){
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }
        if(focused||mouseIn){
            return(
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={()=>handleChangePage(page,totalPage)}>换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>     
                </SearchInfo>
            )
        }else{
            return null;
        }
    }
    render(){
        const {focused,handleInputFocus,handleInputBlur,list}=this.props;
        return (
            <HeaderWrapper>
                <Link to="/">
                    <Logo></Logo>
                </Link>
                <Nav>
                    <NavItem className="left active">首页</NavItem> 
                    <NavItem className="left">下载APP</NavItem> 
                    <NavItem className="right">登录</NavItem>
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem> 
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused?"focused":''}
                                onFocus={()=>handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            >
                                {/* <i className="iconfont">&#xe632;</i> */}
                            </NavSearch>
                        </CSSTransition> 
                        {this.getListArea(focused)}
                    </SearchWrapper> 
                </Nav>
                <Addition>
                    <Button className="writting">
                        <i className="iconfont">&#xe608;</i>
                        写文章
                    </Button>
                    <Button className="reg">注册</Button>    
                </Addition>            
            </HeaderWrapper>   
        );
    }
}
const mapStateToProps=(state)=>{
    return {
        focused:state.getIn(['header','focused']),
        list:state.getIn(['header','list']),
        page: state.getIn(['header', 'page']),
		totalPage: state.getIn(['header', 'totalPage']),
		mouseIn: state.getIn(['header', 'mouseIn']),
		login: state.getIn(['login', 'login'])
    }  
}
const mapDispatchToProps=(dispatch)=>{
    return {
        handleInputFocus(list){
            if(list.size===0){
                dispatch(actionCreators.getList());
            }
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter() {
			dispatch(actionCreators.mouseEnter());
		},
		handleMouseLeave() {
			dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page,totalPage){
            if(page<totalPage){
                dispatch(actionCreators.changePage(page+1));
            }else{
                dispatch(actionCreators.changePage(1));
            }
        }
    }
}
export default  connect(mapStateToProps,mapDispatchToProps)(Header);