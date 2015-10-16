import React from 'react';
import ReactDOM from 'react-dom';


var HelloForm = React.createClass({
  getInitialState: function() {
    return {formName: ''}
  },
  handleChange: function() {
    this.setState({formName: this.refs.nameField.value});
  },
  render: function() {
    if(this.state.formName == ''){
      var name = this.props.name;
    } else {
      var name = this.state.formName;
    }

    return (
        <div>
          <h1>Hello, {name}!</h1>
          <label htmlFor="nameField">Say hello to: </label>
          <input type="text" id="nameField" ref="nameField" onChange={this.handleChange} />
        </div>
    );
  }
});

ReactDOM.render(<HelloForm name="Jeremy" />, document.getElementById('mountNode'));
