import React from 'react';

type ImageProps = {
  src: string;
  alt: string;
  className?: string;
};

const Image: React.FC<ImageProps> = ({ src, alt, className }) => (
  <img src={src} alt={alt} className={`rounded ${className}`} />
);

export default Image;
