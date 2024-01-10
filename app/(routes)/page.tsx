import React from 'react';
import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";

export const revalidate = 0;

async function HomePage() {
    const products = await getProducts({ isFeatured: true });
    const billboard = await getBillboard("56c91732-a97c-46bf-b83b-03b20d5c3b59");


    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard}/>
            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                <ProductList title="Featured Products" items={products}/>
            </div>
            </div>
        </Container>
    );
}

export default HomePage;