import { useEffect, useRef, useState } from "react";

let productsPerPage = 10;

export default function Shops() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  console.log(products);
  const loaderRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `https://dummyjson.com/products?limit=${productsPerPage}&skip=${
          page * productsPerPage
        }`
      );

      const data = await response.json();

      if (data.products.length === 0) {
        setHasMore(false);
      } else {
        setProducts(prevProducts => [...prevProducts, ...data.products]);

        setPage(prevPage => prevPage + 1);
      }
    };

    const observer = new IntersectionObserver(data => {
      const trackingData = data[0];
      if (trackingData.isIntersecting && hasMore) {
        fetchProducts();
      }
    });

    if (observer && loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, [hasMore, page]);

  return (
    <div className="">
      <div>
        <h1>Products List</h1>
      </div>

      {products.map(product => (
        <div
          className="bg-pink-200 text-black text-2xl m-4  rounded"
          key={product.id}
        >
          <h2>{product.title}</h2>
          <img src={product.thumbnail} alt="" />
          <p>Price:{product.price}$</p>
        </div>
      ))}
      {hasMore && <div ref={loaderRef}>Loading More Data...</div>}
    </div>
  );
}
