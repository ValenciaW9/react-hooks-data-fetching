function Form() {
    const [formData, setFormData] = useState({
      username: "",
      password: "",
    });
  
    //since the id values are the same as the keys in formData, we can write an abstract setFormData here
    function handleChange(event) {
      setFormData({
        ...formData,
        [event.target.id]: event.target.value,
      });
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="text"
          id="password"
          value={formData.password}
          onChange={handleChange}
        />
      </form>
    );
  }