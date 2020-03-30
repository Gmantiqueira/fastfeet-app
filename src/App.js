import React from 'react';
import {useSelector} from 'react-redux';

import Routes from './routes';

export default function() {
  const signed = useSelector(state => state.deliveryman.signed);

  return <Routes isSigned={signed} />;
}
