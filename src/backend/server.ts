import express, { Request, Response } from "express";

import { Game } from "../backend/Game/Game";

const app = express();
const port = 3000;

interface Score {
	teamA: {
		score: number;
	};
	teamB: {
		score: number;
	};
}

const score: Score = {
	teamA: {
		score: 0,
	},
	teamB: {
		score: 0,
	},
};

app.use(express.static("public"));

app.get("/score", (req: Request, res: Response) => {
	const { team, points } = req.query;

	if (team === "teamA") {
		score.teamA.score += parseInt(points as string, 10);
	} else if (team === "teamB") {
		score.teamB.score += parseInt(points as string, 10);
	}

	res.json(score);
});

app.get("/play", (req: Request, res: Response) => {
	const game = new Game();
	game
		.play()
		.then((results: string[]) => {
			res.json(results);
		})
		.catch((error: any) => {
			console.error("Error:", error);
			res.status(500).send("An error occurred during the game.");
		});
});

app.get("/reset", (req: Request, res: Response) => {
	score.teamA.score = 0;
	score.teamB.score = 0;

	res.json(score);
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
