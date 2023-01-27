export class Ticket {
    // Identifiant unique du ticket
    private _id: string;
    // Nom du ticket à afficher
    private _label: string;
    // Timestamp de la date d'expiration du ticket
    private _expiryAt: number;
    // Ticket utilisé
    private _used: boolean;

    constructor(obj: any) {
        this._id = obj.id;
        this._label = obj.label;
        this._expiryAt = obj.expiryAt;
        this._used = obj.used;
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
