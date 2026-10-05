import React from 'react';
import { notFound } from 'next/navigation';
import { PRODUCTS } from '@/data/products';
import { ProductDetailClient } from '@/components/ProductDetailClient';

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = PRODUCTS.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  const otherProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return <ProductDetailClient product={product} otherProducts={otherProducts} />;
}
