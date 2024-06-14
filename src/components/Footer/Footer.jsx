export default function Footer() {
    return (
        <footer className='bg-black mt-10 text-white px-20 pt-20 pb-6 '>
            <div className="flex justify-evenly text-pretty pb-9 border-zinc-800 border-b-[1px]">
                <div className="flex flex-col gap-4">
                    <h5 className="text-2xl font-semibold">TodoShop</h5>
                    <p>Suscribirte</p>
                    <p>Obten noticias y ofertas limitadas</p>
                    <div className="flex  bg-black border-white border-[1px]">
                        <input type="search" id="default-search" className="block w-full bg-black p-1 pe-10 text-xs focus:outline-none" placeholder="Buscar..." required />
                        <button className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="#fff" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <h5 className="text-2xl font-semibold">Soporte</h5>
                    <p>Calle Decena tragica mz3 lt26 Iztacalco 52771</p>
                    <p>TodoShopSupport@todoShop.com</p>
                    <p>+ (52) 55-4857-3690</p>
                </div>

                <div className="flex flex-col gap-4 scroll-smooth">
                    <h5 className="text-2xl font-semibold">Cuenta</h5>
                    <a href="">Mi cuenta</a>
                    <p><a href="Login.html">Login</a> / <a href="Register.html">Register</a></p>
                    <a href="">Carrito</a>
                    <a href="">Lista de deseos</a>
                    <a href="#allproducts">Tienda</a>
                </div>

                <div className="flex flex-col gap-4">
                    <h5 className="text-2xl font-semibold">Otros links</h5>
                    <a href="">Privacidad y politicas</a>
                    <a href="">Terminos de uso</a>
                    <a href="">FAQ</a>
                    <a href="">Contacto</a>
                </div>
            </div>
            <p className="m-6 text-zinc-800 text-center w-full">
                &copy; Copyright Brandon Vazquez 2024 - all dev reserved
            </p>
        </footer>
    );
}