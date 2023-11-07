/* 
// Étape 1
class Clock extends React.Component {
    render() {
      return (
        <div>
          <h1>Bonjour, monde !</h1>
          <h2>Il est {this.props.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }

ReactDOM.render(<Clock date={new Date()}/>, document.querySelector('#app')); 

*/


/* 

// Étape 2

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date()};
    }
  render() {
    return (
      <div>
        <h1>Bonjour, monde !</h1>
        <h2>Il est {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(<Clock />, document.querySelector('#app')); 


 */



// Étape 3

/* class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date()};
    }
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(),1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
        <div>
            <h1>Bonjour, monde !</h1>
            <h2>Il est {this.state.date.toLocaleTimeString()}.</h2>
        </div>
        );
    }
}

ReactDOM.render(<Clock />, document.querySelector('#app'));  */


function Clock(props) {
    React.useEffect(() => {
        tick();   
      return () =>{

      }     
    }, []);

    const [date, setDate] = React.useState(new Date());
    const intervalRef = React.useRef()
    const [textColor , setTextColor] = React.useState('black')
    const clickHandler=()=>{
      const randomColor = (`#${Math.floor(Math.random()*(256*256*256)).toString(16)}`) 
      setTextColor(randomColor)
    }
    const resetHandler=()=>{
      setTextColor('black')
    }

    const tick = () => {
        setInterval(() => {
            setDate(new Date())
        }, 1000)
    }
    

    return (
        <div>
            <h1>Hello world</h1>
            <h2 style={{color:textColor}}>Il est {date.toLocaleTimeString()}.</h2>
            <div>
              <button onClick={clickHandler}>Change Color</button>
              <button onClick={resetHandler}>Reset Color</button>

            </div>
        </div>
        
        );
}
function Buttons(){

}
ReactDOM.render(<Clock />, document.querySelector('#app'));