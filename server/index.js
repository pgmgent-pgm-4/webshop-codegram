/**
 * Import packages
 */
import express from 'express';
import dotenv from 'dotenv';

/**
 * Import custom packages
 */

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
// app.use('/api', cors(), apiRoutes)


/**
 * Not found routes
 */
app.get('*', (req, res, next) => {
  const err = new Error(
    `${req.ip} tried to access ${req.originalUrl}`,
  );
  err.statusCode = 301;
  next(err);
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
module.exports = {
  app,
  handleClose,
  handleGracefully,
};