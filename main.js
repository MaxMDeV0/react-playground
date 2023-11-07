function UserGreeting(props) {
  return <h1>Bienvenue !</h1>;
}

function GuestGreeting(props) {
  return <h1>Veuillez vous inscrire.</h1>;
}
function Greeting(props) {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  return <React.Fragment>
    {isLoggedIn? <GuestGreeting/>:<UserGreeting />}
    <button onClick={()=>setIsLoggedIn(prevState=>!prevState)}>{isLoggedIn? 'Log in': 'Log out'}</button>
  </React.Fragment>
}

ReactDOM.render(
  <Greeting />,
  document.getElementById('app')
);