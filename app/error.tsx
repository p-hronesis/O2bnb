"use client";

interface ErrorStateProps {
  error: Error;
}

import React, { useEffect } from "react";
import EmptyState from "./components/EmptyState";

const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return <EmptyState title="Uh Oh!" subtitle="Something went wrong" />;
};

export default ErrorState;
