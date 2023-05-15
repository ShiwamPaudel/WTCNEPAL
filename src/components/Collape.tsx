import React from 'react'
import { PlusOutlined, MinusOutlined} from '@ant-design/icons';
import { Collapse, theme } from 'antd';
const { Panel } = Collapse;
const text = `
We supply a wide range of medical equipment, including but not limited to: hospital beds, wheelchairs, oxygen concentrators, ECG machines, ultrasound machines, blood glucose monitors, nebulizers, and surgical instruments. Please feel free to contact us with specific inquiries.
`;
const text2 = `
Yes, we offer warranty and technical support for all the medical equipment we supply. Our standard warranty period is one year, and we provide technical support both online and over the phone. In addition, we have a team of experienced technicians who can provide on-site support if required.
`;
const text3 = `
You can place an order for medical equipment by contacting us via phone, email, or through our website. Our customer service team will guide you through the process and provide you with all the necessary information regarding pricing, payment options, and delivery times.
`;
const text4 = `
Yes, we understand that different healthcare facilities have different requirements, and we strive to provide customized solutions to meet their specific needs. Our team of experts can work with you to identify your specific requirements and provide tailor-made solutions that best fit your needs.
`;
const text5 = `
Absolutely. Our team of experts has extensive knowledge of the medical equipment industry and can provide you with expert advice and recommendations on equipment selection based on your specific requirements and budget.
`;
const text6 = `
The average delivery time for orders depends on the type of equipment and the location of the delivery. However, we strive to ensure timely delivery of all our orders, and our customer service team will keep you informed of the estimated delivery time for your order
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
        <p>{text2}</p>
      </Panel>
      <Panel header="How can I place an order for medical equipment?" key="3" style={panelStyle}>
        <p>{text3}</p>
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