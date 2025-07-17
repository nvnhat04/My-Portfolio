
import ProjectItem from "@/components/projectItem";
const projects = [
    {
        title: 'VisionMate',
        description: 'App hỗ trợ người khiếm thị nhận diện vật thể.',
        source: 'https://github.com/nvnhat04/HMI-FinalProject',
        img: '/images/visionmate.png' 
    },
    {
        title: 'My Portfolio',
        description: 'Website cá nhân giới thiệu kỹ năng và dự án.',
        source: 'https://github.com/nvnhat04/My-Portfolio',
        img: '/images/portfolio.jpg' 
    },
    {
        title: 'Melodic',
        description: 'Ứng dụng nghe nhạc với giao diện đẹp và dễ sử dụng.',
        source: 'https://github.com/nvnhat04/melodic-backend',
        img: '/images/melodic.png' 
    }
];
const dataScienceProjects = [
    
    {
        title: 'Speech Emotion Recognition',
        description: 'Model nhận diện cảm xúc từ giọng nói.',
        source: 'https://github.com/nvnhat04/speech-emotion-recognition',
        img: '/images/speech-emotion-recognition.png'
    },
    {
        title: 'Cau Giay Rooftop Segmentation',
        description: 'Phân đoạn ảnh mái nhà tại Cầu Giấy.',
        source: 'https://github.com/nvnhat04/Rooftop-Images-Segmentation',
        img: '/images/unet.png'
    },
];

export default function ProjectsPage() {
    return (
        <section className=" flex flex-col gap-8 ">
            <h1 className="text-4xl font-bold text-center mb-8 font-semibold font-roboto">My projects</h1>
            <h2 className="text-2xl font-bold mb-4"> <span className="text-blue-500">Software Engineering</span> Projects</h2>
            <div className="container mx-auto px-4 gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                
                {projects.map((project, index) => (
                    <ProjectItem 
                        key={index} 
                        title={project.title} 
                        description={project.description} 
                        source={project.source} 
                        img={project.img}
                    />
                ))}
            </div>
            <h2 className="text-2xl font-bold mt-12 mb-4"> <span className="text-blue-500">Data Science and AI</span> Projects</h2>
            <div className="container mx-auto px-4 gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {dataScienceProjects.map((project, index) => (
                    <ProjectItem
                        key={index}
                        title={project.title}
                        description={project.description}
                        source={project.source}
                        img={project.img}
                    />
                ))}
            </div>
        </section>
    );
}
