function handleClick() {
    fetch("your API url")
      .then((res) => res.json())
      .then((json) => setData(json));
  }
  
  return <button onClick={handleClick}>Click to Fetch!</button>;