class GameOver {
	constructor() {

	}

	draw() {
		button = new Button("Restart", width/2, height/2);
		this._backgroundImage();
		this._text();
		this._button();
		noLoop();
	}
	
	_backgroundImage() {
		imageMode(CENTER);
		image(imageGameOver, width / 2, height / 3);
		imageJorgeBate = createImg("imagens/personagem/JorgeBate.gif");
		imageJorgeBate.size(100,150)
		imageJorgeBate.position(width/4, height/5 * 3);
	}

	_text() {
		textFont(fontStart);
		textAlign(CENTER);
		textSize(50);
		fill(200, 200, 200);
		text("Os jovens cansaram o Jorge", width / 2, height / 4);
	}

	_button() {
		button.y = height / 5 * 3
		button.draw();
	}
}