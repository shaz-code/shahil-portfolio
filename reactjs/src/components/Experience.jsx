export default function Experience() {
    return (
        <div id="experience" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">Professional Training</h4>
            <h2 className="text-center text-5xl font-Ovo">Internship</h2>

            <div className="max-w-4xl mx-auto mt-12">
                <div className="bg-white dark:bg-darkHover/50 border border-gray-300 dark:border-white/30 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
                        MERN Stack Development Intern
                    </h3>

                    <p className="text-sm text-gray-600 dark:text-white/70 mt-1">
                        Pentagon Space | Ongoing (2025)
                    </p>

                    <p className="mt-4 text-gray-700 dark:text-white/90 leading-relaxed">
                        I’m currently doing an intensive <strong>500-hour offline MERN Stack Development program</strong> at Pentagon Space, 
                        where I’m learning to build full-fledged web applications from the ground up. The program focuses on 
                        frontend technologies like <strong>HTML, CSS, JavaScript, and ReactJS</strong>, as well as backend development 
                        using <strong>Node.js, Express.js, and MongoDB</strong> for database management.
                    </p>
                </div>
            </div>
        </div>
    );
}