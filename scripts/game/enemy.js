class Enemy extends Animation {
	constructor(image, x, yDiff, width, height, spriteWidth, spriteHeight, rows, columns, velocity) {
		super(image, x, yDiff, width, height, spriteWidth, spriteHeight, rows, columns);

		this.velocity = velocity;
		this.x = x;
	}

	move() {
		this.x = this.x - this.velocity;
	}

	respawn() {
		this.x = width;
	}
}