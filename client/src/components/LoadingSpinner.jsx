import React from 'react';

const Spinner = () => {
  return (
    <div className="text-center m-3 mt-5 pt-5">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;