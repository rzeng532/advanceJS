
//Step 1, class with constructor
// class Player {
//     constructor() {
//       this.points = 0
//       this.assists = 0
//       this.rebounds = 0
//       this.steals = 0
//     }
//     addPoints(amount) {
//       this.points += amount
//     }
//     addAssist() {
//       this.assists++
//     }
//     addRebound() {
//       this.rebounds++
//     }
//     addSteal() {
//       this.steals++
//     }
//   }

//Step2, Stage 3 in TC-39. Adding fields directly
// class Player {
//     points = 0;
//     assists = 0;
//     rebounds = 0;
//     steals = 0;
//     addPoints(amount) {
//       this.points += amount
//     }
//     addAssist() {
//       this.assists++
//     }
//     addRebound() {
//       this.rebounds++
//     }
//     addSteal() {
//       this.steals++
//     }
//   }
  

//A React case:
// class PlayerInput extends Component {
//     constructor(props) {
//       super(props)
//       this.state = {
//         username: ''
//       }
  
//       this.handleChange = this.handleChange.bind(this)
//     }
//     handleChange(event) {
//       this.setState({
//         username: event.target.value
//       })
//     }
//     render() {
      
//     }
//   }
  
//   PlayerInput.propTypes = {
//     id: PropTypes.string.isRequired,
//     label: PropTypes.string.isRequired,
//     onSubmit: PropTypes.func.isRequired,
//   }
  
//   PlayerInput.defaultProps = {
//     label: 'Username',
//   }

  //Final version after customized
  //What we do:
  //1 For fields: use 'static' instand of protoTypes;
  //2 For method: use arrow function instand of 'bind', lexically this.
  class PlayerInput extends Component {
    static propTypes = {
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      onSubmit: PropTypes.func.isRequired,
    }
    static defaultProps = {
      label: 'Username'
    }
    state = {
      username: ''
    }
    handleChange = (event) => {
      this.setState({
        username: event.target.value
      })
    }
    render() {
    
    }
  }