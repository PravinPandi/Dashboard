import { Card, Col, Row } from 'antd';
import'./ant.css'
import {
    StockOutlined,
    UserOutlined,
    DollarCircleOutlined,
    ShoppingCartOutlined,
  } from '@ant-design/icons';

const car= () => (
  <div className="site-card-wrapper">
    <Row gutter={12}>
      <Col span={6}>
        <Card bordered={false}>
            <StockOutlined className='stock'/><span>16</span><b> Growth</b>
        </Card>
      </Col>
      <Col span={6}>
        <Card bordered={false}>
            <UserOutlined className='users'/><b>22% Users</b>
        </Card>
      </Col>
      <Col span={6}>
        <Card bordered={false}>
            <DollarCircleOutlined className='dollar'/><b>51k Profit</b>
        </Card>
        </Col>
        <Col span={6}>
        <Card bordered={false}>
        <ShoppingCartOutlined className='cart'/><b>21k Sales</b>
        </Card>
      </Col>
    </Row>
  </div>
);

export default car;