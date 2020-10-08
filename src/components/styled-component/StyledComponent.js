import React, { Component } from "react";
import {Container} from './StyledComponent.styled';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as styledComponentActions from "../../store/styledComponent/actions";
export default class StyledComponent extends Component {
  render() {
    return <Container>StyledComponent</Container>;
  }
}
// export default connect(
//     ({ styledComponent }) => ({ ...styledComponent }),
//     dispatch => bindActionCreators({ ...styledComponentActions }, dispatch)
//   )( styledComponent );