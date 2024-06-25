import carlos from 'assets/judges/Carlos Nazario.jpg';
import craig from 'assets/judges/Craig McDean.jpg';
import courtney from 'assets/judges/Courtney Mchugh.jpg';
import drew from 'assets/judges/Drew Elliott.jpg';
import eugene from 'assets/judges/Eugene Souleiman.jpg';
import fabien from 'assets/judges/Fabien Baron.jpg';
import franscisco from 'assets/judges/Franscisco Costa.jpg';
import grace from 'assets/judges/Grace Choi.jpg';
import hung from 'assets/judges/Hung Vangoo.jpg';
import julia from 'assets/judges/Julia Jamois.jpg';
import michelle from 'assets/judges/Michelle Lamy.jpg';
import mitchell from 'assets/judges/Mitchell Halliday.jpg';
import ruba from 'assets/judges/Ruba Abu-Nimah.jpg';
import sallyann from 'assets/judges/Sallyann Houghton.jpg';
import shana from 'assets/judges/Shana Randhava.jpg';
import thomas from 'assets/judges/Thomas Roussel B.jpg';
import vanessa from 'assets/judges/Vanessa Craft.jpg';
import violet from 'assets/judges/Violet Chachki.jpg';
import hanna from 'assets/judges/hanna.jpg';
import celia from 'assets/judges/celia.jpg';

