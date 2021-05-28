import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Menu, ContainerHeader, ContentHeader } from './styles';
import MenuItem, { MenuProps } from '../Menu';

const Header: React.FC = () => {
  const list: MenuProps[] = [
    {
      description: 'Cadastro',
      isAtivo: false,
      menuItemList: [
        { description: 'Usuários', page: '/users' },
        { description: 'Lojas', page: '/stores' },
        { description: 'Categorias', page: '/categories' },
        { description: 'Produtos', page: '/products' },
        { description: 'Fornecedores', page: '/providers' },
      ],
    },

    {
      description: 'Administrativo',
      isAtivo: false,
      menuItemList: [
        { description: 'Recheios', page: '/fillings' },
        {
          description: 'Composição dos Fabricáveis',
          page: '/fabricableComposition',
        },
        { description: 'Vendas', page: '/sales' },
        { description: 'Arquivo SAT', page: '/accounting' },
      ],
    },
  ];

  const [listaMenu, setListaMenu] = useState<MenuProps[]>(list);

  const handleUpdateSelectedMenu = useCallback(
    (position: number) => {
      if (listaMenu[position].isAtivo) {
        setListaMenu(list);
      } else {
        if (!listaMenu[position].menuItemList?.length) {
          setListaMenu(list);
          return;
        }
        const retorno = list.map((obj, index) => {
          return {
            ...obj,
            isAtivo: index === position,
          };
        });
        setListaMenu(retorno);
      }
    },
    [listaMenu, list],
  );

  return (
    <ContainerHeader>
      <ContentHeader>
        {listaMenu.map((obj, index) => (
          <Menu
            key={obj.description}
            onMouseUp={() => handleUpdateSelectedMenu(index)}
          >
            <div>
              {obj.page ? (
                <Link to={obj.page}>
                  <strong>{obj.description}</strong>
                </Link>
              ) : (
                <strong>{obj.description}</strong>
              )}
            </div>
            {<MenuItem isAtivo={obj.isAtivo} menuItemList={obj.menuItemList} />}
          </Menu>
        ))}
      </ContentHeader>
    </ContainerHeader>
  );
};

export default Header;
