import styled from 'styled-components';

export const Container = styled.div`
  .filter-container-principal {
    header {
      padding-bottom: 10px;
      padding-top: 10px;
    }
  }
  .filter-content-container {
    background-color: #fff;
    header {
      padding-left: 0;
      padding-right: 0;
    }
  }
  .content {
    header {
      align-items: center;
      display: flex;
      justify-content: space-between;
      margin-bottom: 16px;
      min-height: 50px;
    }
    .table-container {
      span {
        height: 500px !important;
        width: 100% !important;
      }
    }
  }
`;
