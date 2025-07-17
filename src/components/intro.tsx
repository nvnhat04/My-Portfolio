"use client";
import Typewriter from 'typewriter-effect';
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
function Intro() {
    return (
        <>
          <section id="home" className="min-h-[80vh] flex items-center">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2 gap-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Hi, I'm <span className="text-blue-600">Nhat</span>
                    <span className="wave" role="img" aria-labelledby="wave">
                        👋🏻
                    </span>
                    </h1>
                    <p className="text-xl mb-6 text-gray-600">
                    Full-stack Developer | Student at UET
                    </p>

                    <div className="flex gap-4">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                        <a href="/projects"> View Projects</a>
                    </button>
                    <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-200  transition">
                        <a
                            href="/files/mycv.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            View CV
                        </a> 
                    </button>
                    </div>
                    <div className="flex gap-4 mt-6 text-2xl text-gray-600 font-semibold">
                        <Typewriter
                            options={{
                                strings: [
                                "Software Developer",
                                "Freelancer",
                                "Open Source Contributor",
                                ],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 50,
                            }}
                            
                        />
                    </div>
                </div>
                <div className="md:w-1/2">
                    <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-full p-2">
                    <img 
                        src="avatar.svg" 
                        alt="Avatar" 
                        className="w-64 h-64 mx-auto object-cover rounded-full border-4 border-white shadow-lg"
                    />
                    </div>
                </div>
                </div>
            </div>
            </section>
            <section className='bg-gray-50 py-8'>

            </section>            
        </>
    );

}
export default Intro;