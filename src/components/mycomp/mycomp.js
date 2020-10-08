import React, {Component} from 'react';
import './mycomp.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as mycompActions from "../../store/mycomp/actions";
export default class mycomp extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return <div className="component-mycomp">Hello! component mycomp</div>;
    }
  }
// export default connect(
//     ({ mycomp }) => ({ ...mycomp }),
//     dispatch => bindActionCreators({ ...mycompActions }, dispatch)
//   )( mycomp );