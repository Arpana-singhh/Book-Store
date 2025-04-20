import express from "express";
import 'dotenv/config'
import connectDB from "./config/mongodb.js";
import authRouter from './routes/authRoutes.js'
import transporter from './config/nodemailer.js'
const app=express();
const port=process.env.PORT || 4000
connectDB();
app.use(express.json())
app.use('/api/auth', authRouter)

app.get('/', (req, res)=>{
    res.send('Server is Running')
})


app.get('/test-email', async (req, res) => {
    try {
      const info = await transporter.sendMail({
        from: `Book Store <${process.env.SENDER_EMAIL}>`,
        to: 'nainusingh4013@gmail.com',
        subject: 'Test Email',
        text: 'Hello Hello',
      });
      console.log('✅ Email sent:', info);
      res.send('Sent! Info: ' + JSON.stringify(info));
    } catch (err) {
      console.log('❌ Email Error:', err);
      res.status(500).send('Failed to send: ' + err.message);
    }
  });
  

app.listen(port, ()=>{
    console.log(`Server is running on ${port} `)

})