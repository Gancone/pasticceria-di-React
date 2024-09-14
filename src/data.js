const dolci = [
    {
        id: 1,
        immagine: "https://www.cucina-naturale.it/wp-content/uploads/2016/11/tiramisu.jpg",
        nome: "Tiramisù",
        descrizione: "Soffice dessert al caffè con savoiardi, mascarpone e cacao.",
        prezzo: 5.50,
        descrizioneCompleta: "Un classico senza tempo: il Tiramisù è un dolce che incanta con la sua leggerezza e cremosità. I savoiardi inzuppati nel caffè si sposano perfettamente con il mascarpone e una spolverata di cacao per un'esperienza irresistibile."
    },
    {
        id: 2,
        immagine: "https://sudfood.com/wp-content/uploads/Cann/li/Cannoli-Siciliani.jpg",
        nome: "Cannolo Siciliano",
        descrizione: "Cialda croccante ripiena di ricotta dolce, canditi e gocce di cioccolato.",
        prezzo: 3.00,
        descrizioneCompleta: "Il Cannolo Siciliano è un'esplosione di sapori. La sua cialda croccante racchiude una dolce e cremosa ricotta, arricchita da canditi e gocce di cioccolato per un tocco di golosità pura."
    },
    {
        id: 3,
        immagine: "https://www.cucchiaio.it/content/dam/cucchiaio/it/ricette/2009/11/ricetta-panna-cotta/panna%20cotta-1.jpg",
        nome: "Panna Cotta",
        descrizione: "Delicato dolce a base di panna, vaniglia e zucchero con salsa ai frutti di bosco.",
        prezzo: 4.00,
        descrizioneCompleta: "La Panna Cotta è un dolce vellutato e delicato, perfetto per chi cerca un'esperienza leggera ma ricca. La morbidezza della panna si sposa armoniosamente con una salsa fresca ai frutti di bosco."
    },
    {
        id: 4,
        immagine: "https://blog.giallozafferano.it/valeriaciccotti/wp-content/uploads/2020/10/SFOGLIATELLE-RICCE-12.jpg",
        nome: "Sfogliatella",
        descrizione: "Pasta sfoglia croccante ripiena di ricotta, semolino e canditi.",
        prezzo: 2.80,
        descrizioneCompleta: "Croccante all'esterno, morbida e profumata all'interno, la Sfogliatella è un capolavoro della pasticceria napoletana. Il suo ripieno di ricotta, semolino e canditi è un'esplosione di dolcezza."
    },
    {
        id: 5,
        immagine: "https://www.giallozafferano.it/images/ricette/175/17552/foto_hd/hd650x433_wm.jpg",
        nome: "Pastiera Napoletana",
        descrizione: "Crostata ripiena di ricotta, grano cotto, zucchero e acqua di fiori d'arancio.",
        prezzo: 5.00,
        descrizioneCompleta: "La Pastiera Napoletana è la quintessenza dei dolci pasquali campani. Il suo sapore unico, dato dall'acqua di fiori d'arancio, si unisce alla dolcezza della ricotta e alla croccantezza della crosta per un'esperienza indimenticabile."
    },
    {
        id: 6,
        immagine: "https://modenadintorni.altervista.org/wp-content/uploads/2017/03/zuppa-inglese-ricetta-originale-modena.jpeg",
        nome: "Zuppa Inglese",
        descrizione: "Dolce a strati con crema pasticcera, cioccolato e liquore Alchermes.",
        prezzo: 4.50,
        descrizioneCompleta: "Un dolce dal sapore antico, la Zuppa Inglese è un viaggio nel gusto. Strati di crema pasticcera, cioccolato e un tocco di Alchermes creano un contrasto unico e sofisticato."
    },
    {
        id: 7,
        immagine: "https://www.altasferasicilia.it/wp-content/uploads/2022/06/gelato-altasfera-1-1024x597.jpg",
        nome: "Gelato Artigianale",
        descrizione: "Gelato cremoso in vari gusti: vaniglia, cioccolato, fragola e pistacchio.",
        prezzo: 2.50,
        descrizioneCompleta: "Il Gelato Artigianale è una vera delizia estiva. Cremoso e rinfrescante, è disponibile in una varietà di gusti, dal classico cioccolato alla delicata fragola, fino all'elegante pistacchio."
    },
    {
        id: 8,
        immagine: "https://www.lacucinaimperfetta.com/wp-content/uploads/2012/03/Strudel-di-mele.jpg",
        nome: "Strudel di Mele",
        descrizione: "Pasta sfoglia ripiena di mele, uvetta e cannella, servito caldo.",
        prezzo: 4.20,
        descrizioneCompleta: "Un dolce che racchiude tutto il calore dell'autunno: lo Strudel di Mele. Mele morbide, uvetta dolce e una spolverata di cannella, avvolte in una croccante pasta sfoglia, sono il comfort food per eccellenza."
    },
    {
        id: 9,
        immagine: "https://blog.giallozafferano.it/sfiziedelizie/wp-content/uploads/2022/03/20220331_160351-960x844.jpg",
        nome: "Babà",
        descrizione: "Dolce soffice e spugnoso imbevuto di rum e decorato con panna.",
        prezzo: 3.50,
        descrizioneCompleta: "Il Babà è un'icona della pasticceria napoletana. La sua consistenza soffice e spugnosa, inzuppata nel rum, crea un contrasto perfetto tra dolcezza e intensità, arricchito dalla morbida panna."
    },
    {
        id: 10,
        immagine: "https://www.cucchiaio.it/content/cucchiaio/it/ricette/2014/09/ricetta-torta-sacher/_jcr_content/header-par/image_single.img.jpg/1600612468564.jpg",
        nome: "Torta Sacher",
        descrizione: "Torta al cioccolato con strato di marmellata di albicocche, glassata al cioccolato fondente.",
        prezzo: 6.00,
        descrizioneCompleta: "La Torta Sacher è un capolavoro della pasticceria austriaca. Un'armoniosa combinazione di cioccolato fondente e marmellata di albicocche racchiusa in una glassa perfetta, per i veri amanti del cioccolato."
    },
    {
        id: 11,
        immagine: "https://images.immediate.co.uk/production/volatile/sites/2/2017/12/xmas-Cover-17-V1-WHITE-90341eb.jpg?quality=90&crop=3785px,3334px,4429px,4023px&resize=556,505",
        nome: "Profiterole",
        descrizione: "Bignè ripieni di crema e ricoperti di cioccolato fondente.",
        prezzo: 4.80,
        descrizioneCompleta: "Un trionfo di golosità! I bignè leggeri, ripieni di crema vellutata, vengono avvolti da un irresistibile strato di cioccolato fondente. Il Profiterole è un dolce perfetto per chi ama combinare cremosità e croccantezza."
    },
    {
        id: 12,
        immagine: "https://recipesblob.cameo.it/assets/c7649e71d6994232bfb0f1badb4426cb/1272x764/_gb10423-a-misurajpg.jpg",
        nome: "Cheesecake alle fragole",
        descrizione: "Base croccante di biscotto con crema al formaggio e topping di fragole.",
        prezzo: 5.50,
        descrizioneCompleta: "Una delizia che unisce la dolcezza delle fragole alla freschezza della crema al formaggio. La Cheesecake alle fragole è il dessert perfetto per chi cerca equilibrio tra croccantezza e cremosità, con un irresistibile topping di fragole fresche."
    },
    {
        id: 13,
        immagine: "https://staticcookist.akamaized.net/wp-content/uploads/sites/21/2021/11/Millefoglie-alla-crema.jpg",
        nome: "Millefoglie",
        descrizione: "Strati alternati di pasta sfoglia croccante e crema pasticcera.",
        prezzo: 4.30,
        descrizioneCompleta: "Un dolce dall'eleganza senza pari. La Millefoglie è un raffinato gioco di consistenze: strati di pasta sfoglia friabile si alternano a una deliziosa crema pasticcera, per una dolcezza che si scioglie in bocca."
    },
    {
        id: 14,
        immagine: "https://www.moltofood.it/wp-content/uploads/2023/06/Pasta-frolla-crostate-1024x683.jpg",
        nome: "Crostata alla Marmellata",
        descrizione: "Pasta frolla croccante con marmellata di albicocche o frutti di bosco.",
        prezzo: 3.80,
        descrizioneCompleta: "Un classico intramontabile: la Crostata alla Marmellata conquista con la sua frolla croccante e il cuore dolce di marmellata, che può essere di albicocche o frutti di bosco, per soddisfare ogni palato."
    },
    {
        id: 15,
        immagine: "https://www.cartaincarta.it/public/Files/rif000002/1125/macarons.jpg",
        nome: "Macarons",
        descrizione: "Dolcetti francesi croccanti fuori e morbidi dentro, disponibili in vari gusti e colori.",
        prezzo: 1.50,
        descrizioneCompleta: "Eleganti, colorati e deliziosi, i Macarons sono il simbolo della raffinatezza francese. Questi dolcetti croccanti fuori e soffici dentro sono disponibili in una varietà di gusti e colori che deliziano sia la vista che il palato."
    },
    {
        id: 16,
        immagine: "https://www.lacannoleriasiciliana.it/wp-content/uploads/2019/12/cannoleria-siciliana-cassata-roma.jpg",
        nome: "Cassata Siciliana",
        descrizione: "Torta ricoperta di glassa, farcita con ricotta, frutta candita e cioccolato.",
        prezzo: 5.80,
        descrizioneCompleta: "La Cassata Siciliana è un inno alla tradizione e ai sapori dell'isola. Ricoperta di glassa e farcita con ricotta dolce, frutta candita e gocce di cioccolato, è un'esplosione di colori e sapori che racconta la Sicilia in ogni morso."
    },
    {
        id: 17,
        immagine: "https://i.pinimg.com/736x/8d/99/05/8d99058c7f5f310671b4786feb67df61.jpg",
        nome: "Crostata al Limone",
        descrizione: "Base di pasta frolla con ripieno di crema al limone e meringa.",
        prezzo: 4.00,
        descrizioneCompleta: "La Crostata al Limone è un dolce fresco e profumato. La pasta frolla croccante racchiude un ripieno cremoso al limone, bilanciato perfettamente dalla dolcezza della meringa leggera che la completa."
    },
    {
        id: 18,
        immagine: "https://staticcookist.akamaized.net/wp-content/uploads/sites/21/2023/03/Torta-mimosa.jpg",
        nome: "Torta Mimosa",
        descrizione: "Soffice pan di spagna farcito con crema pasticcera e decorato con cubetti di pan di spagna.",
        prezzo: 5.00,
        descrizioneCompleta: "La Torta Mimosa, con il suo soffice pan di spagna e la delicata crema pasticcera, è un dolce che celebra la primavera. I cubetti di pan di spagna che decorano la superficie ricordano i fiori di mimosa, rendendola tanto bella quanto deliziosa."
    },
    {
        id: 19,
        immagine: "https://wips.plug.it/cips/buonissimo.org/cms/2019/01/progetto-senza-titolo-2.png?w=713&a=c&h=407",
        nome: "Torta al Cioccolato",
        descrizione: "Ricca torta al cioccolato con glassa fondente e ripieno di crema al cacao.",
        prezzo: 4.50,
        descrizioneCompleta: "Per i veri amanti del cioccolato, questa Torta al Cioccolato è un sogno che diventa realtà. Ricca e intensa, con una glassa fondente e un cuore cremoso al cacao, è il dessert perfetto per soddisfare le voglie più golose."
    },
    {
        id: 20,
        immagine: "https://www.portugalist.com/wp-content/uploads/pastel-de-nata.jpg",
        nome: "Pastel de Nata",
        descrizione: "Dolcetto portoghese di pasta sfoglia ripieno di crema pasticcera e cannella.",
        prezzo: 2.00,
        descrizioneCompleta: "Un'icona della pasticceria portoghese, il Pastel de Nata combina la croccantezza della pasta sfoglia con un ripieno cremoso e avvolgente di crema pasticcera, arricchito da una leggera nota di cannella."
    },
    {
        id: 21,
        immagine: "https://cdn.cook.stbm.it/thumbnails/ricette/142/142776/hd750x421.jpg",
        nome: "Pancake",
        descrizione: "Frittella soffice fatta con farina, uova, latte e lievito, cotta in padella.",
        prezzo: 200.00,
        descrizioneCompleta: "Perfetti per una colazione o un brunch, i Pancake sono soffici frittelle che possono essere accompagnate da sciroppo d'acero, frutta fresca o creme dolci. Ogni morso è un morbido abbraccio che riempie di dolcezza la giornata."
    }
];

export default dolci;