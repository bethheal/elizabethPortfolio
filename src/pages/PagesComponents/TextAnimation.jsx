import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const TextAnimation = () => {
  return (
    <div style={{ fontSize: '2em' }}>
      I am
      <TypeAnimation
        className="italic text-orange-600"
        sequence={[
          ' Elizabeth Dowuona',
          1000,
          ' a Frontend Developer',
          1000,
          ' a Backend Developer',
          1000,
        ]}
        speed={50}
        repeat={Infinity}
      />
    </div>
  );
};

export default TextAnimation;
