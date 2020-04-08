import React, {Component} from "react"
import Question from './Question'
import './App.css';

class Game extends Component {
	state = {
    	numQuestions: 0,
      	numCorrect: 0
    }
	
	updateCorrectCount = () => {
    	this.setState((prevState) => ({ numCorrect: prevState.numCorrect + 1,
                                        numQuestions: prevState.numQuestions + 1}) )
    }

	updateQuestionCount = () => {
    	this.setState((prevState) => ({ numQuestions: prevState.numQuestions + 1 }) )
    }

	render() {
      return (
          <div className="game">
            <h2>Mental Math</h2>
            <Question UpdateCorrectCount = {this.updateCorrectCount}
      		  	      UpdateQuestionCount = {this.updateQuestionCount}/>
            <p className="text">
              Your Score: {this.state.numCorrect}/{this.state.numQuestions}
            </p>
          </div> 
	  )
    }
}

export default Game