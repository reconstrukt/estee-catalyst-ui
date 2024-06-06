import alexb from 'assets/experts/alexb.jpg';
import alexs from 'assets/experts/alexs.jpg';
import catherine from 'assets/experts/catherine.jpg';
import dom from 'assets/experts/dom.jpg';
import fenn from 'assets/experts/fenn.jpg';
import joanna from 'assets/experts/joanna.jpg';
import marina from 'assets/experts/marina.jpg';
import montague from 'assets/experts/montague.jpg';
import nellie from 'assets/experts/nellie.jpg';
import shar from 'assets/experts/shar.jpg';
import sophie from 'assets/experts/sophie.jpg';
import sunday from 'assets/experts/sunday.jpg';
import tendai from 'assets/experts/tendai.jpg';
import yasmin from 'assets/experts/yasmin.jpg';

const experts = [
    {
        image: joanna,
        name: 'JOANNA ELLNER',
        title: (
            <>
                Founder & CEO, <br />
                REOME
            </>
        ),
        copy: `Joanna Ellner is an award-winning beauty editor and trained acupuncturist, and the founder of REOME. REOME's mission is two-fold: to invigorate stress-compromised skin with highly-specialised, potent formulas, and to redefine skincare as a tool for self-connection. Powered by advanced biotech, the next-generation skincare brand exists at the intersection of skin science and grounding practice.`,
    },

    {
        image: tendai,
        name: 'TENDAI MOYO',
        title: (
            <>
                CEO & Co-Founder, <br />
                RUKA Hair
            </>
        ),
        copy: `Tendai Moyo is the Zimbabwean-born co-founder and CEO of Ruka Hair, an ethical hair extension and product line created by and for Black women. Ruka’s mission is to challenge the idea that hair has to be managed rather than enjoyed, and instead celebrate it as a source of pride, power and a visual representation of the creativity of Black women. `,
    },

    {
        image: yasmin,
        name: 'YASMIN SEWELL',
        title: (
            <>
                Founder, <br />
                VYRAO
            </>
        ),
        copy: `Yasmin Sewell spent many years working in the fashion industry as a buyer and creative director, establishing herself as a sought-after tastemaker with a keen eye on the future. During this time, she simultaneously trained in various systems of holistic wellbeing, before deciding in 2019 to direct her lifelong passion for wellness and energetic medicine into her own fragrance brand, Vyrao.`,
    },

    {
        image: marina,
        name: 'MARINA MANSOUR',
        title: (
            <>
                Vice President - Beauty & Wellness, <br />
                Kyra
            </>
        ),
        copy: `Marina Mansour is the Vice President of Beauty and Wellness at Kyra, the tech platform and creative agency designed to serve the creator economy. Marina has spent her career at the intersection between talent, content and brands, and since 2017 has nurtured Beauty to become Kyra’s biggest vertical.`,
    },

    {
        image: montague,
        name: 'MONTAGUE ASHLEY-CRAIG',
        title: (
            <>
                Founder, <br />
                MontaMonta
            </>
        ),
        copy: `Montague Ashley Craig is a cosmetic scientist who, after working for brands such as Aesop and Soho House, founded East London-based sustainable skincare brand MONTAMONTA. Montague is inspired most by managing the complex critical paths involved in taking a product from idea-in-head to on-shelf, as well as translating hard science into effective brand communications.`,
    },

    {
        image: nellie,
        name: 'NELLIE EDEN',
        title: (
            <>
                Creative Director, <br />
                IDEX Capital Partners
            </>
        ),
        copy: `Nellie Eden is a Creative Director, Consultant and Editor specialising in digital culture, working with many of the most influential brands in the fashion and beauty spheres – including Selfridges, Nike, and Martine Rose. Nellie’s vision has been pivotal in setting a blueprint for a new, creative and inclusive beauty language, one that favours creativity, self-expression and liberation over out of date norms and beliefs.`,
    },

    {
        image: sunday,
        name: 'SUNDAY RILEY',
        title: (
            <>
                CEO, <br />
                Sunday Riley
            </>
        ),
        copy: `A legendary beauty authority, Sunday Riley is the founder, CEO, and chief formulator of Sunday Riley Modern Skincare. Founded in 2009, the cult brand continues to define the burgeoning niche beauty category thanks to its best-selling products and household-name status. AS A WIFE, MOTHER OF FOUR, AND ANIMAL LOVER, SUNDAY IS DEVOTED TO THE BRAND'S CORE VALUES OF ADVOCATING FOR HUMAN RIGHTS AND SUSTAINABILITY.`,
    },

    {
        image: sophie,
        name: 'SOPHIE CARBONARI',
        title: <>The French Facialist</>,
        copy: `Sophie Carbonari was just sixteen when she began studying beauty and hairdressing. Now, the Mali-born, south of France-raised facialist is renowned for her unique and personal approach to facials – based on stimulating the deep muscles and a patchwork of ancestral techniques from all over the world – including lymphatic drainage, ayurveda and kobido.`,
    },

    {
        image: alexs,
        name: 'ALEX SOSSAH',
        title: (
            <>
                Founder & Creative Director, <br />
                Metallic Inc
            </>
        ),
        copy: `Working at the coalface of fashion, music and marketing for over a decade, Alex Sossah has come to re-shape how brands interact with their audiences. Sossah has led collaborations between the world’s most iconic brands and influential artists, and creating authentic, sustained partnerships in the process.  In 2017, Sossah co-founded Metallic Inc. with Grace Ladoja. Today, alongside ongoing Metallic partnerships with Nike, Converse, Fenty, Amazon and others, he oversees creative direction for Metallic Inc Studio. As Creative Director at Metallic, he continues to strive to connect youth culture, music and fashion, with innovative strategies, creative solutions, and authentic connections.`,
    },

    {
        image: alexb,
        name: 'ALEX BROWNSELL',
        title: (
            <>
                Co-Founder & Creative Director, <br />
                Bleach London
            </>
        ),
        copy: `Alex Brownsell is an influential hair stylist and a visionary colourist. Her inimitable creativity has seen her style shoots for titles including British Vogue, i-D, and Dazed, as well as for brands like Gucci, Celine,, Hermès, and Alexander McQueen. In 2010, Alex co-founded the cult hair salon Bleach, igniting the world's collective lust for rainbow hair. Now, Bleach London’s range of Vegan, cruelty free DIY dyes and styling products are sold in major suppliers around the world – including Boots and Walmart.`,
    },

    {
        image: dom,
        name: 'DOM BRIDGES',
        title: (
            <>
                Founder, <br />
                Haeckels
            </>
        ),
        copy: `Haeckels was founded in 2012 in Margate by volunteer beach warden and coastal enthusiast Dom Bridges. Disillusioned by the production ethos of many larger skincare companies, Dom wanted to create simple handcrafted products that showcased the surrounding coast’s natural ingredients. All Haeckels products have their foundation in seaweed picked by hand in Margate – now, the brand is stocked worldwide and has expanded to offer facials in two Haeckels House locations.`,
    },

    {
        image: fenn,
        name: 'FENN O’MEALLY',
        title: <>Filmmaker</>,
        copy: `Born in Birmingham and of Jamaican heritage, for Fenn O’Meally the camera is a way to explore and study human stories, many of which observe her Caribbean roots. With a background of dance, her visuals see her lean on her early childhood love of movement and music. She has directed films for some of the world’s leading brands including; Nike, Burberry, Byredo, Louis Vuitton, Chanel, Dior, and Prada among many others, and worked with some of the World's most exciting artists, including Kendrick Lamar, Jorja Smith, Sampha and Spike Lee.`,
    },

    {
        image: catherine,
        name: 'CATHERINE PELTON',
        title: (
            <>
                Investment Principal, <br />
                True
            </>
        ),
        copy: `Catherine Pelton is an Investment Principal at UK-based investment and innovation firm True. With a mission to reimagine business, True supports and grows consumer companies through investment, innovation and visionary brand collaborations. Prior to joining True, Catherine was at Pentland Brands — a global sports and fashion business where she spent time in London, Hong Kong and Shanghai. After returning from China, she joined the Corporate Development team, where she developed a love of investing in exciting consumer brands.`,
    },

    {
        image: shar,
        name: 'SHARMADEAN REID',
        title: (
            <>
                Founder & CEO, <br />
                The Stack World
            </>
        ),
        copy: `Sharmadean Reid MBE is a founder, writer and creative consultant who in her 20 year career has launched an innovation led nail salon, a beauty tech start up and now the Stack World, a media company with a global community of 20,000 mission driven women. Her work explores the role that communities and networks play in relationships between women, equity and power, and her debut collection of essays, New Methods for Women is published by Penguin Life in June 2024. `,
    },
];

export default experts;
