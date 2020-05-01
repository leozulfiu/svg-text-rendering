import * as d3 from 'd3-selection';

const component = (): HTMLElement => {
  const element = document.createElement('div');

  element.innerHTML = 'Hello' + ' webpack';

  return element;
};

document.body.appendChild(component());

d3.selectAll('div')
  .style('color', '#a1de1c');
