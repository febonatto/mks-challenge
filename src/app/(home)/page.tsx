'use client';

import { HomeContainer } from './styles';

import { Header } from './components/Header';
import { Products } from './components/Products';
import { Cart } from './components/Cart';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <HomeContainer>
      <Cart />
      <Header />
      <Products />
      <Footer />
    </HomeContainer>
  );
}
