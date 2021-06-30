const cors = require('cors');
// let corOptions = {
//     origin: 'http://localhost:3000',
//     optionSuccessStatus: 200
// }

module.exports = function(app, db){
    app.use(cors());
    app.get('/message',   (req, res) => {
        
       
        console.log('GET', req.query);
       // const author = req.query.author;

        db.find().then((err, data) => {
            if(err){
                return res.send(err);
            }
           res.json(data);
        });
    
    })
    
}

// res.setHeader('Access-Control-Allow-Origin', '*');
            // res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
// cors(corOptions),

// .then((err, data) => {
//     if(err){
//         res.send(err);
//     }