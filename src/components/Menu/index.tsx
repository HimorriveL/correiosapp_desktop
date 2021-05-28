import React from 'react';
import { Link } from 'react-router-dom';
import { Container, NotificationList, Notification } from './styles';

interface MenuItemProps {
  description?: string;
  page?: string | undefined;
}

export interface MenuProps extends MenuItemProps {
  isAtivo: boolean;
  menuItemList?: MenuItemProps[];
}

const MenuItemList: React.FC<MenuProps> = ({
  isAtivo = false,
  menuItemList,
}) => {
  return (
    <Container>
      <NotificationList visible={isAtivo}>
        {menuItemList?.map(item => (
          <Notification key={item.description}>{item.page ?  <Link to={item.page}>
          <p>{item.description}</p>
        </Link> :   <p>{item.description}</p>}

          </Notification>
        ))}
      </NotificationList>
    </Container>
  );
};

export default MenuItemList;
