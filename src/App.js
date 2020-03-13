import React, { Component } from 'react';
import './App.css';
import randomIcons from './icons';
import {getRandomNumber} from './Utils';
import Card from './Card';
import Header from './Header';
import ActivityRecorder from './ActivityRecorder';
import {ProgressBar} from 'react-bootstrap';
//random strategy - 6 randomly generated, push an array
//after that half, give from that array, till it exhausts
//Card component, click, icon- click output, icon input
//logic for matching
//clicked icon, index
//icon same, but index different - no flip required - clicked icon, index -reset
//icon same, index same - flip required -no reset
//icon different, index different, both flips required - both clicked,index update required

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      flipSides:new Array(9).fill(false),
      preIndex:-1,
      preIcon:'',
      matchedIndexes:[],
      flips:0,
      matches:0,
      timeleft:360,
      minsLeft:10,
      secondsLeft:0
    }
    this.onClickBox = this.onClickBox.bind(this);
    this.styles1 = { 
      transform: 'rotateY(180deg)'  
    };
    this.styles2 = { 
      transform: 'rotateY(0deg)' 
    };
  }
  componentDidMount(){
    setInterval(()=>{
      this.setState({timeleft:this.state.timeleft-1})
      if(this.state.secondsLeft === 0){
        this.setState({minsLeft:this.state.minsLeft-1})
        this.setState({secondsLeft:59})
      } else{
        this.setState({secondsLeft:this.state.secondsLeft-1})
      }
    },1000)
  }
  onClickBox = (index,icon)=>{
//clicked icon, index
//icon same, but index different - no flip required - clicked icon, index -reset
//icon same, index same - flip required -no reset
//icon different, index different, both flips required - both clicked,index update required
    if(this.isMatchedIndex(index)){
      return;
    }
    if(this.state.preIcon === '' && this.state.preIndex === -1){
      //first click or click after a previous success in matching
      let updatedFlips = [
        ...this.state.flipSides
      ]
      updatedFlips[index] = !updatedFlips[index];
      //just show the icons flipped and close them off again
      this.setState({flipSides:updatedFlips});
      setTimeout(()=>{
        updatedFlips[index] = !updatedFlips[index];
        this.setState({flipSides:updatedFlips});
      },500);
      //make sure to record the clicked icon and index
      //update flip
      this.setState({flips:this.state.flips+1});
      this.setState({preIcon:icon});
      this.setState({preIndex:index});
    } else{
      if(this.state.preIcon === icon){
        if(this.state.preIndex !== index){
          //match found
          let updatedFlips = [
            ...this.state.flipSides
          ]
          //flip the current one , previous icon
          updatedFlips[index] = !updatedFlips[index];
          updatedFlips[this.state.preIndex] = !updatedFlips[this.state.preIndex];
          //record them as matched index, so that re-click could be prevented
          let matchedIndexes = [
            ...this.state.matchedIndexes,
            index,
            this.state.preIndex
          ];
          this.setState({matchedIndexes:matchedIndexes});
          this.setState({flipSides:updatedFlips});
          //reset states for re-start of initial state again
          this.setState({matches:this.state.matches+1});
          this.setState({preIcon:''});
          this.setState({preIndex:-1});
  
        }else{
          //click on same icon again, at same index
          let updatedFlips = [
            ...this.state.flipSides
          ]
          //flip the card, but re-flip again for hiding
          updatedFlips[index] = !updatedFlips[index];
          this.setState({flips:this.state.flips+1});
          this.setState({flipSides:updatedFlips});
          setTimeout(()=>{
            updatedFlips[index] = !updatedFlips[index];
            this.setState({flipSides:updatedFlips});
          },500);
        }
      } else if(this.state.preIcon !== icon){
        if(this.state.preIndex !== index){
          //no match is recorded
          let updatedFlips = [
            ...this.state.flipSides
          ]
          //flip the card
          updatedFlips[index] = !updatedFlips[index];
          this.setState({flipSides:updatedFlips});
          //record the current flip for the future match
          this.setState({preIcon:icon});
          this.setState({preIndex:index});
          this.setState({flips:this.state.flips+1});
          setTimeout(()=>{
            //reflip the card, as match is not found
            updatedFlips[index] = !updatedFlips[index];
            this.setState({flipSides:updatedFlips});
          },500);
        }
      }
    }

  }
  isMatchedIndex = (index)=>{
    let matchedIndexes = this.state.matchedIndexes;
    return (matchedIndexes.indexOf(index)!==-1);
  }
  render(){
    let boxes = null;
    boxes = randomIcons;
    console.log(boxes);
    boxes = boxes.map((box,index)=>{
      return (<Card key={getRandomNumber()} flip={this.state.flipSides[index]} icon={box} index={index} clicked={this.onClickBox}/>)
    })
    return (
      <div className="App">
        <Header />
        <div className="row">
          <div className="col-md-12">
            <ActivityRecorder flips={this.state.flips} matches={this.state.matches}/>
          </div>
          <div className="col-md-12">
            <ProgressBar now={this.state.timeleft} label={`${this.state.minsLeft}:${this.state.secondsLeft}`} max="360" min="0"/>
          </div>
          <div className="col-md-12">
            <div className="flip-box">{boxes}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
