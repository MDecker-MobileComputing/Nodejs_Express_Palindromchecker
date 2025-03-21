

/**
 * Eigene Fehlerklasse für ungültige Eingaben, also Strings, die nicht
 * nur aus deutschen Buchstaben bestehen.
 */
export default class UngueltigeEingabeError extends Error {

    constructor() {

        super( "Ungültige Eingabe" );
        this.name = "UngueltigeEingabeError";
    }
}