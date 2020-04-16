// const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

yargs.version('1.1.0')

//Create Add Command
yargs.command({
    command : 'add',
    describe : 'Adding a note',
    builder: {
        title : {
            describe : 'Note Title',
            demandOption : true,
            type : 'string'
        },
        body : {
            describe : 'Note Body',
            demandOption : true,
            type : 'string'
        }

    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

//Create Remove Command
yargs.command({
    command : 'remove',
    describe : 'Remove a note',
    builder:{
        title : {
            describe : 'Note Title',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
        notes.removeNOte(argv.title)
    }
})

//Create List Command
yargs.command({
    command : 'list',
    describe : 'List all the notes',
    handler(){
        notes.listNotes()
    }
})

//Create Read Command
yargs.command({
    command : 'read',
    describe : 'Read a note',
    builder:{
        title : {
            describe : 'Note Title',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.parse()