import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProjectsCard from './ProjectsCard';

const ProjectsCarousel = ({cardInfo}) => {


    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 1922 },
          items: 6,
        },
        desktop: {
          breakpoint: { max: 1921, min: 1682 },
          items: 5,
        },
        smallerDesktop: {
          breakpoint: { max: 1681, min: 1081 },
          items: 4,
        },
        tablet: {
          breakpoint: { max: 1080, min: 649 },
          items: 3,
        },
        mobile: {
          breakpoint: { max: 648, min: 0 },
          items: 1,
        }
      };
  return (
    <>
      <div className='bg-thorblack py-2 h-auto pb-10 '>
        <Carousel
        swipeable={true}
        draggable={true}
        //showDots={true}
        //removeArrowOnDeviceType={["tablet", "mobile"]}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        //customTransition="all 0.99 transition-[1100ms]"

        keyBoardControl={true}
        transitionDuration={300}
        containerClass="carousel-container"
        itemClass="react-multi-carousel-item max-h-fit max-w-fit"
        > 

        {
          cardInfo.map((card,index)=><ProjectsCard title={card.title} image={card.image} key={index}/>)
        }
        
        </Carousel>
      </div>
    </>
  )
}

export default ProjectsCarousel