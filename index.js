const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const certificadoUrl = req.query.certificadoUrl;

  if (!certificadoUrl) {
    return res.status(400).send("Parâmetro certificadoUrl é obrigatório.");
  }

  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="BRB Completo - Certificado Engaja" />
        <meta property="og:image" content="${certificadoUrl}" />
      </head>
      <body style="padding: 0; margin:0; height: 100vh; overflow: hidden; display: flex; justify-content: center; align-items: center; background-color: #eaecf0;">
        <main style="height: 85%; width: auto; display: flex;">
          <img style="border-radius: 20px; box-shadow: 0px 3px 10px 5px rgba(0, 0, 0, 0.2);" src="${certificadoUrl}" />
        </main>
      </body>
    </html>
  `;

  res.send(html);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});