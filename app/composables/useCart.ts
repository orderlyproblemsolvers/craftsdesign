export const useCart = () => {
  // 1. Initialize with an empty array
  const cart = useState<any[]>('cart', () => [])

  // 2. Load from localStorage only on the client side (to avoid hydration errors)
  onMounted(() => {
    const savedCart = localStorage.getItem('crafts_selection')
    if (savedCart) {
      try {
        cart.value = JSON.parse(savedCart)
      } catch (e) {
        console.error("Could not parse saved cart", e)
      }
    }
  })

  // 3. Watch for changes and save to localStorage
  watch(cart, (newCart) => {
    if (import.meta.client) {
      localStorage.setItem('crafts_selection', JSON.stringify(newCart))
    }
  }, { deep: true })

  const addToCart = (product: any) => {
    const exists = cart.value.find(item => item.id === product.id)
    if (!exists) {
      cart.value.push(product)
    } else {
      cart.value = cart.value.filter(item => item.id !== product.id)
    }
  }

  const removeFromCart = (id: string | number) => {
    cart.value = cart.value.filter(item => item.id !== id)
  }

  const isInCart = (id: string | number) => {
    return cart.value.some(item => item.id === id)
  }

  const clearCart = () => {
    cart.value = []
  }

  return { cart, addToCart, removeFromCart, isInCart, clearCart }
}