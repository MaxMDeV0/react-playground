function UserGreeting(props) {
  const [users, setUsers] = React.useState([])
  React.useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => setUsers(json))

  },[])

    console.log(users[0])
    return <React.Fragment>
        <h1>Bienvenue !</h1>
        <UserList users={users}/>
      </React.Fragment>;
  }
  
  function GuestGreeting(props) {
    return <h1>Veuillez vous connecter</h1>;
  }

  function UserInfo({user}){
    const key = user.id.toString()
    return <li key={user.id} onClick={()=>{console.log(user.id.toString())}}>
      <p>nom : {user.name}</p>
      <p>email : {user.email}</p>
      <p>société : {user.company.name}</p>
      <p>tel : {user.phone}</p>
      <p>site : {user.website}</p>
    </li>
  }



  function UserList({users}){
    return <ul>
      {users.map(user =>   <UserInfo user={user} key={user.id}/>)}
    </ul>
  }

  function Greeting(props) {

    const [isLoggedIn, setIsLoggedIn] = React.useState(true);
    const handleLogIn = (e) => {
        e.preventDefault();
        setIsLoggedIn(true);
    }
    const handleLogOut = (e) => {
        e.preventDefault();
        setIsLoggedIn(false);
    }

    return(
        <React.Fragment>
            {isLoggedIn ? 
            <React.Fragment>
                <UserGreeting />
                <button onClick={handleLogOut}>Se déconnecter</button>
            </React.Fragment> : 
            <React.Fragment>
                <GuestGreeting />
                <button onClick={handleLogIn}>Se connecter</button>
            </React.Fragment> }
        </React.Fragment>
    )
  }
  
  ReactDOM.render(
    <Greeting />,
    document.querySelector('#app')
  );