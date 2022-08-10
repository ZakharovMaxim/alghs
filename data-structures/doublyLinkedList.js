class Node {
  constructor (val) {
      this.val = val
      this.next = null
      this.prev = null
  }
}

class DoublyLinkedList {
  constructor () {
      this.head = null
      this.tail = null
      this.length = 0
  }
  push (val) {
      const node = new Node(val)
      if (this.length === 0) {
          this.head = node
          this.tail = node
      } else {
          node.prev = this.tail
          this.tail.next = node
          this.tail = node
      }
      this.length++
      return this
  }
  pop () {
      if (this.length === 0) {
          return null
      }
      this.length--
      const oldTail = this.tail
      if (oldTail.prev) {
          this.tail = oldTail.prev
          this.tail.next = null
      } else {
          this.head = null
          this.tail = null
      }
      oldTail.prev = null
      return oldTail
      
  }
  unshift (val) {
      const node = new Node(val)
      if (this.length === 0) {
          this.head = node
          this.tail = node
      } else {
          const oldHead = this.head
          node.next = oldHead
          oldHead.prev = node
          this.head = node
      }

      this.length++
      return node
  }
  shift () {
      if (this.length === 0) {
          return null
      }
      const oldHead = this.head
      if (this.length === 1) {
          this.head = null
          this.tail = null
      } else {
          const newHead = oldHead.next
          oldHead.next = null
          newHead.prev = null
          this.head = newHead
      }
      this.length--
      return oldHead
  }
  get (position) {
      if (position >= this.length) {
          return null
      }
      let current = this.head
      for(let i = 0; i < position; i++) {
          current = current.next
      }
      return current
  }
  insert (position, val) {
      if (position > this.length) {
          return false
      }
      if (position === 0) {
          return !!this.unshift(val)
      }
      if (position === this.length) {
          return this.push(val)
      }
      const prev = this.get(position - 1)
      const node = new Node(val)
      node.next = prev.next
      prev.next = node
      node.prev = prev
      node.next.prev = node
      this.length++
      return true
  }
  remove (position) {
      if (position > this.length) {
          return false
      }
      if (position === 0) {
          return !!this.shift()
      }
      if (position === this.length) {
          return this.pop()
      }
      const toRemove = this.get(position)
      toRemove.prev.next = toRemove.next
      toRemove.next.prev = toRemove.prev
      this.length--
      return true
  }
  set (position, val) {
      const node = this.get(position)
      if (node) {
          node.val = val
          return true
      }
      return false
  }
  find (val) {
      if (this.length === 0) {
          return null
      }
      let current = this.head
      while(current && current.val !== val) {
          current = current.next
      }
      return current || null
  }
}

var l = new DoublyLinkedList()
