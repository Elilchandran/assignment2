function createForm() {
    const form = document.createElement("form"); // create form element

    // creating label and input for first name:
    const firstNameLabel = document.createElement("label");
    firstNameLabel.textContent = "First name:";
    const firstNameInput = document.createElement("input");
    firstNameInput.setAttribute("type", "text");
    firstNameInput.setAttribute("name", "firstname");
    firstNameInput.setAttribute("required", true);
  
    // creating label and input for middle name:
    const middleNameLabel = document.createElement("label");
    middleNameLabel.textContent = "Middle name:";
    const middleNameInput = document.createElement("input");
    middleNameInput.setAttribute("type", "text");
    middleNameInput.setAttribute("name", "middlename");
  
    // creating label and input for last name:
    const lastNameLabel = document.createElement("label");
    lastNameLabel.textContent = "Last name:";
    const lastNameInput = document.createElement("input");
    lastNameInput.setAttribute("type", "text");
    lastNameInput.setAttribute("name", "lastname");
    lastNameInput.setAttribute("required", true);
  
    // creating label and input for email:
    const emailLabel = document.createElement("label");
    emailLabel.textContent = "Email:";
    const emailInput = document.createElement("input");
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("name", "email");
    emailInput.setAttribute("required", true);
  
    // creating label and select for state:
    const stateLabel = document.createElement("label");
    stateLabel.textContent = "State:";
    const stateSelect = document.createElement("select");
    stateSelect.setAttribute("name", "state");
    stateSelect.setAttribute("required", true);
  
    // adding the options to state select in the form:
    const states = ["Tamil nadu","kerela","Karnataka"];
    for (let i = 0; i < states.length; i++) {
      const option = document.createElement("option");
      option.textContent = states[i];
      stateSelect.appendChild(option);
    }
  
    // adding all the elements into form
    form.appendChild(firstNameLabel);
    form.appendChild(firstNameInput);
    form.appendChild(document.createElement("br"));
    form.appendChild(middleNameLabel);
    form.appendChild(middleNameInput);
    form.appendChild(document.createElement("br"));
    form.appendChild(lastNameLabel);
    form.appendChild(lastNameInput);
    form.appendChild(document.createElement("br"));
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(document.createElement("br"));
    form.appendChild(stateLabel);
    form.appendChild(stateSelect);
  
    // adding form into the document
    document.body.appendChild(form);
  }
  
  // call the function to create the form
  createForm();
  