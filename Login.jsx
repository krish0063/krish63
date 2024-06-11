function Login() {
    function submit() {
      console.log("submit");
    }
    return (
      <>
      <style >

      </style>
        <div>
          <h1>Login</h1>
          <form action={submit}>
            <br />  
            <input
              type="email"
              placeholder="Enter email"
              style={{ margin: "10px" ,color:"white"}}
            />
            <br />
            <input
              type="password"
              placeholder="Enter password"
              style={{ margin: "10px",color:"white" }}
              />
            <br />
            <button >Login</button>
          </form>
        </div>
      </>
    );
  }
  export default Login;