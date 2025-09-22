import { createLogger, transports, format } from "winston";
import { hostname } from "os";

const consoleFormat = format.combine(
    format.colorize(),
    format.timestamp(),
    format.metadata({ fillExcept: ['level', 'message', 'timestamp'] }),
    format.errors({ stack: true }),
    format.printf((info: any) => {
        let stack = "";
        if (info.metadata && info.metadata.stack) {
            const formattedStack = info.metadata.stack.replace(/\\n/g, '\n');
            stack = `\n${formattedStack}`;
            delete info.metadata.stack
        }
        let meta = info.metadata && Object.keys(info.metadata).length ? `\n${JSON.stringify(info.metadata, null)}` : '';

        return `\n[${info.level}] ${info.timestamp}: ${info.message}${meta}${stack}`;
    })
)

const jsonFormat = format.combine(
    format.timestamp(),
    format.json(),
)

export const logger = createLogger({
    level: process.env.LOGGER_LEVEL,  // error | warn | info | http | verbose | debug | silly
    defaultMeta: {
        service: process.env.SERVICE_NAME,
        hostname: hostname()
    },
    transports: [
        new transports.Console({ format: consoleFormat }),
    ]
});
