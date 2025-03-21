
import PalindromCheckErgebnis from "./model/palindromCheckErgebnis.js";
import UngueltigeEingabeError from "./model/ungueltigeEingabeError.js";


/** REGEXP für alle Kleinbuchstaben inkl. dt. Umlaute und Scharf-s  */
const REGEXP_KLEINBUCHSTABEN = /^[a-zäöüß]+$/


/**
 * Prüft, ob der als Argument übergebene String ein Wortpalindrom ist.
 *
 * @param {*} eingabe String, der auf Palindrom-Eigenschaft geprüft werden soll
 *
 * @returns {PalindromCheckErgebnis} Ergebnis der Prüfung
 *
 * @throws {UngueltigeEingabeError} Wenn `eingabe` andere Zeichen als deutsche
 *                                  Buchstaben enthält
 */
export default function wortPalindromCheck( eingabe ) {

    const eingabeNorm = eingabe.trim().toLowerCase();

    if ( REGEXP_KLEINBUCHSTABEN.test( eingabeNorm ) === false ) {

        throw new UngueltigeEingabeError();
    }

    const wortRueckwaerts = eingabeNorm.split( "" )
                                       .reverse()
                                       .join( "" );

    const istPalindrom = eingabeNorm === wortRueckwaerts;

    const nachricht = istPalindrom
                            ? `Die Zeichenkette "${eingabe}" ist ein Wortpalindrom.`
                            : `Die Zeichenkette "${eingabe}" ist kein Wortpalindrom.`;

    return new PalindromCheckErgebnis( eingabeNorm,
                                       istPalindrom,
                                       nachricht
                                     );
}
