import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();
const initialState = { items: [] };

function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const exists = state.items.find((i) => i.id === action.payload.id);
      const items = exists
        ? state.items.map((i) =>
            i.id === action.payload.id ? { ...i, qty: i.qty + 1 } : i
          )
        : [...state.items, { ...action.payload, qty: 1 }];
      return { ...state, items };
    }
    case "REMOVE":
      return {
        ...state,
        items: state.items.filter((i) => i.id !== action.payload),
      };
    case "CLEAR":
      return initialState;
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider value={{ cart: state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
export const useCart = () => useContext(CartContext);
