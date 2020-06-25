class Animation {
	constructor(image, x, yDiff, width, newHeight, spriteWidth, spriteHeight, rows, columns) {
		this.image = image;
		this.width = width;
		this.height = newHeight;
		this.x = x;
		this.yDiff = yDiff;
		this.y = height - this.height - this.yDiff;
		this.spriteWidth = spriteWidth;
		this.spriteHeight = spriteHeight;
		this.imageRows = rows;
    this.imageColumns = columns;
		
		this.currentFrame = 0;
	}	
  
  draw() {
    const currentX = this.currentFrame % this.imageColumns * this.spriteWidth;
		let currentY = Math.floor(this.currentFrame / this.imageColumns) * this.spriteHeight;
		// Droppy;
		currentY -= (Math.floor(this.currentFrame / (this.imageColumns * this.imageColumns))) * 13;

    image(this.image, this.x, this.y, this.width, this.height, currentX , currentY, this.spriteWidth, this.spriteHeight);
    
    this.animate();
	}
	
	animate() {
    this.currentFrame++;
    if(this.currentFrame >= (this.imageRows * this.imageColumns)) {
      this.currentFrame = 0;
    }
  }
}