import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './Icon';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Icon />, div);
  ReactDOM.unmountComponentAtNode(div);
});
