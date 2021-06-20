import React from  'react';
import Photo from './Photo';
import SearchNotFound from './SearchNotFound';


// Recieve an object data property from Search.js. will map through the data. return Photo component.
const PhotoContainer = (props) => {
   const results = props.data;
   //const searchNotFound = 'page not found'
    let photos;
    (results.length) > 0 ? photos = results.map(photo => <Photo url={photo.url_q} key={photo.id} />) 
        : photos = <SearchNotFound />

    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                {photos} 
            </ul>
        </div> 

    );;
}

export default PhotoContainer;