import React from 'react'

const ProjectsCard = ({title,image}) => {
  return (
    <>
      <div className="group relative w-fit cursor-pointer items-center justify-center transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg sm:h-full h-200px mx-2">
        <div className="h-[60vh] justify-center overflow-hidden">
            <img className="h-[100%] object-fill transition-transform duration-500 group-hover:scale-110 md:object-cover rounded-lg" src={image} alt={title} />
        </div>
    </div>
    </>
  )
}

export default ProjectsCard
