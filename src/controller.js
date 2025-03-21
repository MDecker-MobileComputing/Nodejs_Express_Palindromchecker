import logging from "logging";

import wortPalindromCheck from "./service.js";

const logger = logging.default( "controller" );

const BASIS_URL = "/api/v1/";


/**
 * Routen für einzelne REST-Endpunkte registrieren.
 *
 * @param {*} Express-App-Objekt
 */
export default function routenRegistrieren( app ) {

    const routePalindromCheck = BASIS_URL + "palindromcheck/:wort";
    app.get( routePalindromCheck, palindromCheck );
    logger.info( "Route registriert: GET " + routePalindromCheck );
};


/**
 * Callback-Funktion für den Palindrom-Check.
 *
 * @param {*} req Objekt mit Informationen zum Request
 * @param {*} res Response-Objekt
 */
function palindromCheck( req, res ) {

    const eingabe = req.params.wort;
    logger.info( `Palindrom-Check angefordert für: "${eingabe}"` );

    try {

        const ergebnis = wortPalindromCheck( eingabe );

        logger.info( `Ergebnis des Palindrom-Checks: ${ergebnis.nachricht}` );

        res.status( 200 )
           .json( ergebnis );
    }
    catch( fehler ) {

        logger.error( `Fehler beim Check von Eingabe "${eingabe}": ${fehler.message}` );
        res.status( 400 )
           .json( { "nachricht": `Ungültige Eingabe: "${eingabe}"` } );
    }
}
