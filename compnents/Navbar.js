"use client";

import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AllOutIcon from '@mui/icons-material/AllOut';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import FaceIcon from '@mui/icons-material/Face';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import { useSession, signOut } from 'next-auth/react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Image from "next/image";
import ShoppingCart from "./ShoppingCart";
import { useShoppingCart } from "use-shopping-cart" ; 
function Navbar() {
  const { handleCartClick, cartCount } = useShoppingCart(); 
  const { data } = useSession();
  const router = useRouter();
  const [onTop, setOnTop] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  const handleScroll = () => { if (window.pageYOffset === 0) { setOnTop(true); } else { setOnTop(false); } }

  return (
    <>
      <link rel="stylesheet" type="text/css" href="assets/css/font-awesome.css" />

      <link rel="stylesheet" href="assets/css/templatemo-hexashop.css" />

      <link rel="stylesheet" href="assets/css/owl-carousel.css" />

      <link rel="stylesheet" href="assets/css/lightbox.css" />
      <header className="header-area header-sticky" >
      <div className="container" >
          <div >
            <div className="col-12">
              <nav className="main-nav">

                <a href="index.html" className="logo">
                  <img src="assets/images/logo.png" />
                </a>

                <ul className="nav">
                  <li><Button color="inherit" onClick={() => router.push('/')}>Accueil</Button></li>

                

                 <li> <Button color="inherit" onClick={() => signOut()}> Logout </Button></li>


                  <li><Button color="inherit" onClick={() => router.push('/login')}> Login </Button></li>

                  <li><Button color="inherit" onClick={() => router.push('/products')}> product</Button></li>
                  <li> <button className="relative" onClick={() => handleCartClick()}>
                    <Image
                      src="/images/cart.png"
                      width={40}
                      height={40}
                      alt="shopping cart icon"
                    />
                    <div className="rounded-full flex justify-center items-center
bg-emerald-500 text-xs text-white absolute w-6 h-5 bottom-6 -right-1">
                        {cartCount} 
                    </div>
                  </button></li>
                  <li><Button color="inherit" onClick={() =>
                    router.push('/cartProducts')}><ShoppingBasketIcon style={{ color: 'pink' }} />
                    Shopping Cart </Button></li>
                  

                  <ShoppingCart />
                  </ul>
              </nav>
            </div>
          </div>
        </div>
        

      </header>




                  <a className='menu-trigger'>
                    <span>Menu</span>
                  </a>
              


    </>

  );
}

export default Navbar; 