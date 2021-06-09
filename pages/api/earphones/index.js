import Earphones from '../../../model/Earphones';

export default async function (req, res) {
    switch (req.method) {
        case 'GET': {
            return getEarphones();
        }
        case 'POST': {
            return createEarphones();
        }
        default:
            return res.status(405).end(`Method ${req.method} incorrect`);
    }

    async function getEarphones() {
        try {
            const earphones = await Earphones.find();
            return res.status(200).json({ earphones });
        } catch (e) {
            return res.status(500).json({ error: 'Une erreur est survenue sur le serveur' });
        }
    }

    async function createEarphones() {
        const { isNewProduct, name, desc, price, image, features, inTheBox } = req.body;
        try {
            const newEarphones = new Earphones({
                isNewProduct,
                name,
                desc,
                price,
                image,
                features,
                inTheBox
            });

            await newEarphones.save();

            return res.status(200).json({ message: 'Le produit a été ajouté' });
        } catch (e) {
            console.log(e);
            return res.status(500).json({ error: 'Une erreur est survenue sur le serveur' });
        }
    }
}
