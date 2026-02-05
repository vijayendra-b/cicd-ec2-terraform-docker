const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const timestamp = new Date().toLocaleString();

  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>POC-22 | CI/CD on EC2</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: Arial, Helvetica, sans-serif;
          background: linear-gradient(135deg, #1e3c72, #2a5298);
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #333;
        }
        .card {
          background: #fff;
          padding: 30px 40px;
          border-radius: 10px;
          width: 420px;
          text-align: center;
          box-shadow: 0 10px 25px rgba(0,0,0,0.25);
        }
        h1 {
          margin-top: 0;
          color: #1e3c72;
        }
        .success {
          color: #2e7d32;
          font-weight: bold;
          margin: 10px 0 20px;
        }
        ul {
          list-style: none;
          padding: 0;
          text-align: left;
        }
        ul li {
          margin: 8px 0;
          padding-left: 5px;
        }
        .footer {
          margin-top: 20px;
          font-size: 0.85em;
          color: #666;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>POC-22</h1>
        <p class="success">🚀 CI/CD Pipeline Deployed Successfully</p>

        <ul>
          <li>✔ Source Control: GitHub</li>
          <li>✔ CI/CD Tool: Jenkins</li>
          <li>✔ Containerization: Docker</li>
          <li>✔ Infrastructure: AWS EC2</li>
          <li>✔ IaC: Terraform</li>
        </ul>

        <div class="footer">
          <p>Last Deployed:</p>
          <strong>${timestamp}</strong>
        </div>
      </div>
    </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log("POC-22 app running on port 3000");
});
