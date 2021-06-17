import React, { Component } from 'react';
import PhotoContainer from './PhotoContainer';

class Cars extends Component {

    componentDidMount() {
        let query = 'cars';
        this.props.fetch(query);
        console.log(this.props.data);
        console.log('cars loaded');
    }
    // assigned the photos results to results variable then pass it to photoContainer to be display if loaing = false
    render(){
        let results = this.props.data
        return (
            <>
            {this.props.loading ? <h2>Loading...</h2> : <PhotoContainer data={results} />}
            </>
        );
    }
}

export default Cars;