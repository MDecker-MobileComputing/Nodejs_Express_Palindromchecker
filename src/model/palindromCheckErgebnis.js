
export default class PalindromCheckErgebnis {

    /**
     * Ergebnisobjekt erzeugen, das als Antwort in JSON-Form zurückgegeben wird.
     *
     * @param {*} inputNormiert Normierte Eingabe, also nur Kleinbuchstaben und keine Leerzeichen
     *                          am Anfang oder Ende
     *
     * @param {*} istPalindrom `true` gdw. die Eingabe ein Palindrom ist
     *
     * @param {*} nachricht Beschreibung des Ergebnisses
     */
    constructor( inputNormiert, istPalindrom, nachricht ) {

        this.inputNormiert = inputNormiert;
        this.istPalindrom  = istPalindrom;
        this.nachricht     = nachricht;
    }

}
