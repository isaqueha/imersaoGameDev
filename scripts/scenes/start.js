class Start {
	constructor() {
		this.button = new Button("Start", width/2, height/2, 'game');
	}

	setup() {
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
	}

	_button() {
		this.button.y = height / 5 * 3;
		this.button.draw();
	}
}