import * as d3 from 'd3-selection';

export class SVGTextRenderingApp {

  constructor() {
    const input = document.createElement('input');
    input.id = 'textInput';
    input.name = 'textInput';
    input.type = "text";
    input.oninput = (): void => {
      const input = document.getElementById('textInput') as HTMLInputElement;
      if (input) {
        this.drawText(input.value);
      }
    };

    const label = document.createElement("label");
    label.setAttribute("for", 'textInput');
    label.innerHTML = "Text input: ";

    // createElement does not work. It will create a normal html element called svg.
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '400');
    svg.setAttribute('height', '100');
    svg.setAttribute('style', 'border-style: solid;');

    document.body.appendChild(label);
    document.body.appendChild(input);
    document.body.appendChild(document.createElement("br"));
    document.body.appendChild(svg);
  }

  public drawText(input: string): void {
    const svg = d3.select('svg');

    const textUpdate = svg.selectAll("text")
      .data([input]);

    const textEnter = textUpdate.enter()
      .append('text');

    textUpdate.merge(textEnter)
      .attr("fill", 'blue')
      .text(d => d)
      .attr("y", 20);

    textUpdate.exit().remove();
  }
}
