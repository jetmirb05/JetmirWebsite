import Navbar from './Navbar';
import Footer from './Footer';
import Userdata from "../components/News.json";
import { browserName} from "react-device-detect";
import { useTranslation } from 'react-i18next';

function News() {
  setTimeout(()=>{
    console.clear();
  },2000)
  const { t }=useTranslation()
  return (
    <>
     <Navbar
        NavbarColor="bg-linkedinBtn"
        TextColor="text-linkedinBtn"
        AfterColor="after:bg-linkedinBtn"
        TextHoverColor="hover:text-linkedinBtn"
      />

      <div className='w-[100vw] h-auto bg-thorblack flex items-center justify-center flex-wrap flex-col'>

      <h2 className='text-thorwhite sm:text-[64px] text-[48px] relative mt-[100px]
                          before:absolute
                          before:w-[100px]
                          before:h-[5px]
                          before:left-[5px]
                          before:bottom-0
                          before:border-linkedinBtn
                          before:border-b-4
         '>
          {t('NewsHeader')}
          </h2>
      <div className='w-80% h-auto flex flex-row flex-wrap p-5 items-center justify-evenly mt-[100px] '>

         
      {Userdata.length > 0 ? 
            browserName == "Brave" ? 
            <div className='w-[100vw] h-auto text-white flex justify-center items-center flex-col mt-[100px] '>

            <h2 className='text-[30px] mb-10 mt-[-100px]'>{t("BetterExp")}</h2>
            <ol>
            {Userdata.map( (data) =>
              
              
                <li key={data.id} className="list-disc mb-5 text-[14px] hover:text-linkedinBtn tranisition" ><a href={data.postLink}> {data.postLink} </a></li>
             
            )}
             </ol>
          </div>
            
            
            : 

            Userdata.map( (users, index)=>(
              <div className='w-auto h-auto '>
                <div  className='w-[350px] h-[500px]  flex justify-center items-center flex-col  m-4 '>
                  <iframe src={users.profileLink} loading='eager' scrolling="no" height="450px" width="304" frameBorder="0" allowFullScreen="" title="Embedded post"></iframe>
                  <a  href={users.postLink} target="_blank" className='text-thorwhite flex self-start ml-6 bg-linkedinBtn border-2 px-6 border-thorskyblue mt-[15px]'> See more</a>
                </div>
              </div>
            ))

          : 
          
          <p className='text-center text-white mb-52 mt-24'>{t("noNews")}</p>
          
          }



      </div>

      </div>



    </>
    
  )
  

}

export default News