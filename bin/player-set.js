const { program } = require('commander');
const { Player } = require('../commands/Set');

const player = new Player();

program
  .command('add')
  .description('Add player to players list')
  .action(player.add);

program
  .command('remove')
  .description('Remove Player from players list.')
  .action(player.remove);

program.parse(process.argv);
