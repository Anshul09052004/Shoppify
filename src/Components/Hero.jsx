import hero_image from "../assets/Assets/Frontend_Assets/hero_image.png";


function Hero() {
    return (
        <main className="flex flex-col md:flex-row items-center max-md:text-center justify-between mt-16 pb-16 px-6 sm:px-10 md:px-24 max-w-7xl mx-auto w-full">
            <div className="flex flex-col items-center md:items-start">


                <h1 className="text-gray-900 font-semibold text-3xl sm:text-4xl md:text-5xl max-w-2xl leading-tight">
                    Discover Your Style{" "}
                    <span className="text-indigo-600">Primium delevered to your Door</span>
                </h1>

                <div className="flex flex-col md:flex-row items-center mt-8 gap-3">
                    <button
                        className="bg-indigo-600 text-white px-6 pr-2.5 py-2.5 rounded-full text-sm font-medium flex items-center space-x-2 hover:bg-indigo-700 transition"
                        type="button"
                    >
                        <span>Latest Collection</span>
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4.821 11.999h13.43m0 0-6.714-6.715m6.715 6.715-6.715 6.715"
                                stroke="#fff"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>

                </div>
            </div>

            <div
                aria-label="Photos of leaders"
                className=" ml-50 mt-12  pb-6"
            >

                <img
                    alt="Hero"
                    className="w-full max-w-md h-auto rounded-lg hover:scale-105 transition duration-300 object-cover flex-shrink-0 shadow-lg"
                    src={hero_image}
                />


            </div>
        </main>
    );
}

export default Hero;
