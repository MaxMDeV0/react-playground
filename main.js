function App (){
    const [value, setValue]= React.useState(0)
    const [system , setSystem]= React.useState(10)
    const [base , setBase]= React.useState(10)
    const [base2 , setBase2]= React.useState(2)

    const handleChange1=(e)=>{
        setValue(e.target.value)
        setSystem(base)

    }
    const handleChange2=(e)=>{
        setValue(e.target.value)
        setSystem(base2)
    }
    
    
    return <React.Fragment>
        <BasNumberInput onChangeBase={handleChange1} base={[base, setBase]} value={system==base? value: system!=10? parseInt(value.toString(), system).toString(base):(parseInt(value).toString(base))}/>
        <BasNumberInput onChangeBase={handleChange2} base={[base2, setBase2]} value={system==base2? value: system!=10? parseInt(value.toString(), system).toString(base2):(parseInt(value).toString(base2))}/>

    </React.Fragment>
}

function BasNumberInput(props){
    const [base, setBase] = props.base
    const handleChange = (e) =>{
        setBase(e.target.value)
    }
    return <React.Fragment>
        <select value={base} onChange={handleChange}>
            <option value={10}>decimal</option>
            <option value={2}>binaire</option>
            <option value={3}>ternaire</option>
            <option value={7}>septénaire</option>
            <option value={16}>hexadecimal</option>
        </select>
        <input type='text' value={props.value} onChange={props.onChangeBase}></input>
    </React.Fragment>
}

ReactDOM.render(<App/>, document.querySelector('#app'))