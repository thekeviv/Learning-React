import React, {Component} from 'react'
import './App.css';


class Question extends Component {
  render() {
    let value1 = Math.floor(Math.random() * 100);
    let value2 = Math.floor(Math.random() * 100);
    let value3 = Math.floor(Math.random() * 100);
    let proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
    let answer = value1 + value2 + value3 === proposedAnswer;
    
	return (
      <div>
    	<div className="equation">
            <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
        </div>
        <button onClick = {() => {
							 answer ? this.props.UpdateCorrectCount() : this.props.UpdateQuestionCount()
							 }}>True</button>
		<button onClick = {() => {
							 !answer ? this.props.UpdateCorrectCount() : this.props.UpdateQuestionCount()
							 }}>False</button>
	  </div>
    )
  }
}

export default Question