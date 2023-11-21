/* eslint-disable linebreak-style */
/* eslint-disable import/newline-after-import */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
const { addNoteHandler } = require('./handler');
const routes = [
    {
      method: 'POST',
      path: '/notes',
      handler: addNoteHandler,
    },
   ];

   module.exports = routes;