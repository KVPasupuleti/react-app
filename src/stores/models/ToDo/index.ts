import { observable, action } from "mobx";

class MobxToDoModel {

@observable title
@observable isCompleted
  id: number;

constructor(content) {
    this.id = Math.floor(Math.random() * 10000)
    this.title = content
    this.isCompleted = false
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