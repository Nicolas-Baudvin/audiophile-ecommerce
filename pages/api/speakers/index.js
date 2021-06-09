import dbConnect from '../../../utils/dbConnect';
import Speakers from '../../../model/Speakers';

async function Index(req, res) {
    await dbConnect();
    switch (req.method) {
        case 'GET': {
            return getSpeakers();
        }
        case 'POST': {
            return createSpeakers();
        }
        default:
            return res.status(405).end(`Methode ${req.method} incorrecte`);
    }

    async function getSpeakers() {
        try {
            const speakers = await Speakers.find();
            return res.status(200).json({ speakers });
        } catch (e) {
            console.log(e);
            return res.status(500).json({ error: 'Une erreur est survenue sur le serveur' });
        }
    }

    async function createSpeakers() {
        const { isNewProduct, name, desc, price, image, features, inTheBox } = req.body;
        try {
            const newSpeaker = new Speakers({
                isNewProduct,
                name,
                desc,
                price,
                image,
                features,
                inTheBox
            });

            await newSpeaker.save();

            return res.status(200).json({ message: 'Le produit a été ajouté' });
        } catch (e) {
            console.log(e);
            return res.status(500).json({ error: 'Une erreur est survenue sur le serveur' });
        }
    }
}

export default Index;
