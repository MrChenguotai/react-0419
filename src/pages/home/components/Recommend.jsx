import React,{PureComponent} from 'react';
import {connect} from 'react-redux';
import {RecommendWrapper,RecommendItem} from '../style';
class Recommend extends PureComponent{
    render(){
        console.log(this.props,'this.props');
        const {list}=this.props;
        return(
            <RecommendWrapper> 
                {
                    list&&list.map(item=>{
                        return (
                            <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}></RecommendItem>
                        )
                    })
                }
            </RecommendWrapper>
        )
    }
}
const mapState=(state)=>(
    {list:state.getIn(['home','recommendList'])}
)
export default connect(mapState,null)(Recommend);