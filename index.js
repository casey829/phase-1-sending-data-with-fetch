// Add your code here
function submitData (nameInput,emailInput) {
   const formData = {
    name: nameInput,
    email: emailInput
   };

   const configObj = {
    method : "POST",
    headers : {
        "content-Type" : "application/json",
        "Accept": "application/json",
    },
     body: JSON.stringify(formData),
    };
    return fetch ("http://localhost:3000/users", configObj)
    .then(res => res.json())
    .then(data => {
       document.body.innerHTML += `<p>user ID: ${data.id}</p>`;
    })
    .catch(error => {
        document.body.innerHTML += `<p>Error: ${error.message}</p>`;
    });
    
};

