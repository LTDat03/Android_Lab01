// Data Structures, Modern Operators and Strings


// Coding Challenge #1

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

players1 = [...game.players[0]]
players2 = [...game.players[1]]

const gk = players1[0];
const fieldPlayers = players1.slice(1);

const allPlayers = [...players1, ...players2];

const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

const { team1, x: draw, team2 } = game.odds;

function printGoals(...players){
  console.log(`${players.length} goals were scored by: ${players.join(', ')}`);
}

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

const likelyWinner = team1 < team2 && game.team1 || game.team2;
console.log(`The team more likely to win is: ${likelyWinner}`);

// Coding Challenge #2

console.log('Coding Challenge #2');

for (const [i, player] of game.scored.entries()){
  console.log(`Goal ${i + 1}: ${player}`);
}

const odds = Object.values(game.odds);
let averageOdd = 0;

for (const odd of odds) {
  averageOdd += odd;
}
averageOdd /= odds.length;
console.log(`Average odd: ${averageOdd}`);

for (const [team,odd] of Object.entries(game.odds)){
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

scorers = {};

for (player of game.scored){
  scorers[player] ? scorers[player]++ : scorers[player] = 1;
}

console.log(scorers);