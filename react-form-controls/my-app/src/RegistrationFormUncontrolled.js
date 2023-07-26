export default function RegistrationFormUncontrolled() {
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username: <input name="userInput" />
        </label>
        <label>
          Password: <input name="passInput" type="password" />
        </label>
        <button>Sign Up</button>
      </form>
    </div>
  );
}
