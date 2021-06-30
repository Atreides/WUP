module.exports = function(app, db){
    app.post('/message', (req, res) => {
        
        console.log('POST', req.body);

        let {author, text} = req.body;
        
        db.create({author, text}, err => {
            return console.log(err);
        });
        
        res.json({ author, text });
    })
}