import * as d3 from 'd3-selection';

export class SVGTextRenderingApp {

    public drawText(rawInputText: string): void {
        const textRows: Array<string> = SVGTextRenderingApp.splitByBrTag(rawInputText);

        const svg = d3.select('svg');

        const texts = svg.selectAll('.svg-text')
            .data([rawInputText])
            .join(enter => enter.append('text')
                .classed('svg-text', true))
            .attr('transform', 'translate(0, 20)');

        texts
            .selectAll('.row')
            .data(textRows)
            .join(enter => enter.append('tspan')
                .classed('row', true))
            .attr('x', 0)
            .attr('y', (d, i) => i * 20)
            .text(d => d);
    }

    private static splitByBrTag(rawInputText: string): Array<string> {
        return rawInputText.split('<br/>');
    }
}
