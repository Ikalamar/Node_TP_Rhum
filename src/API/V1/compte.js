const Compte = require("../../model/compte");
const bcrypt = require('bcrypt');

async function getAllComptes(req, res) {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
    
        const startIndex = (page - 1) * limit;
        const total = await Compte.countDocuments();

        const comptes = await Compte.find().skip(startIndex).limit(limit);
        res.json({
            page,
            limit,
            total,
            pages: Math.ceil(total / limit),
            data: comptes,
        });
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur', error });
    }
}

async function addCompte(req, res) {
    try {
        const findCompte = await Compte.findOne({ email });
        if (findCompte) {
            return res.status(400).json({ message: 'Compte déjà existant' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            email,
            password: hashedPassword,
        });
        await newUser.save();
        res.status(201).json({ message: 'Compte ajouté avec succès'});
    
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur', error });
    }
}

async function login(req, res) {
    try {
        const compte = await Compte.findOne({ email });
        if (!compte) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }

        const mdpValid = await bcrypt.compare(password, compte.password);
        if (!mdpValid) {
            return res.status(401).json({ message: 'Mot de passe incorrect' });
        }

        const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ message: 'Connexion réussie', token });
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur', error });
    }
}

module.exports = { getAllComptes, addCompte, login };