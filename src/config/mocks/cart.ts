import { CartItem } from '../models/CartItem';

export const cart: CartItem[] = [
  {
    product: {
      id: 1,
      name: 'Iphone 11 128 GB',
      brand: 'Apple',
      description:
        'Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.',
      photo:
        'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp',
      price: '5000.00',
      createdAt: '2023-10-30T16:25:01.093Z',
      updatedAt: '2023-10-30T16:25:01.093Z',
    },
    quantity: 2,
  },
  {
    product: {
      id: 4,
      name: 'iPhone 12 64 GB',
      brand: 'Apple',
      description:
        'Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.',
      photo:
        'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone12x64.webp',
      price: '6500.00',
      createdAt: '2023-10-30T16:25:01.093Z',
      updatedAt: '2023-10-30T16:25:01.093Z',
    },
    quantity: 1,
  },
  {
    product: {
      id: 2,
      name: 'AirPods',
      brand: 'Apple',
      description:
        'Criados pela Apple Ligam e se conectam automaticamente Configuração com apenas um toque para todos seus aparelhos Apple.',
      photo:
        'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/airpods.webp',
      price: '1200.00',
      createdAt: '2023-10-30T16:25:01.093Z',
      updatedAt: '2023-10-30T16:25:01.093Z',
    },
    quantity: 3,
  },
];
