export default function Header() {
    return (
        <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
            <img 
                src="./assets/shaz.png" 
                alt="Shahil Ahmed" 
                className="rounded-full w-32 border-4 border-white shadow-lg"
            />
            <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
                Hi! I'm Shahil Ahmed
                <img src="./assets/hand-icon.png" alt="wave" className="w-6 mb-1" />
            </h3>
            <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">MERN Stack Developer</h1>
            <p className="max-w-2xl mx-auto font-Ovo">
                Full-stack developer from India skilled in building modern, responsive web applications using React, Node.js, Express, and MongoDB.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                <a 
                    href="#contact"
                    className="px-10 py-2.5 border rounded-full bg-gradient-to-r from-[#11998e] to-[#38ef7d] text-white flex items-center gap-2 dark:border-transparent"
                >
                    Contact Me <img src="./assets/right-arrow-white.png" alt="" className="w-4" />
                </a>

                <a 
                    href="./assets/shahil-resume.pdf" 
                    download
                    className="px-10 py-2.5 rounded-full border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover flex items-center gap-2 bg-white dark:bg-transparent dark:text-white"
                >
                    Download CV <img src="./assets/download-icon.png" alt="" className="w-4 dark:invert" />
                </a>
            </div>
        </div>
    );
}