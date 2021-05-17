/**
 * Import packages
 */
import winston from 'winston';
const {
  createLogger,
  format,
  transports
} = winston;
const {
  combine,
  timestamp,
  label,
  prettyPrint
} = format;


const logger = createLogger({
  format: format.combine(
    label({
      label: 'by Codegram'
    }),
    timestamp(),
    format.json()),
  transports: [new winston.transports.File({
    filename: 'combined.log'
  }), ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: combine(
      label({
        label: 'by Codegram'
      }),
      timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
      prettyPrint()
    )
  }));
}

export default logger;