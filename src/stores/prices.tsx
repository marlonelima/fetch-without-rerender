import create from "zustand";

interface IPriceStore {
  prices: number[];
  addPrice: (price: number) => void;
}

export const useStore = create<IPriceStore>((set) => ({
  prices: [],
  addPrice: (price: number) =>
    set((state) => {
      console.log("O estado agora é: ", state.prices);

      state.prices.push(price);
    }),
}));

// store sem o console.log

// export const useStore = create<IPriceStore>((set) => ({
//   prices: [],
//   addPrice: (price: number) => set((state) => { state.prices.push(price) }),
// }));
