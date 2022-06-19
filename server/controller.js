listElements = []

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["Wealth awaits you very soon.", "Our deeds determine us, as much as we determine our deeds.", "There is no greater pleasure than seeing your loved ones prosper.", "You will become great if you believe in yourself."]
        let randomIndex = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[randomIndex]
        res.status(200).send(randomFortune)
    },

    getInspiration: (req, res) => {
        const inspiration = ["When you have a dream, you’ve got to grab it and never let go.", "Nothing is impossible. The word itself says ‘I’m possible!'", "The bad news is time flies. The good news is you’re the pilot.", "Life has got all those twists and turns. You’ve got to hold on tight and off you go.","Keep your face always toward the sunshine, and shadows will fall behind you."]
        let randomIndex = Math.floor(Math.random() * inspiration.length)
        let randomQuote = inspiration[randomIndex]
        res.status(200).send(randomQuote)
    }
}