export class SVGTextRenderingApp {

  constructor() {
    const inputField = document.createElement('input');
    inputField.id = 'textInput';
    inputField.name = 'textInput';
    inputField.type = "text";
    inputField.oninput = (): void => {
      const input = document.getElementById('textInput') as HTMLInputElement;
      if (input) {
        this.drawText(input.value);
      }
    };

    const label = document.createElement("label");
    label.setAttribute("for", 'textInput');
    label.innerHTML = "Text input: ";

    document.body.appendChild(label);
    document.body.appendChild(inputField);
  }

  public drawText(input: string): void {
    console.log(input);
  }
}
