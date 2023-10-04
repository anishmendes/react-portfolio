import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import arrayDestruct  from "../assets/project-1.jpeg"

import project2 from "../assets/project-2.jpeg"
import project3 from "../assets/project-3.jpeg"
import project4 from "../assets/project-4.jpeg"
import project5 from "../assets/project-5.jpeg"
import project6 from "../assets/project-6.jpeg"
import project7 from "../assets/project-7.jpeg"


const Projects = () => {

 const projects = [
    {

      id:1,
      src: arrayDestruct
    },
    {

      id:2,
      src: project2
    },
    {

      id:3,
      src: project3
    },
    {
      id:4,
      src: project4
    },
    {
      id:5,
      src: project5
    },
    {
      id:6,
      src: project6
    }
   

 ]

  return (

    <div
    name="Projects"
    className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen "
    >

      <div className="max-w-screen-lg p-4 ms-auto flex flex-col w-full h-full ">
        <div className="pb-8  ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500  ">Projects</p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
         
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
        { projects.map(({id, src}) => ( 
          <div className="shadow-md shadow-gray-600 rounded-lg w-3/5 ">

          <img src={src} alt="" className="rounded-md duration-200 hover:scale-105 " />
          <div className="flex items-center justify-center">
            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 ">Demo</button>
            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 ">Code</button>
          </div>
          </div>
        ))
        }
            

         

          
          </div>
         </div>

      </div>



)
  
};

export default Projects