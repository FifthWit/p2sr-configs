import { useState } from 'react';
import Signup from '../lib/Signup';
import logo from "../lib/imgs/logo.png";
import search from "../lib/imgs/search.svg";
import browse from "../lib/imgs/browse.svg";
import create from "../lib/imgs/create.svg";

export default function Header() {
    const [showSignIn, setShowSignIn] = useState(false);

    const toggleSignIn = () => {
        setShowSignIn(!showSignIn);
    };

    return (
        <div className='barlow-condensed-semibold w-screen h-24 bg-dark-primary border-b-4 border-b-secondary fixed top-0 z-50 flex'>
            <div className='flex items-center w-full'>
                <div className='h-16 flex ml-10 align-middle items-center select-none'>
                    <img className='h-full' src={logo}></img>
                    <span className='barlow-condensed-semibold text-4xl uppercase'>P2SR CONFIGS</span>
                </div>
                <div className='w-96 ml-7 rounded-xl overflow-hidden flex bg-dark-secondary'>
                    <img className='ml-2 w-8' src={search}></img>
                    <input placeholder='Search configs' className='barlow-condensed-semibold text-xl w-full placeholder:text-dark-primary-alt'></input>
                </div>
                <div style={{width: "500px"}} className='text-2xl uppercase ml-10 flex'>
                    <div className='flex justify-center items-center w-full cursor-pointer'>
                        <img src={browse}></img>
                        <span className='ml-2'>Browse Configs</span>
                    </div>
                    <div className='flex justify-center items-center w-full cursor-pointer'>
                        <img src={create}></img>
                        <span className='ml-2'>Create Configs</span>
                    </div>
                </div>

                <div className='absolute right-0 h-full'>
                    <button className='h-16 w-24' onClick={toggleSignIn}>Log in</button>
                </div>
            </div>
            {showSignIn && <Signup />}
        </div>
    );
}
