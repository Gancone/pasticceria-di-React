const dolci = [
    {
        id: 1,
        immagine: "https://www.cucina-naturale.it/wp-content/uploads/2016/11/tiramisu.jpg",
        nome: "Tiramisù",
        descrizione: "Soffice dessert al caffè con savoiardi, mascarpone e cacao.",
        prezzo: 5.50
    },
    {
        id: 2,
        immagine: "https://dolciariaacquaviva.com/wp-content/uploads/2019/09/CA0026.jpg",
        nome: "Cannolo Siciliano",
        descrizione: "Cialda croccante ripiena di ricotta dolce, canditi e gocce di cioccolato.",
        prezzo: 3.00
    },
    {
        id: 3,
        immagine: "https://www.cucchiaio.it/content/dam/cucchiaio/it/ricette/2009/11/ricetta-panna-cotta/panna%20cotta-1.jpg",
        nome: "Panna Cotta",
        descrizione: "Delicato dolce a base di panna, vaniglia e zucchero con salsa ai frutti di bosco.",
        prezzo: 4.00
    },
    {
        id: 4,
        immagine: "https://blog.giallozafferano.it/valeriaciccotti/wp-content/uploads/2020/10/SFOGLIATELLE-RICCE-12.jpg",
        nome: "Sfogliatella",
        descrizione: "Pasta sfoglia croccante ripiena di ricotta, semolino e canditi.",
        prezzo: 2.80
    },
    {
        id: 5,
        immagine: "https://www.giallozafferano.it/images/ricette/175/17552/foto_hd/hd650x433_wm.jpg",
        nome: "Pastiera Napoletana",
        descrizione: "Crostata ripiena di ricotta, grano cotto, zucchero e acqua di fiori d'arancio.",
        prezzo: 5.00
    },
    {
        id: 6,
        immagine: "https://modenadintorni.altervista.org/wp-content/uploads/2017/03/zuppa-inglese-ricetta-originale-modena.jpeg",
        nome: "Zuppa Inglese",
        descrizione: "Dolce a strati con crema pasticcera, cioccolato e liquore Alchermes.",
        prezzo: 4.50
    },
    {
        id: 7,
        immagine: "https://www.altasferasicilia.it/wp-content/uploads/2022/06/gelato-altasfera-1-1024x597.jpg",
        nome: "Gelato Artigianale",
        descrizione: "Gelato cremoso in vari gusti: vaniglia, cioccolato, fragola e pistacchio.",
        prezzo: 2.50
    },
    {
        id: 8,
        immagine: "https://www.lacucinaimperfetta.com/wp-content/uploads/2012/03/Strudel-di-mele.jpg",
        nome: "Strudel di Mele",
        descrizione: "Pasta sfoglia ripiena di mele, uvetta e cannella, servito caldo.",
        prezzo: 4.20
    },
    {
        id: 9,
        immagine: "https://blog.giallozafferano.it/sfiziedelizie/wp-content/uploads/2022/03/20220331_160351-960x844.jpg",
        nome: "Babà",
        descrizione: "Dolce soffice e spugnoso imbevuto di rum e decorato con panna.",
        prezzo: 3.50
    },
    {
        id: 10,
        immagine: "https://www.cucchiaio.it/content/cucchiaio/it/ricette/2014/09/ricetta-torta-sacher/_jcr_content/header-par/image_single.img.jpg/1600612468564.jpg",
        nome: "Torta Sacher",
        descrizione: "Torta al cioccolato con strato di marmellata di albicocche, glassata al cioccolato fondente.",
        prezzo: 6.00
    },
    {
        id: 11,
        immagine: "https://images.immediate.co.uk/production/volatile/sites/2/2017/12/xmas-Cover-17-V1-WHITE-90341eb.jpg?quality=90&crop=3785px,3334px,4429px,4023px&resize=556,505",
        nome: "Profiterole",
        descrizione: "Bignè ripieni di crema e ricoperti di cioccolato fondente.",
        prezzo: 4.80
    },
    {
        id: 12,
        immagine: "https://recipesblob.cameo.it/assets/c7649e71d6994232bfb0f1badb4426cb/1272x764/_gb10423-a-misurajpg.jpg",
        nome: "Cheesecake ai Frutti di Bosco",
        descrizione: "Base croccante di biscotto con crema al formaggio e topping di frutti di bosco.",
        prezzo: 5.50
    },
    {
        id: 13,
        immagine: "https://staticcookist.akamaized.net/wp-content/uploads/sites/21/2021/11/Millefoglie-alla-crema.jpg",
        nome: "Millefoglie",
        descrizione: "Strati alternati di pasta sfoglia croccante e crema pasticcera.",
        prezzo: 4.30
    },
    {
        id: 14,
        immagine: "https://www.moltofood.it/wp-content/uploads/2023/06/Pasta-frolla-crostate-1024x683.jpg",
        nome: "Crostata alla Marmellata",
        descrizione: "Pasta frolla croccante con marmellata di albicocche o frutti di bosco.",
        prezzo: 3.80
    },
    {
        id: 15,
        immagine: "https://www.cartaincarta.it/public/Files/rif000002/1125/macarons.jpg",
        nome: "Macarons",
        descrizione: "Dolcetti francesi croccanti fuori e morbidi dentro, disponibili in vari gusti e colori.",
        prezzo: 1.50
    },
    {
        id: 16,
        immagine: "https://www.lacannoleriasiciliana.it/wp-content/uploads/2019/12/cannoleria-siciliana-cassata-roma.jpg",
        nome: "Cassata Siciliana",
        descrizione: "Torta ricoperta di glassa, farcita con ricotta, frutta candita e cioccolato.",
        prezzo: 5.80
    },
    {
        id: 17,
        immagine: "https://i.pinimg.com/736x/8d/99/05/8d99058c7f5f310671b4786feb67df61.jpg",
        nome: "Crostata al Limone",
        descrizione: "Base di pasta frolla con ripieno di crema al limone e meringa.",
        prezzo: 4.00
    },
    {
        id: 18,
        immagine: "https://staticcookist.akamaized.net/wp-content/uploads/sites/21/2023/03/Torta-mimosa.jpg",
        nome: "Torta Mimosa",
        descrizione: "Soffice pan di spagna farcito con crema pasticcera e decorato con cubetti di pan di spagna.",
        prezzo: 5.00
    },
    {
        id: 19,
        immagine: "https://wips.plug.it/cips/buonissimo.org/cms/2019/01/progetto-senza-titolo-2.png?w=713&a=c&h=407",
        nome: "Torta al Cioccolato",
        descrizione: "Ricca torta al cioccolato con glassa fondente e ripieno di crema al cacao.",
        prezzo: 4.50
    },
    {
        id: 20,
        immagine: "https://www.portugalist.com/wp-content/uploads/pastel-de-nata.jpg",
        nome: "Pastel de Nata",
        descrizione: "Dolcetto portoghese di pasta sfoglia ripieno di crema pasticcera e cannella.",
        prezzo: 2.00
    },
    {
        id: 21,
        immagine: "https://cdn.cook.stbm.it/thumbnails/ricette/142/142776/hd750x421.jpg",
        nome: "Pancake",
        descrizione: "Un pancake è una frittella soffice fatta con farina, uova, latte e lievito, cotta in padella.",
        prezzo: 200.00
    },
];

export default dolci;