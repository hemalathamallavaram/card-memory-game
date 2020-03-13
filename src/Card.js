import React from 'react';
import {getRandomFontVal} from './Utils';

const Card = (props)=>{
    let styles1 = { 
        transform: 'rotateY(180deg)'  
      };
    let styles2 = { 
        transform: 'rotateY(0deg)' 
      };
    return(<div onClick={()=>props.clicked(props.index,props.icon)} className="flip-box-inner">
        <div  className='flip-box-front'>
        <i style={{fontSize: '70px',position:'absolute',top:'30%',left:'30%'}} className={`fa ${props.icon}`} aria-hidden="true"></i>
        </div>
        <div style={(props.flip)?styles1:styles2} className="flip-box-back">
        </div>        
        </div>)
}

export default Card;