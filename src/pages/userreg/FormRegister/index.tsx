import React from "react";
import styles from "./index.less";
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  message,
  Layout,
  Select,
  Modal,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete
} from "antd";

function success() {
  Modal.success({
    content: 'some messages...some messages...',
  });
}
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;
const { Header, Content, Footer, Sider } = Layout;
const residences = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake"
          }
        ]
      }
    ]
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men"
          }
        ]
      }
    ]
  }
];

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: []
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = [".com", ".org", ".net"].map(
        domain => `${value}${domain}`
      );
    }
    this.setState({ autoCompleteResult });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };
    const prefixSelector = getFieldDecorator("prefix", {
      initialValue: "86"
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="852">+852</Option>
      </Select>
    );

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    const sendCaptcha = () => {
      message.success('Captcha Sent');
    };
    const verifyAndReg = () => {
      Modal.success({
        title: 'Information',
        content: 'Succeed',
      });
    };

    

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Row>
          <Col span={14} offset={4}>
          <Form.Item  label="E-mail">
          {getFieldDecorator("email", {initialValue: 'antdesign@xatu.edu.cn',
            rules: [
              {
                type: "email",
                message: "The input is not valid E-mail!"
              },
              {
                required: true,
                message: "Please input your E-mail!"
              }
            ]
          })(<Input />)}
        </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={14} offset={4}>
        <Form.Item label="Password" hasFeedback>
          {getFieldDecorator("password", {initialValue: '123456789',
            rules: [
              {
                required: true,
                message: "Please input your password!"
              },
              {
                validator: this.validateToNextPassword
              }
            ]
          })(<Input.Password/>)}
        </Form.Item>
        </Col>
        </Row>
        <Row>
          <Col span={14} offset={4}>
        <Form.Item label="Confirm Password" hasFeedback>
          {getFieldDecorator("confirm", {initialValue: '123456789',
            rules: [
              {
                required: true,
                message: "Please confirm your password!"
              },
              {
                validator: this.compareToFirstPassword
              }
            ]
          })(<Input.Password  onBlur={this.handleConfirmBlur} />)}
        </Form.Item>
        </Col>
        </Row>
        <Row>
          <Col span={14} offset={4}>
        <Form.Item
          label={
            <span>
              Nickname&nbsp;
              <Tooltip title="What do you want others to call you?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          }
        >
          {getFieldDecorator("nickname", {initialValue: 'Your Nickname',
            rules: [
              {
                required: true,
                message: "Please input your nickname!",
                whitespace: true
              }
            ]
          })(<Input />)}
        </Form.Item>
</Col>
</Row>

<Row>
          <Col span={14} offset={4}>
        <Form.Item label="Phone number:" extra="We must verify your phone numer.">
          <Row gutter={8}>
            <Col span={24}>
            {getFieldDecorator('phone', {initialValue: '18918910000',rules: [{ required: true, whitespace: true,message: 'Please input your phone number!' }],})(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
            </Col>
            <Col span={2}>
              <Button onClick={sendCaptcha}>Get captcha</Button>
            </Col>
          </Row>
        </Form.Item>
        </Col>
</Row>
<Row>
          <Col span={14} offset={4}>
        <Form.Item label="Captcha" >
          <Row gutter={8}>
            <Col span={12}>
              {getFieldDecorator('captcha', {initialValue: '486925',
                rules: [{ required: true, message: 'Please input the captcha you got!' }],
              })(<Input />)}
            </Col>
          </Row>
        </Form.Item>
        </Col>
        </Row>





<Row>
          <Col span={20} offset={}>
        <Form.Item {...tailFormItemLayout}>
            <Checkbox defaultChecked={true}>
              I have read the <a href="http://www.gnu.org/licenses/gpl-3.0.html">agreement</a>
            </Checkbox>
            <Col span={8} offset={4}>
            <Button type="primary" onClick={verifyAndReg} htmlType="submit">
            Register
          </Button>
          </Col>
        </Form.Item>
              </Col>
</Row>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: "register" })(
  RegistrationForm
);

export default () => (
  <div className={styles.container}>
    <div id="components-form-demo-register">
      <WrappedRegistrationForm />
    </div>
  </div>
);
