export class Product {
    // Identifiant unique du produit
    private _id: string;
    // Nom du produit à afficher
    private _label: string;
    // Description du produit
    private _description: string;
    // Prix en centimes
    private _price: number;
    // Identifiant de la catégorie parente
    private _category_id: string;
    // URL vers l'image miniature
    private _thumbnail_url: string | null;

    constructor(obj: any) {
        this._id = obj.id;
        this._label = obj.label;
        this._description = obj.description;
        this._price = obj.price;
        this._category_id = obj.category_id;
        this._thumbnail_url = obj.thumbnail_url;
    }

    public get id () {
        return this._id;
    }
    public get label () {
        return this._label;
    }
    public get description () {
        return this._description;
    }
    public get price () {
        return this._price;
    }
    public get category_id () {
        return this._category_id;
    }
    public get thumbnail_url () {
        return this._thumbnail_url;
    }
}
