import React, { useState, useEffect } from "react";

import { BaseUrl } from "@/pages/api/global";
import axios from "axios";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { Collapse, theme } from "antd";
const { Panel } = Collapse;
const Collape = () => {
  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: "none",
  };

  const [testimonial, setTestimonial] = useState<any>(null);

  useEffect(() => {
    let getTestimonial = async () => {
      let response = await axios.get(
        `${BaseUrl}/faq-question-and-answers?populate=*`
      );
      // let response2 = await axios.get(`${BaseUrl}/testimonial-section?populate=*`)
      setTestimonial(response.data.data);
    };
    getTestimonial();
  }, []);
  // console.log(testimonial);

  return (
    <div className="basis-[50%]">
      <Collapse
        className="w-full"
        bordered={false}
        defaultActiveKey={["1"]}
        expandIcon={({ isActive }) =>
          isActive ? (
            <MinusOutlined className="icon" />
          ) : (
            <PlusOutlined className="icon2" />
          )
        }
        style={{ background: token.colorBgContainer }}
      >
        {testimonial?.map((item: any, index: number) => (
          <Panel
            header={item?.attributes?.question}
            key={item?.id}
            style={panelStyle}
          >
            <p>{item?.attributes?.answer}</p>
          </Panel>
        ))}

        {/* <Panel
          header="Do you offer warranty and technical support for the equipment?"
          key="2"
          style={panelStyle}
        >
          <p>{text2}</p>
        </Panel>
        <Panel
          header="How can I place an order for medical equipment?"
          key="3"
          style={panelStyle}
        >
          <p>{text3}</p>
        </Panel>

        <Panel
          header="Do you provide customized solutions to meet specific needs?"
          key="5"
          style={panelStyle}
        >
          <p>{text4}</p>
        </Panel>
        <Panel
          header="Can you help with equipment selection and recommendations?"
          key="6"
          style={panelStyle}
        >
          <p>{text5}</p>
        </Panel>
        <Panel
          header="What is the average delivery time for orders?"
          key="7"
          style={panelStyle}
        >
          <p>{text6}</p>
        </Panel> */}
      </Collapse>
    </div>
  );
};

export default Collape;
