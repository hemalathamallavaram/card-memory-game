import React from 'react';
import styled from 'styled-components';

const ActivityRecorder = (props)=>{
    return(<StyledFlexRow>
        <div>Number of flips:{props.flips}</div>
        <div>Number of matches:{props.matches}</div>
    </StyledFlexRow>)
}
const StyledFlexRow = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    margin:2em;

`;
export default ActivityRecorder;