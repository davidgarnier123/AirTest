import * as moment from "moment";

export class Ticket {
    // Identifiant unique du ticket
    private _id: string;
    // Nom du ticket à afficher
    private _label: string;
    // Timestamp de la date d'expiration du ticket
    private _expiryAt: number;
    // Ticket utilisé
    private _used: boolean;
    // Type de ticket 'unique' / 'abo'
    private _type: string;

    constructor(ticketID: string, ticketLabel: string, ticketExpiry: number, ticketUsed: boolean, type: string ) {
        this._id = ticketID;
        this._label = ticketLabel;
        this._expiryAt = ticketExpiry;
        this._used = ticketUsed;
        this._type = type;
    }

    public get id() {
        return this._id;
    }

    public get label() {
        return this._label;
    }

    public get expiryAt() {
        return this._expiryAt;
    }

    public get expiryAtFormated() {
        return moment.unix(this.expiryAt).format("DD/MM/YYYY");
    }

    public get used() {
        return this._used;
    }

    public get type() {
        return this._type;
    }
}
