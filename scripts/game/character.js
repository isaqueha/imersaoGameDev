class Character { 
  constructor(image) {
    this.spriteWidth = 220;
    this.spriteHeight = 270;
    this.topPosition = height - this.spriteHeight;
    
    this.image = image;
    this.imageWidth = image.width;
    this.imageHeight = image.height;
    this.imageRows = 4;
    this.imageColumns = 4;
    this.spriteCutX = this.imageWidth / this.imageColumns;
    this.spriteCutY = this.imageHeight / this.imageRows;

    this.currentFrame = 0;
  }
  
  draw() {
    const currentX = this.currentFrame % this.imageColumns * this.spriteCutX;
    const currentY = Math.floor(this.currentFrame / this.imageRows) * this.spriteCutY;

    image(this.image, 0, this.topPosition, this.spriteWidth, this.spriteHeight, currentX , currentY, this.spriteCutX, this.spriteCutY);
    
    this.animate();
  }
  
  animate() {
    this.currentFrame++;    
    if(this.currentFrame >= (this.imageRows * this.imageColumns) - 1) {
      this.currentFrame = 0;      
    }
  }  
}