import { ProductDetails } from "./product-details";

describe('ProductDetails', () => {
    it('should create an instance', () => {
        expect(new ProductDetails('Rose', 200, 'Rose Plant', 4, 'Plant', 'xyz'));
    });
});