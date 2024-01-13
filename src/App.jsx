import { Component, useState } from 'react'
import './App.css'

class App extends Component {
  constructor(){
    super()
    this.state={
      value:""
    }
}

  render() {
    return(
    <div>
    <h4>Input</h4>
    <div className='flex'>
    
    <textarea onChange={(e)=>{this.setState({value:e.target.value})}}>
    {this.state.value}
    </textarea>
    <div>
    <div className='area'>

      <h3 className='h3'>
        {this.state.value}
      </h3>
    </div>
    </div>
    </div>
    </div>)
  }
}

export default App
