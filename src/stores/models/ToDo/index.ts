import { observable, action } from "mobx";

class MobxToDoModel {

@observable title
@observable isCompleted
  id: number;

constructor(todoObject) {
    this.id = Math.floor(Math.random() * 10000)
    this.title = todoObject.title
    this.isCompleted = todoObject.isCompleted
}

@action.bound
  onChangeCheckBox() {
    this.isCompleted = !(this.isCompleted)
  }

  @action.bound
  onChangeContent (updatedToDoContent) {
    this.title = updatedToDoContent
  }

}


export default MobxToDoModel;