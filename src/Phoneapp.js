import React, { Component } from "react";
import { connect } from "react-redux";

class PhoneApp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="contact">
      {this.props.contacts && this.props.contacts.map((item, index) =>{
       return <h1>{index}.{item.fname},{item.lname},{item.email},{item.notes}</h1>
      })}
        
      </div>    
    );
  }
}
function mapStateToProps(state) {
  return {
    contacts: state.contacts.data,
  };
}
export default connect(mapStateToProps)(PhoneApp);
