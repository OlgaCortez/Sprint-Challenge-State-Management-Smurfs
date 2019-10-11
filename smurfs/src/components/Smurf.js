import React from 'react';

const Smurf = props => {
    return (
        <div>
            <h1>New Smurfs</h1>
            <p>Smurf's Name: {props.smurf.name}</p>
            <p>Age: {props.smurf.age}</p>
            <p>Height: {props.smurf.height}</p>
        </div>
    );
};

export default Smurf;