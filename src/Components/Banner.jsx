import banner from "../assets/banner.jpg"
import CountdownTimer from "./CountDown";

const Banner = () => {
    return (
        // <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://raw.githubusercontent.com/alif0013/Eid-Ul-Fitr-2024/main/src/assets/banner.jpg)' }}>
        //     <div className="hero-overlay bg-opacity-0"></div>
        //     <div className="hero-content text-center text-neutral-content">
        //         <div className="max-w-md">

        //             <button className="">
        //                 <CountdownTimer/>
        //             </button>
        //         </div>
        //     </div>
        // </div>
        <div className="hero min-h-screen bg-black">
            <div className="hero-content flex-col lg:flex-row-reverse">
                {/* <img src="https://raw.githubusercontent.com/alif0013/Eid-Ul-Fitr-2024/main/src/assets/banner.jpg" className="md:max-w-md rounded-lg drop-shadow-md" /> */}
                <div>
                    <h1 className="text-5xl font-bold">
                        <CountdownTimer/>
                    </h1>
                
                </div>
            </div>
        </div>
    );
};

export default Banner;