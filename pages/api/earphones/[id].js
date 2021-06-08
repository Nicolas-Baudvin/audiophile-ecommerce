import Earphones from '../../../model/Earphones';

const handler = (req, res) => {
    switch (req.method) {
        case 'GET': {
            return getProductById();
        }
        default: {
            return res.status(405).end(`Method ${req.method} incorrect`);
        }
    }

    async function getProductById() {
        const { id } = req.query;
        try {
            const earphones = await Earphones.findOne({ _id: id });
            if (!earphones) {
                return res.status(404).json({ error: 'earphones not found' });
            }
            return res.status(200).json({ product: earphones });
        } catch (e) {
            return res.status(500).json({ error: 'Une erreur est survenue sur le serveur' });
        }
    }
};

export default handler;
