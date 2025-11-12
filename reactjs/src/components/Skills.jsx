export default function Skills() {
    const skills = [
        {
            name: 'Frontend Development',
            icon: './assets/react-icon.png',
            list: ['React.js', 'JavaScript', 'HTML5 & CSS3', 'Responsive Design']
        },
        {
            name: 'Backend Development',
            icon: './assets/node-icon.png',
            list: ['Node.js', 'Express.js', 'MongoDB', 'RESTful APIs']
        },
        {
            name: 'Tools & Version Control',
            icon: './assets/git.png',
            list: ['Git & GitHub', 'Postman', 'VS Code', 'Webpack']
        }
    ];

    return (
        <div id="skills" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">My Expertise</h4>
            <h2 className="text-center text-5xl font-Ovo">Technical Skills</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                As a MERN Stack developer, I have expertise in frontend, backend, and tools for efficient development.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
                {skills.map((skill) => (
                    <div key={skill.name} className="border border-gray-300 dark:border-white/30 rounded-lg p-8 hover:shadow-lg hover:-translate-y-1 duration-500 dark:hover:bg-darkHover">
                        <img src={skill.icon} alt="" className="w-12 mb-4" />
                        <h3 className="text-xl font-semibold mb-3 dark:text-white">{skill.name}</h3>
                        <ul className="text-sm text-gray-600 dark:text-white/80 space-y-1">
                            {skill.list.map((item, i) => (
                                <li key={i}>• {item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}