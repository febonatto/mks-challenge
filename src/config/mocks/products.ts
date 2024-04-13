import { Product } from '../models/Product';

interface ProductsResponse {
  products: Product[];
  count: number;
}
export const productsResponse: ProductsResponse = {
  products: [
    {
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
    {
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
    {
      id: 3,
      name: 'Macbook Air',
      brand: 'Apple',
      description:
        'Processador intel Core i5 de dois núcleos e 1,8 GHz (Turbo Boost de até 2,9 GHz) com cache L3 compartilhado de 3 MB.',
      photo:
        'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/macbookair.webp',
      price: '8200.00',
      createdAt: '2023-10-30T16:25:01.093Z',
      updatedAt: '2023-10-30T16:25:01.093Z',
    },
    {
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
    {
      id: 5,
      name: 'Apple Watch Series 7',
      brand: 'Apple',
      description:
        'O Apple Watch faz coisas que outros aparelhos não conseguem porque ele fica no seu pulso.',
      photo:
        'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/applewatch-series7.webp',
      price: '3200.00',
      createdAt: '2023-10-30T16:25:01.093Z',
      updatedAt: '2023-10-30T16:25:01.093Z',
    },
  ],
  count: 8,
};
