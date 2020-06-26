class Start {
	constructor() {

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
		textSize(50);
		text("Corrida do", width / 2, height / 6);
		textSize(150);
		text("Jorge", width / 2, height / 2);
	}

	_button() {
		button.y = height / 5 * 3
		button.draw();
	}
}