import React, { Component } from 'react';
import axios from 'axios';
import apikey from '../config';
import PhotoContainer from './PhotoContainer';

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            results: [],
            loading: true,
            query: ''
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
              loading: false,
              query: query
            });
          })
          .catch(error => console.log('error fetching data', error));
      }
    
      // renders the page components and displays the gallery
    render(){
        let result = this.state.results
        let topic= this.props.match.params.query;
        return(
            <>
                {this.state.loading ? <h2>Loading...</h2> :  <PhotoContainer topic={topic} data={result} />}
            </>

        );
    }



}

export default Search;