import express, { Request, Response } from "express";

import { Game } from "../backend/Game/Game";

const app = express();
const port = 3000;

let teamAScore = 0;
let teamBScore = 0;

app.use(express.static("public"));

app.get("/score", (req: Request, res: Response) => {
	const { team, points } = req.query;

	if (team === "teamA") {
		teamAScore += parseInt(points as string, 10);
	} else if (team === "teamB") {
		teamBScore += parseInt(points as string, 10);
	}

	const updatedScores = {
		teamA: { score: teamAScore },
		teamB: { score: teamBScore },
	};

	res.json(updatedScores);
});

app.get("/play", (req: Request, res: Response) => {
	const game = new Game();
	game
		.play()
		.then((results: string[]) => {
			updateScore(results); // Update the score based on the game results
			res.json(results);
		})
		.catch((error: any) => {
			console.error("Error:", error);
			res.status(500).send("An error occurred during the game.");
		});
});

app.get("/reset", (req: Request, res: Response) => {
	teamAScore = 0;
	teamBScore = 0;

	const updatedScores = {
		teamA: { score: teamAScore },
		teamB: { score: teamBScore },
	};

	res.json(updatedScores);
});

function updateScore(results: string[]) {
	results.forEach((result) => {
		const match = result.match(/\d+/);
		if (match) {
			const points = parseInt(match[0], 10);
			const teamName = result.split(" scored ")[0].trim();

			if (teamName === "Team teamA") {
				teamAScore += points;
			} else if (teamName === "Team teamB") {
				teamBScore += points;
			}
		}
	});
}

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
