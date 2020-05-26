import React from "react";

import Loader from "../Icons/Loader";

import { LoadingViewContainer } from "./styledComponents";

class LoadingView extends React.Component {
  render() {
    const { style } = this.props
    return (
      <LoadingViewContainer style={style}>
        <Loader />
      </LoadingViewContainer>
    );
  }
}

export default LoadingView;
