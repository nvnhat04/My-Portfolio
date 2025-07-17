import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
    
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
function About() {
    return (
        <section id="about" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold mb-4 text-center font-roboto">
                    LET ME <span className="text-blue-600">INTRODUCE</span> MYSELF
                </h1>
                <h2 className="text-3xl font-bold mb-8 font-roboto">About Me</h2>
                <p className="text-lg text-gray-700 mb-8 font-roboto">
                    Hello everyone! My name is <span className="text-blue-600">Nguyen Van Nhat</span>, and I am a passionate software developer with a keen interest in building innovative web applications.
                </p>
                <p className="text-lg text-gray-700 mb-8 font-roboto">
                    I'm a student at the <span className="text-blue-600">University of Engineering and Technology (UET)</span>, where I am honing my skills in full-stack development.
                    I have a strong foundation in various programming languages, including JavaScript, Python, and Java. My expertise extends to both frontend and backend technologies, allowing me to create seamless user experiences and robust server-side applications.
                </p>
            </div>
            {/* Contact */}
            <div className="container mx-auto px-4 align-items-center">
                <h1 className="text-4xl font-bold mb-4 text-center font-roboto">FIND ME ON</h1>
                <p className="text-lg text-gray-700 mb-8 font-roboto text-center">
                Feel free to <span className="purple">connect </span>with me
                </p>
                <ul className="home-about-social-links flex justify-center mt-6 gap-6">
                <li className="social-icons ">
                    <a
                    href="https://github.com/nvnhat04"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                    >
                    <AiFillGithub className="w-8 h-8"/>
                    </a>
                </li>
                <li className="social-icons">
                    <a
                    href="https://www.linkedin.com/in/nh%E1%BA%A5t-nguy%E1%BB%85n-v%C4%83n-77230b370/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                    >
                    <FaLinkedinIn className="w-8 h-8"/>
                    </a>
                </li>
                <li className="social-icons">
                    <a
                    href="https://www.instagram.com/nvnhat04"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                    >
                    <AiFillInstagram className="w-8 h-8" />
                    </a>
                </li>
            </ul>
            </div>
        </section>
    );
}
export default About;