import React from 'react'
import ReactDataGrid from 'react-data-grid';
import ReactDataGridPlugins from 'react-data-grid/addons';
import Faker from 'Faker'
import app from './css/index.css';
import LikeCon from './components/LikeCon.js'
import Timer from './components/Timer'


var user = {
  name: Faker.Name.findName(),
  email: Faker.Internet.email(),
  address: Faker.Address.streetAddress(),
  bio: Faker.Lorem.sentence(),
  image: Faker.Image.avatar()
};

// http://adazzle.github.io/react-data-grid/examples.html#/basic
var _rows = [];
for (var i = 1; i < 1000; i++) {
  _rows.push({
    id: i,
    title: 'Title ' + i,
    count: i * 1000
  });
}

//A rowGetter function is required by the grid to retrieve a row for a given index
var rowGetter = function(i){
  return _rows[i];
};


var columns = [
{
  key: 'id',
  name: 'ID'
},
{
  key: 'title',
  name: 'Title'
},
{
  key: 'count',
  name: 'Count'
}
]

var Example = React.createClass({
  render: function() {
    return  (<ReactDataGrid
    columns={columns}
    rowGetter={rowGetter}
    rowsCount={_rows.length}
    minHeight={500} />);
  }
});

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
var text= Faker.Name.findName();



class App extends React.Component {

		
  render() {
    return (
      <div className="app">
  <Contacts kind={user.name}/>
		<Timer />
		<LikeCon />
        <Button />
		<Example/>
      </div>
    );
  }
}


export default App;