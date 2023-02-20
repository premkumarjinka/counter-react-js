// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  clickMe = () => {
    console.log('clicked on click me')
    this.setState(prevState => {
      console.log('logged value')
      return {count: prevState.count + 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The button has been clicked <span className="span">{count} </span>
          times
        </h1>
        <p className="description">click the button to increase the count</p>
        <button className="clickButton" type="cursor" onClick={this.clickMe}>
          click me
        </button>
      </div>
    )
  }
}

export default ClickCounter
