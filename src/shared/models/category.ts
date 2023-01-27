export class Category {
    // Identifiant unique du produit
    private _id: string;
    // Index de la catégorie dans la boutique
    private _index: number;
    // Nom du produit à afficher
    private _label: string;
    // Description du produit
    private _description: string;

    constructor(obj: any) {
        this._id = obj.id;
        this._index = obj.index;
        this._label = obj.label;
        this._description = obj.description;
    }

    public get id() {
        return this._id;
    }

    public get label() {
        return this._label;
    }

    public get index() {
        return this._index;
    }

    public get description() {
        return this._description;
    }
}
