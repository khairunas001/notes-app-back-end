/* eslint-disable linebreak-style */
/* eslint-disable import/newline-after-import */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
const {
    addNoteHandler,
    getAllNotesHandler,
    getNoteByIdHandler,
    editNoteByIdHandler,
  } = require('./handler');
const routes = [
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
    },
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler,
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNoteByIdHandler,
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNoteByIdHandler,
    },
   ];

   module.exports = routes;