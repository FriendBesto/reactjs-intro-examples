var HelloMessage = React.createClass({
  render: function() {
    return (
        <h1>Hello, world!</h1>
    );
  }
});

React.render(<HelloMessage />, mountNode);
