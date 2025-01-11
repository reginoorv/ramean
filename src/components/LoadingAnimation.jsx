import React from 'react';

const LoadingAnimation = () => (
  <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
    <div className="flex space-x-2">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="w-4 h-4 bg-blue-600 rounded-full animate-bounce"
          style={{ animationDelay: `${i * 0.2}s` }}
        />
      ))}
    </div>
  </div>
);

export default LoadingAnimation;