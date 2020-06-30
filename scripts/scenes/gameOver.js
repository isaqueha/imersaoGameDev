class GameOver {
	constructor() {
		this.button = new Button("Restart", width/2, height/2, 'start');
		imageJorgeBate = createImg("imagens/personagem/JorgeBate.gif");
		imageJorgeBate.size(100,150)
		imageJorgeBate.position(width/4, height/5 * 3);
		imageJorgeBate.hide();
	}

	draw() {
		this._backgroundImage();
		this._text();
		this._button();
	}
	
	_backgroundImage() {
		// imageMode(CENTER);
		imageJorgeBate.show();
		image(imageGameOver, width / 2, height / 3);		
	}

	_text() {
		textFont(fontStart);
		textAlign(CENTER);
		textSize(50);
		fill(200, 200, 200);
		text("Os jovens cansaram o Jorge", width / 2, height / 4);
	}

	_button() {
		this.button.y = height / 5 * 3
		this.button.draw();
	}
}