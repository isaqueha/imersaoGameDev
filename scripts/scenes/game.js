class Game {
	constructor() {
		this.map = map.map;
	}
	
	setup() {
		scenario = new Scenario(imageScenario, 2);
		character = new Character(imageCharacter, 0, 30, 147, 180, 220, 270, 4, 4);
		live = new Live(map.config.maxLives, map.config.initialLives);
		
		score = new Score();

		stroke(0, 0, 0);
		strokeWeight(3);
		
		this.enemyIndex = 0;
		this.enemyWave = 0;
		this.enemies = [];

		// const enemyFlying = new Enemy(imageEnemyFlying, width - 50, 75, 133, 100, 200, 150, 5, 3, 10);
		// const enemy = new Enemy(imageEnemy, width - 50, 30, 75, 75, 105, 104, 7, 4, 10);
		// const enemyTroll = new Enemy(imageEnemyTroll, width - 50, 0, 250, 250, 400, 400, 5, 5, 10)
		// this.enemies.push(enemy);
		// this.enemies.push(enemyTroll);
		// this.enemies.push(enemyFlying);
		
		const enemyMiguel = new Enemy(imageEnemyMiguel, width - 50, 75, 133, 100, 200, 150, 5, 3, 10);
		const enemyPedroTri = new Enemy(imageEnemyPedroTri, width - 50, 75, 133, 100, 200, 150, 5, 3, 10);
		const enemyYuri = new Enemy(imageEnemyYuri, width - 50, 75, 133, 100, 200, 150, 5, 3, 10);
		const enemyCarol = new Enemy(imageEnemyCarol, width - 50, 25, 75, 75, 105, 104, 7, 4, 10);
		const enemyMel = new Enemy(imageEnemyMel, width - 50, 25, 75, 75, 105, 104, 7, 4, 10);
		const enemyGabriel = new Enemy(imageEnemyGabriel, width - 50, -10, 250, 250, 400, 400, 5, 5, 10);
		const enemyMauro = new Enemy(imageEnemyMauro, width - 50, -10, 250, 250, 400, 400, 5, 5, 10);
		const enemyPedro = new Enemy(imageEnemyPedro, width - 50, -10, 250, 250, 400, 400, 5, 5, 10);
		
		this.enemies.push(enemyMiguel);
		this.enemies.push(enemyPedroTri);
		this.enemies.push(enemyYuri);
		this.enemies.push(enemyCarol);
		this.enemies.push(enemyMel);
		this.enemies.push(enemyGabriel);
		this.enemies.push(enemyMauro);
		this.enemies.push(enemyPedro);
	
		// scenario1 = new Scenario(imageScenario1, 0.8);
		// scenario2 = new Scenario(imageScenario2, 1);
		// scenario3 = new Scenario(imageScenario3, 1.5);
		// scenario4 = new Scenario(imageScenario4, 2);
		// scenario5 = new Scenario(imageScenario5, 4);
	}

	keyPressed(key) {
		if (key === 'ArrowUp') {
			character.jump();
			jumpSound.play();
		}
	}

	draw() {
		// OPTION 1
		scenario.draw();
		scenario.move();

		// OPTION 2

		// scenario1.draw();
		// scenario2.draw();
		// scenario3.draw();
		// scenario4.draw();
		// scenario5.draw();
		
		// scenario1.move();
		// scenario2.move();
		// scenario3.move();
		// scenario4.move();
		// scenario5.move();
		
		score.draw();
		score.addScore();
		
		character.draw();
		character.gravity();

		live.draw();

		const currentLine = this.map[this.enemyIndex];
		const enemy = this.enemies[currentLine.enemy];
		const isEnemyDone = enemy.x < - enemy.newWidth;
	
		enemy.velocity = currentLine.velocity + ((currentLine.velocity / 100) * 30) * this.enemyWave;
		enemy.draw();
		enemy.move();
		// console.log(enemy.x);
	
		if (isEnemyDone) {
			this.enemyIndex++;
			enemy.respawn();
			if (this.enemyIndex > this.map.length - 1) {
				this.enemyIndex = 0;
				this.enemyWave++;
			}
		}
		
		if (character.isColliding(enemy)) {
			live.loseLive();
			character.makeInvencible();
			damageSound.play();
			if(live.currentLives < 0) {
				currentScene = 'gameOver';
				scenes[currentScene].setup();
				score.saveScore();
			}
		}
	
	
	
		// imageRunGif.size(46,68)
		// imageRunGif.position(50, height - 100);
	}
}