import { Fragment } from 'react';
import { StatusBar } from 'react-native';

import { Home } from './scr/Home';

export default function App() {
  return (
    <Fragment>
      <Home />
      <StatusBar barStyle='light-content'/>
    </Fragment>
  )
}
