import React from 'react';
export default class Navbar extends React.Component{
  constructor(){
    super()
  }
  render(){
    var status='';
    if(this.props.user){
      status=(
        <ul className="nav navbar-nav navbar-right">
          <li className='facebook'><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
          <li className='twitter'><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
          <li className='youtube'><a href="#"><i className="fa fa-youtube" aria-hidden="true"></i></a></li>
          <li className=''><a href="/logout"><i className="fa fa-sign-out" aria-hidden="true"></i>
          {this.props.user.displayName}</a></li>
        </ul>
      )
    }
    else{
      status=(
        <ul className="nav navbar-nav navbar-right">
          <li className=''><a href="auth/steam"><i className="fa fa-steam" aria-hidden="true"></i> Sign in</a></li>
        </ul>
      )
    }
    return(
      <nav className="navbar navbar-inverse navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">GiveAway</a>
          </div>
          <div className="collapse navbar-collapse" id="navbar-collapse">
            {status}
          </div>
        </div>
      </nav>
    )
  }

}
