var HelloMessage = React.createClass({
  getInitialState: function() {
    return {formName: ''}
  },
  handleChange: function() {
    console.log(this.refs.nameField.getDOMNode().value);
    this.setState({formName: this.refs.nameField.getDOMNode().value});
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

React.render(<HelloMessage name="Jeremy" />, mountNode);
