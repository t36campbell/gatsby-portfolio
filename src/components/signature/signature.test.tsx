import React from 'react';
import ReactDOM from 'react-dom';
import Signature from './Signature';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Signature />, div);
  ReactDOM.unmountComponentAtNode(div);
});
