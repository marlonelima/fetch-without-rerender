import { useEffect, useState } from "react";
import { useStore } from "../stores/prices";
import { Message } from "../domain/Message";

//acredito que o HookState.js.org também oferece algo parecido
export const Products = () => {
  const [prices, setPrices] = useState<number[]>([]);

  // cuidado para não pegar o estado por aqui, senão ele renderizará toda vez que o estado mudar
  const addPrice = useStore((state) => state.addPrice);

  useEffect(() => {
    function fetchData() {
      // simulando retornos das requisições
      const fetch = setInterval(() => {
        addPrice(Math.random());
      }, 1000);

      // todas as requisições já terminaram, hora de exibir
      setTimeout(() => {
        clearInterval(fetch);
        console.log("timeout");

        const state = useStore.getState().prices;

        setPrices(state);
      }, 10000);
    }

    // validação para executar somente uma vez
    prices.length === 0 && fetchData();
  });

  if (prices.length === 0) return <Message />;

  return (
    <div>
      {prices.map((price: number, index: any) => (
        <p key={index}>{price}</p>
      ))}
    </div>
  );
};
