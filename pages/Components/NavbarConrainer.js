import Link from 'next/link'
import React from 'react'
import tw from "tailwind-styled-components"
import { useState, useEffect } from "react"

const NavbarConrainer = () => {
const [showNavbar, setshowNavbar] = useState(false);
  return (
      
    <HomeContainer className="navbar_div">
        <NavbarMain>
            <Header>
                <Logo className='navbar_logo' src='https://i.ibb.co/k9ZsQhJ/IMG-20210114-WA0006.jpg'/>
            </Header>
            <MobileView>
                <Icon className="mobile_icon" onClick={() => {
                    setshowNavbar(!showNavbar);
                }}>
                    <Image className="image_navabr" src={ showNavbar ? 'https://img.icons8.com/cancel.png':'https://i.ibb.co/8dKWD9G/aero.png' }/>
                </Icon>
            </MobileView>
        </NavbarMain>
            <Navbar>
                <Link href='/'>
                    <Navlink className={showNavbar ? "navbar_show" : "navbar_close"}>Home</Navlink>
                </Link>
                <Link href='/Portfolio'>
                    <Navlink className={showNavbar ? "navbar_show" : "navbar_close"}>Projects</Navlink>
                </Link>
                <Link href='/About'>
                    <Navlink className={showNavbar ? "navbar_show" : "navbar_close"}>About</Navlink>
                </Link> 
            </Navbar> 
    </HomeContainer>
  )
}
const HomeContainer = tw.div`object-contain overflow-auto flex bg-black justify-between items-center sm:px-20 px-10 py-2 shadow-md z-10` 
const NavbarMain = tw.div`flex items-center justify-between w-full`
const Navbar = tw.div`sm:flex justify-evenly uppercase text-sm object-contain items-center`
const Navlink = tw.div`font-semibold mx-3 cursor-pointer text-white hover:text-sky-400 transition duration-500`
const Logo = tw.img`h-16 w-16  object-contain rounded-full bg-white shadow-lg `
const Header = tw.div`flex border-2 border-white p-0.5 rounded-full  object-contain `
const MobileView = tw.div``
const Icon = tw.div``
const Image = tw.img`w-10 rounded-full bg-white`
export default NavbarConrainer