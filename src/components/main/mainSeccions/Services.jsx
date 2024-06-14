export default function Services() {
    return (
        <div className="my-20 flex justify-center items-center text-xs text-center gap-8">
            <div className="w-1/3 flex flex-col items-center justify-center">
                <img src="src\assets\svg\truck.svg" alt="" className="bg-black p-2 rounded-full" />
                <h4 className="text-lg font-semibold mt-3">Rápido servicio de entrega</h4>
                <p className="text-pretty" > Envió gratuito en mas de $140</p>
            </div>
            <div className="w-1/3 flex flex-col items-center justify-center">
                <img src="src\assets\svg\headset.svg" alt="" className="bg-black p-2 rounded-full" />
                <h4 className="text-lg font-semibold mt-3">Servicio personalizado 24/7</h4>
                <p className="text-pretty">Amigable servicio de atención 24/7 </p>
            </div>
            <div className="w-1/3 flex flex-col items-center justify-center">
                <img src="src\assets\svg\shield.svg" alt="" className="bg-black p-2 rounded-full" />
                <h4 className="text-lg font-semibold mt-2">Pagos seguros</h4>
                <p className="text-pretty">Cuidamos tu dinero</p>
            </div>
        </div>
    );
}