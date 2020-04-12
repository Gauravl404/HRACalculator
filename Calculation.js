import React from "react"
class Calculation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      basicSalary :360000,
      daAllowance:0,
      hra:120000,
      rent:0,
      isMetro: false,
      hraAllowed : 0
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : parseInt(target.value);
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleClick() {
    console.log(this.state.basicSalary);
    console.log(this.state.hra);

    const totalSalary = this.state.basicSalary + this.state.daAllowance;
    const factor = this.state.isMetro ? 0.5 : 0.4;
    const totalAllowedHRA = totalSalary * factor;
    const rent = this.state.hra + (0.1 * this.state.basicSalary);
    const actualRentPaid = (rent - (0.1 * this.state.basicSalary));
    console.log(rent);
    const hraAllowed =  actualRentPaid < totalAllowedHRA ? actualRentPaid : totalAllowedHRA;
    const finalRent = hraAllowed + (0.1 * this.state.basicSalary);

    this.setState({
      rent: finalRent,
      hraAllowed : hraAllowed
    });
  }

  render() {
    return (
      <form>
       
        <label>
          Basic Salary:
          <input
            name="basicSalary"
            type="number"
            value={this.state.basicSalary}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          DA Allowance:
          <input
            name="daAllowance"
            type="number"
            value={this.state.daAllowance}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          House rental allowance:
          <input
            name="hra"
            type="number"
            value={this.state.hra}
            onChange={this.handleInputChange} />
        </label>
        <br />
         <label>
          metro city:
          <input
            name="isMetro"
            type="checkbox"
            checked={this.state.isMetro}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <input type = "button" value = "calculate max rent" onClick={this.handleClick}></input>

        {this.state.rent > 0 && <div>
        <label>
          Maximum rent you can pay under exemption upto:
          <input
            name="rent"
            type="number"
            value={this.state.rent}
             />
        </label>
        <br />
        <label>
          HRA Allowed : {this.state.hraAllowed}
        </label>
        <br />
        </div>}
      
      </form>
    );
  }
}

export default Calculation;
