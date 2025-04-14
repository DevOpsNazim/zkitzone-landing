// server.js
// npm run start:api
const express = require("express");
const app = express();
const port = 5000;

const cors = require("cors");
app.use(cors());

const faqs = [
  {
    question: "What IT services do you offer?",
    answer:
      "We offer web/app development, cloud solutions, cybersecurity, DevOps, networking, CCTV, and local data center services.",
    col: 0,
  },
  {
    question: "Do you offer mobile app development?",
    answer:
      "Yes, we build cross-platform apps using Flutter and native technologies for iOS and Android.",
    col: 0,
  },
  {
    question: "What cloud platforms do you support?",
    answer:
      "We support AWS, Microsoft Azure, and Google Cloud Platform, including setup, migration, and management.",
    col: 1,
  },
  {
    question: "Do you provide SEO and website optimization?",
    answer:
      "Yes, our services include technical SEO, speed optimization, and content strategy to boost your ranking.",
    col: 1,
  },
  {
    question: "Can I request a custom package?",
    answer:
      "Absolutely. We tailor services to your budget, goals, and technical needs.",
    col: 0,
  },
  {
    question: "Is support included after development?",
    answer:
      "Yes, we offer maintenance, updates, and tech support for all delivered projects.",
    col: 1,
  },
];

app.get("/api/faqs", (req, res) => {
  res.json(faqs);
});

app.listen(port, () => {
  console.log(`📡 FAQ API listening on http://localhost:${port}`);
});

// npm run start:api
