class Animation {
	constructor(image, x, yDiff, newWidth, newHeight, spriteWidth, spriteHeight, rows, columns) {
		this.image = image;
		this.newWidth = newWidth;
		this.newHeight = newHeight;
		this.x = x;
		this.yDiff = yDiff;
		this.y = height - this.newHeight - this.yDiff;
		this.spriteWidth = spriteWidth;
		this.spriteHeight = spriteHeight;
		this.imageRows = rows;
    this.imageColumns = columns;
		
		this.currentFrame = 0;
	}	
  
  draw() {
		const currentX = this.currentFrame % this.imageColumns * this.spriteWidth;
		let currentY = Math.floor(this.currentFrame / this.imageColumns) * this.spriteHeight;
		// For Droppy;
		currentY -= (Math.floor(this.currentFrame / (this.imageColumns * this.imageColumns))) * 13;

    image(this.image, this.x, this.y, this.newWidth, this.newHeight, currentX , currentY, this.spriteWidth, this.spriteHeight);
    
    this.animate();
	}
	
	animate() {
    this.currentFrame++;
    if(this.currentFrame >= (this.imageRows * this.imageColumns)) {
      this.currentFrame = 0;
    }
  }
}