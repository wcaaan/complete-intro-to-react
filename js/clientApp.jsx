import React from 'react';
import ReactDOM from 'react-dom';

const ce = React.createElement;

const MyTitle = function(props) {
  return ce('div', 'null', ce('h1', { style: { color: props.color } }, props.title));
};

const MyFirstComponent = function() {
  return ce(
    'div',
    { id: 'first-element' },
    ce(MyTitle, { title: 'game of thrones', color: '#660000' }),
    ce(MyTitle, { title: 'how i met your mother', color: '#660000' }),
    ce(MyTitle, { title: 'silicon valley', color: '#660000' }),
    ce(MyTitle, { title: 'the big bang theory', color: '#660000' })
  );
};

ReactDOM.render(
  ce(MyFirstComponent), 
  document.getElementById('app')
);
