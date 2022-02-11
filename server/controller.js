const fortunes = require('./db.json');
const users = 
  {
    "firstName": "First Name",
    "lastName": "Last Name",
    "favColor": "Favorite Color"
  }

let globalId = fortunes[fortunes.length - 1].id + 1

module.exports = {
  
    getCompliment: (req, res) => {
      const compliments = ["Gee, you're a smart cookie!",
               "Cool shirt!",
               "Your Javascript skills are stellar.",
      ];
    
      // choose random compliment
      let randomIndex = Math.floor(Math.random() * compliments.length);
      let randomCompliment = compliments[randomIndex];
    
      res.status(200).send(randomCompliment);
      
    },

    getFortunes: (req, res) => {
      let randomIndex = Math.floor(Math.random() * fortunes.length);
      let randomFortune = fortunes[randomIndex];


      res.status(200).send(randomFortune)
    },

    addFortune: (req, res) => {
      const {fortune} = req.body;

      const newFortune = {
        id: globalId,
        fortune
      }
      fortunes.push(newFortune);
      globalId++;

      res.status(200).send(newFortune)
    },

    deleteFortune: (req, res) => {
       console.log('request received')
      fortunes.splice(0, fortunes.length),

      res.status(200).send(fortunes)
    },

    getUser: (req, res) => {
      res.status(200).send(users);
    },

    updateUser: (req, res) => {
      const {firstName, lastName, favColor} = req.body
      newUser = {
        firstName,
        lastName,
        favColor
      }
      res.status(200).send(users)

    }
  

}