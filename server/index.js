/**** Import Express ****/
const express = require('express');

/**** Express Application Object ****/
const expressApplication = express();

expressApplication.get('/', (request, response) => {
    response.send({hi: 'there'});
});

/**** Set PORT from process.env or 5000 ****/
const PORT = process.env.PORT || 5000;

expressApplication.listen(PORT);