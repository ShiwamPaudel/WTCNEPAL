import React from 'react'
import { PlusOutlined, MinusOutlined} from '@ant-design/icons';
import { Collapse, theme } from 'antd';
const { Panel } = Collapse;
const text = `
Frequently Asked Curabitur tincidunt turpis sit amet blandit maximus. Fusce ut feugiat justo. Phasellus ultricies venenatis rhoncus. Mauris aliquam semper nisl, non tincidunt metus tempor eu. Questions
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
    <>
     <Collapse
     className='w-full'

      bordered={false}
      defaultActiveKey={['1']}
      expandIcon={({ isActive }) =>isActive ? <MinusOutlined className="icon" /> : <PlusOutlined className="icon2"/>}
      style={{ background: token.colorBgContainer }}
    >
      <Panel header="Frequently Asked Questions" key="1" style={panelStyle}>
        <p>{text}</p>
      </Panel>
      <Panel header="Frequently Asked Questions" key="2" style={panelStyle}>
        <p>{text}</p>
      </Panel>
      <Panel header="Frequently Asked Questions" key="3" style={panelStyle}>
        <p>{text}</p>
      </Panel>
      
      <Panel header="Frequently Asked Questions" key="5" style={panelStyle}>
        <p>{text}</p>
      </Panel>
      <Panel header="Frequently Asked Questions" key="6" style={panelStyle}>
        <p>{text}</p>
      </Panel>
      <Panel header="Frequently Asked Questions" key="6" style={panelStyle}>
        <p>{text}</p>
      </Panel>
    </Collapse>
    </>
  )
}

export default Collape