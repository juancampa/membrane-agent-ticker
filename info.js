const { dependencies, endpoints, environment, imports, schema } = program;

program.name = 'ticker';

// Imports
imports
  .add('coinmarketcap')
  .add('googlesheets')

// Dependencies
dependencies
  .add('currencies', 'coinmarketcap:CurrencyCollection', 'Currencies to keep an eye on')
  .add('sheet', 'googlesheets:Sheet', 'The sheet to put the data on')

schema.type('Root')
