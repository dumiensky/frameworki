import React from 'react';
import { SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { Link, useLocation } from "react-router-dom";

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuProps['items'] = [
    getItem(<Link to="/">Home</Link>, "home", <SettingOutlined />),
    { type: 'divider' },
    getItem(<Link to="/users">Users</Link>, "users", <SettingOutlined />),
    getItem(<Link to="/posts">Posts</Link>, "posts", <SettingOutlined />),
    getItem(<Link to="/albums">Albums</Link>, "albums", <SettingOutlined />),
];

const MyMenu = () => {
    const { pathname } = useLocation();

    const getSelectedKey = () => {
        const selectedKey = items.find((item) => pathname.includes(item?.key as string))?.key;
        return selectedKey
            ? ([selectedKey] as string[])
            : ["home"];
    };

    return (
        <Menu
            theme='dark'
            style={{ width: 256 }}
            defaultSelectedKeys={['home']}
            selectedKeys={getSelectedKey()}
            mode="inline"
            items={items}
        />
    );
};

export default MyMenu;