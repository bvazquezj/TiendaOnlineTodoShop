export default function Banner(){
    return (
    <section className="max-w[1200px] flex items-center justify-evenly flex-row">
        <nav className="border-r-[1px] border-zinc-400 pr-24">
            <ul className="font-sans text-xl">
                <li className="cursor-pointer hover:text-gray-400">Estilos Mujeres</li>
                <li className="cursor-pointer hover:text-gray-400">Estilo Hombres</li>
                <li className="cursor-pointer hover:text-gray-400">Electronicos</li>
                <li className="cursor-pointer hover:text-gray-400">Hogar y vida</li>
                <li className="cursor-pointer hover:text-gray-400">Medicina</li>
                <li className="cursor-pointer hover:text-gray-400">Deportes</li>
                <li className="cursor-pointer hover:text-gray-400">Bebes y juguetes</li>
                <li className="cursor-pointer hover:text-gray-400">Macotas</li>
                <li className="cursor-pointer hover:text-gray-400">Salud y belleza</li>
            </ul>
        </nav>
        <div id="indicators-carousel" className="grid w-3/5 justify-between" data-carousel="static">
            
            <div className="row-start-1 row-span-3 col-start-1 col-span-3 relative w-full h-56 overflow-hidden rounded-lg md:h-96">
                <div className="duration-700 ease-in-out" data-carousel-item="active">
                    <img src="src\assets\img\BannerApple.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 cursor-pointer" alt="..." />
                </div>
            </div>

            <div className=" row-start-3 col-start-2 relative flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
                <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
            </div>
        </div>
    </section>);
}