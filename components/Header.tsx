import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const { logout } = useAuth();
    useEffect(()=>{
        const handleScroll = () =>{
            if(window.scrollY > 0){
                setIsScrolled(true)
            }else{
                setIsScrolled(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    },[])
  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
          alt="logo"
        />
        <ul className="hidden space-x-4 md:flex ">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My LIst</li>
        </ul>
      </div>
      <div className="flex item-center space-x-4 text-sm font-light">
        <MagnifyingGlassIcon className="hidden sm:inline h-6 w-6 " />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6" />
        <Link href="/account">
          <img
            src="https://cutt.ly/a8RR0tR"
            alt=""
            className="cursor-pointer rounded h-6 w-6"
            onClick={logout}
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
