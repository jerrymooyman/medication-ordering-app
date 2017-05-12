
class WorkOrderStatus {
  constructor() {
    this.currentStatus = new NewOrder(this)
  }

  change = (status) => {
    this.currentStatus = status
  }

  next = () => {
    this.currentStatus.next()
  }

  back = () => {
    this.currentStatus.back()
  }

}

class NewOrder {
  constructor(workOrderStatus) {
    this.stepIndex = 0
    this.isFinished = false
    this.currentStatus = workOrderStatus
  }

  next = () => {
    this.currentStatus.change(new InProgress(this.currentStatus))
  }

  back = () => {
    // do nothing
  }
}

class InProgress {
  constructor(workOrderStatus) {
    this.stepIndex = 1
    this.isFinished = false
    this.currentStatus = workOrderStatus
  }

  next = () => {
    this.currentStatus.change(new Available(this.currentStatus))
  }

  back = () => {
    this.currentStatus.change(new NewOrder(this.currentStatus))
  }
}

class Available {
  constructor(workOrderStatus) {
    this.stepIndex = 2
    this.isFinished = false
    this.currentStatus = workOrderStatus
  }

  next = () => {
    this.currentStatus.change(new Delivered(this.currentStatus))
  }

  back = () => {
    this.currentStatus.change(new InProgress(this.currentStatus))
  }
}

class Delivered {
  constructor(workOrderStatus) {
    this.stepIndex = 3
    this.isFinished = true
    this.currentStatus = workOrderStatus
  }

  next = () => {
    // do nothing
  }

  back = () => {
    this.currentStatus.change(new Available(this.currentStatus))
  }
}

export default WorkOrderStatus


