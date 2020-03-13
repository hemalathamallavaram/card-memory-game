import React from 'react';
import styled from 'styled-components';


const Progressbar = ()=>{

    
    return (<StyledProgress >
        <div></div>
    </StyledProgress>)
}

const StyledProgress = styled.div`
width: 90%;
margin: 10px auto;
height: 22px;
background-color: #0A5F44;
div{
    height: 100%;
    text-align: right;
    padding: 0 10px;
    line-height: 22px; /* same as #progressBar height if we want text middle aligned */
    width: 0;
    background-color: #CBEA00;
    box-sizing: border-box;
}
`;
export default Progressbar;