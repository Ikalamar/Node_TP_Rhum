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

async function getAllRecettesPublic(req, res) {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
    
        const startIndex = (page - 1) * limit;
        const total = await Recette.countDocuments({ isPublic: true });

        const recettes = await Recette.find({ isPublic: true }).skip(startIndex).limit(limit);
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

async function getRecetteByCompte(req, res) {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
    
        const startIndex = (page - 1) * limit;
        const total = await Recette.countDocuments({ user: req.compte._id });

        const recettes = await Recette.find({ user: req.compte._id }).skip(startIndex).limit(limit);
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

async function addRecette(req, res) {
    try {
        const { name, rhum, ingredients, instructions } = req.body;
        const recette = new Recette({ name, rhum, ingredients, instructions, user: req.compte._id });
        await recette.save();
        res.status(201).json({ message: 'Recette ajoutée avec succès', recette });
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur', error });
    }
}

async function updateRecette(req, res) {
    try {
        const { name, rhum, ingredients, instructions } = req.body;
        const recette = await Recette.findByIdAndUpdate(req.params.id, { name, rhum, ingredients, instructions }, { new: true });
        if (recette) {
            res.json({ message: 'Recette mise à jour avec succès', recette });
        } else {
            res.status(404).json({ message: 'Recette non trouvée' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur', error });
    }
}


module.exports = { getAllRecettes, findRecette, getAllRecettesPublic, getRecetteByCompte, addRecette, updateRecette };