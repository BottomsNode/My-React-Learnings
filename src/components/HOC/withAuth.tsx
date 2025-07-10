import React, { type JSX } from "react";

const isAuthenticated = () => {
    // localStorage.setItem("token", "abc123");
    return Boolean(localStorage.getItem("token"));
};

export function withAuth<T extends JSX.IntrinsicAttributes>(WrappedComponent: React.ComponentType<T>) {
    return (props: T) => {
        if (!isAuthenticated()) {
            return (
                <div className="p-4 bg-red-100 text-red-700 rounded text-center">
                    You must be logged in to view this page.
                </div>
            );
        }
        return <WrappedComponent {...props} />;
    };
}
