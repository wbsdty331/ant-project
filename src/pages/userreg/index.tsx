import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React from 'react';
import styles from './index.less';
import GridBasic from './GridBasic';
import FormRegister from './FormRegister';
export default () => {
  return (
    <PageHeaderWrapper content="在注册前，请先阅读用户许可协议" className={styles.main}>
      <GridBasic />
      <FormRegister />
    </PageHeaderWrapper>
  );
};
