class Enemy extends Animation {
	constructor(image, x, width, height, spriteWidth, spriteHeight, rows, columns) {
		super(image, x, width, height, spriteWidth, spriteHeight, rows, columns);

		this.velocity = 10;
	}

	move() {
		this.x = this.x - this.velocity;

		if (this.x < -this.width) {
			this.x = width;
		}
	}
}