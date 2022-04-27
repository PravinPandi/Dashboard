import React from 'react';
import { Button } from 'antd';
import'./ant.css'


import { Layout, Menu, Breadcrumb, MenuProps } from 'antd';
import {
  TableOutlined,
  FormOutlined,
  HomeOutlined,
  ShopOutlined,
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  InfoCircleOutlined ,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Dashboard', '1', <HomeOutlined />),
  getItem('UI Kit', 'sub1', <ShopOutlined />, [
    getItem('Button', '2'),
    getItem('Card', '3'),
    getItem('Box', '4'),
  ]),
  getItem('Form', 'sub2', <FormOutlined />, [
    getItem('Component', '5'),
    getItem('Steps', '6'),
    getItem('Validation', '7'),
  ]),
  getItem('Table', 'sub3', <TableOutlined />, [
    getItem('Table', '8'),
    getItem('Data Table', '9'),
  ]),
  getItem('Chart', 'sub4', <PieChartOutlined />, [getItem('Pie', '10'), getItem('Bar', '11')]),
  getItem('Files', '12', <FileOutlined />),
  getItem('About', '13', <InfoCircleOutlined />),
];

class Design extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed: boolean) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default () => <Design />;