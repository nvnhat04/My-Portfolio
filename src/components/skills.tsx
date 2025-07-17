import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiCodepen,
  DiCode,
  DiMysql,
} from "react-icons/di";
import {
    SiTensorflow,
    SiCplusplus,
    SiFramework
} from "react-icons/si";
import {
    FaDocker
} from "react-icons/fa";
import {BiLogoPostgresql} from "react-icons/bi";
function Skills() {
    return (
        <section id="skills" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Professional Skillset</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
            {/* Code Languages */}
                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <DiCode className="text-gray-500 w-6 h-6 mr-2" />
                    Code Languages
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="flex items-center gap-2">
                            <DiJavascript1 className="text-blue-500 w-6 h-6" /> 
                            <span className="text-xl font-roboto font-semibold">JavaScript</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                            <DiJava className="text-red-500 w-6 h-6" /> 
                            <span className="text-xl font-roboto font-semibold">Java</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <DiPython className="text-blue-500 w-6 h-6" /> 
                            <span className="text-xl font-roboto font-semibold">Python</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <SiCplusplus className="text-blue-500 w-6 h-6" /> 
                            <span className="text-xl font-roboto font-semibold">C++</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <DiMysql className="text-blue-500 w-6 h-6" /> 
                            <span className="text-xl font-roboto font-semibold">MySQL</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <BiLogoPostgresql className="text-blue-500 w-6 h-6" /> 
                            <span className="text-xl font-roboto font-semibold">PostgreSQL</span>
                        </div>
                    </div>
            </div>
            
            {/* Frontend Technologies */}
            {/* Frameworks */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                <SiFramework className="text-gray-500 w-6 h-6 mr-2" />
                Frameworks
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-2">
                        <DiReact className="text-cyan-500 w-6 h-6" /> 
                        <span className="text-xl font-roboto font-semibold">React</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <DiNodejs className="text-green-500 w-8 h-8" /> 
                        <span className="text-xl font-roboto font-semibold">Node.js</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <DiMongodb className="text-green-700 w-6 h-6" /> 
                        <span className="text-xl font-roboto font-semibold">MongoDB</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <DiGit className="text-orange-500 w-6 h-6" /> 
                        <span className="text-xl font-roboto font-semibold">Git</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaDocker className="text-blue-500 w-6 h-6" /> 
                        <span className="text-xl font-roboto font-semibold">Docker</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <SiTensorflow className="text-orange-500 w-6 h-6" /> 
                        <span className="text-xl font-roboto font-semibold">TensorFlow</span>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    );
}
export default Skills;