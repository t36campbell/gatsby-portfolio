import React from 'react';
import ReactDOM from 'react-dom';
import Seo from './Seo';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Seo />, div);
  ReactDOM.unmountComponentAtNode(div);
});
