import Item from "../Item/Item";
import { product } from "../products";
import "./Items.css";

export default function Items() {
  return (
    <main>
      <div className="catalogProduct container">
        {product.map((product) => (
          <Item {...product} />
        ))}
      </div>
    </main>
  );
}
