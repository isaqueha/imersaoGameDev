class Character extends Animation { 
  constructor(image, x, width, newHeight, spriteWidth, spriteHeight, rows, columns) {
    super(image, x, width, newHeight, spriteWidth, spriteHeight, rows, columns);
    
    this.initialY = height - this.height;
    this.y = this.initialY; 
    this.jumpSpeed = 0;
    this.gravityValue = 6;
  }

  jump() {
    this.jumpSpeed = -50;
  }

  gravity() {
    this.y = this.y + this.jumpSpeed;
    this.jumpSpeed = this.jumpSpeed + this.gravityValue;

    if (this.y > this.initialY) {
      this.y = this.initialY;
    }
  }

  isColliding(enemy) {
    const precision = 0.85;
    return collideRectRect(this.x, this.y, this.width * precision, this.height * precision, enemy.x, enemy.y, enemy.width * precision, enemy.height * precision);
  }
}