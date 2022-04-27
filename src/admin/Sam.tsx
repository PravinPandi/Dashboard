import React from 'react';
import'./ant.css'
import { Layout, MenuProps,Row,Card,Col,Divider,Button ,Dropdown, Space,Menu} from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import {
    TableOutlined,
    FormOutlined,
    HomeOutlined,
    ShopOutlined,
    UserOutlined,
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    InfoCircleOutlined ,
    RocketOutlined,
    WindowsOutlined,
    TeamOutlined,
  } from '@ant-design/icons';
import Demo from './table';
import Car from './Card'
import DemoColumn from './Graph';
import DemoPie from './Chart';

const menu = (
    <Menu
      items={[
        {
          label: <a >Profile</a>,
          key: '0',
        },
        {
          label: <a >Settings</a>,
          key: '1',
        }
      ]}
    />
  );

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

const { Header, Sider, Content } = Layout;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
    size: 'large',
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  onCollapse = (collapsed: boolean) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    const { size } = this.state;
    return (
        <Layout className="layout">
            <Header className="mainhead" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}

            <Dropdown overlay={menu} trigger={['click']} className='dropdown'>
                <a onClick={(e) => e.preventDefault()}>
                <Space>
                    <UserOutlined />
                    Pravin
                </Space>
                </a>
            </Dropdown>
          </Header>
        <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsed={collapsed} onCollapse={this.onCollapse} className='sider'>
          <Menu theme="light" defaultSelectedKeys={['1']}  items={items} />
        </Sider>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
            > 
        <Row gutter={32}>
            <Col span={12}>
                <Card title="KPIs" bordered={false}>
                    <DemoColumn />
                </Card>
            </Col>
            <Col span={12}>
                <Card title="Sources" bordered={false}>
                    <DemoPie/>
                </Card>
            </Col>
        </Row>
        <Divider/>
        <Car/>
        <Demo />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default () => <SiderDemo />;