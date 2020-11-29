import {SVGTextRenderingApp} from "./SVGTextRenderingApp";

((): void => {
    const app: SVGTextRenderingApp = new SVGTextRenderingApp();


    const textInput = document.getElementById('textInput');
    if (textInput) {
      textInput.oninput = (): void => {
        if (textInput as HTMLInputElement) {
          app.drawText((textInput as HTMLInputElement).value);
        }
      };
    }
})();
