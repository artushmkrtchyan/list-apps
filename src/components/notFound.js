
import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="text-center not-found">
            <div>404</div>
            <Link to="/">
                ← Back to Home
            </Link>
        </div>
    );
};