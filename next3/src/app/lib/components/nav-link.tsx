"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"


interface Props{
    children: React.ReactNode
    href:string
    name?:string
    className?:string
}
export const NavLink = ({children, href, name='active', className}:Props) => {
    const path = usePathname()
    if(path == href){
        className+=' ' + name
    }
    return <Link className={className} href={href}>{children}</Link>
}       