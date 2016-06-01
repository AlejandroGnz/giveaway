import React from 'react';
export default class Table extends React.Component{
  render(){
    return(
      <table className='table'>
        <thead>
          <tr>
            <th>Description</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    )
  }
}
