import React from 'react'
import { PlusOutlined, MinusOutlined} from '@ant-design/icons';
import { Collapse, theme } from 'antd';
const { Panel } = Collapse;
const text = `
We supply a wide range of medical equipment, including diagnostic tools, patient monitoring devices, surgical instruments, laboratory equipment, imaging systems, and much more. Our inventory covers various specialties and healthcare needs.
`;
const Collape = () => {
    const { token } = theme.useToken();
    const panelStyle = {
        marginBottom: 24,
        background: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: 'none',
      };
  return (
    <div>
     <Collapse
     className='w-full'

      bordered={false}
      defaultActiveKey={['1']}
      expandIcon={({ isActive }) =>isActive ? <MinusOutlined className="icon" /> : <PlusOutlined className="icon2"/>}
      style={{ background: token.colorBgContainer }}
    >
      <Panel header="What types of medical equipment do you supply?" key="1" style={panelStyle}>
        <p>{text}</p>
      </Panel>
      <Panel header="Do you offer warranty and technical support for the equipment?" key="2" style={panelStyle}>
        <p>{text}</p>
      </Panel>
      <Panel header="How can I place an order for medical equipment?" key="3" style={panelStyle}>
        <p>{text}</p>
      </Panel>
      
      <Panel header="Do you provide customized solutions to meet specific needs?" key="5" style={panelStyle}>
        <p>{text}</p>
      </Panel>
      <Panel header="Can you help with equipment selection and recommendations?" key="6" style={panelStyle}>
        <p>{text}</p>
      </Panel>
      <Panel header="What is the average delivery time for orders?" key="7" style={panelStyle}>
        <p>{text}</p>
      </Panel>
    </Collapse>
    </div>
  )
}

export default Collape