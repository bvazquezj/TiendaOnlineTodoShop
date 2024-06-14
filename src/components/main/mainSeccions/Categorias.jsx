import PropTypes from 'prop-types';

Categorias.propTypes = {
    categories: PropTypes.any,
}

export default function Categorias({categories}) {
    return (
        < div className = "p-6 border-b-[1px] border-zinc-400" >
        <div className="text-center mb-8 flex flex-col">
            <div className="flex items-center">
                <span className="inline-block w-5 h-10 bg-red-600 rounded-md mr-3">
                </span>
                <p className="inline-block text-xs text-red-600 font-bold">Categorias</p>
            </div>
            <div className="mb-8 flex items-center justify-between mt-4">
                <h2 className="inline-block text-2xl font-bold mr-20">Busca por Categorias</h2>
                <div>
                    <button className="text-gray-500">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                        </svg>
                    </button>
                    <button className="text-gray-500">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div className="mb-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
                <div key={index} className="cursor-pointer flex flex-col border p-4 rounded-lg shadow-md items-center transition-all duration-200 hover:scale-110">
                    <img src={category.icon} alt={category.name} className="w-full h-20 object-contain mt-2" />
                    <span>{category.name}</span>
                </div>
            ))}
        </div>
    </div >
    );
}