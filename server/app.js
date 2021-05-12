import cors from 'cors';
import express from 'express';
import path from 'path';
import nunjucks from 'nunjucks';
import bodyParser from 'body-parser';

/*
Custom modules
*/
import { EnvironmentVariables } from './db/config/index.js';
import apiRoutes from './api/routes.js';

/*
Database
*/
import database from './db/models/index.js';

database.sequelize.sync();

/*
Create Express app
*/
const app = express();

/*
View Engine
*/
nunjucks.configure(path.join(__dirname, 'views'), {
	autoescape: true,
	express: app,
	noCache: true,
	watch: true,
});
app.set('view engine', 'html');

/*
bodyParser
*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*
API Routes
*/
app.use('/api', cors(), apiRoutes);
app.get('/', (req, res) => {
	res.send('Hello world. The app has not crashed at this time.')
})

/*
Start the server
Listen to incoming requests
*/
let server;
if (EnvironmentVariables.NODE_ENV !== 'test') {
	server = app.listen(EnvironmentVariables.PORT, EnvironmentVariables.HOSTNAME, (err) => {
		if (err) throw err;
		if (EnvironmentVariables.NODE_ENV === 'development') {
			console.log(`Server is listening at http://${EnvironmentVariables.HOSTNAME}:${EnvironmentVariables.PORT}!`);
		}
	});
}

/*
Handle shutdown gracefully
*/
const handleGracefully = async () => {
	try {
		await server.close(async (err) => {
			if (err) throw err;

			if (EnvironmentVariables.NODE_ENV === 'development') {
				console.log('Server is gracefully closed!');
			}
			process.exit(0);
		});
	} catch (ex) {
		console.error(ex);
	}
};

/*
Shutdown the application
*/
process.on('SIGINT', () => {
	handleGracefully();
});
process.on('SIGTERM', () => {
	handleGracefully();
});
