export class ProductDetails {
    commonName : string;
    plantCost : number;
    plantDescription:string;
    rating:number;
    category:string;
    imagePath:string;

    constructor(commonName:string, plantCost:number, plantDescription:string, rating:number, category:string, imagePath:string) {
        this.commonName = commonName;
        this.plantCost = plantCost;
        this.plantDescription = plantDescription;
        this.rating = rating;
        this.category = category;
        this.imagePath = imagePath;
    }
}
