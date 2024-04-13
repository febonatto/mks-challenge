import { useState } from 'react';
import Image from 'next/image';

import { AArrowDown, AArrowUp, ShoppingBag } from 'lucide-react';

import {
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
  Skeleton,
} from '@mui/material';

import {
  ImageWrapper,
  ProductContainer,
  ProductsFilters,
  ProductsList,
  ProductContent,
  ProductLayout,
  SkeletonLayout,
} from './styles';

import { formatCurrency } from '@/config/utils/formatCurrency';
import { useAppDispatch } from '@/config/lib/redux/reduxHooks';
import { increaseItem } from '@/config/lib/redux/features/cart/cartSlice';
import { useProducts } from '@/config/services/useProducts';
import { motion } from 'framer-motion';

export function Products() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<'id' | 'name' | 'price'>('id');
  const [orderBy, setOrderBy] = useState<'ASC' | 'DESC'>('ASC');

  const dispatch = useAppDispatch();
  const { data, isFetching } = useProducts({
    page: currentPage,
    rows: 5,
    sortBy,
    orderBy,
  });

  const paginationCount = data && Math.ceil(data.count / 5);

  function handleCurrentPage(page: number) {
    setCurrentPage(page);
  }

  function handleSortByChange(event: SelectChangeEvent) {
    const { value } = event.target;
    setSortBy(value as 'id' | 'name' | 'price');
  }

  function handleToggleOrderBy() {
    setOrderBy((prevState) => (prevState === 'ASC' ? 'DESC' : 'ASC'));
  }

  return (
    <ProductContainer>
      <ProductsList>
        <ProductsFilters>
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="select-sort-by">Ordernar por</InputLabel>
            <Select
              labelId="select-sort-by"
              label="Ordernar por"
              value={sortBy}
              onChange={handleSortByChange}
            >
              <MenuItem value="id">ID</MenuItem>
              <MenuItem value="name">Nome</MenuItem>
              <MenuItem value="price">Preço</MenuItem>
            </Select>
          </FormControl>
          <button type="button" onClick={handleToggleOrderBy}>
            {orderBy === 'ASC' && <AArrowDown size={24} />}
            {orderBy === 'DESC' && <AArrowUp size={24} />}
          </button>
        </ProductsFilters>
        {isFetching && (
          <>
            <SkeletonLayout>
              <Skeleton
                animation="wave"
                variant="rounded"
                width={328}
                height={156}
              />
              <Skeleton
                animation="wave"
                variant="rounded"
                width={328}
                height={56}
              />
              <Skeleton
                animation="wave"
                variant="rounded"
                width={328}
                height={24}
              />
            </SkeletonLayout>
            <SkeletonLayout>
              <Skeleton
                animation="wave"
                variant="rounded"
                width={328}
                height={156}
              />
              <Skeleton
                animation="wave"
                variant="rounded"
                width={328}
                height={56}
              />
              <Skeleton
                animation="wave"
                variant="rounded"
                width={328}
                height={24}
              />
            </SkeletonLayout>
          </>
        )}
        {!isFetching && (
          <>
            {data &&
              data.products.map((product, index) => (
                <ProductLayout
                  key={product.id}
                  as={motion.div}
                  initial={{ opacity: 0, y: 100, scale: 0.7 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.25, delay: index * 0.1 }}
                  data-testid="home-product-item"
                >
                  <ImageWrapper
                    as={motion.div}
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <Image
                      src={product.photo}
                      alt={product.name}
                      width={156}
                      height={156}
                    />
                  </ImageWrapper>

                  <ProductContent
                    as={motion.div}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <div>
                      <strong data-testid="home-item-name">
                        {product.name}
                      </strong>
                      <span>{formatCurrency(parseInt(product.price))}</span>
                    </div>

                    <p>{product.description}</p>
                  </ProductContent>

                  <button
                    type="button"
                    onClick={() => dispatch(increaseItem(product))}
                    data-testid="buy-item-button"
                  >
                    <ShoppingBag size={20} />
                    <span>COMPRAR</span>
                  </button>
                </ProductLayout>
              ))}
          </>
        )}
      </ProductsList>

      <Pagination
        count={paginationCount}
        page={currentPage}
        onChange={(_, page) => handleCurrentPage(page)}
        data-testid="pagination"
      />
    </ProductContainer>
  );
}
