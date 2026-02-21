import { z as useState } from './server.mjs';
import { watch } from 'vue';

const useCart = () => {
  const cart = useState("cart", () => []);
  watch(cart, (newCart) => {
  }, { deep: true });
  const addToCart = (product) => {
    const exists = cart.value.find((item) => item.id === product.id);
    if (!exists) {
      cart.value.push(product);
    } else {
      cart.value = cart.value.filter((item) => item.id !== product.id);
    }
  };
  const removeFromCart = (id) => {
    cart.value = cart.value.filter((item) => item.id !== id);
  };
  const isInCart = (id) => {
    return cart.value.some((item) => item.id === id);
  };
  const clearCart = () => {
    cart.value = [];
  };
  return { cart, addToCart, removeFromCart, isInCart, clearCart };
};

export { useCart as u };
//# sourceMappingURL=useCart-C7lyM5_r.mjs.map
