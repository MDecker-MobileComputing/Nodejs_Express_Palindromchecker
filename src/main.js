import express from "express";
import logging from "logging";

import swaggerUiKonfigurieren from "./openapi.js";
import routenRegistrieren     from "./controller.js";


const logger = logging.default( "main" );
const app    = express();

app.use( express.static( "public" ) );

routenRegistrieren( app );
swaggerUiKonfigurieren( app );

// Server starten
const PORT_NUMMER = 8080;
app.listen( PORT_NUMMER,
            () => { logger.info( `Web-Server lauscht auf Port ${PORT_NUMMER}.\n` ); }
          );