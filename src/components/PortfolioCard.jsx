import React, { useState } from 'react'
import Introduction from './Introduction';
import Bio from './Bio';
import Features from './Features';
import img1 from '../assets/images/img-1.jpg';
import img2 from '../assets/images/img-2.avif';
import img3 from '../assets/images/img-3.avif';

const PortfolioCard = () => {

  const [employees, setEmployees] = useState(
    [
      {
        name: 'John Doe',
        avatar: img1,
        description: 'I design and build calm, focused product experiences for fast-moving teams. Currently exploring Al-assisted interfaces, design systems, and high-performance UI engineering.',
        role: 'Product Designer & Frontend Engineer',
        skills: ['Design Systems', 'React', 'TypeScript', 'Figma', 'Prototyping', 'Accessibility'],
        likes: 0
      },
      {
        name: "Sarah Williams",
        avatar: img1,
        description: "I create user-friendly interfaces with a focus on modern aesthetics and smooth user journeys. Passionate about design psychology and building clean UI systems.",
        role: "UI/UX Designer",
        skills: ["UI Design", "UX Research", "Figma", "Wireframing", "Prototyping", "Design Thinking"],
        likes: 0,
      },
      {
        name: "David Carter",
        avatar: img3,
        description: "I build scalable backend services and APIs with a focus on performance and security. I enjoy working with databases, cloud deployment, and microservices architecture.",
        role: "Backend Developer",
        skills: ["Node.js", "Express", "MongoDB", "REST APIs", "JWT Authentication", "Cloud Deployment"],
        likes: 0,
      },
    ]
  );
  const [employeeIndex, setEmployeeIndex] = useState(0);
  const [theme, setTheme] = useState(false);

  return (
    <div>
      <div className='h-screen bg-amber-50 flex justify-center items-center'>
        <div className={`w-100 px-6 py-4 border-2 rounded-xl shadow-xl/70 cursor-default ${theme ? 'bg-black border-white' : 'bg-white border-gray-200'}`} >

          <Introduction theme={theme} employees={employees} employeeIndex={employeeIndex} />
          <Bio theme={theme} employees={employees} employeeIndex={employeeIndex} />
          <Features theme={theme} setTheme={setTheme} employees={employees} setEmployees={setEmployees} employeeIndex={employeeIndex} setEmployeeIndex={setEmployeeIndex} />

        </div >
      </div >

    </div>
  )
}

export default PortfolioCard;
