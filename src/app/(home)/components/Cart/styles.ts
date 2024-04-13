'use client';

import styled from 'styled-components';

export const CartContainer = styled.aside`
  position: fixed;
  right: 0;
  display: flex;
  flex-direction: column;
  width: 328px;
  height: 100dvh;
  background: #0f52ba;
  z-index: 999;

  @media screen and (min-width: 768px) {
    width: 556px;
  }
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;

  > span {
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: 600;
  }

  > button {
    background: transparent;
  }
`;

export const ItemContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1;
  padding: 12px 24px;
  overflow-y: auto;
`;

export const ItemLayout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
  min-height: 240px;
  padding: 12px 24px;
  border-radius: 8px;
  background: #ffffff;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    min-height: 172px;
    justify-content: space-around;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    @media screen and (min-width: 768px) {
      width: fit-content;
      height: 36px;
      gap: 12px;
    }

    > span {
      color: #ffffff;
      font-weight: 800;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 96px;
      height: 36px;
      border-radius: 4px;
      background: #373737;

      @media screen and (min-width: 768px) {
        color: #000000;
        background: transparent;
      }
    }
  }
`;

export const ImageWrapper = styled.div`
  max-width: fit-content;
`;

export const ItemActions = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 96px;
  height: 100%;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  overflow: hidden;

  @media screen and (min-width: 768px) {
    &::before {
      content: 'Qtd:';
      font-size: 0.75rem;
      position: absolute;
      top: -24px;
      left: 0;
    }
  }

  > span {
    font-size: 1.25rem;
    font-weight: 600;
  }
`;

export const Separator = styled.div`
  width: 1px;
  height: 60%;
  background: rgba(0, 0, 0, 0.2);
`;

export const CartFooter = styled.div`
  height: 128px;

  > div {
    color: #ffffff;
    font-size: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    padding: 0 24px;
  }

  > button {
    color: #ffffff;
    font-size: 1.25rem;
    font-weight: 600;
    width: 100%;
    height: 64px;
    background: #000000;
  }
`;

export const RemoveButton = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;

  @media screen and (min-width: 768px) {
    color: #ffffff;
    display: flex;
    top: -12px;
    right: -12px;
    padding: 6px;
    border-radius: 50%;
    background: #000000;
  }
`;
