import React, {Component} from 'react';
import './css/index.css';
import axios from 'axios';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import apikey from './config';


// import app components
import Search from './components/Search';
import NotFound from './components/NotFound';
import logo from './galleries.png';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';



// crete app class that holds the fetch results in results array.
class App extends Component {

    state = {
      results: [],
      loading: true,

    }
      // fetch data form api return an array of photos from Flickr. Update the state
      fetchImagesResults = (query) => {
        this.setState({loading: true})
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&tags=${query}&extras=url_q&per_page=24&format=json&nojsoncallback=1`)
          .then(response => {
            this.setState({
              results: response.data.photos.photo,
              loading: false,
            });
          })
          .catch(error => console.log('error fetching data', error));
      }

 
  // renders the components through routes and pass the state needed to fetch and display the results from inside each components.
  render(){
    return (
      <BrowserRouter>
        <div className='container'>
            <img src={logo} className='logo-class' alt='Logo' />
            <SearchForm fetch={this.fetchImagesResults} />
            <Nav />
            <Switch>
              <Route path='/search/:query' component={Search} />
              <Route exact path='/' render={()=> <Redirect to='/search/cars' />  } />
              <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
    );
  

  }
}

export default App;
