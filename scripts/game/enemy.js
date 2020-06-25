class Enemy extends Animation {
	constructor(image, x, yDiff, width, height, spriteWidth, spriteHeight, rows, columns, velocity, delay) {
		super(image, x, yDiff, width, height, spriteWidth, spriteHeight, rows, columns);

		this.velocity = velocity;
		this.delay = delay;
		this.x = width + this.delay;
	}

	move() {
		this.x = this.x - this.velocity;

		if (this.x < -this.width - this.delay) {
			this.x = width;
		}
	}
}