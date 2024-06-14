import PropTypes from 'prop-types';
import Botones from '../../GeneralElements/Botones';

OfertasRapidas.propTypes = {
    products: PropTypes.any,
}

export default function OfertasRapidas({ products }) {
    return (
        <div className="p-6 border-b-[1px] border-zinc-400" >
            <div className="text-center mb-8 flex flex-col">
                <div className="flex items-center">
                    <span className="inline-block w-5 h-10 bg-red-600 rounded-md mr-3">
                    </span>
                    <p className="inline-block text-xs text-red-600 font-bold">Ofertas</p>
                </div>
                <div className="mb-8 flex items-center">
                    <h2 className="inline-block text-2xl font-bold mr-20">Ofertas rápidas de hoy</h2>
                    <div className="flex justify-center space-x-4 text-xl mt-2">
                        <div className="flex flex-col items-center">
                            <span className="text-sm">Dias</span>
                            <span>03</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-sm">Horas</span>
                            <span>23</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-sm">Minutos</span>
                            <span>19</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-sm">Segundos</span>
                            <span>56</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {products.map((product) => (
                    <div key={product.id} className="relative border p-4 rounded-lg shadow-md ">
                        <div className="flex justify-between">
                            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">{product.discount}</span>
                            <button className="text-gray-500">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
                                </svg>
                            </button>
                        </div>
                        <img src={product.image} alt={product.name} className="w-full h-32 object-contain mt-2" />
                        <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                        <div className="flex items-center mt-2">
                            <span className="text-xl font-bold text-red-500">{product.price}</span>
                            <span className="line-through text-gray-500 ml-2">{product.originalPrice}</span>
                        </div>
                        <div className="flex items-center mt-2">
                            <div className="flex text-yellow-500">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className={`w-4 h-4 ${i < Math.round(product.rating) ? 'fill-current' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                                    </svg>
                                ))}
                            </div>
                            <span className="text-gray-500 ml-2">({product.ratingCount})</span>
                        </div>
                        <div className="absolute text-center bottom-0 left-0 right-0 top-[15%] h-[43%] w-full overflow-hidden bg-transparent bg-fixed transition duration-300 ease-in-out hover:bg-[#000000d0]">
                            <div className='flex justify-center items-center w-full h-full text-xl text-transparent font-bold hover:text-white'>
                                <p>
                                    Agregar al carrito
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='py-8'>
            <Botones>Ver los productos</Botones>
            </div>
        </div >
    );
}