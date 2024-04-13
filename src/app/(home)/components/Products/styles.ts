'use client';

import styled from 'styled-components';

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  flex: 1;
  padding: 24px 16px;
  overflow-y: auto;
`;

export const ProductsFilters = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ProductsList = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  flex: 1;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const SkeletonLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ProductLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 328px;
  min-height: 356px;
  border-radius: 8px;
  box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.2);
  overflow: hidden;

  > button {
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    width: 100%;
    height: 44px;
    background: #0f52ba;

    > span {
      font-size: 1rem;
    }
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
`;

export const ProductContent = styled.div`
  flex: 1;
  padding: 16px 24px;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    margin-bottom: 12px;

    > strong {
      font-size: 1.15rem;
      font-weight: 500;
    }

    > span {
      color: #ffffff;
      font-weight: 600;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 96px;
      height: 36px;
      border-radius: 4px;
      background: #373737;
    }
  }

  > p {
    font-size: 0.75rem;
    opacity: 0.7;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
`;
