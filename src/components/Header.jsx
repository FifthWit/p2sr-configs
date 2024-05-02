import { useEffect, useState } from 'react';
import pb from "../lib/pocketbase";
import Signup from '../lib/Signup';
import logo from "../lib/imgs/logo.png";
import search from "../lib/imgs/search.svg";
import browse from "../lib/imgs/browse.svg";
import create from "../lib/imgs/create.svg";
import logout from "../lib/imgs/logout.svg";

function Icon({ src, children, onclick }){
    return (
    <div onClick={onclick} className='flex justify-center items-center w-full cursor-pointer select-none'>
        <img src={src} className='hidden md:block' />
        <span className='ml-2'>{children}</span>
    </div>
    )
}

export default function Header({ configItemsTab, createConfigsTab, homeTab }) {
    const [showSignIn, setShowSignIn] = useState(false);

    const username = pb.authStore && pb.authStore.model && pb.authStore.model.username;

    function signout() {
        pb.authStore.clear();
        window.location.reload();
    }


    const toggleSignIn = () => {
        setShowSignIn(!showSignIn);
    };

    useEffect(() => {
        const searchInput = document.querySelector("#searchInp")

        searchInput.addEventListener("input", ()=> {
            updateSearch(searchInput.value)
        })

        function updateSearch(value) {
            const searchables = document.querySelectorAll("[search]")
            for (let i = 0; i < searchables.length; i++) {
                const searchable = searchables[i]
                const searchableText = searchable.getAttribute("search")
                if (searchableText.toLowerCase().includes(value.toLowerCase())) {
                    searchable.classList.remove("hidden")
                } else {
                    searchable.classList.add("hidden")
                }
            }
        }
    })

    return (
        <div className='barlow-condensed-semibold w-screen h-24 bg-white dark:bg-dark-primary border-b-4 border-b-secondary fixed z-50 top-0 flex'>
            <div className='flex items-center w-full z-30'>
                <div onClick={homeTab} className='h-16 flex ml-10 align-middle items-center select-none cursor-pointer'>
                    <div className='aspect-square h-12 w-12'> {/* this code is fucked why did u write it wolf */}
                        <img className='' src={logo} />
                    </div>
                    <span className='barlow-condensed-semibold text-4xl uppercase hidden md:block dark:text-white text-black'>P2SR CONFIGS</span>
                </div>
                <div className='w-96 ml-7 rounded-xl overflow-hidden bg-dark-secondary hidden sm:flex'>
                    <input id='searchInp' placeholder='Search configs' className='barlow-condensed-semibold text-xl w-full placeholder:text-gray-400 placeholder:dark:text-dark-primary-alt bg-gray-200 dark:bg-dark-secondary' />
                </div>
                <div style={{width: "500px"}} className='text-2xl uppercase ml-10 flex'>
                    <Icon onclick={configItemsTab} src={browse}>Browse Configs</Icon>
                    <Icon onclick={createConfigsTab} src={create}>Create Configs</Icon>
                </div>

                <div id='loginBtn' className={`${username !== null ? 'hidden' : ''} flex ml-auto mr-10 cursor-pointer`}>
                    <span className='text-3xl' onClick={toggleSignIn}>Log In</span>
                </div>

                <div className={`flex h-full ml-auto cursor-pointer group ${username == null ? 'hidden' : ''}`}>
                    <div className='flex items-center mr-10'>
                        <div className="text-center">
                            <span className='barlow-condensed-extralight text-xl'>Welcome Back!</span><br/>
                            <span className='barlow-condensed-medium text-3xl'>{username}</span>
                            <div className={`absolute text-left right-10 top-20 w-28 bg-dark-secondary-alt text-xl transition-all scale-0 group-hover:scale-100 origin-top`}>
                                <div onClick={signout} className='w-full p-2 cursor-pointer flex transition-all'>
                                    <span>Log Out</span>
                                    <img className='ml-auto' src={ logout } />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                
            {showSignIn && <Signup />}
        </div>
    );
}
