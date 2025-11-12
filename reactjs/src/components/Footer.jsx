export default function Footer() {
    return (
        <div className="mt-20">
            <div className="text-center">
                {/* LOGO REMOVED — NAME ADDED */}
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">
                    Shahil Ahmed
                </h2>

                <div className="w-max flex items-center gap-2 mx-auto mb-6">
                    <img src="./assets/mail_icon.png" alt="" className="w-5 dark:hidden" />
                    <img src="./assets/mail_icon_dark.png" alt="" className="w-5 hidden dark:block" />
                    <a href="mailto:786shahilahmed@gmail.com" className="text-sm md:text-base">
                        786shahilahmed@gmail.com
                    </a>
                </div>
            </div>

            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6 text-sm">
                <p className="text-gray-600 dark:text-white/70">
                    © 2025 Shahil Ahmed - MERN Stack Developer. All rights reserved.
                </p>
                <ul className="flex items-center gap-8 justify-center mt-4 sm:mt-0">
                    <li>
                        <a 
                            target='_blank' 
                            href="https://github.com/shaz-code" 
                            rel="noopener noreferrer"
                            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
                        >
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a 
                            target='_blank' 
                            href="https://www.linkedin.com/in/shahil-ahmed-mf" 
                            rel="noopener noreferrer"
                            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
                        >
                            LinkedIn
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}