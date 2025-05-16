const Rhum = require('../API/V1/rhum');

async function getAllRhums(page = 1, limit = 10) {
    const startIndex = (page - 1) * limit;
    const total = await Rhum.countDocuments();
    const rhums = await Rhum.find().skip(startIndex).limit(limit);

    return {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
        data: rhums,
    };
}

async function findRhum(name, type, pays) {
    return await Rhum.findOne({ name, type, pays });
}

module.exports = { getAllRhums, findRhum };
