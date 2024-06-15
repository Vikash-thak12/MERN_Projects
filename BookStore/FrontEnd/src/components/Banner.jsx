import banner from '../assets/banner.png'

const Banner = () => {
    return (
        <>
            <div className='max-w-screen-xl container mx-auto md:px-10 px-4 mt-10 flex justify-center flex-col md:flex-row'>
                <div className="w-full md:w-1/2 px-5 py-5 order-2 md:order-1">
                    <div className="space-y-10">
                        <h1 className="text-3xl">Hello, welcomes here to learn something <span className="text-pink-500">new everyday!!!</span></h1>
                        <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, nesciunt modi. Vel modi rem repudiandae iusto quasi distinctio, quis eius alias earum. Qui libero nemo magni adipisci neque impedit officia.</p>
                    </div>
                    <div className="my-5">
                        <label className="px-3 py-3 border border-gray-700 rounded-md flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                            <input type="text" className="grow outline-none bg-transparent" placeholder="Email" />
                        </label>
                    </div>
                    <button className="btn btn-secondary">Secondary</button>

                </div>
                <div className="w-full md:w-1/2 px-5 py-5 order-1">
                    <img src={banner} alt="" />
                </div>
            </div>
        </>
    );
};

export default Banner;