function App(props) {
    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(usersObject => setUsers(usersObject))
    }, [])

    const [users, setUsers] = React.useState([]);



    return(
        <React.Fragment>
        {
            users.map((u) =>(
                <UserCard key={u.id} user={u}/>
            ))
        }
        <EssayForm/>
        </React.Fragment>
    )
}

function UserCard({user}) {
    

    return (
        <ul className="user-card">
            <li>{user.name}</li>
            <li>{user.email}</li>
            <li>{user.company.name}</li>
            <li>{user.phone}</li>
            <li>{user.website}</li>
        </ul>
    )
}

function NameForm (){
    const [value, setValue] = React.useState('')

    const handleChange = (e)=>{
        setValue(e.target.value)
    }
    const handleSumbit = (e)=>{
        alert('Le nom a été soumis : ' + value)
        e.preventDefault();

    }
    return <form onSubmit={handleSumbit}>
        <label>
            Nom:
            <input type='text' value={value} onChange={handleChange} />
        </label>
        <input type='submit' value='Envoyer' />
    </form>
}


function EssayForm (){
    const [value, setValue] = React.useState('Écrivez un essai à propos de votre élément du DOM préféré')

    const handleChange = (e)=>{
        setValue(e.target.value)
    }
    const handleSumbit = (e)=>{
        alert('Un essai a été envoyé : ' + value)
        e.preventDefault();

    }
    return <form onSubmit={handleSumbit}>
        <label>
            Essay:
            <input type='text' value={value} onChange={handleChange} />
        </label>
        <input type='submit' value='Envoyer' />
    </form>
}
function FlavorForm (){
    const [value, setValue] = React.useState('coconut')

    const handleChange = (e)=>{
        setValue(e.target.value)
    }
    const handleSumbit = (e)=>{
        alert('Votre parfum favori est : ' + value)
        e.preventDefault();

    }
    return <form onSubmit={handleSumbit}>
        <label>
          Choisissez votre parfum favori :
          <select value={value} onChange={handleChange}>
            <option value="grapefruit">Pamplemousse</option>
            <option value="lime">Citron vert</option>
            <option value="coconut">Noix de coco</option>
            <option value="mango">Mangue</option>
          </select>
        </label>       
        <input type='submit' value='Envoyer' />
    </form>
}



ReactDOM.render(<App/>, document.querySelector('#app'))