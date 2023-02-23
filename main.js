const {db} = require('./server/db')
const app = require('./server')
const PORT = 1337

db.sync().then(() => {
    console.log(db.sync);

    app.listen(PORT, () => console.log(`listening to sweet baby sounds on ${PORT}`))
})
