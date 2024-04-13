'use client';

import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  min-height: 4.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  background: #0f52ba;

  > h1 {
    color: #ffffff;
    font-size: 2rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    > span {
      font-size: 1rem;
      font-weight: 500;
    }
  }

  > button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    padding: 8px 12px;
    background: #ffffff;
    border-radius: 8px;
    overflow: hidden;

    > span {
      font-size: 1.25rem;
      font-weight: 600;
    }
  }
`;
