import React, { Component } from 'react';
import axios from 'axios';
import apikey from '../config';
import PhotoContainer from './PhotoContainer';
import logo from '../galleries.png';
import SearchForm from './SearchForm';
import Nav from './Nav';

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            results: [],
            loading: true
        }
    }

    // fetch results once after the component have rendered
    componentDidMount(){
        this.fetchImagesResults()
    }

    // fetch results if there was a change in search param
    componentDidUpdate(prevProps) {
        if(prevProps.match.params.query !== this.props.match.params.query) {
            this.fetchImagesResults()
        }
    }

    // fetch data form api return an array of photos from Flickr. Update the state
    fetchImagesResults = () => {
        let query= this.props.match.params.query;
        this.setState({loading: true})
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&tags=${query}&extras=url_q&per_page=24&format=json&nojsoncallback=1`)
          .then(response => {
            this.setState({
              results: response.data.photos.photo,
              loading: false
            });
          })
          .catch(error => console.log('error fetching data', error));
      }
    
      // rendeers the page components and displays the gallery
    render(){
        return(
            <>
                <img src={logo} className='logo-class' alt='Logo' />
                <SearchForm onSearch={this.fetchImagesResults} />
                <Nav />
                {this.state.loading ? <h2>Loading...</h2> :  <PhotoContainer data={this.state.results} />}
            </>

        );
    }



}

export default Search;