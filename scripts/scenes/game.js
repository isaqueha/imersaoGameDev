class Game {
	constructor() {
		this.currentEnemy = 0;
	}

	setup() {
		scenario = new Scenario(imageScenario, 2);
		character = new Character(imageCharacter, 0, 30, 220, 270, 220, 270, 4, 4);
	
		score = new Score();
		
		const enemy = new Enemy(imageEnemy, width - 50, 30, 100, 100, 105, 104, 7, 4, 10, 200);
		const enemyTroll = new Enemy(imageEnemyTroll, width - 50, 0, 200, 200, 400, 400, 5, 5, 10, 1500)
		const enemyFlying = new Enemy(imageEnemyFlying, width - 50, 200, 150, 100, 200, 150, 5, 3, 10, 2500);
	
		enemies.push(enemy);
		enemies.push(enemyTroll);
		enemies.push(enemyFlying);
	
		scenario1 = new Scenario(imageScenario1, 0.8);
		scenario2 = new Scenario(imageScenario2, 1);
		scenario3 = new Scenario(imageScenario3, 1.5);
		scenario4 = new Scenario(imageScenario4, 2);
		scenario5 = new Scenario(imageScenario5, 4);
	}

	keyPressed(key) {
		if (key === 'ArrowUp') {
			character.jump();
			jumpSound.play();
		} else if (key === 'r') {
			enemy = new Enemy(imageEnemy, width - 50, 30, 52, 52, 105, 104, 7, 4, 10, 100);
			loop();
		}
	}

	draw() {
		// OPTION 1
		// scenario.draw();
		// scenario.move();

		// OPTION 2

		scenario1.draw();
		scenario2.draw();
		scenario3.draw();
		scenario4.draw();
		scenario5.draw();
		
		scenario1.move();
		scenario2.move();
		scenario3.move();
		scenario4.move();
		scenario5.move();
	
		score.draw();
		score.addScore();
	
		character.draw();
		character.gravity();
	
		const enemy = enemies[this.currentEnemy];
		const isEnemyDone = enemy.x < - enemy.width;
	
		enemy.draw();
		enemy.move();
	
		if (isEnemyDone) {
			this.currentEnemy++;
			if (this.currentEnemy > 2) {
				this.currentEnemy = 0;
			}
			enemy.velocity = parseInt(random(5,30));
		}
	
		if (character.isColliding(enemy)) {
			image(imageGameOver, width/2 - 200, height/3);
			textSize(32);
			fill(200, 200, 200);
			text('The enemy got you', 150, 250);
			// noLoop(); 
		}
	
	
	
		// imageRunGif.size(46,68)
		// imageRunGif.position(50, height - 100);
	}
}