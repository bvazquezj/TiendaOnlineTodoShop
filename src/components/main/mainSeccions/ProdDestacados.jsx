import PropTypes from "prop-types"

ProdDestacados.propTypes = {
    items: PropTypes.any,
}

export default function ProdDestacados({items}) {
    return (
        <div className="p-6" >
            <div className="text-center flex flex-col">
                <div className="flex items-center">
                    <span className="inline-block w-5 h-10 bg-red-600 rounded-md mr-3">
                    </span>
                    <p className="inline-block text-xs text-red-600 font-bold">Recomendado</p>
                </div>
                <div className="w-full mb-8 flex items-center justify-between">
                    <h2 className="inline-block text-2xl font-bold mr-20">Productos recomendados</h2>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6 ">
                <div className="row-start-1 col-start-1 row-span-2 col-span-2 transition hover:scale-105">
                    <div className="bg-black text-white w-full h-full rounded-b-lg flex flex-col justify-end">
                        <img src={items[0].image} alt="" className="self-end w-full h-auto rounded-lg" />
                        <div className="absolute w-fit p-4  rounded-b-lg ">
                            <h3 className="text-xl font-bold">{items[0].title}</h3>
                            <p className="text-sm text-pretty">{items[0].description}</p>
                            <a href="" className="hover:underline hover:underline-offset-2 text-green-500 font-bold mt-2 inline-block">Shop Now</a>
                        </div>
                    </div>
                </div>

                <div className="h-full row-start-1 col-start-3 col-span-2 transition hover:scale-105">
                    <div className="bg-black text-white w-full h-full rounded-b-lg flex flex-col justify-end">
                        <img src={items[1].image} alt="" className="self-end w-full rounded-lg" />
                        <div className="absolute w-fit p-4  rounded-b-lg ">
                            <h3 className="text-xl font-bold">{items[1].title}</h3>
                            <p className="text-sm text-pretty">{items[1].description}</p>
                            <a href="" className="hover:underline hover:underline-offset-2 text-green-500 font-bold mt-2 inline-block">Shop Now</a>
                        </div>
                    </div>
                </div>
                <div className="h-full row-start-2 col-start-3 col-span-1 transition hover:scale-105">
                    <div className="bg-black p-4 text-white w-full h-full rounded-b-lg flex flex-col justify-end">
                        <img src={items[2].image} alt="" className="self-end object-contain rounded-lg drop-shadow-[0_40px_40px_rgba(255,255,255,0.25)]" />
                        <div className="absolute w-fit rounded-b-lg ">
                            <h3 className="text-xl font-bold">{items[2].title}</h3>
                            <p className="text-sm text-pretty">{items[2].description}</p>
                            <a href="" className="hover:underline hover:underline-offset-2 text-green-500 font-bold mt-2 inline-block">Shop Now</a>
                        </div>
                    </div>
                </div>
                <div className="h-full row-start-2 col-start-4 col-span-1 transition hover:scale-105">
                    <div className="bg-black p-4 text-white w-full h-full rounded-b-lg flex flex-col justify-end">
                        <img src={items[3].image} alt="" className="self-end object-contain rounded-lg drop-shadow-[0_40px_40px_rgba(255,255,255,0.25)]" />
                        <div className="absolute w-fit rounded-b-lg ">
                            <h3 className="text-xl font-bold">{items[3].title}</h3>
                            <p className="text-sm text-pretty">{items[3].description}</p>
                            <a href="" className="hover:underline hover:underline-offset-2 text-green-500 font-bold mt-2 inline-block">Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}