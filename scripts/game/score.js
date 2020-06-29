class Score {
	constructor() {
		this.score = 0;
	}

	draw() {
		textAlign(RIGHT)
		fill('#fff');
		textSize(50);
		text("Distancia:", width - 30, 50);
		fill('#f77');
		text(parseInt(this.score) + " m", width - 30, 100);
	}

	addScore() {
		this.score = this.score + 0.2;
	}
}