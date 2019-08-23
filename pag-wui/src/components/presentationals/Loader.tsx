import React from 'react';
import { ClipLoader } from 'react-spinners';

interface ILoaderProps {
  size?: number;
}

const Loader: React.SFC<ILoaderProps> = ({
  size
}) => (
  <ClipLoader
    size={size || 35}
    color='#2590dc'
  />
);

export default Loader;
