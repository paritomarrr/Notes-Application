const fs = require('fs')
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')
const { string } = require('yargs')


yargs.command ({
    command: 'add',
    description: 'Adding a new note',
    builder: {
       title: {
           description: 'Add a note!',
           demandOption: true, //making it compulsory to provide a title to the note
           type: 'string' //note should always be a string data type
       },
       body: {
           description: 'Adding body to the note',
           demandOption: true,
           type: 'string'
       }
    },
    handler(argv) {
        notes.addNotes(argv.title, argv.body)
    }
})

yargs.command ({
    command: 'remove',
    description: 'Remove the note',
    builder: {
        title: {
            description: 'Removing a note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    description: 'List the notes',
    handler() {
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    description: 'Read the notes',
    builder: {
        title: {
            description: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNotes(argv.title)
    }
})



yargs.parse()