import { Player } from "../Player/Player";
import { ScoreMain } from "../ScoreKeeper/ScoreMain";

export class Game {
	scoreMain: ScoreMain;

	constructor() {
		this.scoreMain = new ScoreMain();
	}

	async getShot(): Promise<string> {
		return new Promise<string>((resolve) => {
			setTimeout(() => {
				const randomPoints = Math.floor(Math.random() * 3) + 1;
				const randomTeam = Math.random() < 0.5 ? "teamA" : "teamB";

				const playerName: Player = this.getRandomPlayerName(randomTeam);
				if (randomTeam === "teamA") {
					switch (randomPoints) {
						case 1:
							this.scoreMain.scoreTeamA1(playerName);
							break;
						case 2:
							this.scoreMain.scoreTeamA2(playerName);
							break;
						case 3:
							this.scoreMain.scoreTeamA3(playerName);
							break;
					}
				} else {
					switch (randomPoints) {
						case 1:
							this.scoreMain.scoreTeamB1(playerName);
							break;
						case 2:
							this.scoreMain.scoreTeamB2(playerName);
							break;
						case 3:
							this.scoreMain.scoreTeamB3(playerName);
							break;
					}
				}

				const roundResult = `Team ${randomTeam} scored ${randomPoints} point(s) with ${playerName.getName()}`;
				console.log(roundResult);

				resolve(roundResult);
			}, 2000);
		});
	}

	async play(): Promise<string[]> {
		console.log("Game started.");

		const roundResults: string[] = [];
		const shotPromises: Promise<string>[] = [];
		for (let i = 0; i < 10; i++) {
			shotPromises.push(this.getShot());
		}

		return Promise.all(shotPromises).then((results) => {
			roundResults.push(...results);
			console.log("Game ended.");

			return roundResults;
		});
	}

	private getRandomPlayerName(team: string): Player {
		const players =
			team === "teamA" ? this.scoreMain.teamA.getTeam() : this.scoreMain.teamB.getTeam();
		const randomIndex = Math.floor(Math.random() * players.length);

		return players[randomIndex];
	}
}
