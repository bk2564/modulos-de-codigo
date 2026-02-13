  import express from 'express';
  import cors from 'cors';
  import fs from 'fs';
  
  const app = express();
  app.use(cors());
  app.use(express.json());
  

    app.get('/veiculos', (req, res) => {
      const veiculos = JSON.parse(fs.readFileSync('teste.json', 'utf8'));
      res.json(veiculos);
    });
    app.listen(3000, () => {
      console.log('Server started on port 3000');
    });
 
