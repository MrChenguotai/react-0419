import React ,{Component}from 'react';
import Header from './common/header/index.jsx'
import {Provider} from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom';
import store from './store';
import Home from './pages/home/index.jsx';
import Detail from './pages/detail/index.jsx';
class App extends Component{
    render(){
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Header></Header>
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/detail/:id" exact component={Detail}></Route>
                    </div>  
                </BrowserRouter> 
            </Provider>    
        );
    }
}
export default App;
