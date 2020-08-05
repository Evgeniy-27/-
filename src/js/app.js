import Person from './person';
import Team from './team';

const player1 = new Person({
  name: 'Петя',
  type: 'Человек',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
});

const player2 = new Person({
  name: 'Лучник',
  type: 'Стрелок',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
});

const player3 = new Person({
  name: 'Мечник',
  type: 'Рыцарь',
  health: 100,
  level: 1,
  attack: 60,
  defence: 60,
});

const newTeam = new Team();

newTeam.add(player1);
newTeam.add(player2);
newTeam.add(player3);

for (const player of newTeam) {
  console.log(player);
}