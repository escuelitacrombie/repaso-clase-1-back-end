import { products } from "./mock-data";

export const findAll = () => {
  return products;
};

export const paginate = (items: number, currentPage: number) => {
  const result = products.slice((currentPage - 1) * items, currentPage * items);
  const totalPages = Math.ceil(products.length / items);

  return {
    result,
    totalPages,
  };
};

export const create = (product: Record<string, unknown>) => {
  products.push({
    id: products.length,
    ...product,
  });

  return true;
};

export const remove = (idParam: string) => {
  const id = Number(idParam);
  const indexProduct = products.findIndex((product) => product.id === id);

  if (indexProduct !== -1) {
    products.splice(indexProduct, 1);
    return true;
  } else {
    return false;
  }
};
