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

// Coding Challenge #3

console.log('Coding Challenge #3');

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
  ]);

const events = {...new Set(gameEvents.values())};


gameEvents.delete(64);
console.log(gameEvents);

const time = [...gameEvents.keys()].pop();
console.log(`An event happened, on average, every ${time / gameEvents.size} minutes`);

for ([min, event] of gameEvents){
  console.log(`[${min <= 45 ? 'FIRST HALF' : 'SECOND HALF'}] ${min}: ${event}`);
}

// Coding Challenge #4

console.log('Coding Challenge #4');

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('br'));
document.body.append(document.createElement('button'));

const button = document.querySelector('button');
button.textContent = 'Click to convert';

button.addEventListener('click', function(){
  const textInput = document.querySelector('textarea').value;
  const rows = textInput.split('\n');
  for (const [i, row] of rows.entries()){
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});

