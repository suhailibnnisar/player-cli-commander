const iq = require('inquirer');
const c = require('colors');
const { players } = require('../data/players');

class Player {
  async add() {
    console.log('Adding player');
  }
  async remove() {
    console.log(`Total Player: ${players.length}`);

    players.forEach((player, index) => console.log(index, player));

    const { player } = await iq.prompt({
      type: 'number',
      name: 'player',
      message: 'Enter the S.N for player to remove'.cyan,
    });

    console.log('--------------------');

    players.splice(player, 1);

    players.forEach((player, index) => console.log(index, player));
  }
}

module.exports = {
  Player,
};
