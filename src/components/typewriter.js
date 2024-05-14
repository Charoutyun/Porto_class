import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

function Typewriters_br({ text1, text2 }) {
  return (
    <div className="typewriters">
       <h1 style={{ whiteSpace: 'pre-wrap' }}>
        <Typewriter
          words={[`${text1}\n${text2}`]}
          loop={1}
          cursor
          cursorStyle='_'
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
    </div>
  );
}




function Typewriters({ text1, text2 }) {
  return (
    <div className="typewriters">
       <h1>
       <Typewriter
       words={[`${text1}`]}
       loop={1}
       cursor
       cursorStyle='_'
       typeSpeed={80}
       deleteSpeed={50}
       delaySpeed={1000}
     />
     </h1>
    </div>
  );
}

export { Typewriters, Typewriters_br };