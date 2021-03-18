import React, { Component } from "react";
import { connect } from "react-redux";
import * as contactAction from "./Actions/ContactAction";

class App extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      data:{}
    };
  }

  onChange = (name,e) => {
    let data = this.state.data;
    data[name] = e.target.value;
    this.setState({
      data: data,
    });
  };

  handleSubmit(e) {
    e.preventDefault()
    let contact = this.state.data
    this.setState({
      fname: "",
      lname: "",
      email: "",
      notes: "",
    });
    this.props.createContact(contact);
  }

  // listView(data, index) {
  //   return (
  //     <div className="row">
  //       <div className="col-md-10">
  //         <li key={index} className="list-group-item clearfix">
  //           {data.name}
  //         </li>
  //       </div>
  //       <div className="col-md-2">
  //         <button
  //           onClick={(e) => this.deleteContact(e, index)}
  //           className="btn btn-danger"
  //         >
  //           Remove
  //         </button>
  //       </div>
  //     </div>
  //   );
  // }

  // deleteContact(e, index) {
  //   e.preventDefault();
  //   this.props.deleteContact(index);
  // }

  render() {

    const { data } = this.state;
    return (
      <div className="container">
        <h1>form</h1>
        <hr />
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>firstname:-</label>
            <input
              type="text"
              name="fname"
              onChange={(e) => this.onChange("fname", e)}
              className="form-control"
              placeholder="FirstName..."
              value={data.fname}
            />
            <br></br>
            <label>lastname:-</label>
            <input
              type="text"
              name="lname"
              onChange={(e) => this.onChange("lname", e)}
              className="form-control"
              value={data.lname}
            />
            <br></br>
            <label>email:-</label>
            <input
              type="text"
              name="email"
              onChange={(e) => this.onChange("email", e)}
              className="form-control"
              value={data.email}
            />
            <br></br>
            <label>notes:-</label>
            <input
              type="text"
              name="notes"
              onChange={(e) => this.onChange("notes", e)}
              className="form-control"
              value={data.notes}
            />
            <br />
            <input type="submit" className="btn btn-success" value="submit" />
          </form>
          <hr />
          {/* {
            <ul className="list-group">
              {this.props.contacts && this.props.contacts.map((contact, i) =>
                this.listView(contact, i)
              )}
            </ul>
          } */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {

};

const mapDispatchToProps = (dispatch) => {
  return {
    createContact: (contact) => dispatch(contactAction.createContact(contact)),
    // deleteContact: (index) => dispatch(contactAction.deleteContact(index)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
