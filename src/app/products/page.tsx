import { Checkbox } from "@/components/ui/checkbox";
import { Product } from "./models";
import { CounterButton } from "@app/components/counter-button";

const getProducts = async (): Promise<Product[]> => {
  const response = await fetch("http://localhost:8080/products", {
    next: { revalidate: 10 },
  });
  return response.json();
};

export default async function Products() {
  const products = await getProducts();
  return (
    <div className="bg-black w-full h-screen">
      <h1 className="text-white w-full text-center py-4 font-semibold">
        Lista de Produtos
      </h1>
      <ul className="w-full flex justify-center">
        {products.map((item: any) => (
          <li
            key={item.id}
            className="text-white flex  gap-8 items-center mx-4"
          >
            <Checkbox className="w-4 h-4" /> <span>{item.name}</span>{" "}
          </li>
        ))}
      </ul>
      <CounterButton />
    </div>
  );
}
