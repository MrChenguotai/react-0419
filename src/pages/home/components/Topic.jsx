import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { TopicItem, TopicWrapper } from '../style';
class Topic extends PureComponent{
    render(){
        return(
            <TopicWrapper>
            {
                this.props.list && this.props.list.map(item=>(
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
    return {
        list:state.getIn(['home','topicList'])
    };
}
export default connect(mapState,null)(Topic);