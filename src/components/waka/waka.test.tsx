import React from 'react';
import ReactDOM from 'react-dom';
import Waka from './Waka';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Waka />, div);
  ReactDOM.unmountComponentAtNode(div);
});
