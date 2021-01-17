const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your notes'
}

const addNotes =  (title, body) => {
  const notes = loadNotes()
  const duplicateNotes = notes.filter((note) => {
      note.title === title

  })
  const duplicateNote = notes.find((note) => note.title === title)
  if (!duplicateNote) {
     notes.push({
      title: title,
      body: body
  })
  saveNotes(notes)
   console.log('New note added!')
}
   else {
    console.log('Title already exist!!')
  }

}

const saveNotes = function (notes) {
   const dataJSON = JSON.stringify(notes)
   fs.writeFileSync('notes.json', dataJSON)

}
const loadNotes = function () {

    try {
         const dataBuffer = fs.readFileSync('notes.json')
         const dataJSON = dataBuffer.toString()
         return JSON.parse(dataJSON)
    } catch (e) {
         return []
    }
  
}
const removeNote = function (title) {
    const notes = loadNotes()
    const notesToKeep = notes.filter(function(note) {
       return note.title !== title
    })
    if (notes.length > notesToKeep.length){
        console.log(chalk.inverse.green('Note Removed'))
    } else {
        console.log(chalk.inverse.red('No note removed'))
    }
         saveNotes(notesToKeep)
         
    

}
const listNotes = () => {
  const notes = loadNotes()

  console.log(chalk.inverse('Your notes!'))
  notes.forEach((note) => {
      console.log(chalk.cyan(note.title))
  })
}

const readNotes = (title) => {
   const notes = loadNotes()
   const note = notes.find((note) => note.title === title)

   if (note) {
       console.log(chalk.inverse(note.title))
       console.log(note.body)

   } else {

    console.log(chalk.inverse.green('Note not found!'))

   }
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}

 fs.appendFileSync