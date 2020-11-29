import * as d3 from 'd3-selection';

export class SVGTextRenderingApp {

    public drawText(rawInputText: string): void {
        const textRows: Array<string> = SVGTextRenderingApp.splitByBrTag(rawInputText);

        const svg = d3.select('svg');

        const texts = svg.selectAll('text')
            .data([rawInputText])
            .join('text')
            .attr('transform', 'translate(0, 20)')
            .attr('fill', 'DarkSlateGray');

        texts
            .selectAll('tspan')
            .data(textRows)
            .join('tspan')
            .attr('x', 0)
            .attr('y', (d, i) => i * 20)
            .text(d => d);
    }

    private static splitByBrTag(rawInputText: string): Array<string> {
        return rawInputText.split('<br/>');
    }
}
