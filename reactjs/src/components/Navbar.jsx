import { useEffect, useRef } from 'react';

export default function Navbar() {
    const sideMenuRef = useRef();
    const navRef = useRef();
    const navLinkRef = useRef();

    const openMenu = () => sideMenuRef.current.style.transform = 'translateX(0)';
    const closeMenu = () => sideMenuRef.current.style.transform = 'translateX(16rem)';

    const toggleTheme = () => {
        document.documentElement.classList.toggle('dark');
        localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                navRef.current.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
                navLinkRef.current.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:bg-transparent');
            } else {
                navRef.current.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
                navLinkRef.current.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/30', 'dark:bg-transparent');
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    return (
        <>
            <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
                <img src="./assets/header-bg-color.png" alt="" className="w-full" />
            </div>

            <nav ref={navRef} className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
                {/* LOGO REMOVED — NAME ADDED */}
                <h1 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mr-14 tracking-tight">
                    Shahil Ahmed
                </h1>

                <ul ref={navLinkRef} className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 font-Ovo dark:border dark:border-white/30 dark:bg-transparent">
                    <li><a href="#top" className="hover:text-gray-500 dark:hover:text-gray-300">Home</a></li>
                    <li><a href="#about" className="hover:text-gray-500 dark:hover:text-gray-300">About</a></li>
                    <li><a href="#education" className="hover:text-gray-500 dark:hover:text-gray-300">Education</a></li>
                    <li><a href="#skills" className="hover:text-gray-500 dark:hover:text-gray-300">Skills</a></li>
                    <li><a href="#projects" className="hover:text-gray-500 dark:hover:text-gray-300">Projects</a></li>
                    <li><a href="#experience" className="hover:text-gray-500 dark:hover:text-gray-300">Experience</a></li>
                    <li><a href="#contact" className="hover:text-gray-500 dark:hover:text-gray-300">Contact</a></li>
                </ul>

                <div className="flex items-center gap-4">
                    <button onClick={toggleTheme}>
                        <img src="./assets/moon_icon.png" alt="" className="w-5 dark:hidden" />
                        <img src="./assets/sun_icon.png" alt="" className="w-5 hidden dark:block" />
                    </button>

                    <button className="block md:hidden ml-3" onClick={openMenu}>
                        <img src="./assets/menu-black.png" alt="" className="w-6 dark:hidden" />
                        <img src="./assets/menu-white.png" alt="" className="w-6 hidden dark:block" />
                    </button>
                </div>

                <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 font-Ovo dark:bg-darkHover dark:text-white">
                    <div className="absolute right-6 top-6" onClick={closeMenu}>
                        <img src="./assets/close-black.png" alt="" className="w-5 cursor-pointer dark:hidden" />
                        <img src="./assets/close-white.png" alt="" className="w-5 cursor-pointer hidden dark:block" />
                    </div>
                    <li><a href="#top" onClick={closeMenu}>Home</a></li>
                    <li><a href="#about" onClick={closeMenu}>About</a></li>
                    <li><a href="#education" onClick={closeMenu}>Education</a></li>
                    <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
                    <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
                    <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
                    <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                </ul>
            </nav>
        </>
    );
}