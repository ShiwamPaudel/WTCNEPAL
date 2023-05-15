import React,{useState} from 'react'
import { Button, Drawer } from 'antd';
import { FaBars } from 'react-icons/fa';
import Link from 'next/link';
function Dramenu() {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
      setOpen(true);
    };
    
    const onClose = () => {
      setOpen(false);
    };
  return (
    <>
    <FaBars fontSize={25} onClick={showDrawer} className="baricons"/>
      <Drawer  placement="right" onClose={onClose} open={open}>
        <ul className="flex flex-col items-start pl-[0px] justify-start gap-[40px] font-[inter] font-normal text-[16px] leading-[14.52px] text-[#000000]">
            <li className='text-start'><Link href="/">HOME</Link></li>
            <li><Link href="/about">ABOUT US</Link></li>
            <li><Link href="/">NEWS & EVENT</Link></li>
            <li><Link href="/">PRODUCT CATEGORY</Link></li>
            <li><Link href="">CAREER</Link></li>
            <li><Link href="">CHECK MAIL</Link></li>
            <li><Link href="/contact">CONTACT US</Link></li>
        </ul>
      </Drawer>
    </>
  )
}

export default Dramenu