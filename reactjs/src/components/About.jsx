export default function About() {
    const tools = [
        { name: 'VS Code', icon: './assets/vscode.png' },
        { name: 'Firebase', icon: './assets/firebase.png' },
        { name: 'MongoDB', icon: './assets/mongodb.png' },
        { name: 'Git', icon: './assets/git.png' },
    ];

    return (
        <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">Get to Know Me</h4>
            <h2 className="text-center text-5xl font-Ovo">About Me</h2>

            <div className="flex w-full flex-col lg:flex-row items-center gap-16 my-20">
                {/* Profile Image */}
                <div className="max-w-max mx-auto relative">
                    <img 
                        src="./assets/shaz.png" 
                        alt="Shahil Ahmed - MERN Stack Developer" 
                        className="w-64 sm:w-80 rounded-3xl max-w-none shadow-xl" 
                    />
                    <div className="bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-lg flex items-center justify-center">
                        <img src="./assets/circular-text.png" alt="" className="w-full animate-spin_slow" />
                        <img src="./assets/dev-icon.png" alt="" className="w-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-6">
                    <p className="text-lg font-Ovo leading-relaxed text-gray-700 dark:text-white/90">
                        Hi, I’m <strong>Shahil Ahmed</strong>, a passionate <strong>MERN Stack Developer</strong> from Bangalore, India. 
                        I hold a <strong>Bachelor of Computer Applications (BCA)</strong> from 
                        <em> RR Institution of Management Studies</em> (2022–2025) with a <strong>CGPA of 8.38</strong>.
                    </p>

                    <p className="text-lg font-Ovo leading-relaxed text-gray-700 dark:text-white/90">
                        I’m currently pursuing a <strong>500-hour intensive MERN Stack Development program</strong> at 
                        <strong> Pentagon Space</strong>, where I’m building full-stack projects using 
                        <strong> React.js, Node.js, Express.js,</strong> and <strong>MongoDB</strong>. 
                        It’s helping me strengthen my problem-solving and teamwork skills while working on real-world apps.
                    </p>

                    <p className="text-lg font-Ovo leading-relaxed text-gray-700 dark:text-white/90">
                        I love turning ideas into clean, functional web solutions and continuously learning new technologies to grow as a developer.
                    </p>

                    {/* Tools */}
                    <div>
                        <h4 className="text-lg font-Ovo text-gray-700 dark:text-white/80 mb-3">Tools I Use Daily</h4>
                        <ul className="flex flex-wrap items-center gap-4">
                            {tools.map((tool) => (
                                <li 
                                    key={tool.name} 
                                    className="flex items-center justify-center w-12 h-12 border border-gray-300 dark:border-white/30 rounded-lg cursor-pointer hover:-translate-y-1 duration-300 shadow-sm"
                                    title={tool.name}
                                >
                                    <img src={tool.icon} alt={tool.name} className="w-7" />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
