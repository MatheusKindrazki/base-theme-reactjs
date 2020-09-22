import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  padding: 8px 0;
  .wrapper {
    align-items: center;
    display: flex;
    justify-content: space-between;
    .logo {
      align-items: center;
      display: flex;
      span.logo-title {
        font-weight: bold;
        margin-left: 20px;
      }
    }
  }
`;
