const Rhum = require("../../model/rhumData");
const rhumService = require('../../service/rhum');

async function getAllRhums(req, res) {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const result = await rhumService.getAllRhums(page, limit);
        
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur', error });
    }
}

async function findRhum(req, res) {
    try {
        let { name, type, pays } = req.body;
        const rhum = await rhumService.findRhum(name, type, pays);

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