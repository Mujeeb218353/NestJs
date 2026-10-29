import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Get()
    getProducts() {
        return this.productService.getProducts();
    }

    @Get(':id')
    getProductById(@Param('id') id: number) {
        return this.productService.getProductById(Number(id));
    }

    @Post()
    createProduct(@Body() product: { id: number, name: string, price: number }) {
        this.productService.createProduct(product);
    }

    @Put(':id')
    updateProduct(@Param('id') id: number, @Body() product: { id: number, name: string, price: number }) {
        this.productService.updateProduct(id, product);
    }

    @Delete(':id')
    deleteProduct(@Param('id') id: number) {
        this.productService.deleteProduct(id);
    }
}