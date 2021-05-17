import cors from 'cors';
import express from 'express';
import path from 'path';
import nunjucks from 'nunjucks';
import bodyParser from 'body-parser';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

/*
Custom modules
*/
import { EnvironmentVariables } from './db/config/index.js';
import apiRoutes from './api/routes';

/*
Database
*/
import database from './db/models/index.cjs';

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

/**
 * Swagger - JSDoc set-up
 */

 const options = {
	definition: {
	  openapi: "3.0.0",
	  info: {
		title: "CodeGram Express API with Swagger",
		version: "0.1.0",
		description:
		  "This is a simple CRUD API application made with Express and documented with Swagger",
		license: {
		  name: "MIT",
		  url: "https://spdx.org/licenses/MIT.html",
		},
		contact: {
		  name: "CodeGram",
		  url: "https://CodeGram.com",
		  email: "info@email.com",
		},
	  },
	  servers: [
		{
		  url: "http://localhost:6001/categories",
		},
	  ],
	},
	apis: ["server/api/controllers/category.controller.js"],
  };
  
  const specs = swaggerJsdoc(options);
  app.use(
	"/api-docs",
	swaggerUi.serve,
	swaggerUi.setup(specs)
  );

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
