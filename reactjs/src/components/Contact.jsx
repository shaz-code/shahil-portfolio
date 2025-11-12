import { useEffect, useState } from 'react';

export default function Contact() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        const hCaptcha = event.target.querySelector('textarea[name=h-captcha-response]').value;
        if (!hCaptcha) {
            setResult("Please complete the captcha.");
            return;
        }

        setResult("Sending...");
        const formData = new FormData(event.target);
        formData.append("access_key", "35b31382-d073-4388-a1e5-9fef78f5d992"); // ← Replace with your key

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        }).then((res) => res.json());

        if (res.success) {
            setResult("Message sent successfully!");
            event.target.reset();
        } else {
            setResult(res.message || "Something went wrong.");
        }
    };

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://js.hcaptcha.com/1/api.js?recaptchacompat=off";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    }, []);

    return (
        <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('./assets/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none">
            <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
            <h2 className="text-center text-5xl font-Ovo">Get in Touch</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                I’d love to hear from you! Whether you have a question, want to collaborate on a project, or just want to connect, feel free to reach out.
            </p>

            <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
                <input type="hidden" name="subject" value="Shahil Ahmed - New Form Submission" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8">
                    <input 
                        type="text" 
                        placeholder="Your Name" 
                        name="name" 
                        required 
                        className="px-4 py-3 rounded-md border border-gray-300 dark:border-white/30 bg-white dark:bg-darkHover/30 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                    <input 
                        type="email" 
                        placeholder="Your Email" 
                        name="email" 
                        required 
                        className="px-4 py-3 rounded-md border border-gray-300 dark:border-white/30 bg-white dark:bg-darkHover/30 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                </div>

                <textarea 
                    rows="6" 
                    placeholder="Your Message" 
                    name="message" 
                    required 
                    className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-white/30 bg-white dark:bg-darkHover/30 mb-6 focus:ring-2 focus:ring-blue-500 outline-none"
                ></textarea>

                <div className="h-captcha mb-6" data-captcha="true" data-sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"></div>

                <button 
                    type="submit" 
                    className="py-3 px-8 bg-black/80 text-white rounded-full hover:bg-black duration-300 flex items-center gap-2 mx-auto dark:bg-transparent dark:border dark:border-white/30 dark:hover:bg-darkHover"
                >
                    Send Message
                    <img src="./assets/right-arrow-white.png" alt="" className="w-4" />
                </button>
                <p className="mt-4 text-center">{result}</p>
            </form> 

            <div className="mt-12 text-center">
                <p className="mb-2"><strong>Email:</strong> <a href="mailto:786shahilahmed@gmail.com">786shahilahmed@gmail.com</a></p>
                <p className="mb-4"><strong>Phone:</strong> <a href="tel:+91999888777">+91 999 888 777</a></p>
                <div className="flex justify-center gap-6">
                    <a href="https://www.linkedin.com/in/shahil-ahmed-mf" target="_blank" rel="noopener noreferrer">
                        <img src="./assets/linkedin.png" alt="LinkedIn" className="h-10" />
                    </a>
                    <a href="https://github.com/shaz-code" target="_blank" rel="noopener noreferrer">
                        <img src="./assets/github.png" alt="GitHub" className="h-10" />
                    </a>
                </div>
            </div>
        </div>
    );
}