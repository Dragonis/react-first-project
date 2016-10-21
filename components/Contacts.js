import React from 'react'

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

export default Contacts