import styled from 'styled-components';

export const Container = styled.div`
  z-index: 9;
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }

    a {
      font-weight: bold;
      color: #7159c1;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Menu = styled.div`
  margin-top: 15px;
  cursor: default;
  user-select: none; /* standard syntax */
  -webkit-user-select: none; /* webkit (safari, chrome) browsers */
  -moz-user-select: none; /* mozilla browsers */
  -khtml-user-select: none; /* webkit (konqueror) browsers */
  -ms-user-select: none; /* IE10+ */

  div {
    text-align: left;

    strong {
      display: block;
      color: #fff;
      font-size: 18px;
    }
  }
`;

export const ContainerMenu = styled.div`
  position: relative;
  background: none;
  z-index: 9;

  div {
    visibility: hidden;
  }

  &:hover {
    div {
      visibility: visible;
    }
  }
`;

export const Badge = styled.label`
  background: none;
  border: 1;
  padding: 15px 48px;
  border: 15px;
  border-radius: 8px;
`;

export const MenuItemList = styled.div`
  position: absolute;
  width: 260px;
  left: calc(50% - 130px);

  background: rgba(0, 0, 0, 0.9);
  border-radius: 4px;

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 20px);
  }
`;

export const MenuItem = styled.div`
  color: #fff;

  & + div {
    margin-top: 2px;
    padding-top: 2px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  button {
    font-size: 12px;
    border: 1px;
    width: 260px;
    height: 40px;

    display: table-cell;
    vertical-align: middle;
    background: none;
    color: '#9159c1';
  }
`;

export const ContainerHeader = styled.div`
  background: transparent;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
`;

export const ContentHeader = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }

    a {
      font-weight: bold;
      color: #7159c1;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;
