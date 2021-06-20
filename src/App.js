import React, {Component} from 'react';
import './css/index.css';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';


// import app components
import Search from './components/Search';
import NotFound from './components/NotFound';

// crete app class that holds the fetch results in results array.
class App extends Component {
 
  // renders the components through routes and pass the state needed to fetch and display the results from inside each components.
  render(){
    return (
      <BrowserRouter>
        <div className='container'>
            <Switch>
              <Route exact path='/' render={()=> <Redirect to='/search/moon' />  } />
              <Route path='/search/:query' component={Search} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
    );
  

  }
}

export default App;
