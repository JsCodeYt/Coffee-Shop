const router = require("express").Router()

const DATA = [
    { title: "This is one of the fastest fast foods", url: "https://www.eatthis.com/wp-content/uploads/sites/4/2022/06/fast-food-assortment-soda.jpg?quality=82&strip=1", price: "120", rating: 4.5, cat: "fast-foods" },
    { title: "22 Low Carb Fast Food Options That Won't Ruin Your Diet", url: "https://thumbs.dreamstime.com/b/fast-food-concept-greasy-fried-restaurant-take-out-as-onion-rings-burger-hot-dogs-fried-chicken-french-fries-31114163.jpg", price: "300", rating: 3.4, cat: "burger", cat: "fast-foods" },
    { title: "785,548 Fast Food Stock Photos - Free & Royalty-Free Stock Photos from Dreamstim", url: "https://thumbs.dreamstime.com/b/fast-food-concept-greasy-fried-restaurant-take-out-as-onion-rings-burger-hot-dogs-fried-chicken-french-fries-31114163.jpg", price: "120", rating: 1.2, cat: "fast-foods" },
    { title: "The top 10 fast-food brands in Asia-Pacific | Marketing | Campaign Asia", url: "https://cdn.i.haymarketmedia.asia/?n=campaign-asia%2Fcontent%2Ftop10fastfood_main_1200.jpg&h=570&w=855&q=100&v=20170226&c=1", price: "200", rating: 5.5, cat: "fast-foods" },
    { title: "The rise and rise of the fast food industry", url: 'https://cdn.downtoearth.org.in/library/large/2019-03-05/0.89399200_1551782137_fast1.jpg', price: "20", rating: 1.2, cat: "fast-foods" },
    { title: "Best Ice Cream Cake", url: "https://hips.hearstapps.com/hmg-prod/images/summer-dessert-recipes-1652981297.jpeg", price: "120", rating: 2.3, cat: "dessert" },
    { title: "10 Delicious Dessert Recipes | Easy Desserts | Tesco Real Food", url: "https://realfood.tesco.com/media/images/RFO-1400x919-classic-chocolate-mousse-69ef9c9c-5bfb-4750-80e1-31aafbd80821-0-1400x919.jpg", price: "200", rating: 2.3, cat: "dessert" },
    { title: "Fudge Ice-Cream Dessert", url: "https://images-gmi-pmc.edge-generalmills.com/7c1096c7-bfd0-4806-a794-1d3001fe0063.jpg", price: "50", rating: 4.5, cat: "dessert" },
    { title: "Summer desserts for parties", url: "https://myfoodbook.com.au/sites/default/files/collections_image/custard_trifle_summer_dessert.jpeg", price: "100", rating: 4.5, cat: "dessert" },
    { title: "Breackfast Pictures | Download Free Images on Unsplash", url: "https://media.istockphoto.com/id/533645537/photo/breakfast-with-bacon-eggs-pancakes-and-toast.jpg?b=1&s=170667a&w=0&k=20&c=KnP0mQ_H51uf7V7JCtKzy_LbQetMO3X4gebF6NxgT10=", price: "12", rating: 4.5, cat: "breack-fast" },
    { title: "Morning break-the-fast special: 5 best healthy breakfast ideas to kickstart your day | Hindustan Times", url: "https://images.hindustantimes.com/img/2022/05/12/550x309/eiliv-sonas-aceron-uAm1CZMdPCw-unsplash_1652322720622_1652322742034.jpg", price: "120", rating: 1.2, cat: "breack-fast" },
    { title: "Yom Kippur Break Fast Traditions From Around the World | The Nosher", url: 'https://www.myjewishlearning.com/wp-content/uploads/2019/09/Chaya-fish-board-ed-piece-945x630.jpg', price: "120", rating: 3.4, cat: "breack-fast" },
    { title: "How People Break Fast on Yom Kippur Around the World | MyRecipes", url: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2018%2F02%2F13%2Ffield-image-gettyimages-474480494-2000.jpg&q=60", price: "12", rating: 2.3, cat: "breack-fast" },
    { title: "262 Coofee Stock Photos - Free & Royalty-Free Stock Photos from Dreamstime", url: "https://thumbs.dreamstime.com/b/coofee-latte-heart-white-coffee-cup-top-view-old-wooden-table-background-131207025.jpg", price: "21", rating: 3.4, cat: "cooffe" },
    { title: "Coofee Stock Photo - Download Image Now - China - East Asia, Close-up, Coffee - Drink - iStock", url: "https://media.istockphoto.com/id/651206438/photo/coofee.jpg?s=170667a&w=0&k=20&c=EmN6iHK3lJ_BeVX2VKCrcYvweWLej9MjmHhgSLh8WVE=", price: "20", rating: 3.4, cat: "cooffe" },
    { title: "Top view image of coofee cup on rustic wooden table. vintage filtered Photograph by Virginija Vaidakaviciene - Fine Art America", url: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/top-view-image-of-coofee-cup-on-rustic-wooden-table-vintage-filtered-virginija-vaidakaviciene.jpg", price: "200", rating: 3.3, cat: "cooffe" }
]


router.get("/", (req, res) => {
    try {
        const products = DATA
        return res.status(200).json(products)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get("/filter", (req, res) => {
    try {
        const filterProduct = DATA.filter(item => item.cat === req.query.cat)
        return res.status(200).json(filterProduct)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router