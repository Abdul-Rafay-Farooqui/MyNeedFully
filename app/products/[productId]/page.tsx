// app/products/[productId]/page.tsx
import ProductDetailPage from './ProductDetailPage'; // Note: Consistent casing
import { allProducts } from '@/lib/products';

export async function generateStaticParams() {
  return allProducts.map((product) => ({
    productId: product.id // Must match [productId] dynamic segment name
  }));
}

export default function Page({ params }: { params: { productId: string } }) {
  return <ProductDetailPage />;
}