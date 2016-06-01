import React from 'react';
export default class Search extends React.Component{
  render(){
    return(
      <div className='search-bar'>
        <input type='text' placeholder='write the code of giveaway'/>
        <i className="fa fa-2x fa-search" aria-hidden="true"></i>
      </div>
    )
  }
}
