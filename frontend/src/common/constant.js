import {
    CategoryThumb1, CategoryThumb2, CategoryThumb3, CategoryThumb4, CategoryThumb5, CategoryThumb6, CategoryThumb7, CategoryThumb8,
    ProductThumb1, ProductThumb2, ProductThumb3, ProductThumb4, ProductThumb5, ProductThumb6, ProductThumb7, ProductThumb8, ProductThumb9, ProductThumb10, ProductThumb11, ProductThumb12,
} from "../assets/images";

export const category = [
    { id: 1, name: "Fruits & Veges", image: CategoryThumb1 },
    { id: 2, name: "Breads & Sweets", image: CategoryThumb2 },
    { id: 3, name: "Fruits & Veges", image: CategoryThumb3 },
    { id: 4, name: "Beverages", image: CategoryThumb4 },
    { id: 5, name: "Meat Products", image: CategoryThumb5 },
    { id: 6, name: "Breads", image: CategoryThumb6 },
    { id: 7, name: "Fruits & Veges", image: CategoryThumb7 },
    { id: 8, name: "Breads & Sweets", image: CategoryThumb8 }
]

export const bestSellingProduct = [
    {
        id: 1,
        name: "Whole Wheat Sandwich Bread",
        image: ProductThumb1,
        unitPrice: 24.00,
        discountPrice: 18.00,
        discount: 10,
    },
    {
        id: 2,
        name: "Whole Grain Oatmeal",
        image: ProductThumb2,
        unitPrice: 54.00,
        discountPrice: 50.00,
        discount: 10,
    },
    {
        id: 3,
        name: "Sharp Cheddar Cheese Block",
        image: ProductThumb3,
        unitPrice: 14.00,
        discountPrice: 12.00,
        discount: 10,
    },
    {
        id: 4,
        name: "Organic Baby Spinach",
        image: ProductThumb4,
        unitPrice: 24.00,
        discountPrice: 18.00,
        discount: 10,
    },
    {
        id: 5,
        name: "Organic Spinach Leaves (Fresh Produce)",
        image: ProductThumb5,
        unitPrice: 24.00,
        discountPrice: 18.00,
        discount: 10,
    },
    {
        id: 6,
        name: "Fresh Salmon",
        image: ProductThumb6,
        unitPrice: 24.00,
        discountPrice: 18.00,
        discount: 10,
    },
    {
        id: 7,
        name: "Imported Italian Spaghetti Pasta",
        image: ProductThumb7,
        unitPrice: 24.00,
        discountPrice: 18.00,
        discount: 10,
    },
    {
        id: 8,
        name: "Granny Smith Apples",
        image: ProductThumb8,
        unitPrice: 24.00,
        discountPrice: 18.00,
        discount: 10,
    },
    {
        id: 9,
        name: "Organic 2% Reduced Fat Milk",
        image: ProductThumb9,
        unitPrice: 24.00,
        discountPrice: 18.00,
        discount: 10,
    },
    {
        id: 10,
        name: "Greek Style Plain Yogurt",
        image: ProductThumb10,
        unitPrice: 24.00,
        discountPrice: 18.00,
        discount: 10,
    },
]

export const productSlider = [
    {
        title: "Featured Products",
        products: bestSellingProduct,
    },
    {
        title: "Most Popular Products",
        products: bestSellingProduct,
    },
    {
        title: "Just Arrived Products",
        products: bestSellingProduct,
    },
]

export const cartItems = [
    {
        id: 1,
        image: ProductThumb11,
        name: "Product Name 1",
        qty: 1,
        price: 150.00,
    },
    {
        id: 2,
        image: ProductThumb12,
        name: "Product Name 2",
        qty: 2,
        price: 70.00,
    },
]