//product home
window.addEventListener('load', function() {
    var app = new Vue({
        el: '#app',
        data: {
            currentActivity: 'app',
            products: [{
                    id: 1,
                    name: 'Acer Nitro 5',
                    lnk: 'ace.png'
                },
                {
                    id: 2,
                    name: 'Lenovo Yoga 920 L1',
                    lnk: 'LenovoYoga920L1.jpg'
                },
                {
                    id: 3,
                    name: 'Lenovo Legion Y720',
                    lnk: 'lenovolaptoplegiony72015.png'
                },
                {
                    id: 4,
                    name: 'Macbook Pro',
                    lnk: 'macbook.png'
                },
                {
                    id: 5,
                    name: 'Iphone x',
                    lnk: 'iphone.png'
                },
                {
                    id: 6,
                    name: 'samsungs9+',
                    lnk: 'samsungs9.png'
                }
            ]
        }
    })
})

//page product
window.addEventListener('load', function() {
    var vm = new Vue({
        el: '#prod',
        data: {
            lnk: '',
            name: '',
            description: '',
            items: [
                { itemName: 'Acer Nitro 5 ', desc: ' Tipe = Notebook. CPU : AMD,Core i5 , Core i7. GPU : NVIDIA GeForce GTX 1050, AMD Radeon RX550. RAM : Up To 32GB. Tipe Penyimpanan : HDD up to 2TB, SSD up to 512GB. Layar : 15.6 inchi, FHD 1920x1080 piksel.', lnk: 'ace.png' },
                { itemName: 'Lenovo Yoga 920 L1 ', desc: 'Processor: Intel Core i7-8550U. SSD: 512GB. Konektivitas: Wifi + Bluetooth. Sistem Operasi: Windows 10 Home. RAM: 16GB DDR4. VGA: Intel HD Graphics. Ukuran Layar: 13.9 Inch FHD Touchscreen', lnk: 'LenovoYoga920L1.jpg' },
                { itemName: 'Lenovo Legion Y720 ', desc: ' Intel Kaby Lake 7th Quad Core i7 7700HQ 2.8GHz up to 3.8GHz (6MB Cache). 16GB RAM DDR4 (Max. 32GB). 256GB SSD. VGA nVidia GeForce GTX1060 6GB DDR5. Windows 10 Home 64bit. 15.6"inch IPS FHD Matte LED Display. 2 x 2W Harman Certified Speakers with Dolby Audio Premium.', lnk: 'lenovolaptoplegiony72015.png' },
                { itemName: 'Macbook Pro', desc: 'Layar 13,3 inci (diagonal) dengan lampu latar LED dan teknologi IPS; resolusi 2560 x 1600 pada 227 piksel per inci Skala resolusi yang didukung: 1680 x 1050,1440 x 900,1024 x ,ntel Core i5 dual-core 2,3 GHz, Turbo Boost hingga 3,6 GHz, dengan eDRAM sebesar 64 MB ', lnk: 'macbook.png' },
                { itemName: 'Acer Nitro 5 ', desc: ' Super Retina HD display, 5.8-inch (diagonal) all-screen OLED Multi-Touch display/HDR displa , 2436-by-1125-pixel resolution at 458 ppi, 1,000,000:1 contrast ratio (typical) , Support for display of multiple languages and characters simultaneously.', lnk: 'iphone.png' }, 
                { itemName: 'Acer Nitro 5 ', desc: ' CPU Exynos 9810 (Indonesia) 64-bit, Octa-core processor (2,7/2,8 GHz Quad + 1,7 GHz Quad), Ukuran Layar : 6.2 Inch Dual Edge Super AMOLED 2960 x 1440 (Quad HD+) 529 pp, RAM/memori 6 GB/ 128 GB + up to 400 GB via microSD card', lnk: 'samsungs9.png' }          
            ]
        },
        methods: {
            itemClicked: function(item) {
                this.name = item.itemName;
                this.description = item.desc;
                this.lnk = item.lnk;
                $("#my-modal").modal('show');
            }
        }
    })
})


window.addEventListener('load', function() {
    var about = new Vue({
        el: '#about',
        data: {
            currentActivity: 'about',
            image: 'rog.png',        }
    })
})


//galeri home
window.addEventListener('load', function() {
    var galeri = new Vue({
        el: '#galeri',
        data: {
            currentActivity: 'galeri',
            galeri: [{
                    name: 'Acer Nitro 5',
                    lnk: 'ace.png'
                },
                {
                    name: 'Lenovo Legion Y720',
                    lnk: 'lenovolaptoplegiony72015.png'
                },
                {
                    name: 'Lenovo Yoga 920 L1',
                    lnk: 'LenovoYoga920L1.jpg'
                },
            ]
        }
    })
})

window.addEventListener('load', function() {
    var app = new Vue({
        el: '#galerry',
        data: {
            currentActivity: 'galerry',
            products: [{
                    id: 1,
                    name: 'Acer Nitro 5',
                    lnk: 'ace.png'
                },
                {
                    id: 2,
                    name: 'Lenovo Legion Y720',
                    lnk: 'lenovolaptoplegiony72015.png'
                },
                {
                    id: 3,
                    name: 'Lenovo Yoga 920 L1',
                    lnk: 'LenovoYoga920L1.jpg'
                }
            ]
        }
    })
})