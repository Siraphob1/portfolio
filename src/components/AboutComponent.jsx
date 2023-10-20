import LayoutComponent from "./LayoutComponent"



const AboutComponent = () => {
  return (
    <LayoutComponent topic={'About'} idcomponent={'about'} bgopacity={'bg-opacity-[94%]'}>
        <div className=" flex flex-col-reverse lg:flex-row justify-between items-center mt-[2rem]">
            <p className=" text-white lg:text-[1.2rem] pl-[0.5rem] text-opacity-80  mt-[2rem] lg:w-[40%] font-Incluesive-Sans">I am interested in coding as a Fullstack Developer. I decided to enroll in the Generation Fullstack camp to enhance my knowledge such as HTML5 CSS3 JS Boostrap5 Node.js Express.js MongoDB</p>
            <img src="https://cdn.pixabay.com/photo/2015/09/05/22/33/office-925806_1280.jpg" alt="" className=" lg:w-[50%] rounded-3xl" />
        </div>
    </LayoutComponent>
  )
}

export default AboutComponent