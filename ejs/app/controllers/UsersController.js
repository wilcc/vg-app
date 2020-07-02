// import user model
import User from '../models/users'

module.exports = {
    index: (req, res) => {
       User.getAll((err, rows) => {
           if (err) {
               res.json(err);
           } else {
               res.json(rows);
           }
       })
    }
} 
