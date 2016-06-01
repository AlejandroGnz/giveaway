var React = require('react')
var Btn = React.createClass({
  render:function(){
    return(
      <a href={"auth/"+this.props.ico} className={'list-group-item '+this.props.ico}>
      <i className={"fa fa-fw fa-2x fa-"+this.props.ico} aria-hidden="true"></i>{" "+this.props.msg}
      </a>
    )
  }
})
module.exports = Btn;
