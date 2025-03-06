//Ajout des prix sur les livres (Credits: Benjamin Seixeiro)

function getRandomPrice() {
    const random = Math.random() * (40.0 - 4.0) + 4.0;
    return parseFloat(random.toFixed(2));
}

const livres = db.livres.find({}, { _id: 0, Title: 1 })

livres.forEach(l => {
    db.livres.updateOne({ Title: l.Title }, { $set: { prix: getRandomPrice() } })
})
