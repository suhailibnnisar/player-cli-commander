const { program } = require('commander');

program
  .command('add')
  .description('Add player to players list')
  .action(() => {
    console.log('Adding Player to players list.');
  })
  .parse(process.argv);
