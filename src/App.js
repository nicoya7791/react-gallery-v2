import React, {Component} from 'react';
import './css/index.css';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import axios from 'axios';
import apikey from './config';
import logo from './galleries.png'

// import app components
import Nav from './components/Nav';
import SearchForm from './components/SearchForm';
import Cars from './components/Cars';
import Birds from './components/Birds';
import House from './components/House';
import PhotoContainer from './components/PhotoContainer';
import NotFound from './components/NotFound';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        results: [],
        loading: true
    }

}

componentDidMount(){
  // this.fetchImagesResults()
  console.log('fetchImg loaded')

}
  // Fetching the data from api. take a query param then will be added to the api link.
  // this funtion will be pass the search form 
  fetchImagesResults = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&tags=${query}&extras=url_z&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          results: response.data.photos.photo,
          loading: false,
        });
      })
      .catch(error => console.log('error fetching data', error));
  }

  render(){
    return (

      <BrowserRouter>
        <div className='container'>
            <img src={logo} className='logo-class' alt='Logo' />
            <SearchForm onSearch={this.fetchImagesResults} />
            <Nav />
            {/* {this.props.loading ? <h2>Loading...</h2> : <PhotoContainer data= {this.state.results} />} */}
            
            <Switch>
              <Route exact path='/' render={()=> <Redirect to='/cars' />  } />
              <Route path='/search/:topic' render={(props) => <PhotoContainer loading={this.state.loading} title={this.state.topic} data={this.state.results} onSearch={this.fetchImagesResults} />} />
              <Route path='/cars' render={() => <Cars
                 data={this.state.results} 
                 loading={this.state.loading} 
                 fetch={this.fetchImagesResults}
                   />} />
              <Route  path='/birds' render={() => <Birds
                 data={this.state.results} 
                 loading={this.state.loading} 
                 fetch={this.fetchImagesResults}
               />} />
              <Route path='/house' render={() => <House
                 data={this.state.results} 
                 loading={this.state.loading} 
                 fetch={this.fetchImagesResults}
               />} />
              <Route component={NotFound}/>
            </Switch>
            
          </div>
        
        </BrowserRouter>
    );
  

  }
}

export default App;
