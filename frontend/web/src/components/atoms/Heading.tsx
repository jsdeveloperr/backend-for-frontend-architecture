import React from 'react';

type HeadingProps = {
  text: string;
  className?: string;
};

const Heading: React.FC<HeadingProps> = ({ text, className }) => (
  <h1 className={`text-2xl font-bold text-gray-800 ${className}`}>{text}</h1>
);

export default Heading;
