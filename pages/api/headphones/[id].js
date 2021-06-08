import Headphones from '../../../model/Headphones';

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
            const headphone = await Headphones.findOne({ _id: id });
            if (!headphone) {
                return res.status(404).json({ error: 'headphone not found' });
            }
            return res.status(200).json({ product: headphone });
        } catch (e) {
            return res.status(500).json({ error: 'Une erreur est survenue sur le serveur' });
        }
    }
};

export default handler;
