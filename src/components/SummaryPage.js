import React from 'react';
import { Typewriters_br } from './typewriter';
import 'bootstrap/dist/css/bootstrap.min.css';

const SummaryPage = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <Typewriters_br text1="Hello, my name is Haroutyun Chamelian." text2="Welcome to my portfolio" />
      </div>
    </div>
  );
};

export default SummaryPage;
