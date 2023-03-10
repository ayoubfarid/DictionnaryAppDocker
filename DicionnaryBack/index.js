const express = require('express');
const bodyParser = require('body-parser');
const Model = require('./models/dictionnary')
const dbConfig = require('./database.config.js');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({"message": "Hello Crud Node Express"});
});


mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Databse Connected Successfully!!");    
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});
app.post('/dictionnary', (req, res) => {
console.log(req.body)
    console.log(req.body.word)
    console.log(req.body.meaning)
    const data = new Model({
        word: req.body.word,
        meaning: req.body.meaning
    })
    //console.log(data)


    try {
        
        const dataToSave = data.save();
       
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})
//Get all Method
app.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        console.log(data)
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
app.get('/getOne/:_id', async(req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
app.put('/update/:_id', async(req, res) => {
    try {
        
        const updatedpost = await Model.updateOne({_id:req.params._id}, {$set: req.body});
        res.status(200).json(updatedpost);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
  
})

//Delete by ID Method
app.delete('/delete/:_id', async(req, res) => {
    try {
       
       
        const data = await Model.deleteOne({_id:req.params._id})
        res.send(`Document with ${data.subject} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});