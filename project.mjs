import express from 'express';
const app = express();
// app.use(cors());
const port = 3000;

app.get('/', (req, res) => {
  res.send('I am home page!')
})

app.get('/', (req, res) => {
    res.send('I am profile page!')
  })
  
// app.get('/weather', (req, res) => {
//     res.send({
//     temprature:"20",
//     city:"karachi",
//     condition:"clear",
//     condition:"sunny",
// })

//   })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})