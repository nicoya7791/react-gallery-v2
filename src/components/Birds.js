import React, { Component } from 'react';
import PhotoContainer from './PhotoContainer';

class Birds extends Component {
    componentDidMount() {
        let query = 'birds';
        this.props.fetch(query);
        console.log(this.props.data);
        console.log('birds loaded');
    }

    // assigned the photos results to results variable then pass it to photoContainer to be display if loaing = false
    
    render(){
        let results = this.props.data
        return (
            <>
                {this.props.loading ? <h3>' Page Loading...'</h3> : <PhotoContainer data={results} />}
            </>
        );

    }
}

export default Birds;