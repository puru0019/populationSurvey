import React, { Component } from 'react';
import {BootstrapTable,TableHeaderColumn}  from 'react-bootstrap-table';

class PopulationContainer extends Component {    
  constructor(props) {
    super(props);
    this.state = {
      tableData:this.props.data
    }
  }
  render() {
    const data = this.state.tableData;
    const cellEditProp = {
      mode: 'click',
      blurToSave: true
    };
    const selectRowProp = {
      mode: 'checkbox'
    };
    return (
      <div className="main-content home">
        <h2>{this.props.title}</h2>
          <BootstrapTable data={ data } keyField='id' cellEdit={ cellEditProp } insertRow={ true } deleteRow={ true } selectRow={ selectRowProp }> 
            {
              Object.keys(data[0]).map(function(key,index) {
                return (<TableHeaderColumn key={index} dataField={key} width='150'>{key}</TableHeaderColumn>)
              })
            }
          </BootstrapTable>
      </div>
    );
  }
}

export default PopulationContainer;