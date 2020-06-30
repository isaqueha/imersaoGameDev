class Live {
	constructor(total, initial) {
		this.total = total;
		this.initial = initial;
		this.currentLives = this.initial;
		this.inputWidth = 25;
		this.inputHeight = 25;
		this.initialX = 20;
		this.y = 20;
	}

	draw() {
		for(let i = 0; i < this.currentLives; i++) {
			const margin = i * 10;
			const position = this.initialX * (i + 1);
			image(imageLive, position + margin, this.y, this.inputWidth, this.inputHeight);
		}
	}

	gainLive() {
		if(this.currentLives <= this.total) {
			this.currentLives++;
		}
	}

	loseLive() {
		this.currentLives--;
	}

}