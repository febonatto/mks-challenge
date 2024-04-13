import Image from 'next/image';
import { motion } from 'framer-motion';

import { CircleX, Minus, Plus, X } from 'lucide-react';

import {
  CartContainer,
  CartFooter,
  CartHeader,
  ImageWrapper,
  ItemActions,
  ItemLayout,
  ItemContainer,
  Separator,
  RemoveButton,
} from './styles';

import { formatCurrency } from '@/config/utils/formatCurrency';
import { useAppDispatch, useAppSelector } from '@/config/lib/redux/reduxHooks';
import {
  increaseItem,
  decreaseItem,
  removeItem,
  toggleCartState,
} from '@/config/lib/redux/features/cart/cartSlice';

export function Cart() {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);

  const totalPrice = cart.cartItems.reduce(
    (acc, curr) => acc + parseInt(curr.product.price) * curr.quantity,
    0,
  );

  const containerVariants = {
    open: { x: '0%' },
    closed: { x: '100%' },
  };

  const productVariants = {
    open: { scale: 1, opacity: 1, y: 0 },
    closed: { scale: 0.7, opacity: 0, y: 100 },
  };

  return (
    <CartContainer
      as={motion.aside}
      initial={{ x: '100%' }}
      animate={cart.cartOpen ? 'open' : 'closed'}
      variants={containerVariants}
      transition={{ ease: 'linear', duration: 0.2 }}
      data-testid="cart-container"
    >
      <CartHeader>
        <span>Carrinho de compras</span>
        <button
          data-testid="cart-toggle-cart"
          type="button"
          onClick={() => dispatch(toggleCartState())}
        >
          <CircleX size={44} />
        </button>
      </CartHeader>

      <ItemContainer>
        {cart.cartItems.map(({ product, quantity }, index) => (
          <ItemLayout
            key={product.id}
            as={motion.div}
            initial={{ scale: 0.7, opacity: 0, y: 100 }}
            animate={cart.cartOpen ? 'open' : 'closed'}
            variants={productVariants}
            transition={{ delay: 0.2 + index * 0.1 }}
            data-testid="cart-item"
          >
            <RemoveButton
              type="button"
              onClick={() => dispatch(removeItem(product))}
              data-testid="button-remove-item"
            >
              <X size={24} />
            </RemoveButton>
            <ImageWrapper>
              <Image
                src={product.photo}
                alt={product.name}
                width={112}
                height={112}
              />
            </ImageWrapper>

            <strong>{product.name}</strong>

            <div>
              <ItemActions>
                <button
                  type="button"
                  onClick={() => dispatch(decreaseItem(product))}
                  data-testid="decrease-item-button"
                >
                  <Minus size={16} />
                </button>
                <Separator />
                <motion.span
                  key={quantity}
                  initial={{ y: -100 }}
                  animate={{ y: 0 }}
                  data-testid="item-quantity"
                >
                  {quantity}
                </motion.span>
                <Separator />
                <button
                  type="button"
                  onClick={() => dispatch(increaseItem(product))}
                  data-testid="increase-item-button"
                >
                  <Plus size={16} />
                </button>
              </ItemActions>

              <motion.span
                key={quantity}
                initial={{ scale: 1 }}
                animate={{ scale: [1.2, 0.8, 1] }}
                transition={{ duration: 0.35 }}
                data-testid="item-amount-price"
              >
                {formatCurrency(parseInt(product.price) * quantity)}
              </motion.span>
            </div>
          </ItemLayout>
        ))}
      </ItemContainer>

      <CartFooter>
        <div>
          <strong>Total:</strong>
          <span data-testid="cart-total-price">
            {formatCurrency(totalPrice)}
          </span>
        </div>

        <button type="button">
          <span>Finalizar Compra</span>
        </button>
      </CartFooter>
    </CartContainer>
  );
}
