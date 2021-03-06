const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;

const app = express();
app.set('port', port);
// Tell express where to find angular
app.use(express.static( __dirname + '/public/dist/public' ));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.listen(port, () => console.log(`Express server listening on port ${port}`));