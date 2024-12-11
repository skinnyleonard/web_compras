import ryzen5 from '../pngs/ryzen5.png'
import corei7 from '../pngs/corei7.png'
import ram from '../pngs/ram.png'
import monitor from '../pngs/monitor.png'
import mouse from '../pngs/redragon.webp'
import firepro from '../pngs/firepro.png'
import celu from '../pngs/celu.webp'
import pro from '../pngs/990pro.png'
import nokia from '../pngs/nokia.png'
import parlantes from '../pngs/paralantes.png'
import x3d from '../pngs/x3d.png'

const products = [
    {
        id:1,
        type:'Placas de video',
        prod:'Nvidia GTX 1080 ti Founders Edition',
        img:'https://asset.msi.com/resize/image/global/product/product_7_20171122181017_5a154d0982c95.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png',
        price:'120.000',
    },
    {
        id:2,
        type:'Procesadores',
        prod:'Ryzen 5 5600x',
        img: ryzen5,
        price:'85.961',
    },
    {
        id:3,
        type:'Perifericos',
        prod:'Redragon Cobra Chroma M711 White',
        img: mouse,
        price:'20.000',
    },
    {
        id:4,
        type:'Celulares',
        prod:'Samsung Galaxy J2 Prime 16 GB',
        img:'https://images.samsung.com/is/image/samsung/ph-galaxy-j2-prime-lte-sm-g532gzddxtc-thumb-Gold-61436996?480_480_PNG',
        price:'31.000',
    },
    {
        id:5,
        type:'Procesadores',
        prod:'Intel Core I9 9900K 5Ghz',
        img:'https://unitytech.uy/wp-content/uploads/2020/04/i9.png',
        price:'85.000',
    },
    {
        id:6,
        type:'Memorias RAM',
        prod:'Memoria Ram DDR4 16GB (2X8) Corsair Vengeance Pro RGB White 3200MHz',
        img:'https://assets.corsair.com/image/upload/f_auto,q_auto/v1/akamai/pdp/vengeance-rgb-pro/Content/Vengeance_RGB_Pro_PDP_White_04.png',
        price:'55.000',
    },
    {
        id:7,
        type:'Motherboards',
        prod:'ASUS ROG STRIX Z590-E GAMING WIFI',
        img:'https://dlcdnwebimgs.asus.com/files/media/B7CBA71A-2549-4C30-843E-15189BB8E78D/V1/img/z590/kv/hero.png',
        price:'120.000',
    },
    {
        id:8,
        type:'Monitores',
        prod:'Monitor Gigabyte G27FC Gaming, 27″ Full HD',
        img: monitor,
        price:'200.000',
    },
    {
        id:9,
        type:'Celulares',
        prod:'Apple iPhone 6s plus 64GB Space Grey',
        img:'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP727/SP727-iphone6s-plus-gray-select-2015.png',
        price:'40.000',
    },
    {
        id:10,
        type:'Almacenamiento',
        prod:'Pendrive San Disk',
        img:'https://www.pngplay.com/wp-content/uploads/12/Usb-Flash-Transparent-Clip-Art-PNG.png',
        price:'6.500',
    },
    {
        id:11,
        type:'Perifericos',
        prod:'Epomaker CIDOO C75',
        img:'https://epomaker.com/cdn/shop/files/IMG_7337_25746e68-b876-4715-b815-6212e5f2ae11.png?v=1715850096&width=713',
        price:'139.000',
    },
    {
        id:12,
        type:'Monitores',
        prod:'Monitor AOC 144Hz',
        img:'https://storage.aoc.com/assets/8929/AOC_G2490_PV_FTL-big.png',
        price:'200.000',
    },
    {
        id:13,
        type:'Celulares',
        prod:'Samsung Gt-c3592 Pantalla Grande 2.4°-tapa C/camara',
        img: celu,
        price:'6.000',
    },
    {
        id:14,
        type:'Perifericos',
        prod:'Mousepad Redragon Suzaku U P003',
        img:'https://acdn.mitiendanube.com/stores/003/998/438/products/p003_pngweb_7-94660fcc653c682a7d17177933155652-1024-1024.png',
        price:'13.000',
    },
    {
        id:15,
        type:'Perifericos',
        prod:'Razer Blackshark V2 X',
        img:'https://cdn.hmv.com/r/w-640/hmv/files/56/564162b3-2964-4255-995f-1b678f40897d.png',
        price:'15.600',
    },
    {
        id:16,
        type: 'Placas de video',
        prod: 'AMD ATI Firepro V4800 1gb',
        img: firepro,
        price:'140.000'
    },
    {
        id:17,
        type: 'Procesadores',
        prod: 'Intel Core i7 13700k 16 Nucleos',
        img: corei7,
        price: '703.466'
    },
    {
        id:18,
        type:'Almacenamiento',
        prod:'SAMSUNG 990 PRO Series NVMe SSD cont heatsink - 1TB',
        img: pro,
        price:'150'
    },
    {
        id:19,
        type:'Celulares',
        prod:'Nokia 3310 Azul Garantia 12 meses',
        img: nokia,
        price:'30.000'
    },
    {
        id:20,
        type: 'Memorias RAM',
        prod:'Thermaltake TOUGHRAM 16GB (2x8gb), DDR4, 3600MHz',
        img: ram,
        price:'80.000'
    },
    {
        id:21,
        type:'Motherboards',
        prod:'Aorus Z790 Xtreme',
        img:'https://static.gigabyte.com/StaticFile/Image/Global/1179b2ed6a06bb7f43bd798c948ebf92/Product/32318/png/1000',
        price:'450.000'
    },
    {
        id:22,
        type:'Perifericos',
        prod:'Parlante Genius SP-HF800A II Madera',
        img: parlantes,
        price:'23.000'
    },
    {
        id: 23,
        type: 'Procesadores',
        prod: 'Amd Ryzen 7 7800x3d',
        img: x3d,
        price: '35.960'
    },
    {
        id: 24,
        type: 'Memorias RAM',
        prod: 'Memoria RAM Crucial Basics DDR4 8GB',
        img:'https://logg.api.cygnus.market/static/logg/Global/Memoria%20RAM%20Crucial%20Basics%20DDR4%208GB%202666MHz%20CL19/bfb6f25be34a4ad4b88a0f6d61af6ca1.webp',
        price: '23.999'
    },
    {
        id: 25,
        type: 'Placas de video',
        prod: 'MSI Gaming X Nvidia RTX 2080 Ti',
        img: 'https://images.nvidia.com/aem-dam/Solutions/geforce/news/geforce-rtx-2080-ti-custom-card-roundup/MSI-1.png',
        price: '230.000'
    },
    {
        id: 26,
        type: 'Motherboards',
        prod: 'MPG Z790 EDGE WIFI',
        img: 'https://storage-asset.msi.com/global/picture/image/feature/mb/Z790/MPG-Z790-EDGE-WIFI/kv.png',
        price: '250.000'
    },
    {
        id: 27,
        type: 'Celulares',
        prod: 'Samsung Galaxy S22 5G 128GB',
        img: 'https://tienda.claro.com.ar/staticContent/Claro/images/catalog/productos/646x1000/70009812_3.webp',
        price:'255.000'
    },
    {
        id: 28,
        type: 'Perifericos',
        prod: 'Micrófono Logitech Blue Snowball Ice White',
        img: 'https://logitechar.vtexassets.com/arquivos/ids/157269-800-800?v=637115879566730000&width=800&height=800&aspect=true',
        price: '50.000'
    },
    {
        id: 29,
        type: 'Celulares',
        prod: 'Samsung Galaxy A15 128gb 4gb RAM',
        img: 'https://images.samsung.com/is/image/samsung/p6pim/ar/sm-a155mzkaaro/gallery/ar-galaxy-a15-sm-a155-sm-a155mzkaaro-541506119?$650_519_PNG$',
        price: '2.50'
    }
]
export default products