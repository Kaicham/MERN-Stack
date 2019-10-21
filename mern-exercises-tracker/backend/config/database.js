const mongoose = require('mongoose')

module.exports = {

    connect() {
        const uri = process.env.ATLAS_URL;
        mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        
        const connection = mongoose.connection;
        connection.once('open', () => {
            console.log('MongoDB connection estabilished successfully')
        })
    }
    

}
