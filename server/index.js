/**
 * Import packages
 */
import express from 'express';
import dotenv from 'dotenv';

/**
 * Import custom packages
 */
import apiRoutes from './api/routes.js';

dotenv.config();

/**
 * Settings
 */
const NODE_ENV = process.env.NODE_ENV || 'development';

/**
 * Create Express app
 */
const app = express();

app.use(express.json());

/**
 * API Routes
 */
app.use('/api', apiRoutes);

/**
 * Serves the static files
 */
app.use('/', express.static('client'));

/**
 * API routes not found
 */
app.get('/api/*', (req, res, next) => {
  const err = new Error(
    `${req.ip} tried to access ${req.originalUrl}`,
  );
  err.statusCode = 301;
  next(err);
});

/**
 * Error routes
 */
app.get('/404', (req, res, next) => { // Not found
  // trigger a 404
  next();
});

app.get('403', (req, res, next) => { // Not allowed
  // trigger a 403 error
  const err = new Error(`Not allowed!`);
  err.statusCode = 403;
  next(err);
});

app.get('500', (req, res, next) => {
  // trigger a generic (500) error
  const err = new Error(`Keyboard chinchilla!`)
  next(err);
});

/**
 * Error handling
 */
app.use((req, res, next) => {
  res.status(404);
  res.format({
    html: () => {
      res.status(404).send(`Woops, 404: ${req.url} not found!`)
    },
    json: () => {
      res.json({ error: 'Not found' })
    },
    default: () => {
      res.type('txt').send('Not found')
    }
  })
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send('500', { error: err });
});

/**
 * Start the server
 * Listen to incoming requests
 */
let server;
if (NODE_ENV !== 'test') {
  server = app.listen(process.env.PORT, process.env.HOSTNAME, (err) => {
    if (err) throw err;
    if (NODE_ENV === 'development') {
      console.log(`Server is listening at https://${process.env.HOSTNAME}:${process.env.PORT}!`);
    }
  });
};

/**
 * Handle shutdown gracefully
 */
 const handleGracefully = async () => {
  try {
    await server.close(async (err) => {
      if (err) throw err;
      
      if (NODE_ENV === 'development') {
        console.log('Received shutdown signal. Server shutting down!');
      }
      process.exit(0);
    });
  } catch (ex) {
    console.error(ex);
  }
};

/*
Handle close
*/
const handleClose = async () => {
  await server.close();
};

/*
Shutdown the application
*/
process.on('SIGINT', () => {
  handleGracefully();
});

/*
Exports the app for testing
*/
export {
  app,
  handleClose,
  handleGracefully,
};