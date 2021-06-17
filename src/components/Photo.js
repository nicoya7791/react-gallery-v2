import React from 'react';

// recived an 'url' prop from PhotoContainer that contains the img to display in the LI tag.
const Photo = (props) => {
    let img = props.url;
    return(
        <div>
            <li>
                <img src={img} alt="IMG"/>
            </li>
        </div>
    );
}


export default Photo;