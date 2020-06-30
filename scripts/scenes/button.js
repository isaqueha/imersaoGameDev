class Button {
	constructor(text, x, y, nextScene) {
		this.text = text;
		this.x = x;
		this.y = y;
		this.nextScene = nextScene;
		this.button = createButton(this.text);
		this.button.mousePressed(() => this._changeScene());
		this.button.touchStarted(() => this._changeScene());
		this.button.addClass('botao-tela-inicial');
		this.button.hide();
	}

	draw() {
		this.button.show();
		this.button.position(this.x, this.y);
		this.button.center('horizontal');
	}

	_changeScene() {
		this.button.hide();
		currentScene = this.nextScene;
		scenes[currentScene].setup();
	}
}