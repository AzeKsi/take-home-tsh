import { Loader } from 'ui';

import { useProducts } from './Products.effect';
import { Product } from './product/Product';
import { ProductsEmptyList } from './ProductEmptylist';
import { Pagination } from './products-pagination/ProductsPagination';

export const Products = () => {
  const { productList, isLoading, isError, error, setPage, page, lastPage } = useProducts();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <div>{(error as { message: string }).message}</div>
      ) : (
        <>
          {productList && productList.items.length > 0 && (
            <div className="grid place-content-center gap-4 py-12 2xs:grid-cols-2 lg:grid-cols-4">
              {productList?.items.map((product, index) => (
                <Product
                  key={index}
                  name={product.name}
                  description={product.description}
                  rating={product.rating}
                  active={product.active}
                  image={product.image}
                  promo={product.promo}
                  buttonText="Show details"
                  data-testid="pw-product"
                />
              ))}
            </div>
          )}
          {productList && productList.items.length === 0 && <ProductsEmptyList />}
          {productList && productList.items.length > 0 && (
            <Pagination
              currentPage={page ? Number(page) : productList.meta.currentPage}
              totalPages={lastPage}
              setPage={setPage}
            />
          )}
        </>
      )}
    </>
  );
};