import {Logo} from "@/components/common/Logo";
import Link from "next/link";

export const TopNav= ()=>{
    const navItems = [
        { link:"/", label:"Home"},
        { link:"/about", label:"About"},
        { link:"/rooms", label:"Rooms"},
        { link:"/services", label:"Services"},
        { link:"/contact", label:"Contact"},
    ]
    return <nav className="top-nav flex justify-between items-center px-wrapper">
        <Logo/>
        <div className="nav-items flex">
            {navItems.map((item,i)=>(
                <Link href={item.link} key={i} className={'px-md py-xs nav-item rounded-sm hover:bg-gray-200 cursor-pointer text-gray-900 dec'}>{item.label}</Link>
            ))}

        </div>
    </nav>
}