import React from "react";
import { PiBellRingingFill } from "react-icons/pi";

const App = () => {
  return (
    <>
      <div className="w-[100%] h-[100vh] overflow-hidden"> 
        <img src="/img/img1.jpg" className="w-[400px] h-[700px] object-cover" />
        
        <div>
          <div className="w-[675px] h-[202px] top-[100px] left-[500px] absolute">
            <h1 className="w-[675px] h-[48px] font-roboto font-medium text-[36px] leading-[48px]">
              Light, Fast & Powerful
            </h1>
            <p className="w-[675px] h-[140px] mt-[30px] font-roboto font-normal text-[16px] text-[#6F7CB2]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              <br />
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
          </div>

          <div className="cards">
            <div className="w-[325px] h-[121px] top-[330px] left-[500px] absolute">
              <div className="w-[36px] h-[36px]">
                <PiBellRingingFill className="w-full h-full" />
              </div>
              <h6 className="w-[325px] h-[26px] top-[50px] font-roboto font-medium text-[16px] absolute">
                Title Goes Here
              </h6>
              <p className="w-[325px] h-[36px] top-[82px] font-roboto font-normal text-[12px] absolute">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </p>
            </div>

            <div className="w-[325px] h-[121px] top-[330px] left-[900px] absolute">
              <div className="w-[36px] h-[36px]">
                <PiBellRingingFill className="w-full h-full" />
              </div>
              <h6 className="w-[325px] h-[26px] top-[50px] font-roboto font-medium text-[16px] absolute">
                Title Goes Here
              </h6>
              <p className="w-[325px] h-[36px] top-[82px] font-roboto font-normal text-[12px] absolute">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </p>
            </div>

            <div className="w-[325px] h-[121px] top-[470px] left-[500px] absolute">
              <div className="w-[36px] h-[36px]">
                <PiBellRingingFill className="w-full h-full" />
              </div>
              <h6 className="w-[325px] h-[26px] top-[50px] font-roboto font-medium text-[16px] absolute">
                Title Goes Here
              </h6>
              <p className="w-[325px] h-[36px] top-[82px] font-roboto font-normal text-[12px] absolute">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </p>
            </div>

            <div className="w-[325px] h-[121px] top-[470px] left-[900px] absolute">
              <div className="w-[36px] h-[36px]">
                <PiBellRingingFill className="w-full h-full" />
              </div>
              <h6 className="w-[325px] h-[26px] top-[50px] font-roboto font-medium text-[16px] absolute">
                Title Goes Here
              </h6>
              <p className="w-[325px] h-[36px] top-[82px] font-roboto font-normal text-[12px] absolute">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
