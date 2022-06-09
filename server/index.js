const path = require('path');
const constants = require('./constants');
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/company/:domain", async (req, res) => {
  try {
    const domain = req.params.domain
    const company = await axios.get(`${constants.companyApiUrl}${domain}`, {
      headers: {
        Authorization: `Bearer ${constants.companyApiKey}`,
      },
    });
    if (!company) {
      console.error('Error fetching company');
      return res.status(500).json({message: 'Error fetching company'});
    }
    return res.json(company.data);
  } catch (e) {
    return res.status(500).json({message: 'Error fetching company'});
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});