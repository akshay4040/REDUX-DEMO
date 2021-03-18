import React, { Component } from "react";
import { connect, createStoreHook } from "react-redux";
import { addCounter } from "../Actions";
import { bindActionCreators } from "redux";
import { getFCP } from "web-vitals";

class AddCounter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <form>
          <div className="field is-grouped">
            <div className="control">
              <button
                className="button is-primary"
                onClick={(e) => {
                  e.preventDefault();
                  this.props.dispatch(addCounter());
                }}
              >
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
// function mapDispatchToProps(dispatch) {
//   return { actions: bindActionCreators(addCounter, dispatch) };
// }
export default connect()(AddCounter);
