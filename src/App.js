import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      board: ["?", "?", "?", "?", "?", "?", "?", "?", "?"]
    }
  }

  handleGameplay = (index) => {
    // alert(index)
    const { board } = this.state
    board[index] = "🌴"
    this.setState({board: board})
  }

  render() {
    
    return(
      <>
        <h1>Treasure Hunt Game</h1>
        <div div className = 'gameBoard'>
          {this.state.board.map((value,index) =>{
            return(
               <Square 
               key = {index}
               value={value}
               index={index}
               handleGamePlay={this.handleGameplay}
               />

            )
          })}

        </div>
        
      </>
    )
  }
}
export default App
