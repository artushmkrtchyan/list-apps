import React from 'react';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: {}, errorInfo: {} };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ errorInfo });
    }

    render() {
        const { error, errorInfo, hasError } = this.state;
        if (hasError) {
            if (process.env.NODE_ENV === 'development') {
                return (
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {error && error.toString()}
                        <br />
                        {errorInfo.componentStack}
                    </details>
                );
            }
            return <div className="error-text">Oops! Please refresh the page or contact Customer Service if the error persists</div>;
        }

        return this.props.children;
    }
};
