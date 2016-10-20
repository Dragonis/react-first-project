import React from 'react'
import ReactDataGrid from 'react-data-grid';
import ReactDataGridPlugins from 'react-data-grid/addons';
import app from './css/index.css';
import LikeCon from './components/LikeCon.js'
import Timer from './components/Timer.js'




// Rapid case to fast learn Reactjs
// https://toddmotto.com/react-create-class-versus-component/

class Contacts extends React.Component {
  constructor(props) {
    super(props);
     this.state = {

    };
  }
  render() {
    return (
      <div>Hello world  {this.props.kind}!</div>
    );
  }
}

Contacts.propTypes = {
	kind: React.PropTypes.string.isRequired,
};
Contacts.defaultProps = {
	kind: "circle",
};


class Button extends React.Component {
  
    constructor(props) {
    super(props);

    // Must initialize state first
    this.state = { count: 0 };
  }

  handleClick() {
    // Increment the count when the button is clicked
    this.setState({
      count: this.state.count + 1
    }, function() {
      // setState is asynchronous! This function gets called
      // when it's finished.
      console.log("Job's done");
    });
  }

  render() {
    return (
    <div>
      <div className="click-count">
          Button presses: {this.state.count}
        </div>
        <button onClick={this.handleClick.bind(this)}>
          Add One
        </button>
      </div>  
    );
  }
}

Button.propTypes = {

};
Button.defaultProps = {

};

class App extends React.Component {


  render() {
    return (
      <div className="app">
        <Contacts kind="rectangle"/>
		<Timer />
		<LikeCon />
        <Button />
		
      </div>
    );
  }
}


export default App;