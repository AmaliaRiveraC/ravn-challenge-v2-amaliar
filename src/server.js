import express from 'express';
import graphqlHTTP from 'express-graphql';
import bodyParser from 'body-parser';
import cors from 'cors';
import { APP_PORT } from './constants'
import schema from './schema'

const app  = express();

app.use(cors());

/*app.use(bodyParser.urlencoded({
  extended: true
}));*/

//app.use(bodyParser.json())

app.use(graphqlHTTP({
    graphiql: true,
    schema,
    pretty: true
}));

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 5000;

try {
  app.listen(APP_PORT, () => console.log(`GraphQL server running at ${APP_PORT}`))
} catch (error) {
  console.log(`Something went wrong ${error}`)
}