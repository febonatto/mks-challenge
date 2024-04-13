import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

import { HeaderContainer } from './styles';

import { useAppDispatch, useAppSelector } from '@/config/lib/redux/reduxHooks';
import { toggleCartState } from '@/config/lib/redux/features/cart/cartSlice';

export function Header() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  const itemsQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <HeaderContainer>
      <h1>
        MKS <span>Sistemas</span>
      </h1>

      <button
        data-testid="header-cart-toggle"
        type="button"
        onClick={() => dispatch(toggleCartState())}
      >
        <ShoppingCart size={20} />
        <motion.span
          key={itemsQuantity}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
        >
          {itemsQuantity}
        </motion.span>
      </button>
    </HeaderContainer>
  );
}
