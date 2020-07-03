class Start {
	constructor() {
		this.button = new Button("Start", width/2, height/2, 'game');
	}

	setup() {
		stroke(0, 0, 0);
		strokeWeight(0);
	}

	draw() {
		this._backgroundImage();
		this._text();
		this._button();
	}
	
	_backgroundImage() {
		image(imageStart, 0, 0, width, height);
	}

	_text() {
		textFont(fontStart);
		textAlign(CENTER);
		fill(0, 0, 0);
		textSize(50);
		text("Corrida do", width / 2, height / 6);
		textSize(150);
		text("Jorge", width / 2, height / 2);
		fill(255, 255, 255);
		textSize(30);
		text("Pule 1 ou 2 vezes com tecla pra cima ou com touch na tela", width / 2, height / 6 * 5);
		textSize(25);
		text("No celular jogue com o aparelho deitado", width / 2, height / 6 * 5.5);
	}

	_button() {
		this.button.y = height / 5 * 3;
		this.button.draw();
	}
}