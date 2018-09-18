import React from 'react';
import { render } from 'react-dom';

const ce = React.createElement;

const MyTitle = function(props) {
  return ce('div', 'null', ce('h1', { style: { color: props.color } }, props.title));
};

const MyFirstComponent = function() {
  return ce(
    'div',
    { id: 'first-element' },
    ce(MyTitle, { title: 'Game of Thrones', color: '#660000' }),
    ce(MyTitle, { title: 'How i Met Your Mother', color: '#660000' }),
    ce(MyTitle, { title: 'Silicon Valley', color: '#660000' }),
    ce(MyTitle, { title: 'The Black List', color: '#660000' })
  );
};

render(ce(MyFirstComponent), document.getElementById('app'));
