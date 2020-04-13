import { observable, action } from "mobx";

class MobxToDoModel {

@observable toDoContent
@observable isChecked

constructor(content) {
    this.toDoId = Math.floor(Math.random() * 10000) 
    this.toDoContent = content
    this.isChecked = false
}

@action.bound
  onChangeCheckBox() {
    this.isChecked = !(this.isChecked)
  }

  @action.bound
  onChangeContent (updatedToDoContent) {
    this.toDoContent = updatedToDoContent
  }

}


export default MobxToDoModel;