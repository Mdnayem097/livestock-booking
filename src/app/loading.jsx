import React from "react";

const Loading = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-3 text-green-600 font-semibold">
            Loading...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
