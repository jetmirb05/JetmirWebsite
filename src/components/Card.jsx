import React from 'react'
import { Link } from 'react-router-dom'
const Card = ({name,description,image,toDep}) => {
  return (
    <>
        <div className="flex justify-center pt-10 sm:pt-0 xl:max-w-[500px] max-w-[380px] sm:max-w-[480px] mx-auto lg:px-5 xl:px-0 min-[1400px]:max-w-[550px] min-[1700px]:max-w-[650px] mt-5">
          <Link to={toDep} >
            <div className="bg-inherit">
                <img
                    className="object-contain align-middle "
                    src={image}
                    alt={name} 
                />

                <div className="text-center p-5 pb-3">
                    <h5 className="text-xl font-medium text-slate-50 text-center">
                        {name}
                    </h5>
                    <p className="text-base text-slate-50 text-left leading-relaxed mt-[20px]">
                        {description}
                    </p>
                </div>
            </div>
          </Link>
        </div>
    </>
  )
}

export default Card
