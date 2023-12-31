import ryzen5 from '../pngs/ryzen5.png'
import corei7 from '../pngs/corei7.png'
import ram from '../pngs/ram.png'
import monitor from '../pngs/monitor.png'

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
        type:'Otras Cosas',
        prod:'Decodificador flow box (no sirve para nada)',
        img:'https://http2.mlstatic.com/D_NQ_NP_627552-MLA71349833650_082023-O.webp',
        price:'2.50',
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
        img:'https://www.qloud.ar/SITES/IMG/gaming-point-06-2021/221_13-10-2022-03-10-23-hero.png',
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
        type:'Otras Cosas',
        prod:'Peluche de Freddy',
        img:'https://m.media-amazon.com/images/I/71wRtp+WfCL._AC_SL1500_.jpg',
        price:'6.500',
    },
    {
        id:11,
        type:'Otras Cosas',
        prod:'Don Satur bizcochitos',
        img:'https://jumboargentina.vtexassets.com/arquivos/ids/250105/Bizcochos-Don-Satur-Dulces-200-Gr-1-16176.jpg?v=636388464661330000',
        price:'250',
    },
    {
        id:12,
        type:'Otras Cosas',
        prod:'Levite potable de manzana',
        img:'https://images.openfoodfacts.org/images/products/779/031/500/0880/front_es.16.400.jpg',
        price:'400',
    },
    {
        id:13,
        type:'Celulares',
        prod:'Samsung Gt-c3592 Pantalla Grande 2.4°-tapa C/camara',
        img:'https://http2.mlstatic.com/D_NQ_NP_684131-MLA69604024692_052023-O.webp',
        price:'6.000',
    },
    {
        id:14,
        type:'Perifericos',
        prod:'Genius DX-100 USB',
        img:'https://inkgenio.com.ar/5570-large_default/mouse-genius-dx-110-usb.jpg',
        price:'2.500',
    },
    {
        id:15,
        type:'Perifericos',
        prod:'Control original Nintendo 64',
        img:'https://m.media-amazon.com/images/I/91qahZOIs6L.jpg',
        price:'15.600',
    },
    {
        id:16,
        type: 'Placas de video',
        prod: 'AMD ATI Firepro V4800 1gb',
        img: 'https://tpucdn.com/gpu-specs/images/c/572-bottom.jpg',
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
        type:'Otras Cosas',
        prod:'Empanadas de carne cortada a cuchillo',
        img:'https://mambofoods.com/wp-content/uploads/2020/01/Empanada-arg-beef-1000-877x992.png',
        price:'150'
    },
    {
        id:19,
        type:'Celulares',
        prod:'Nokia 3310 Azul Garantia 12 meses',
        img:'https://i.ebayimg.com/images/g/dLUAAOSw-S1kAr9k/s-l1200.webp',
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
        prod:'Parlante genius HF500A II madera',
        img:'https://diamondsystemar.vtexassets.com/arquivos/ids/158710/6543523132_1.jpg?v=638164057190870000',
        price:'23.000'
    },
    {
        id: 23,
        type: 'Procesadores',
        prod: 'Intel Core i5 9600k S/COOLER',
        img: 'https://media.ldlc.com/r1600/ld/products/00/05/04/90/LD0005049034_2.jpg',
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
]
export default products