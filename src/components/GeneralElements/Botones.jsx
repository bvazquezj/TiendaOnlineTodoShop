import PropTypes from "prop-types"
Botones.propTypes = {
    children: PropTypes.any,
}

export default function Botones({children}) {
    return (
        <div className="text-center">
            <button className="bg-red-500 text-white px-6 py-2 rounded-lg transition hover:scale-110">
                {children}
            </button>
        </div>
    );
}