import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@mui/material/Button";
import "../styles/CompanyHistory.scss";

const steps = [
  { 
    id: 1, 
    title: "Step 1: Foundation", 
    content: `Here are important points to understand about exosome particles:
      <br>1. Exosomes are bi-lipid layered particles ranging between 50-200 nm in size and include markers like CD63 and CD9.
      <br>2. When companies mention the number of particles in their products, it refers to all particles, not just exosomes.
      <br>3. In theory, a particle measuring 1 cm x 1 cm in diameter could contain up to 10⁷ × 10⁷ nm-sized particles.
      <br>4. It's important to ask how many exosomes are present among the total particles in a product to get accurate information.
      <br>5. Isolating 1 billion exosomes from stem cells, such as from the umbilical cord or placenta, costs more than 10,000 USD. 
      <br>Therefore, any product claiming to contain 1 billion exosomes priced below 100 USD is not feasible.`,
    image: "/images/qna4.png"
  },
  { 
    id: 2, 
    title: "Step 2: Growth", 
    content: "In 2010, we expanded our operations internationally.",
    image: "/images/growth.jpg"
  },
  { 
    id: 3, 
    title: "Step 3: Innovation", 
    content: "By 2015, we introduced cutting-edge technology solutions.",
    image: "/images/innovation.jpg"
  },
  { 
    id: 4, 
    title: "Step 4: Expansion", 
    content: "Our global reach increased significantly in 2020.",
    image: "/images/expansion.jpg"
  },
  { 
    id: 5, 
    title: "Step 5: Future", 
    content: "We are committed to shaping the future with innovation.",
    image: "/images/future.jpg"
  }
];

export default function CompanyHistory() {
  const [activeStep, setActiveStep] = useState(null);

  const toggleStep = (id) => {
    setActiveStep(activeStep === id ? null : id);
  };

  return (
    <div className="company-history">
      <h1>Our Company Journey</h1>

      <div className="steps-container">
        {steps.map((step) => (
          <motion.div key={step.id} whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <Card 
              className={`step-card ${activeStep === step.id ? "active" : ""}`} 
              onClick={() => toggleStep(step.id)}
            >
              <div className="step-title">
                <span>{step.title}</span>
                <motion.span
                  animate={{ rotate: activeStep === step.id ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-xl"
                >
                  ▼
                </motion.span>
              </div>

              <AnimatePresence>
                {activeStep === step.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <CardContent className="step-content">
                      <img src={step.image} alt={step.title} className="step-image" />
                      <p dangerouslySetInnerHTML={{ __html: step.content }} />
                    </CardContent>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="github-button">
        <Button
          variant="contained"
          color="primary"
          size="large"
          href="https://saidakhmad77.github.io/Q-A/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            borderRadius: "8px",
            textTransform: "none",
            fontWeight: "bold",
            padding: "10px 20px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
            transition: "background 0.3s ease-in-out",
            "&:hover": {
              backgroundColor: "#1e40af",
            },
          }}
        >
          Visit Our Q&A
        </Button>
      </div>
    </div>
  );
}