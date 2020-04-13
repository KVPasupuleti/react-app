import { observable, action } from 'mobx';

class CounterStore {

   @observable count;


   constructor() {
      this.count = 0;
   }

   @action.bound
   incrementCounter() {
      this.count += 1;
      console.log("After Increment Count = ", this.count);
   }

   @action.bound
   decrementCounter() {
      this.count -= 1;
   }

   @action.bound
   onChangeCount(value) {
      this.count = Number(value);
      console.log("onChangeCount = ", this.count);
   }

}

const counterStore = new CounterStore();

export { counterStore as default, CounterStore };







































/*import { observable, action } from 'mobx'

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
}

export default CounterStore

*/
