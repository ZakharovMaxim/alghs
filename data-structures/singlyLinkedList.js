class Node {
  constructor(val) {
      this.val = val
      this.next = null
  }
}

class SinglyLinkedList {
  constructor () {
      this.length = 0
      this.head = null
      this.tail = null
  }
  push (value) {
      const node = new Node(value)
      if (!this.head) {
          this.head = node
          this.tail = this.head
      } else {
          this.tail.next = node
          this.tail = node
      }
      this.length++
      return this
  }
  pop () {
      if (this.length === 0) {
          return
      }
      let beforeTail = this.head
      let current = this.head
      while(current.next) {
          beforeTail = current
          current = current.next
      }
      this.tail = beforeTail
      this.tail.next = null
      this.length--
      if (this.length === 0) {
          this.head = null
          this.tail = null
      }
      return current
  }
  shift () {
      if (!this.head) {
          return
      }
      const head = this.head
      this.head = this.head.next
      this.length--
      if (this.length === 0) {
          this.tail = null
      }
      return head
  }
  unshift (value) {
      const node = new Node(value)
      node.next = this.head
      this.head = node
      if (!this.tail) {
          this.tail = this.head
      }
      this.length++
      return this
  }
  get (position) {
      if (this.length < position || position < 0) {
          return null
      }
      let i = 0
      let current = this.head
      while(current && i < position) {
          current = current.next
          i++
      }
      return current || null
  }
  set (value, position = 0) {
      const oldNode = this.get(position)
      if (oldNode) {
          oldNode.val = value
          return true
      }
      return false
  }
  remove (position) {
      if (position < 0 || position > this.length - 1) {
          return false
      }
      if (position === 0) {
          return this.shift()
      }
      if (position === this.length - 1) {
          return this.pop()
      }
      const prev = this.get(position - 1)
      const toRemove = prev.next
      prev.next = toRemove.next
      this.length--
      return toRemove
  }
  insert(value, position) {
      if (position < 0 || position > this.length) {
          return false
      }
      if (position === this.length) {
          return !!this.push(value)
      } else if (position === 0) {
          return !!this.unshift(value)
      }
      const node = new Node(value)
      const previousNode = this.get(position - 1)
      const currentNode = previousNode.next
      node.next = currentNode
      previousNode.next = node
      this.length++
      return true
  }
  find (value) {
      if (!this.head) {
          return
      }
      let current = this.head
      while(current && current.val !== value) {
          current = current.next
      }
      return current || null
  }
  print () {
      const arr = []
      let current = this.head
      while(current) {
          arr.push(current.val)
          current = current.next
      }
      console.log(arr)
  }
  reverse () {
      let current = this.head
      this.head = this.tail
      this.tail = current
      let next
      let prev = null
      for(let i = 0; i < this.length; i++) {
          next = current.next
          current.next = prev
          prev = current
          current = next
      }
      return this 
  }
}

var list = new SinglyLinkedList()

list.push('test1')
list.push('test2')
list.push('test3')
