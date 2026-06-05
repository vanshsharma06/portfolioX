import { Component } from 'react';
import { motion } from 'framer-motion';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-[80svh] items-center justify-center px-4">
          <motion.div
            className="glass-panel max-w-md p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-2xl font-black text-white">Something went wrong</h1>
            <p className="muted-copy mt-4">
              An unexpected error occurred while loading this section.
            </p>
            <button
              onClick={this.handleRetry}
              className="primary-button mt-6"
            >
              Try Again
            </button>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;