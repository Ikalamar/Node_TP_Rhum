const Recette = require("../../model/recette");

async function getAllRecettes(req, res) {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
    
        const startIndex = (page - 1) * limit;
        const total = await Recette.countDocuments();

        const recettes = await Recette.find().skip(startIndex).limit(limit);
        res.json({
            page,
            limit,
            total,
            pages: Math.ceil(total / limit),
            data: recettes,
        });
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur', error });
    }
}

async function findRecette(req, res) {
    try {
        let { name, rhum, ingredients } = req.body;

        const recette = await Recette.findOne( { name, rhum, ingredients, instructions } );
        if (recette) {
            res.json(recette);
        } else {
            res.status(404).json({ message: 'Recette non trouvée' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur', error });
    }
}

async function addRecette(req, res) {
    try {
        let { name, rhum, ingredients } = req.body;
        const recette = new Recette({ name, rhum, ingredients, instructions });
        await recette.save();
        res.status(201).json({ message: 'Recette ajoutée avec succès'});
    
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur', error });
    }
}

module.exports = { getAllRecettes, findRecette, addRecette };