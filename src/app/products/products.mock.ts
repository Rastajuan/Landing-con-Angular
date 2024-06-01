export const productsList: Product[] = 
   [
        {
        "id": 1,
        "name": "Lavandina",
        "price": 10.95,
        "description": "Botella de 2Lts."
        },
        {
        "id": 2,
        "name": "Detergente",
        "price": 12.95,
        "description": "Hasta 120 lavados"
        },
        {
        "id": 3,
        "name": "Limpia vidrios",
        "price": 8.95,
        "description": "Cristales como nuevos"
        },
        {
        "id": 4,
        "name": "Desodorante de ambiente",
        "price": 15.95
        },
        {
        "id": 5,
        "name": "Desinfectante",
        "price": 11.95,
        "description": "No deje una bacteria viva"
        }
        
        
    ]

export interface Product{
    id: number | string;
    name: string;
    price: number;
    description?: string;

}