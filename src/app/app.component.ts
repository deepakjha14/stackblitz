import { Component, WritableSignal, signal, HostListener, afterRender, afterNextRender, ElementRef, AfterRenderPhase } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})
export class AppComponent {
	title = 'Stackblitz addition math test';
	randomNumber!: number;
	firstOps!: number;
	secondNumber!: any;
	@HostListener('window:keydown.enter', ['$event'])
	onEnter() {
		this.checkMaths();
	}

	gameState: WritableSignal<number> = signal(0);

	constructor(
		private el: ElementRef
	) {
		this.updateNewEquation();

		afterRender(() => {
			if (this.gameState()>0 && this.gameState()<6) {
				this.el.nativeElement.querySelector("#progressBar").style.width = `${this.gameState()*20}%`;
			} else if (this.gameState() > 5 ){
				this.gameState.update(val => 0);
				this.el.nativeElement.querySelector("#progressBar").style.width = `0%`;
			} else if (this.gameState() === 0) {
				this.el.nativeElement.querySelector("#progressBar").style.width = `0%`;
			}
		});

		afterNextRender(() => {
			const progBar = this.el.nativeElement.querySelector("#progressBar");
			const progBarResizeObs = new ResizeObserver(
				(entries) => {
					console.log(entries[0].contentRect.width, "resize observable");
				}
			);
			progBarResizeObs.observe(progBar);
		});
	}

	ngOnInit(): void {
	}

	updateNewEquation(): void {
		this.randomNumber = Math.floor(Math.random()*100);
		this.firstOps = Math.floor(Math.random()*50);
		this.secondNumber = "";
	}

	checkMaths(): void {
		let total = this.secondNumber + this.firstOps;
		if (total === this.randomNumber ) {
			this.gameState.update(val => val + 1);
		} else {
			this.gameState.update(val => 0);
		}
		this.updateNewEquation();
	}
}
