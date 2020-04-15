import { observable, action } from 'mobx'

class CounterStore {
   @observable count = 0

   @action.bound
   incrementCounter() {
      this.count = this.count + 1
   }

   @action.bound
   decrementCounter() {
      this.count = this.count - 1
   }
  
  /* 
   @action.bound
   onChangeCount() {
      console.log("hello")
   }
 */  
}

const counterStore = new CounterStore()

export default counterStore
