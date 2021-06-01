const Index = (req, res) => {
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

    async function getSpeakers() {}

    async function createSpeakers() {}
};

export default Index;
