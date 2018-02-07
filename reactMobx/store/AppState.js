import {action, observable, extendObservable} from 'mobx'

class AppState {
  @observable name = 'lac'
  @observable count = 5

  addCount () {
    this.count += 1
  }

  minCount () {
    this.count -= 1
  }

  resetCount () {
    this.count = 5
  }
}

export default new AppState()
