export interface product{
    id:number;
    name:string;
    description: string;
    soldeprice:number;
    regularprice: number;
    imageurl:string;
    createdAt:Date;
    updatedAt?: Date;
    categories: string[];
}