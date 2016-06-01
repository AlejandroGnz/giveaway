var React = require('react')
var Account = React.createClass({
  render:function(){
    return(
      <div>
        <div>
          <img src={""}/>
        </div>
        <h1>{this.props.user.name}</h1>
      </div>
    )
  }
})
module.exports = Account;
