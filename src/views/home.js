import Navbar from './components/navbar'
import Search from './components/search'
import Table from './components/table'
import Footer from './components/footer'
var React = require('react')
  , Btn = require('./components/btn')
  , home = React.createClass({
  render:function(){
    return(
      <html lang="en">
        <head>
          <meta charSet="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>sign in with...</title>
          <link rel='stylesheet' href='css/bootstrap.min.css'/>
          <link rel='stylesheet' href='css/font-awesome.min.css'/>
          <link rel='stylesheet' href='css/main.css'/>
        </head>
        <body>
          <Navbar user={this.props.user}/>
          <div className='jumbotron'>
            <h1 className='text-center'>Easier way to make a giveaway</h1>
          </div>
          <div className='container'>
            <div className='row'>
              <div className='col-xs-12'><Search/></div>
              <div className='col-xs-12'><Table/></div>
            </div>
          </div>
          <Footer/>
          <script src='js/jquery.min.js'></script>
          <script src='js/bootstrap.min.js'></script>
        </body>
      </html>
    )
  }
})
module.exports = home;
