// Question 1 : Circular Queue Implementation'
// Design your implementation of the circular queue. You should support the following operations:
// 1. MyCircularQueue(k): Constructor, set the size of the queue to be k.
// 2. Front: Get the front item from the queue. If the queue is empty, return -1.
// 3. Rear: Get the last item from the queue. If the queue is empty, return -1.
// 4. enQueue(value): Insert an element into the circular queue. Return true if the operation is successful.
// 5. deQueue(): Delete an element from the circular queue. Return true if the operation is successful.
// 6. isEmpty(): Checks whether the circular queue is empty or not.
// 7. isFull(): Checks whether the circular queue is full or not.

class MyCircularQueue {
  constructor(k) {
    this.size = k;
    this.queue = new Array(k);
    this.front = -1;
    this.rear = -1;
    this.count = 0;
  }

  Front() {
    if (this.isEmpty()) {
      return -1;
    }
    return this.queue[this.front];
  }

  Rear() {
    if (this.isEmpty()) {
      return -1;
    }
    let index = this.rear === 0 ? this.size - 1 : this.rear - 1;
    return this.queue[index];
  }

  enQueue(value) {
    if (this.isFull()) {
      return false;
    }
    if (this.isEmpty()) {
      this.front = 0;
    }
    this.rear = (this.rear + 1) % this.size;
    this.queue[this.rear] = value;
    this.count++;
    return true;
  }

  deQueue() {
    if (this.isEmpty()) {
      return false;
    }
    this.front = (this.front + 1) % this.size;
    this.count--;
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return true;
  }

  isEmpty() {
    return this.count === 0;
  }

  isFull() {
    return this.count === this.size;
  }
}
