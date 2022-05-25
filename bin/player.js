#!/usr/bin/env node

const { program } = require('commander');

program
  .version('1.0.0')
  .command('show', 'Show All Players')
  .command('set', 'Add or remove player from players list')
  .parse(process.argv);
