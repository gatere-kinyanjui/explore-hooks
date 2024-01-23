import { IProducts } from "../../lib/interfaces";

interface IProductListItemProps {
  product: IProducts;
  isSelected: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function ProductListItem({
  product,
  isSelected,
  onClick,
}: IProductListItemProps) {
  return (
    <div className={`product-list-item ${isSelected ? " selected" : ""}`}>
      <img
        className="product-list-item-photo"
        src={product.photo.filename}
        alt={`${product.name}`}
      />
      <button onClick={onClick}>{product.name}</button>
    </div>
  );
}

export default ProductListItem;
