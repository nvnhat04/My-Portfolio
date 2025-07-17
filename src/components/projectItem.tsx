import { FaGithub } from "react-icons/fa";
function ProjectItem({ title, description, source, img } = { title: '', description: '', source: '', img: '' }) {
    return (
        <section className="bg-gray-100 p-8 rounded-lg shadow-md">
            <div className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
                <p className="text-center text-gray-600 mb-12">
                    {description}
                </p>
                <div className="flex justify-center mb-8">
                    {img && (
                        <img 
                            src={img} 
                            alt={title} 
                            className="w-64 h-64 object-cover rounded-lg shadow-lg"
                        />
                    )}
                </div>
                {/* Add your portfolio content here */}
                <div className="flex justify-center bg-blue-400 text-white rounded-full px-4 py-2 hover:bg-blue-600 transition">
                    {/* <FaGithub className="w-6 h-6 text-white p-1" /> */}
                    <a 
                        href={source} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="rounded-full text-white"
                    >
                        View Project
                    </a>
                </div>
            </div>
        </section>
    )
}
export default  ProjectItem;