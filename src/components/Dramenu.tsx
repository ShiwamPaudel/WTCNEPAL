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
        <ul className="flex flex-col items-center gap-[40px] font-[inter] font-normal text-xs leading-[14.52px] text-[#000000]">
            <li><a href="">HOME</a></li>
            <li><Link href="/aboutus">ABOUT US</Link></li>
            <li><Link href="/mba">NEWS & EVENT</Link></li>
            <li><Link href="/ielts">PRODUCT CATEGORY</Link></li>
            <li><a href="">CAREER</a></li>
            <li><a href="">CHECK MAIL</a></li>
            <li><a href="">CONTACT US</a></li>
        </ul>
      </Drawer>
    </>
  )
}

export default Dramenu