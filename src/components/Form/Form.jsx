import { Component } from "react";

import s from "./Form.module.css";

export default class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.name, this.state.number);
    this.setState({ name: "", number: "" });
  };

  onInputNameChange = (e) => {
    const name = e.target.value;
    this.setState({ name });
  };

  onInputTelChange = (e) => {
    const number = e.target.value;
    this.setState({ number });
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <p>Name</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          onChange={this.onInputNameChange}
          value={this.state.name}
          required
        />
        <p> Tel</p>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          onChange={this.onInputTelChange}
          value={this.state.number}
          required
        />
        <button className={s.btnSubmit} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
