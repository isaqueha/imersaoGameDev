class Character extends Animation { 
  constructor(image, x, yDiff, newWidth, newHeight, spriteWidth, spriteHeight, rows, columns) {
    super(image, x, yDiff, newWidth, newHeight, spriteWidth, spriteHeight, rows, columns);
    
    this.yDiff = yDiff;
    this.initialY = height - this.newHeight - this.yDiff;
    this.y = this.initialY; 
    this.jumpSpeed = 0;
    this.gravityValue = 3;
    this.jumps = 0;
    this.maxJumps = 2;
    this.jumpHeight = -30;

    this.invencible = false;
  }

  jump() {
    this.jumps = this.jumps + 1;
    if (this.jumps <= this.maxJumps) {
      this.jumpSpeed = this.jumpHeight;
    }
  }

  gravity() {
    this.y = this.y + this.jumpSpeed;
    this.jumpSpeed = this.jumpSpeed + this.gravityValue;

    if (this.y > this.initialY) {
      this.y = this.initialY;
      this.jumps = 0;
    }
  }

  isColliding(enemy) {
    if(this.invencible) {
      return false;
    }
    const precision = 0.85;
    
    // Check boxes
    // noFill()
    // rect()
    // rect()

    return collideRectRect(this.x, this.y, this.newWidth * precision, this.newHeight * precision, enemy.x, enemy.y, enemy.newWidth * precision, enemy.newHeight * precision);
  }

  makeInvencible() {
    this.invencible = true;
    setTimeout(() => {
      this.invencible = false;
    }, 1000)
  }
}