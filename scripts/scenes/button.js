class Button {
	constructor(text, x, y) {
		this.text = text;
		this.x = x;
		this.y = y;
		this.button = createButton(this.text);
		this.button.mousePressed(() => this._changeScene());
		this.button.touchStarted(() => this._changeScene());
		this.button.addClass('botao-tela-inicial');
	}

	draw() {
		this.button.position(this.x, this.y);
		this.button.center('horizontal');
	}

	_changeScene() {
		this.button.remove();
		currentScene = 'game';
	}
}