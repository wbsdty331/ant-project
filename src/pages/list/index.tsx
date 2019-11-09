import { Card, Col, Form,  Row, Select } from 'antd';
import React, { Component } from 'react';
import { Input } from 'antd';
import { Dispatch } from 'redux';
import { FormComponentProps } from 'antd/es/form';
import { connect } from 'dva';
import { Pagination } from 'antd';
import { StateType } from './model';
import StandardFormRow from './components/StandardFormRow';
import TagSelect from './components/TagSelect';

const { Option } = Select;
const FormItem = Form.Item;
const { Search } = Input;
const { Meta } = Card;
interface ProjectsProps extends FormComponentProps {
  dispatch: Dispatch<any>;
  listAndsearchAndprojects: StateType;
  loading: boolean;
}

function gotoshop(){
  window.location.href='https://www.jd.com';
}

class Projects extends Component<ProjectsProps> {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'listAndsearchAndprojects/fetch',
      payload: {
        count: 8,
      },
    });
  }

  render() {
    const formItemLayout = {
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };

    return (
      <div>
        <Card bordered={false}>
          <Form layout="inline">
          <StandardFormRow title="商品名称" block style={{ paddingBottom: 4 }}>
          <Search
      placeholder="input search text"
      onSearch={value => console.log(value)}
      enterButton="Search"
      size="large"
 
    />
                </StandardFormRow>
            <StandardFormRow title="商品类别" block style={{ paddingBottom: 4 }}>
              <FormItem>
                  <TagSelect>
                    <TagSelect.Option value="cat1">酒水</TagSelect.Option>
                    <TagSelect.Option value="cat2">方便食品</TagSelect.Option>
                    <TagSelect.Option value="cat3">奶粉</TagSelect.Option>
                    <TagSelect.Option value="cat4">保健品</TagSelect.Option>
                  </TagSelect>
              </FormItem>
            </StandardFormRow>
            <StandardFormRow title="高级选项" grid last>
              <Row gutter={24}>
              <Col className="gutter-row" span={8}>
                  <FormItem {...formItemLayout} label="产地">
                      <Select defaultValue="中国" style={{ maxWidth: 200, width: '100%' }}>
                        <Option value="lisa1">中国</Option>
                        <Option value="lisa2">美国</Option>
                        <Option value="lisa3">日本</Option>
                      </Select>
                  </FormItem>
                </Col>
                <Col className="gutter-row" span={8}>
                  <FormItem {...formItemLayout} label="净含量">
                      <Select defaultValue="300g" style={{ maxWidth: 200, width: '100%' }}>
                        <Option value="widget1">300g</Option>
                        <Option value="widget2">300g-499g</Option>
                        <Option value="widget3">500g-999g</Option>
                      </Select>
                  </FormItem>
                </Col>
                <Col className="gutter-row" span={8}>
                  <FormItem {...formItemLayout} label="风味">
                      <Select defaultValue="中式" style={{ maxWidth: 200, width: '100%' }}>
                        <Option value="eat1">中式</Option>
                        <Option value="eat2">港式</Option>
                      </Select>
                  </FormItem>
                </Col>
              </Row>
            </StandardFormRow>
          </Form>
        </Card>
        <div style={{ background: '#ECECEC', padding: '10px' }}>
    <Row gutter={16}>
      <Col span={6}>
        <Card cover={
      <img
        alt="example"
        src="https://img10.360buyimg.com/n7/jfs/t26377/162/484527961/535683/145b2a6c/5baf3551N1847e783.jpg"
      />
    } onClick={gotoshop}  bordered={false}>
          <Meta  title="公仔面 方便面 海鲜味 泡面汤面 5包经济装 107g*5" description="www.instagram.com" />
      </Card>
      </Col>

      <Col span={6}>
        <Card  cover={
      <img
        alt="example"
        src="https://img12.360buyimg.com/n7/jfs/t802/283/930795372/161215/1a90bd66/555c493bN688cbb0b.jpg"
      />
    } onClick={gotoshop} bordered={false}>
          <Meta title="统一炸酱面" description="www.instagram.com" />
        </Card>
      </Col>
      <Col span={6}>
        <Card   cover={
      <img
        alt="example"
        src="https://img14.360buyimg.com/n7/jfs/t1/43064/1/7432/599538/5d107bd5Edc7da2e5/3c25d021ca865ce0.jpg"
      />
    } onClick={gotoshop} bordered={false}>
          <Meta title="康师傅方便面*5" description="www.instagram.com" />
        </Card>
      </Col>
      <Col span={6}>
        <Card   cover={
      <img
        alt="example"
        src="https://img11.360buyimg.com/n7/jfs/t1/80217/3/9265/301326/5d70d34fE04a99042/b3f40cc76a89d060.jpg"
      />
    } onClick={gotoshop}  bordered={false}>
          <Meta title="火鸡面 107g*5" description="www.instagram.com" />
        </Card>
      </Col>
    </Row>
  </div>
  <div style={{ background: '#ECECEC', padding: '10px' }}>
    <Row gutter={16}>
      <Col span={6}>
        <Card cover={
      <img
        alt="example"
        src="https://img13.360buyimg.com/n7/jfs/t11434/306/188245168/493737/d4fe6bf9/59e9b4fdNd8c99fec.jpg"
      />
    } onClick={gotoshop} bordered={false}>
          <Meta title="统一老坛酸菜牛肉面" description="www.instagram.com" />
      </Card>
      </Col>

      <Col span={6}>
        <Card  cover={
      <img
        alt="example"
        src="https://img10.360buyimg.com/n7/jfs/t1/78524/27/4390/231779/5d27e5dbE2cc5dac3/83686d9bcd66859e.jpg"
      />
    } onClick={gotoshop} bordered={false}>
          <Meta title="日清方便面" description="www.instagram.com" />
        </Card>
      </Col>
      <Col span={6}>
        <Card   cover={
      <img
        alt="example"
        src="https://img10.360buyimg.com/n7/jfs/t1/9281/18/1889/277878/5bd026fdEa4d87b10/b376c877e48670f2.jpg"
      />
    }   onClick={gotoshop} bordered={false}>
          <Meta title="华丰三鲜伊面" description="www.instagram.com" />
        </Card>
      </Col>
      <Col span={6}>
        <Card   cover={
      <img
        alt="example"
        src="https://img10.360buyimg.com/n7/jfs/t1/7237/26/11394/469278/5c2c2445E4233f9c8/3b3d7275c5f062ac.jpg"
      />
    } onClick={gotoshop} bordered={false}>
          <Meta title="海福盛老上海葱油拌面" description="www.instagram.com" />
        </Card>
      </Col>
    </Row>


    
  </div>
  <Row>
      <Col span={12} offset={6}> 
       <Pagination defaultCurrent={6} total={500} />
       </Col>
    </Row>

      </div>
    );
  }
}

const WarpForm = Form.create<ProjectsProps>({
  onValuesChange({ dispatch }: ProjectsProps) {
    // 表单项变化时请求数据
    // 模拟查询表单生效
    dispatch({
      type: 'listAndsearchAndprojects/fetch',
      payload: {
        count: 8,
      },
    });
  },
})(Projects);

export default connect(
  ({
    listAndsearchAndprojects,
    loading,
  }: {
    listAndsearchAndprojects: StateType;
    loading: { models: { [key: string]: boolean } };
  }) => ({
    listAndsearchAndprojects,
    loading: loading.models.listAndsearchAndprojects,
  }),
)(WarpForm);