const judges = [
    {
        includeOnHome: true,
        image: shana,
        name: 'SHANA RANDHAVA',
        title: (
            <>
                SVP
                <br />
                New Incubation Ventures
                <br />
                The Estée Lauder Companies
            </>
        ),
        copy: `As the head of New Incubation Ventures (NIV), Shana Randhava is responsible for building The Estée Lauder Companies (ELC) early-stage investment and incubation strategy. This new team is building a distinctive capability for ELC to invest in and experiment at scale and create an actionable pipeline of next generation brands for the ELC portfolio. Prior to creating NIV, Shana led the New Business Development team and was responsible for shaping and executing the ELC’s M&A strategy for DECIEM, Dr. Jart+, Forest Essentials, BY Killian and Too Faced. New Incubation Ventures (NIV) is the strategic early-stage investment and incubation arm for The Estée Lauder Companies. `,
    },

    {
        includeOnHome: true,
        image: vanessa,
        name: 'VANESSA CRAFT',
        title: (
            <>
                Global Head
                <br />
                Content Partnerships
                <br />
                TikTok
            </>
        ),
        copy: `As TikTok’s Global Head of Content Partnerships, Vanessa Craft is a champion of next-gen talent. She is responsible for building engaged communities, directing game-changing content, and driving innovative business strategies for TikTok’s top Global partners across Fashion, Entertainment, Lifestyle, Education and Sports – as well as spearheading TikTok's first sponsorship of the 2024 Met Gala.`,
    },

    {
        includeOnHome: true,
        image: drew,
        name: 'DREW ELLIOTT',
        title: (
            <>
                SVP & Global Creative Director
                <br />
                M•A•C Cosmetics
            </>
        ),
        copy: `Drew Elliott leads M∙A∙C Cosmetics’ creative vision as Senior Vice President, Global Creative Director while also serving as Strategic Creative Advisor for Too Faced Cosmetics. At the creative helm of M·A·C Cosmetics, Drew is responsible for elevating the brand’s creative identity and trendsetting authority across all touch points of the consumer journey including retail, digital, packaging, visual merchandising, and multiplatform experiences.`,
    },

    {
        includeOnHome: true,
        image: mitchell,
        name: 'MITCHELL HALLIDAY',
        title: (
            <>
                Founder
                <br />
                Made by Mitchell
            </>
        ),
        copy: `Mitchell Halliday is a 25-year-old makeup virtuoso whose distinctive, vibrant looks and skilful transformations have captivated global audiences. In 2020, Mitchell founded Made By Mitchell, creating a range of versatile beauty products including the brand’s hero product, Blursh. After launching on TikTok Shop in 2022, Made By Mitchell's products became an integral part of the rapidly evolving beauty landscape on TikTok, further solidifying the brand's prominence in the ever-expanding world of beauty and cosmetics. `,
    },

    {
        image: hung,
        name: 'HUNG VANNGO',
        title: <>Makeup Artist</>,
        copy: `Hung Vanngo is a Vietnam-born, New York-based makeup artist known for combining glamour with an avant-garde aesthetic. He’s a go-to for prestigious brands such as Louis Vuitton, Marc Jacobs, and Calvin Klein, as well as high profile talent such as Selena Gomez, Bella Hadid, and Gwyneth Paltrow.`,
    },

    {
        image: michelle,
        name: 'MICHÈLE LAMY',
        // title: (
        //     <>
        //         Global Head
        //         <br />
        //         Content Partnerships
        //         <br />
        //         TikTok
        //     </>
        // ),
        copy: `Michèle Lamy is an artist, entrepreneur, producer, collaborator, performer and the co-founder of Owenscorp, along with her life partner Rick Owens. In 2014, Lamy created 'LAMYLAND,' an umbrella term for her independent creative endeavours, bringing together experimentation, collaboration, storytelling, and creation. She has worked on projects at renowned institutions and art fairs, including the Museum of Contemporary Art, Los Angeles, Frieze London, the Venice Biennale, and more.`,
    },

    {
        image: ruba,
        name: 'RUBA ABU-NIMAH',
        // title: (
        //     <>
        //         Global Head
        //         <br />
        //         Content Partnerships
        //         <br />
        //         TikTok
        //     </>
        // ),
        copy: `Ruba Abu-Nimah is an award-winning New York-based creative director, design and experiential curator, editor, and currently Brand Creative Director of Moncler. Ruba has held lead creative positions including Executive Creative Director of Tiffany & Co., Global Creative Director at Revlon and Shiseido, and Creative Director of ELLE Magazine.`,
    },

    {
        image: eugene,
        name: 'EUGENE SOULEIMAN',
        title: <>Professional hairstylist</>,
        copy: `Originally inspired by London’s punk scene, Eugene Souleiman is a hairstylist who creates with raw emotion and technical ability. Over a career spanning more than 30 years, his unique perspective has led him to work with a diverse group of the most forward-thinking and innovative fashion designers, including John Galliano, Alexander McQueen, and Yohji Yamamoto.`,
    },

    {
        image: violet,
        name: 'VIOLET CHACHKI',
        // title: (
        //     <>
        //         Global Head
        //         <br />
        //         Content Partnerships
        //         <br />
        //         TikTok
        //     </>
        // ),
        copy: `The winner of RuPaul’s Drag Race season seven, Violet Chachki is a trailblazing drag queen, burlesque performer, aerial artist, model and recording artist. The first drag artist to attend the Met Gala, Chachki has collaborated with leading brands including Prada, Moschino, Jean Paul Gaultier, and Miu Miu, and this summer will have a residency at famed Parisian cabaret club Crazy Horse.`,
    },

    {
        image: thomas,
        name: 'THOMAS ROUSSEL',
        title: <>Composer, Producer, Conductor</>,
        copy: `Thomas Roussel is a French composer and conductor based in Paris. For over twenty years, he has worked across fashion, cinema and luxury, including creating soundtracks for brands including Chanel, Dior, Givenchy, Valentino, and Cartier. He recently served as orchestra conductor and musical director for Pharrell Williams' first two shows at Louis Vuitton.`,
    },

    {
        image: franscisco,
        name: 'FRANCISCO COSTA',
        title: (
            <>
                Founder
                <br />
                Costa Brazil
            </>
        ),
        copy: `After serving as the creative director of Calvin Klein womenswear for 13 years, in 2016 Francisco Costa returned to his home country of Brazil. There, he launched Costa Brazil, an eco-forward skincare and fragrance line inspired by local healing rituals that works in partnership with local cooperatives and scientists, ensuring protection of both body and Earth. As well as being an avid environmentalist, Costa is engaged in numerous social causes in Brazil and around the world.`,
    },

    {
        image: julia,
        name: 'JULIA SARR-JAMOIS',
        // title: (
        //     <>
        //         Global Head
        //         <br />
        //         Content Partnerships
        //         <br />
        //         TikTok
        //     </>
        // ),
        copy: `With over 16 years experience in the industry, Julia Sarr-Jamois is a stylist and fashion director known for her effortless mixing of streetwear and high fashion aesthetics. With years at both i-D magazine and British Vogue under her belt, she’s shot with photographers including Tyrone Lebon, Alasdair McLellan, Tyler Mitchell, and Harley Weir; collaborated with designers to create custom looks for Beyoncé; and consulted for brands including Homer, Hermes, Chanel, Zara and Nike. `,
    },

    {
        image: fabien,
        name: 'FABIEN BARON',
        title: (
            <>
                Founder
                <br />
                Baron&Baron
            </>
        ),
        copy: `The founder of Baron&Baron, Fabien Baron has been leading iconic creative for some of the world’s most celebrated brands for over three decades. He’s spearheaded the image of fashion houses including Calvin Klein, Balenciaga, and Burberry, reinvented illustrious magazines including Interview, French Vogue, Harper’s Bazaar, and Italian Vogue, and creative directed campaigns for the likes of Nars, Louis Vuitton, and Dior. `,
    },

    // {
    //     image: carlos,
    //     name: 'CARLOS NAZARIO',
    //     // title: (
    //     //     <>
    //     //         Global Head
    //     //         <br />
    //     //         Content Partnerships
    //     //         <br />
    //     //         TikTok
    //     //     </>
    //     // ),
    //     copy: `Named by the CFDA as one of the stylists shaping the future of fashion, Carlos Nazario is a fashion editor, stylist and creative consultant based in New York City. He has collaborated with esteemed photographers like Alasdair McLellan, Mert Alas & Marcus Piggott, Mario Sorrenti, and Glen Luchford; talent such as Rihanna, Rosalía, Bella Hadid, Naomi Campbell, and Frank Ocean; and magazines including American Vogue, Italian Vogue, and i-D. He is currently the Style Director at Large of Harper’s Bazaar US.`,
    // },

    {
        image: courtney,
        name: 'COURTNEY MCHUGH',
        // title: (
        //     <>
        //         Global Head
        //         <br />
        //         Content Partnerships
        //         <br />
        //         TikTok
        //     </>
        // ),
        copy: `Courtney is a key member of the founding team of United Talent Agency’s (UTA) Venture team, where she leads the Incubation division. Her role involves assisting top-tier talent in launching businesses from the incubation stage to exit. Courtney is responsible for identifying best-in-class partners, participating in deal stage negotiations, and helping talent develop their product offerings, strategic brand positioning, and go-to-market strategies. She has played a significant role in shaping the brands of Issa Rae, Emma Chamberlain, Priyanka Chopra, Taraji P Henson and others.`,
    },

    {
        image: sallyann,
        name: 'SALLYANN HOUGHTON',
        // title: (
        //     <>
        //         Global Head
        //         <br />
        //         Content Partnerships
        //         <br />
        //         TikTok
        //     </>
        // ),
        copy: `Sallyann Houghton is Business Development / Strategic partnership for Fashion / Retail at Epic Games, based at the Epic Games London Innovation Lab, a hub for the creative community. Prior to Epic, Sallyann worked at renowned global content creation studio The Mill, where she headed up a content division – working directly with high profile and luxury brands to create stand out tech-driven creative content, which included AR, VR, and immersive pieces, along with live action and CG animation.`,
    },

    {
        image: grace,
        name: 'GRACE CHOI',
        title: <>Content Creator</>,
        copy: `Grace is an augmented reality effects creator, specialising in viral beauty filters on social media. Her clients include leading beauty brands including Dior, YSL, La Mer, Nars, Fenty, Kosas, and Benefit Cosmetics. Currently ranking in the top 1% of TikTok effect creators, she serves as a TikTok Effects House Ambassador. In 2023, Grace received a Cannes Lions award for her Fenty Beauty Match Stix Snatch campaign, marking the first TikTok effect to receive such recognition. Grace is also the inventor of Mink, the first 3D makeup printer that transforms any image into a wearable colour cosmetic.`,
    },

    {
        image: craig,
        name: 'CRAIG MCDEAN',
        title: <>Photographer</>,
        copy: `Craig McDean is one of fashion's most prolific and innovative photographers, renowned for his influential editorial images and portraiture. His career began in London in the 1990s, where he was a part of a new generation of photographers working for the cultural touchstones i-D and the Face. In the following decades, he has photographed major campaigns for fashion and beauty brands including Dior, Gucci, Yves Saint Laurent, Estee Lauder, and Calvin Klein. He regularly contributes to a range of publications including American, French, British and Italian Vogue, W, AnOther Magazine, and Interview.`,
    },

    {
        image: celia,
        name: 'CELIA ELLENBERG',
        title: (
            <>
                Founder
                <br />
                CE Strategy
            </>
        ),
        copy: `Celia Ellenberg  is the principal of CE Strategy, a boutique advisory offering consulting services for early-stage and legacy consumer brands in the beauty, fashion, and lifestyle space. Prior to this, she served as Vogue's Global Content Lead, Beauty & Wellness Director (US) for nearly a decade, overseeing the direction of the brand's cross-platform coverage in the category and helping to centralize its messaging across owned and operated markets. Ellenberg has spearheaded content and curation projects for brands including Estée Lauder, NARS Cosmetics, L’Oréal Luxe and Le Bon Marché, and has been a contributing editor at both WSJ Magazine and Style.com, where she built the digital fashion destination's debut beauty channel. `,
    },

    {
        image: hanna,
        name: 'HANNA HANRA',
        title: (
            <>
                Founder & EIC
                <br />
                BEAT magazine
            </>
        ),
        copy: `Since 2009, Hanna Hanra has curated the globally-renowned UK-based publication with continued success, spearheading new talent in both music and fashion genres. As a journalist she has contributed to Vogue, British Vogue, The Times of London, The New York Times, The Gentlewoman, Love, and The Guardian, amongst others. She has provided strategy and brand consultation to a wide variety of brands including Burberry, Reebok, FarFetch and Stella McCartney. As a DJ she has performed and produced music for Victoria Beckham, Coach, Miu Miu, Gucci, H&M and Dover Street Market. `,
    },
];

export default judges;
