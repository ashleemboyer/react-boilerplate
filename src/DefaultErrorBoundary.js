import React from 'react';

export default class DefaultErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isError: false };
  }

  static getDerivedStateFromError() {
    return { isError: true };
  }

  render() {
    const { isError } = this.state;
    const { children } = this.props;

    if (isError) {
      return <div>Error!</div>;
    }

    return children;
  }
}
