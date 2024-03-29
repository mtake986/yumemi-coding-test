import React, { ReactNode } from "react";

export class ErrorBoundary extends React.Component<
  { children: ReactNode },
  { hasError: boolean; error: Error }
> {
  state = { hasError: false, error: new Error() };
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return <div data-testid="error">{this.state.error.message}</div>;
    }
    return this.props.children;
  }
}
