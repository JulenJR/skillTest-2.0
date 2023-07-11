import { Player } from "../Player/Player";
import { Team } from "../Team/Team";

export class ScoreMain {
	teamA: Team = new Team();
	teamB: Team = new Team();

	constructor() {
		const team1Players: Player[] = [
			new Player("John Smith"),
			new Player("Michael Johnson"),
			new Player("Emily Davis"),
			new Player("David Anderson"),
			new Player("Sarah Thompson"),
		];

		const team2Players: Player[] = [
			new Player("Robert Wilson"),
			new Player("Jessica Martinez"),
			new Player("Daniel Taylor"),
			new Player("Olivia Brown"),
			new Player("Christopher Lee"),
		];

		this.teamA.name = "teamA";
		this.teamA.players = team1Players;

		this.teamB.name = "teamB";
		this.teamB.players = team2Players;
	}

	scoreTeamA1(playerName: Player): void {
		this.teamA.score += 1;
		this.teamA.lastScorePlayer = playerName;
	}

	scoreTeamA2(playerName: Player): void {
		this.teamA.score += 2;
		this.teamA.lastScorePlayer = playerName;
	}

	scoreTeamA3(playerName: Player): void {
		this.teamA.score += 3;
		this.teamA.lastScorePlayer = playerName;
	}

	scoreTeamB1(playerName: Player): void {
		this.teamB.score += 1;
		this.teamB.lastScorePlayer = playerName;
	}

	scoreTeamB2(playerName: Player): void {
		this.teamB.score += 2;
		this.teamB.lastScorePlayer = playerName;
	}

	scoreTeamB3(playerName: Player): void {
		this.teamB.score += 3;
		this.teamB.lastScorePlayer = playerName;
	}

	getScore(): string {
		const teamAScore = this.teamA.score.toString().padStart(3, "0");
		const teamBScore = this.teamB.score.toString().padStart(3, "0");

		const teamAPlayer = this.teamA.lastScorePlayer.getName() || "Unknown";
		const teamBPlayer = this.teamB.lastScorePlayer.getName() || "Unknown";

		return `${teamAScore}:${teamBScore}     (${teamAPlayer} - ${teamBPlayer})`;
	}
}
