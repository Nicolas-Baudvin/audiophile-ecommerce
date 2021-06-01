import mongoose from 'mongoose';
import dbConnect from '../../../utils/dbConnect';
const Headphones = mongoose.model('Headphones');

export default async function headphones(req, res) {
    await dbConnect();
    switch (req.method) {
        case 'GET':
            return getHeadphones();
        case 'POST':
            return createHeadphones();
        default:
            return res.status(405).end(`METHOD ${req.method} incorrect`);
    }

    async function getHeadphones() {
        try {
            const allHeadphones = await Headphones.find();
            return res.status(200).json({ headphones: allHeadphones });
        } catch (e) {
            return res.status(500).json({ error: 'Une erreur est survenue sur le serveur' });
        }
    }

    async function createHeadphones() {
        const { name, isNewProduct, desc, image, price } = req.body;

        try {
            const newHeadphones = new Headphones({
                name,
                isNewProduct,
                desc,
                image,
                price
            });

            await newHeadphones.save();
            return res.status(201).json({ message: 'Nouveau casque ajouté au catalogue' });
        } catch (e) {
            console.log(e);
            return res.status(500).json({ error: 'Une erreur est survenue sur le serveur' });
        }
    }
}
