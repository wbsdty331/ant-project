import React from 'react';
import { Card, Typography, Icon } from 'antd';
import { Row, Col } from 'antd';

export default (): React.ReactNode => (
  <div style={{ textAlign: "center" }}>
    <Card>
    <Row gutter={24}>
  <Col span={12} offset={6}>
      <div style={{ background: '#00A2E8', color: '#FFF' }}>
        <img src="https://www.xatu.edu.cn/images2018/c_r1_c2.png"></img>
      </div>
      <br></br>
      </Col>
      </Row>
      <div>
        <img width="150" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"></img>
        <Icon type="plus" />
        <img width="160" src="https://gw.alipayobjects.com/zos/rmsportal/tXlLQhLvkEelMstLyHiN.svg"></img>
      </div>
      <Typography.Title level={2} style={{ textAlign: 'center' }}>
        Ant Design {' '}
        <Icon type="plus" /> React Native
      </Typography.Title>
      <h1>This Project made by Dr.Thril/XATUSEC</h1>
      <p></p>
    </Card>

    <p style={{ textAlign: 'center', marginTop: 24 }}>
      Any Question? Please email to
      <a href="mailto:wbsdty331@outlook.com" target="_blank" rel="me">
        {''}  me
      </a>
      。
    </p>
  </div>
);
