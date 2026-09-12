import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = { hasError: false };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-surface px-6 text-fg">
          <div className="max-w-md">
            <p className="eyebrow eyebrow-accent">Error</p>
            <h1 className="display-md mt-4">Something went wrong.</h1>
            <p className="mt-3 text-fg-muted">Reload the page, or write to quest@edknovate.com if it keeps happening.</p>
            <button type="button" onClick={() => window.location.reload()} className="btn btn-primary mt-6">
              Reload
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
