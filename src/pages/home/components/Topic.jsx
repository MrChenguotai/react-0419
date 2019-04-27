import React,{Component} from 'react';
import {TopicWrapper,TopicItem} from '../style';
import {connect} from 'react-redux';
class Topic extends Component{
    render(){
        console.log(this.props);
        return(
            <TopicWrapper>
            {
                this.props.list.map(item=>(
                        <TopicItem key={item.get('id')}>
                            <img 
                            className='topic-pic'
                            src={item.get('imgUrl')} alt=""/>
                            {item.get('title')}
                        </TopicItem>
                    )
                )
            }
            </TopicWrapper>    
        )
    }
}
const mapState=(state)=>{
    console.log(state);
    return {
        list:state.getIn(['home','topicList'])
    };
}
export default connect(mapState,null)(Topic);