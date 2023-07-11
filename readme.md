Prova tècnica
Aplica TypeScript i testing a la prova tècnica.

Treballa l'exercici de forma incremental i àgil. Utilitza git i GitHub per tal que puguis registrar els canvis i les noves funcionalitats que vagis afegint.

SCORE KEEPER
Necessitem un programari per enviar les dades adequades al marcador d'un equip de bàsquet. Desafortunadament, les persones que usen el nostre programari no són els llums més brillants sota el sol, per la qual cosa necessiten sis botons (cada equip pot anotar 1, 2 o 3 punts amb una sola tirada).

⛹️‍♀️ Player

getName(): Aquesta funció retorna el nom del jugador.

🏀 Team

getPlayers(): Aquesta funció retorna el llistat dels jugadors que conformen l'equip.

🧮 ScoreKeeper

scoreTeamA1(): Aquesta funció anota 1 punt per a l'equip A  amb el nom del jugador.
 amb el nom del jugador
scoreTeamA2(): Aquesta funció anota 2 punts per a l'equip A amb el nom del jugador.
 amb el nom del jugador
scoreTeamA3(): Aquesta funció anota 3 punts per a l'equip A amb el nom del jugador.
 amb el nom del jugador
scoreTeamB1(): Aquesta funció anota 1 punt per a l'equip B  amb el nom del jugador.
 amb el nom del jugador
scoreTeamB2(): Aquesta funció anota 2 punts per a l'equip B amb el nom del jugador .
 amb el nom del jugador
scoreTeamB3(): Aquesta funció anota 3 punts per a l'equip B amb el nom del jugador .

getScore(): Aquesta funció retorna la puntuació actual en el format "000:000" amb els noms del jugadors que han anotat el punt.

📐 Regles de puntuació

Consta de set caràcters.

El format del string és "000:000", on els primers tres caràcters representen la puntuació de l'equip A i els últims tres caràcters representen la puntuació de l'equip B.

Cada caràcter en el string representa un dígit decimal (0-9) i no s'utilitzen espais ni caràcters especials.

🏁 Game

getShot(): aquesta funció serà una promise on es realitzarà de forma aleatòria un tir de x punts a un dels dos equips. El tir tindrà un delay de 2 segons.

play(): aquesta funció iniciarà la partida i farà la crida a getShot 10 vegades. Un cop acabi la partida, retornarà el marcador final.



Per inicialitzar el programa aplicar la comanda npm -i per instalar les dependencies.

executar server.ts amb npx ts-node server.ts 

servidor corrent a la ruta localhost:3000