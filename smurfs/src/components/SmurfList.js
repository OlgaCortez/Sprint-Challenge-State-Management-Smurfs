import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchSmurfs} from '../actions';
import Smurf from './Smurf';

const SmurfList = props => {

    useEffect (() => {
        props.fetchSmurfs();
    },[]);

    if (props.isFetching) {
        return <h2>Loading Smurfs...</h2>;
    }
    return (
        <div>
            {props.smurfs.map(smurf => (
                <Smurf key={smurf.id} smurf={smurf} />
            ))}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
    };
};

export default connect(
    mapStateToProps,
    {fetchSmurfs}
)(SmurfList);