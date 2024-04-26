import Promotion from "./Promotion";
import { discount } from "./discounts";

export default function Promotions() {
  return (
    <main>
      <div className="catalogProduct container">
        {discount.map((discount) => (
          <Promotion {...discount} />
        ))}
      </div>
    </main>
  );
}
