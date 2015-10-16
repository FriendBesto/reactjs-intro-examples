var HelloMessage = React.createClass({
  getInitialState: function(){
    return {majors: null}
  },
  componentWillMount: function(){
    $.ajax({
            url: 'https://www.kimonolabs.com/api/cu4u6h42?apikey=5b853442f3f828997cd1a5f0e341e6e1',
            dataType: 'json',
            success: function(data) {
                this.setState({majors: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(status, err.toString());
            }.bind(this)
        });
  },
  render: function() {
    return (
        <div>{this.state.data}</div>
    );
  }
});

React.render(<HelloMessage />, mountNode);
