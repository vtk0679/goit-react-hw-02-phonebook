import "./App.css";
import { Component } from "react";
import { nanoid } from "nanoid";

import Form from "./components/Form";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  onFormSubmit = (name, number) => {
    if (this.state.contacts.find((contact) => contact.name === name)) {
      alert(name + " is already in contacts");
      return;
    }
    const newContact = { name, number, id: nanoid() };
    this.setState({ contacts: [newContact, ...this.state.contacts] });
  };

  onFilterChange = (value) => {
    return this.setState({ filter: value.toLowerCase() });
  };

  filter = () =>
    this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter)
    );

  onDeleteContact = (id) => {
    const contacts = this.state.contacts.filter((contact) => contact.id !== id);
    this.setState({ contacts });
  };

  render() {
    return (
      <>
        <div className="App">
          <h1>Phonebook</h1>
          <Form onFormSubmit={this.onFormSubmit}></Form>
        </div>

        <h2>Contacts</h2>

        <Filter
          filter={this.state.filter}
          onFilterChange={this.onFilterChange}
        />
        <ContactList
          contacts={this.filter()}
          onDeleteContact={this.onDeleteContact}
        />
      </>
    );
  }
}

export default App;
