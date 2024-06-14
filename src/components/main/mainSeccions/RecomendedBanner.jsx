export default function RecomendedBanner() {
    return (
        
        < div className = "p-6 my-10 w-full" >
            <div className="relative bg-black text-white py-12 px-6 md:px-12 flex items-center justify-between">
                <div className="max-w-lg">
                    <h3 className="text-green-500 text-xs">Categories</h3>
                    <h1 className="text-5xl font-bold my-2">Enhance Your Music Experience</h1>
                    <div className="flex space-x-6 mt-4">
                        <div className="size-16 bg-slate-50 text-black p-2 flex flex-col items-center rounded-full">
                            <span className="text-1xl">23</span>
                            <span className="text-xs">Hours</span>
                        </div>
                        <div className="size-16 bg-slate-50 text-black p-2 flex flex-col items-center rounded-full">
                            <span className="text-1xl">05</span>
                            <span className="text-xs">Days</span>
                        </div>
                        <div className="size-16 bg-slate-50 text-black p-2 flex flex-col items-center rounded-full">
                            <span className="text-1xl">59</span>
                            <span className="text-xs">Minutes</span>
                        </div>
                        <div className="size-16 bg-slate-50 text-black p-2 flex flex-col items-center rounded-full">
                            <span className="text-1xl">35</span>
                            <span className="text-xs">Seconds</span>
                        </div>
                    </div>
                    <button className="mt-8 text-xl bg-green-500 text-black px-6 py-2 rounded-full font-bold">Buy Now!</button>
                </div>
                <div className="hidden md:block">
                    <img src="src\assets\img\JBL_BOOMBOX_2_HERO_020_x1.png" alt="Speaker" className="w-full h-auto max-w-xl filter brightness-90 contrast-125" />
                </div>
            </div>
    </div >
    )
}