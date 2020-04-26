import React from "react";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.props.dispatchState({
      type: "SET_ERROR",
      payload: { status: false, type: "" },
    });
  }

  componentDidCatch(error, info) {
    this.props.dispatchState({
      type: "SET_ERROR",
      payload: { status: true, type: info },
    });
  }

  render() {
    if (this.props.state.error.status) {
      return <h1>죄송합니다. 문제가 있어 초기화면으로 돌아갑니다.</h1>;
    }
    const Component = this.props.children;
    return <Component {...this.props} />;
  }
}
export default ErrorBoundary;
