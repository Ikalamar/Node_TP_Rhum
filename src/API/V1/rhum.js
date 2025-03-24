const Rhum = require("../../model/rhumData");

async function getAllRhums(req, res) {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
    
        const startIndex = (page - 1) * limit;
        const total = await Rhum.countDocuments();

        const rhums = await Rhum.find().skip(startIndex).limit(limit);
        res.json({
            page,
            limit,
            total,
            pages: Math.ceil(total / limit),
            data: rhums,
        });
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur', error });
    }
}

async function findRhum(req, res) {
    try {
        let { name, type, pays } = req.body;

        const rhum = await Rhum.findOne( { name, type, pays } );
        if (rhum) {
            res.json(rhum);
        } else {
            res.status(404).json({ message: 'Rhum non trouvé' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur', error });
    }
}

module.exports = { getAllRhums, findRhum };