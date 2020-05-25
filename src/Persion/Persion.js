import React from 'react';
import './Persion.css';
//import Radium from 'radium'; //for 
import styled from 'styled-components';

const StyledDiv = styled.div`

    width: 60%;
    margin: auto;
    border: 1px solid #eee;
    box-shadow: 0 1px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media(min-width:500px){
        width:500px
    }

`

const persion = (props) => {
    // const style={
    //     '@media(min-width:500px)':{
    //         width:'450px'
    //     }
    // };
    return (

       <StyledDiv>
        {/* <div className='Persion' style={style}> */}
        
            <p onClick={props.click}>I'm {props.name} and {props.age} yeas old.</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed}></input>
        
        </StyledDiv>

    )

};

//export default Radium(persion);
export default persion;
