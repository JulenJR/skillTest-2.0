import { Player } from "../Player/Player";

export class Team {
	name: string;
	players: Array<Player>;
	score: number;
	lastScorePlayer: Player;

	constructor() {
		this.name = "";
		this.players = [];
		this.score = 0;
		this.lastScorePlayer = new Player("");
	}

	addPlayer(player: Player): void {
		this.players.push(player);
	}

	getTeam(): Array<Player> {
		return this.players;
	}
}
