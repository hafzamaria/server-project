import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
const port = 4000;

app.get('/home', (req, res) => {
  res.send('I am home page!')
})

app.get('/profile', (req, res) => {
    res.send('I am profile page!')
  })
  
app.get('/weather', (req, res) => {
    res.send({
    temprature:"20",
    city:"karachi",
    condition:"clear",
    condition:"sunny",
    country:"Pakistan";
})
  })
const PORT =process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})