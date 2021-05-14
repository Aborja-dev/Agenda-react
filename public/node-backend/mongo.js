const mongoose = require('mongoose')

const connectionString = process.env.MONGODB_URL

//conexion a mongoDB

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
    })
        .then(()=>{
            console.log('Conexion a base de datos')

        })
        .catch(err=>console.log(err))



        
/* Note.find({}).then( (result)=>{
    console.log(result)
    mongoose.connection.close()
}) */
/* const note = new Note({
    content: 'Me gusta Mongo DB',
    date: new Date(),
    important: true
})
note.save()
    .then(result => {
        console.log(result)
        mongoose.connection.close()
    })
    .catch(err=>console.log(err)) */

