import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    private product: { id: number, name: string, price: number }[] = [
        {
            id: 1,
            name: 'Product 1',
            price: 100
        },
        {
            id: 2,
            name: 'Product 2',
            price: 200
        }
    ];

    getProducts() {
        return this.product;
    }

    getProductById(id: number) {
        return this.product.find(product => product.id === id);
    }

    createProduct(product: { id: number, name: string, price: number }) {
        this.product.push(product);
    }

    updateProduct(id: number, product: { id: number, name: string, price: number }) {
        const index = this.product.findIndex(product => product.id === id);
        this.product[index] = product;
    }

    deleteProduct(id: number) {
        const index = this.product.findIndex(product => product.id === id);
        if (index !== -1) {
            this.product.splice(index, 1);
        }
    }
}