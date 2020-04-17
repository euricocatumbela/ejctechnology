import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
function Quote() {
  const [project, setProject] = useState();
  const [email, setEmail] = useState();
  const [budget, setBudget] = useState();

  function handleBudget(event) {
    const newBuget = event.target.value;
    setBudget(newBuget);
  }

  function handleProject(event) {
    const newProject = event.target.value;
    setProject(newProject);
  }

  function handleEmail(event) {
    const newEmail = event.target.value;
    setEmail(newEmail);
  }

  return (
    <div>
      <Header />
      <div className="CardQuote">
        <form className="form">
          <h1 style={{ textAlign: "center" }}>
            Welcome, {email} {project} {budget}
          </h1>

          <input
            maxlength="30"
            onChange={handleEmail}
            type="email"
            placeholder="Email address"
            value={email}
          />
          <input
            onChange={handleProject}
            maxlength="30"
            type="project"
            placeholder="What your poject need?"
            value={project}
          />
          <input
            onChange={handleBudget}
            maxlength="20"
            type="budget"
            placeholder="What is your budget?"
            value={budget}
          />
          {/* <input onChange={handleBudget} name="Question_1" value={budget} /> */}
          <button type="submit">submit</button>
        </form>

        <Footer />
      </div>
    </div>
  );
}

export default Quote;
