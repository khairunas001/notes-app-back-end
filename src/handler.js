/* eslint-disable linebreak-style */
const { nanoid } = require('nanoid');
const notes = require('./notes');
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
// eslint-disable-next-line no-unused-vars
const addNoteHandler = (request, h) => {
  // eslint-disable-next-line no-unused-vars
  const { title, tags, body } = request.payload;
  const id = nanoid(16);

  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  const newNote = {
    title, tags, body, id, createdAt, updatedAt,
  };

  notes.push(newNote);

  const isSuccess = notes.filter((note) => note.id === id).length > 0;

  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Catatan berhasil ditambahkan',
      data: {
        noteId: id,
      },
    });
    response.code(201);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Catatan gagal ditambahkan',
  });
  response.code(500);
  return response;
};

module.exports = { addNoteHandler };