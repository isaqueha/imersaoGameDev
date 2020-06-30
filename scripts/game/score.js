class Score {
	constructor() {
		this.score = 0;
	}

	draw() {
		textAlign(RIGHT)
		fill('#fff');
		textSize(50);
		text("Distancia:", width - 30, 50);
		fill('#f77');
		text(parseInt(this.score) + " m", width - 30, 100);
	}

	addScore() {
		this.score = this.score + 0.2;
	}

	saveScore() {
		let obj = { 
			table: []
		};
		obj.table.push({id: 1, score});
		let json = JSON.stringify(obj);
		// fs.writeFile('myjsonfile.json', json, 'utf8', callback);
	}
}