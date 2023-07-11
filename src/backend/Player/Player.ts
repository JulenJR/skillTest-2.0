export class Player {
	name = "";
	constructor(name: string) {
		this.name = name;
	}

	getName(): string {
		return this.name;
	}
}
