import Banner from "./mainSeccions/Banner";
import OfertasRapidas from "./mainSeccions/OfertasRapidas";
import Categorias from "./mainSeccions/Categorias";
import ProductosMasVendidos from "./mainSeccions/ProductosMasVendidos"
import RecomendedBanner from "./mainSeccions/RecomendedBanner";
import AllProducts from "./mainSeccions/AllProducts";
import ProdDestacados from "./mainSeccions/ProdDestacados";
import Services from "./mainSeccions/Services"

export default function Main() {
    const products = [
        {
            id: 1,
            name: 'HAVIT HV-G92 Gamepod',
            price: '$120',
            originalPrice: '$160',
            discount: '-40%',
            rating: 4.5,
            ratingCount: 88,
            image: 'src/assets/img/articcleExample.png',
        },
        {
            id: 2,
            name: 'AK-900 Wired Keyboard',
            price: '$60',
            originalPrice: '$80',
            discount: '-25%',
            rating: 4.0,
            ratingCount: 75,
            image: 'src/assets/img/articcleExample.png',
        },
        {
            id: 3,
            name: 'IPS LCD Gaming Monitor',
            price: '$370',
            originalPrice: '$500',
            discount: '-30%',
            rating: 4.5,
            ratingCount: 99,
            image: 'src/assets/img/articcleExample.png',
        },
        {
            id: 4,
            name: 'S-Series Comfort Chair',
            price: '$375',
            originalPrice: '$500',
            discount: '-25%',
            rating: 4.5,
            ratingCount: 99,
            image: 'src/assets/img/articcleExample.png',
        }
    ];
    const allProducts = [
        {
            id: 1,
            name: 'HAVIT HV-G92 Gamepod',
            price: '$120',
            originalPrice: '$160',
            discount: '-40%',
            rating: 4.5,
            ratingCount: 88,
            image: 'src/assets/img/articcleExample.png',
        },
        {
            id: 2,
            name: 'AK-900 Wired Keyboard',
            price: '$60',
            originalPrice: '$80',
            discount: '-25%',
            rating: 4.0,
            ratingCount: 75,
            image: 'src/assets/img/articcleExample.png',
        },
        {
            id: 3,
            name: 'IPS LCD Gaming Monitor',
            price: '$370',
            originalPrice: '$500',
            discount: '-30%',
            rating: 4.5,
            ratingCount: 99,
            image: 'src/assets/img/articcleExample.png',
        },
        {
            id: 4,
            name: 'S-Series Comfort Chair',
            price: '$375',
            originalPrice: '$500',
            discount: '-25%',
            rating: 4.5,
            ratingCount: 99,
            image: 'src/assets/img/articcleExample.png',
        },
        {
            id: 5,
            name: 'AK-900 Wired Keyboard',
            price: '$60',
            originalPrice: '$80',
            discount: '-25%',
            rating: 4.0,
            ratingCount: 75,
            image: 'src/assets/img/articcleExample.png',
        },
        {
            id: 6,
            name: 'IPS LCD Gaming Monitor',
            price: '$370',
            originalPrice: '$500',
            discount: '-30%',
            rating: 4.5,
            ratingCount: 99,
            image: 'src/assets/img/articcleExample.png',
        },
        {
            id: 7,
            name: 'S-Series Comfort Chair',
            price: '$375',
            originalPrice: '$500',
            discount: '-25%',
            rating: 4.5,
            ratingCount: 99,
            image: 'src/assets/img/articcleExample.png',
        },
        {
            id: 8,
            name: 'S-Series Comfort Chair',
            price: '$375',
            originalPrice: '$500',
            discount: '-25%',
            rating: 4.5,
            ratingCount: 99,
            image: 'src/assets/img/articcleExample.png',
        }
    ];
    const categories = [
        { name: 'Phones', icon: 'src/assets/svg/phone.svg' },
        { name: 'Computers', icon: 'src/assets/svg/computer.svg' },
        { name: 'SmartWatch', icon: 'src/assets/svg/smartWatch.svg' },
        { name: 'Camera', icon: 'src/assets/svg/camera.svg', },
        { name: 'HeadPhones', icon: 'src/assets/svg/headphones.svg' },
        { name: 'Gaming', icon: 'src/assets/svg/games.svg' },
    ];
    const items = [
        {
            title: 'PlayStation 5',
            description: 'Black and White version of the PS5 coming out on sale.',
            image: 'src/assets/img/ps5-slim.png',
            link: '#',
        },
        {
            title: "Women's Collections",
            description: 'Featured woman collections that give you another vibe.',
            image: 'src/assets/img/attractive-woman.png',
            link: '#',
        },
        {
            title: 'Speakers',
            description: 'Amazon wireless speakers.',
            image: 'src/assets/img/bocinas.png',
            link: '#',
        },
        {
            title: 'Perfume',
            description: 'GUCCI INTENSEOUD EDP.',
            image: 'src/assets/img/gucci.png',
            link: '#',
        },
    ];

    return (
        <>
            <hr className="" />
            <Banner />
            <main className="max-w[1200px] flex flex-col mt-24 px-[15%] font-sans">
                <OfertasRapidas products={products} />
                <Categorias categories={categories} />
                <ProductosMasVendidos products={products} />
                <RecomendedBanner />
                <AllProducts allProducts={allProducts} />
                <ProdDestacados items={items} />
                <Services />
            </main>
        </>
    );
}