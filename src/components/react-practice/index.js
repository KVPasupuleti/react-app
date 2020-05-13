import React from "react";
import { render } from "react-dom";
import { observable, computed, autorun, action } from "mobx";
import { observer } from "mobx-react";

class Person {
  @observable firstName = "Michel";
  @observable lastName = "Weststrate";

  @computed get fullName() {
    console.log("computed")
    return this.firstName + " " + this.lastName;
  }

  @action
  changeFirstNameAndLastName = () => {
    this.firstName = "mike";
    this.lastName = "west";
  };
}


// Reaction: log the profile info whenever it changes
// autorun(() => {
//   console.log("Autorun called");
//   console.log(newPerson.fullName);
// });

// Example React component that observes state
const Index = observer((props) => {
  console.log("render ProfileView");

  return (
    <div>
      <p>{props.person.fullName}</p>
      <button onClick={props.person.changeFirstNameAndLastName}>
        Change first name and last name
      </button>
    </div>
  );
});
export { Index, Person }
// render(<ProfileView person={newPerson} />, document.getElementById("root"));
