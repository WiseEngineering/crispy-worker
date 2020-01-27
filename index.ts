import express from 'express';

import config from './src/config'

const app = express();

const port = config.server.port;

// TODO: put all routes inside src. Leave it as entry point
app.listen(port, () =>
  console.log(`App listening on port ${port}!`)
);

