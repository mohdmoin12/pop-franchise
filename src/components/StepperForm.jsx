import React, { useState } from "react";

const StepperForm = () => {
  const [step, setStep] = useState(1);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedIssue, setSelectedIssue] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [radius, setRadius] = useState("");
  const [selectedStore, setSelectedStore] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [filteredStores, setFilteredStores] = useState([]);

  const brands = ["Apple", "Samsung", "Google", "OnePlus", "Xiaomi"];
  const models = {
    Apple: ["iPhone 15", "iPhone 14", "iPhone SE"],
    Samsung: ["Galaxy S24", "Galaxy S23", "Galaxy A73"],
    Google: ["Pixel 8", "Pixel 7"],
    OnePlus: ["OnePlus 12", "OnePlus 11"],
    Xiaomi: ["Xiaomi 14", "Redmi Note 13"],
  };
  const issues = [
    "Screen Replacement",
    "Battery Replacement",
    "Camera Repair",
    "Other Issue",
  ];
  const allStores = [
    { name: "Walmart Supercenter", postalCodes: ["12345", "67890"] },
    { name: "Costco Wholesale", postalCodes: ["23456", "78901"] },
    { name: "Target", postalCodes: ["34567", "89012"] },
    { name: "Best Buy", postalCodes: ["45678", "90123"] },
    { name: "Home Depot", postalCodes: ["56789", "01234"] },
    { name: "Lowe’s", postalCodes: ["67890", "12345"] },
    { name: "Kroger", postalCodes: ["78901", "23456"] },
    { name: "Whole Foods Market", postalCodes: ["89012", "34567"] },
  ];

  const steps = ["Select Issue", "Select Store", "Your Information", "Confirm"];

  const handleBrandChange = (e) => {
    setSelectedBrand(e.target.value);
    setSelectedModel("");
  };

  const handlePostalCodeChange = (e) => {
    const inputPostalCode = e.target.value;
    setPostalCode(inputPostalCode);

    if (inputPostalCode.length >= 4) {
      const matchedStores = allStores
        .filter((store) => store.postalCodes.includes(inputPostalCode))
        .map((store) => store.name);
      setFilteredStores(matchedStores);
    } else {
      setFilteredStores([]);
    }
  };

  const handleNext = () => setStep((prev) => prev + 1);
  const handlePrev = () => setStep((prev) => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      selectedBrand,
      selectedModel,
      selectedIssue,
      postalCode,
      radius,
      selectedStore,
      firstName,
      lastName,
      email,
      mobile,
    });
    handleNext();
  };

  return (
    <div>
      <div className="contact-one">
        <div className="container">
          <section className="contact-one">
            <div className="row mx-auto">
              <div className="contact-one__left">
                <div className="contact-one__left-content">
                  <div class="contact-one__shape-1"></div>
                  <div class="contact-one__shape-2"></div>
                  <div className="container">
                    <div className="d-flex justify-content-center align-items-center position-relative mb-4">
                      {steps.map((title, index) => (
                        <div
                          key={index}
                          className="text-center mx-3 position-relative"
                        >
                          {/* Line Connector (except the last step) */}
                          {index < steps.length - 1 && (
                            <div
                              style={{
                                position: "absolute",
                                top: "20px",
                                left: "50%",
                                width: "120px",
                                height: "3px",
                                backgroundColor:
                                  step > index + 1 ? "yellow" : "#ddd",
                                zIndex: "-1",
                                
                              }}
                            ></div>
                          )}

                          {/* Step Number */}
                          <div
                            className="rounded-circle d-flex justify-content-center align-items-center"
                            style={{
                              width: "40px",
                              height: "40px",
                              backgroundColor:
                                step === index + 1 ? "yellow" : "#ddd",
                              color: step === index + 1 ? "black" : "#000",
                              fontWeight: "bold",
                              position: "relative",
                              zIndex: "1",
                              left:"28%"
                            }}
                          >
                            {index + 1}
                          </div>

                          {/* Step Title */}
                          <div
                            className="mt-2"
                            style={{
                              fontWeight:
                                step === index + 1 ? "bold" : "normal",
                              color: step === index + 1 ? "yellow" : "#fff",
                            }}
                          >
                            {title}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="contact-one__title-box text-center">
                    <p
                      style={{
                        fontSize: "18px",
                        fontWeight: "400",
                        marginBottom: "5px",
                      }}
                    >
                      Mobile Repair
                    </p>
                    <h3
                      style={{
                        fontSize: "60px",
                        marginTop: "50px",
                        marginBottom: "50px",
                      }}
                    >
                      <span style={{ color: "yellow" }}>Fast</span> Repairs
                      While You Wait
                    </h3>
                  </div>
                  {/* <div className="stepper-container text-center" style={{ marginBottom: "30px" }}>
                    <div className="stepper" style={{ display: "flex", justifyContent: "center" }}>
                      {['Select Issue', 'Select Store', 'Your Information', 'Confirm'].map((title, index) => (
                        <div
                          key={index}
                          className={`step ${step === index + 1 ? 'active' : ''}`}
                          style={{
                            padding: "10px 20px",
                            borderBottom: step === index + 1 ? "3px solid yellow" : "3px solid gray",
                            fontWeight: step === index + 1 ? "bold" : "normal",
                            color: step === index + 1 ? "yellow" : "black",
                          }}
                        >
                          Step {index + 1} - {title}
                        </div>
                      ))}
                    </div>
                  </div> */}

                  {step === 1 && (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleNext();
                      }}
                    >
                      <div className="row">
                        <div className="col-lg-4">
                          <select
                            className="form-select"
                            style={{ padding: "18px" }}
                            value={selectedBrand}
                            onChange={handleBrandChange}
                            required
                          >
                            <option value="">Select Brand</option>
                            {brands.map((brand) => (
                              <option key={brand} value={brand}>
                                {brand}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="col-lg-4">
                          <select
                            className="form-select"
                            style={{ padding: "18px" }}
                            value={selectedModel}
                            onChange={(e) => setSelectedModel(e.target.value)}
                            required
                            disabled={!selectedBrand}
                          >
                            <option value="">Select Model</option>
                            {selectedBrand &&
                              models[selectedBrand].map((model) => (
                                <option key={model} value={model}>
                                  {model}
                                </option>
                              ))}
                          </select>
                        </div>
                        <div className="col-lg-4">
                          <select
                            className="form-select"
                            style={{ padding: "18px" }}
                            value={selectedIssue}
                            onChange={(e) => setSelectedIssue(e.target.value)}
                            required
                          >
                            <option value="">Select Issue</option>
                            {issues.map((issue) => (
                              <option key={issue} value={issue}>
                                {issue}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="col-lg-12 text-center">
                          <button
                            type="submit"
                            className="thm-btn"
                            style={{ marginTop: "50px" }}
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    </form>
                  )}

                  {step === 2 && (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleNext();
                      }}
                    >
                      <div className="row">
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Postal Code"
                            style={{ padding: "18px" }}
                            value={postalCode}
                            onChange={handlePostalCodeChange}
                            required
                          />
                        </div>
                        <div className="col-lg-6">
                          <select
                            className="form-select"
                            style={{ padding: "18px" }}
                            value={radius}
                            onChange={(e) => setRadius(e.target.value)}
                            required
                          >
                            <option value="">Select Radius</option>
                            <option value="25">25 km</option>
                            <option value="50">50 km</option>
                          </select>
                        </div>
                        {filteredStores.length > 0 && (
                          <div className="col-lg-6">
                            <select
                              className="form-select"
                              style={{ padding: "18px" }}
                              value={selectedStore}
                              onChange={(e) => setSelectedStore(e.target.value)}
                              required
                            >
                              <option value="">Select Store</option>
                              {filteredStores.map((store) => (
                                <option key={store} value={store}>
                                  {store}
                                </option>
                              ))}
                            </select>
                          </div>
                        )}
                        <div className="col-lg-12 text-center">
                          <button
                            type="button"
                            className="thm-btn"
                            onClick={handlePrev}
                            style={{ marginTop: "50px" }}
                          >
                            Back
                          </button>
                          <button
                            type="submit"
                            className="thm-btn"
                            style={{ marginTop: "50px" }}
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    </form>
                  )}

                  {step === 3 && (
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="First Name"
                            style={{ padding: "18px", margin: "5px" }}
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                          />
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Last Name"
                            style={{ padding: "18px", margin: "5px" }}
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                          />
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            style={{ padding: "18px", margin: "5px" }}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="tel"
                            className="form-control"
                            placeholder="Mobile No"
                            style={{ padding: "18px", margin: "5px" }}
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            required
                          />
                        </div>
                        <div className="col-lg-12 text-center">
                          <button
                            type="button"
                            className="thm-btn"
                            onClick={handlePrev}
                            style={{ marginTop: "50px" }}
                          >
                            Back
                          </button>
                          <button
                            type="submit"
                            className="thm-btn"
                            style={{ marginTop: "50px" }}
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                  )}

                  {step === 4 && (
                    <div
                      className="text-center"
                      style={{
                        backgroundColor: "black",
                        padding: "30px",
                        borderRadius: "10px",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                        maxWidth: "600px",
                        margin: "auto",
                        marginTop: "50px",
                      }}
                    >
                      <h4
                        style={{
                          color: "white",
                          fontSize: "24px",
                          fontWeight: "600",
                          marginBottom: "15px",
                        }}
                      >
                        Appointment Scheduled Successfully!
                      </h4>
                      <p
                        style={{
                          fontSize: "18px",
                          fontWeight: "500",
                          marginBottom: "10px",
                        }}
                      >
                        <b>Brand:</b>{" "}
                        <span style={{ color: "white" }}>{selectedBrand}</span>
                      </p>
                      <p
                        style={{
                          fontSize: "18px",
                          fontWeight: "500",
                          marginBottom: "10px",
                        }}
                      >
                        <b>Model:</b>{" "}
                        <span style={{ color: "white" }}>{selectedModel}</span>
                      </p>
                      <p
                        style={{
                          fontSize: "18px",
                          fontWeight: "500",
                          marginBottom: "10px",
                        }}
                      >
                        <b>Issue:</b>{" "}
                        <span style={{ color: "white" }}>{selectedIssue}</span>
                      </p>
                      <p
                        style={{
                          fontSize: "18px",
                          fontWeight: "500",
                          marginBottom: "10px",
                        }}
                      >
                        <b>Store:</b>{" "}
                        <span style={{ color: "white" }}>{selectedStore}</span>
                      </p>
                      <p
                        style={{
                          fontSize: "18px",
                          fontWeight: "500",
                          marginTop: "20px",
                        }}
                      >
                        Thank you,{" "}
                        <span style={{ color: "white", fontWeight: "600" }}>
                          {firstName}
                        </span>
                        ! Your appointment has been scheduled.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default StepperForm;
