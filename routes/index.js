const express = require('express')
const router = express.Router()
function calculateAge() {
    const birthdate = new Date("2005-08-28");
    const today = new Date();

    let years = today.getFullYear() - birthdate.getFullYear();

    const hasHadBirthday =
        today.getMonth() > birthdate.getMonth() ||
        (today.getMonth() === birthdate.getMonth() && today.getDate() >= birthdate.getDate());

    if (!hasHadBirthday) years--;

    return years;
}

function getOrdinal(age){
    if (age % 100 >= 11 && age % 100 <= 13) return age + "th";
    switch(age%10){
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th"
    }
        
}
router.get('/', (req, res) => {
    res.render('index', {
        title: "Renzelle",
        pictures: [
            "/assets/pictures/photo1.png",
            "/assets/pictures/photo2.png",
            "/assets/pictures/photo3.png",
            "/assets/pictures/photo4.png",
            "/assets/pictures/photo5.png"
        ],
        icon: "/assets/pictures/photo1.png",
        developer: "Jip Jip",
        age: calculateAge()+getOrdinal(calculateAge()),
        message: "Sana Ilibre mo parin ako kahit muntikan ko na makalimutan birthday mo. Mabuhay ka ng matagal 💖"
    })
})

module.exports = router
