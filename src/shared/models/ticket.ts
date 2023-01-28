export class Ticket {
    // Identifiant unique du ticket
    private _id: string;
    // Nom du ticket à afficher
    private _label: string;
    // Timestamp de la date d'expiration du ticket
    private _expiryAt: number;
    // Ticket utilisé
    private _used: boolean;

    constructor(ticketID: string, ticketLabel: string, ticketExpiry: number, ticketUsed: boolean ) {
        this._id = ticketID;
        this._label = ticketLabel;
        this._expiryAt = ticketExpiry;
        this._used = ticketUsed;
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

    public get used() {
        return this._used;
    }
}
