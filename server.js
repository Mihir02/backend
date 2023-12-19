const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3001;

const collection = require('./mongoose');


app.use(bodyParser.json());
app.use(cors())

app.post('/admission', async (req, res) => {
  const { name, age, selectedBatch } = req.body;

  console.log({ name, age, selectedBatch });

  // Basic validation
  if (!name || !age || !selectedBatch) {
    return res.status(400).json({ error: 'Incomplete data provided' });
  }

  if (age < 18 || age > 65) {
    return res.status(400).json({ error: 'Invalid age. Must be between 18 and 65.' });
  }

  // Store data in the in-memory database
  // database.push({ name, age, selectedBatch });

  try {
    const user1 = new collection({ name, age, selectedBatch })
            const doc = await user1.save();

            console.log(doc)

  } catch (err) {
    console.log("error while login post" + err);
    res.status(500).send("Error");
  }

  // Assume CompletePayment() is a mock function for payment processing
  // You would call the actual payment processing logic here

  //

  // Return a success response
  res.json({ success: true, message: 'Admission successful' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
