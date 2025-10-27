import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const useGhostEyeMovement = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const pageX = window.innerWidth;
      const pageY = window.innerHeight;
      const mouseY = event.pageY;
      const mouseX = event.pageX;

      const yAxis = ((pageY / 2 - mouseY) / pageY) * 300;
      const xAxis = ((mouseX / pageX) - 0.5) * 150; 

      const ghostEyes = document.querySelector('.box__ghost-eyes');
      if (ghostEyes) {
        ghostEyes.style.transform = `translate(${xAxis}%, -${yAxis}%)`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
};


const Errorpage = () => {
  const navigate = useNavigate();
  useGhostEyeMovement();

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-[#204757] px-4 relative overflow-hidden "
    >
      
      <div className="relative w-[350px] h-full max-h-[600px] min-h-[450px] bg-[#173440] rounded-[20px] p-[30px_50px] text-center shadow-2xl">
        
        <div className="absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-[30%] p-[15px_25px_25px]">
          
          <div className="absolute w-3 h-1 bg-white rounded-full bottom-[65px] left-0 transform rotate-45 opacity-20 before:content-[''] before:absolute before:w-3 before:h-1 before:bg-white before:rounded-full before:transform before:-rotate-90"></div>
          <div className="absolute w-[18px] h-[18px] border-4 border-white rounded-full left-[-5px] top-[30px] opacity-20"></div>
          
          <div className="box__ghost-container w-[100px] h-[100px] bg-white rounded-t-[100px] relative mx-auto animate-upndown">
            
            <div className="box__ghost-eyes absolute left-1/2 top-[45%] h-3 w-[70px]" style={{ transform: 'translate(0%, 0%)' }}>
              <div className="w-3 h-3 bg-[#173440] rounded-full mx-[10px] absolute left-0"></div>
              <div className="w-3 h-3 bg-[#173440] rounded-full mx-[10px] absolute right-0"></div>
            </div>

            <div className="absolute flex top-full left-0 right-0">
              {Array.from({ length: 5 }).map((_, index) => (
                <div 
                  key={index} 
                  className={` relative h-5 rounded-full bg-white ${index % 2 !== 0 ? 'top-[-12px]  border-[#173440] bg-transparent mx-0' : 'top-[-10px]'}`}
                ></div>
              ))}
            </div>

          </div>
          
          <div className="h-5 rounded-full font-playful mx-auto shadow-[0_50px_15px_5px_#1B3744] animate-smallnbig"></div>
        </div>
        
        <div className="absolute bottom-[30px] left-1/2 -translate-x-1/2 w-full max-w-xs px-8">
          <div className="text-white text-center">
            <h1 className="text-4xl font-extrabold text-white font-playful">404</h1>
            <h2 className="text-2xl font-semibold mt-1">Whoops!</h2>
            <p className="mt-2 text-gray-400">
              It seems like we couldn't find the page you were looking for.
            </p>
          </div>
          <button
            onClick={() => navigate('/')}
            className="mt-6 inline-flex items-center px-6 py-3 bg-[#0F83B2] text-white rounded-full shadow-lg hover:bg-[#0c6b90] transition-colors duration-300 w-full justify-center text-lg"
          >
            <FaHome className="mr-2" /> Go Back Home
          </button>
        </div>
      </div>

      <style>{`
        @keyframes upndown {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
        }
        @keyframes smallnbig {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        .animate-upndown { animation: upndown 3s ease-in-out infinite; }
        .animate-smallnbig { animation: smallnbig 3s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default Errorpage;