import { useState } from "react";
function handleSubmit(event) {
    event.preventDefault();
    fetch("the server URL", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  }

  useEffect(() => {
    fetch("/api")
      .then((r) => r.json())
      .then(setData);
  }, []);
  
  export default handleSubmit;