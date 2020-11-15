/// <reference types="react-scripts" />
interface Address {
    street: string;
    number: number;
}
interface Estate {
    id: number;
    title: string;
    price: number;
    address: Address;
    preview_img: string;
    seller: string;
    description: string;
    detailed_photos: Array<string>;
 };