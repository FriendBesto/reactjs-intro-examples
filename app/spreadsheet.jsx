import React from 'react';
import ReactDOM from 'react-dom';

var TableCell = React.createClass({
  handleChange: function(e) {
    this.props.handleChange(this.props.rowNum, this.props.colNum, (1 * e.target.value));
  },

  render: function() {
    return (
      <td><input type="text" size="3" defaultValue={this.props.cellValue} onChange={this.handleChange}/></td>
    );
  }
})

var TableRow = React.createClass({
  render: function(){
    var cells = this.props.rowValues.map(function(cellValue, index){
      return (
        <TableCell cellValue={cellValue} rowNum={this.props.rowNum} colNum={index} handleChange={this.props.handleChange} key={index}/>
      );
    }, this);

    var total = 0;
    for(var i = 0; i < this.props.rowValues.length; i++){
      total += this.props.rowValues[i];
    }

    return (
      <tr>
        {cells}
        <th>{total}</th>
      </tr>
    );
  }
})

var SumRow = React.createClass({
  render: function(){
    var columnSums = [];
    var grandTotal = 0;

    for(var i=0; i < this.props.data.length; i++){
      for(var j=0; j < this.props.data[i].length; j++){
        if(typeof columnSums[j] === 'undefined'){
          columnSums[j] = this.props.data[i][j];
        }else{
          columnSums[j] += this.props.data[i][j];
        }
        grandTotal += this.props.data[i][j];
      }
    }

    var cells = columnSums.map(function(sum, index){
      return (
        <th key={index}>{sum}</th>
      );
    });

    return (
      <tr>
        {cells}<th>{grandTotal}</th>
      </tr>
    );
  }
});

var Spreadsheet = React.createClass({
  getInitialState: function() {
    // Initialize data rows and columns
    var myTable = [];
    for(var i = 0; i < this.props.size; i++){
      myTable[i] = [];
      for(var j = 0; j < this.props.size; j++){
        myTable[i][j] = 0;
      }
    }
    return {data: myTable};
  },

  handleChange: function(row, column, value) {
    var newData = this.state.data;
    newData[row][column] = value;
    this.setState({data: newData});
  },

  render: function() {
    var rows = this.state.data.map(function(rowValues, index){
      return (
        <TableRow rowNum={index} rowValues={rowValues} handleChange={this.handleChange} key={index}/>
      )
    }, this);

    return (
        <div>
          <h1>Fancy Spreadsheets</h1>
          <table>
            <tbody>
              {rows}
              <SumRow data={this.state.data} />
            </tbody>
          </table>
        </div>
    );
  }
});

ReactDOM.render(<Spreadsheet size="10" />, document.getElementById('mountNode'));
