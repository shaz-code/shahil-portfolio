export default function Projects() {
    return (
        <div id="projects" className="w-full px-[12%] py-16 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo text-blue-600 dark:text-blue-400">
                My Work
            </h4>
            <h2 className="text-center text-5xl font-Ovo mb-12">Projects</h2>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Project 1 */}
                <div className="bg-white dark:bg-darkHover/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-white/20">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                        Real-Time Chat App
                    </h3>
                    <p className="text-gray-600 dark:text-white/80 text-sm mb-3">
                        <strong>Tech:</strong> MERN Stack (MongoDB, Express, React, Node.js)
                    </p>
                    <p className="text-gray-700 dark:text-white/90 leading-relaxed text-sm">
                        Users can sign up, log in, and chat instantly with friends. Designed a responsive and intuitive interface using HTML, CSS, and React for a smooth user experience.
                    </p>
                </div>

                {/* Project 2 */}
                <div className="bg-white dark:bg-darkHover/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-white/20">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                        Hospital Management System
                    </h3>
                    <p className="text-gray-600 dark:text-white/80 text-sm mb-3">
                        <strong>Tech:</strong> MERN Stack + JWT Auth
                    </p>
                    <p className="text-gray-700 dark:text-white/90 leading-relaxed text-sm">
                        Patients can book appointments and chat with doctors. Includes secure login with JWT, admin dashboard for managing users, and a responsive React frontend.
                    </p>
                </div>
            </div>
        </div>
    );
}