import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

function Stepper() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedIssue, setSelectedIssue] = useState("");

  const brands = [
    "Apple iPhone",
    "Samsung",
    "Google Pixel",
    "OnePlus",
    "Xiaomi",
  ];

  const models = {
    "Apple iPhone": [
      "iPhone 15 Pro Max",
      "iPhone 15 Pro",
      "iPhone 15",
      "iPhone 14 Pro Max",
      "iPhone 14",
    ],
    Samsung: ["Galaxy S24 Ultra", "Galaxy S24+", "Galaxy S24", "Galaxy S23"],
    "Google Pixel": ["Pixel 8 Pro", "Pixel 8", "Pixel 7 Pro", "Pixel 7"],
    OnePlus: ["OnePlus 12", "OnePlus 11", "OnePlus Nord"],
    Xiaomi: ["Xiaomi 14 Pro", "Xiaomi 13 Pro", "Redmi Note 13"],
  };

  const issues = [
    "Screen Replacement",
    "Battery Replacement",
    "Camera Repair",
    "Charging Port Repair",
    "Water Damage",
    "Mute and Volume Button Flex",
    "Speaker Repair",
    "Software Issues",
  ];

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  // New function to go back a step
  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return selectedBrand !== "";
      case 2:
        return selectedModel !== "";
      case 3:
        return selectedIssue !== "";
      default:
        return false;
    }
  };

  return (
    <div className="min-vh-100 bg-light d-flex align-items-center justify-content-center p-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="card shadow-lg border-0 rounded-4">
              <div className="card-body p-4 p-md-5">
                {/* Stepper */}
                <div className="d-flex justify-content-center align-items-center mb-5">
                  {[1, 2, 3].map((step) => (
                    <React.Fragment key={step}>
                      <div
                        className={`rounded-circle d-flex align-items-center justify-content-center ${
                          step === currentStep
                            ? "bg-danger"
                            : step < currentStep
                            ? "bg-success"
                            : "bg-secondary"
                        } text-white`}
                        style={{ width: "40px", height: "40px" }}
                      >
                        {step}
                      </div>
                      {step < 3 && (
                        <div className="mx-3" style={{ flex: 1 }}>
                          <div className="progress" style={{ height: "2px" }}>
                            <div
                              className={`progress-bar ${
                                step < currentStep ? "bg-danger w-100" : ""
                              }`}
                            />
                          </div>
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
                {/* Title */}
                <div className="text-center mb-5">
                  <h1 className="display-5 fw-bold mb-2">
                    <span className="text-warning">Fast</span> Repairs
                  </h1>
                  <h2 className="display-6 fw-bold">While You Wait</h2>
                </div>
                >{/* Form Steps */}
                <div className="mb-4">
                  {/* Brand Selection */}
                  {currentStep === 1 && (
                    <div className="position-relative">
                      <select
                        value={selectedBrand}
                        onChange={(e) => setSelectedBrand(e.target.value)}
                        className="form-select form-select-lg py-3"
                      >
                        <option value="">Select Brand</option>
                        {brands.map((brand) => (
                          <option key={brand} value={brand}>
                            {brand}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        className="position-absolute"
                        style={{
                          right: "1rem",
                          top: "50%",
                          transform: "translateY(-50%)",
                        }}
                      />
                    </div>
                  )}

                  {/* Model Selection */}
                  {currentStep === 2 && (
                    <div className="position-relative">
                      <select
                        value={selectedModel}
                        onChange={(e) => setSelectedModel(e.target.value)}
                        className="form-select form-select-lg py-3"
                      >
                        <option value="">Select Model</option>
                        {selectedBrand &&
                          models[selectedBrand]?.map((model) => (
                            <option key={model} value={model}>
                              {model}
                            </option>
                          ))}
                      </select>
                      <ChevronDown
                        className="position-absolute"
                        style={{
                          right: "1rem",
                          top: "50%",
                          transform: "translateY(-50%)",
                        }}
                      />
                    </div>
                  )}

                  {/* Issue Selection */}
                  {currentStep === 3 && (
                    <div className="position-relative">
                      <select
                        value={selectedIssue}
                        onChange={(e) => setSelectedIssue(e.target.value)}
                        className="form-select form-select-lg py-3"
                      >
                        <option value="">Select Issue</option>
                        {issues.map((issue) => (
                          <option key={issue} value={issue}>
                            {issue}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        className="position-absolute"
                        style={{
                          right: "1rem",
                          top: "50%",
                          transform: "translateY(-50%)",
                        }}
                      />
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="d-flex justify-content-between mt-4">
                    {currentStep > 1 && (
                      <button
                        onClick={handleBack}
                        className="btn btn-lg btn-outline-secondary"
                      >
                        Back
                      </button>
                    )}
                    <button
                      onClick={handleNext}
                      disabled={!isStepValid()}
                      className={`btn btn-lg ${
                        isStepValid() ? "btn-warning" : "btn-secondary"
                      } ${currentStep > 1 ? "ms-auto" : "w-100"}`}
                    >
                      {currentStep === 3 ? "Get a Quote" : "Next"}
                    </button>
                  </div>

                  {/* Custom Quote Link */}
                  <div className="text-center mt-4 text-muted">
                    Can't find your device or issue?{" "}
                    <a
                      href="#"
                      className="text-warning text-decoration-underline"
                    >
                      Get a custom quote
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stepper;
