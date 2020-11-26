import * as d3 from 'd3-selection';

export class SVGTextRenderingApp {

  public drawText(input: string): void {
    const svg = d3.select('svg');

    const textUpdate = svg.selectAll("text")
      .data([input])
      .join(("text"))
      .attr("fill", "gray")
      .text(d => d)
      .attr("y", 20);
  }
}
