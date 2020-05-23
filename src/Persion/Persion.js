import React from 'react';
import './Persion.css';
import Radium from 'radium';
const persion = (props) => {
    return (
        <div className='Persion'>
            <p onClick={props.click}>I'm {props.name} and {props.age} yeas old.</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed}></input>
        </div>


    )

};

export default Radium(persion);
