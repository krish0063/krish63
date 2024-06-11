 


function Register() {
    const [name,setName]='useState'("");
    const [email,setEmail]='useState'("");
    const [password,setPassword]='useState'("");
    
  function submit() {
  
    console.log("submit");
  }
  return (
    <>
    <body> 
      <div>
        <h1>Register</h1>
        <form action={submit} >
          <input
            type="Text"
            placeholder="First name"
            style={{ margin: "10px", color:"white" }}
            value={name}
            onChange={(e)=>setName(e.target.value)}

          />{" "}
          <br />  
          <input
            type="Text"
            placeholder="Enter email"
            style={{ margin: "10px",color:"white"}} 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}


          />
          <br />
          <input
            type="password"
            placeholder="Enter password"
            style={{ margin: "10px" ,color:"white"}}
            value={password}
            onChange={(e)=> setPassword(e.target.value)}

            />
          <br />
          <button >Register</button>
        </form>
      </div>
      </body>
    </>
  );
}
export default Register;