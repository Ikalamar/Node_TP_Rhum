const { client } = require("./server.js");

async function getAllRhums(res) {
    try {
        const database = client.db("rhums");
        const collection = database.collection("rhums");
    
        const data = await collection.find().toArray();
        res.json(data);
      } catch (error) {
        res.status(500).json({ error: "Erreur serveur" });
      }
}

async function findRhumById(res, id) {
    try {
        const database = client.db("rhums");
        const collection = database.collection("rhums");
    
        const data = await collection.find({ _id: id }).toArray();
        res.json(data);
        } catch (error) {
        res.status(500).json({ error: "Erreur serveur" });
    }
}

module.exports = { getAllRhums, findRhumById };