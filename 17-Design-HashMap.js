const MyHashMap = function (capacity = 3) {
  this.capacity = capacity
  this.table = new Array(this.capacity)
  this.hashFunction = (key) => key % this.capacity
}

MyHashMap.prototype.put = function (key, value) {
  const hashIdx = this.hashFunction(key)
  const arr = this.table[hashIdx]
  if (arr) {
    let idx = arr.indexOf(key)
    if (idx === -1) {
      arr.push(key, value.toString())
    } else {
      arr[idx + 1] = value.toString()
    }
  } else {
    this.table[hashIdx] = [key, value.toString()]
  }
}

MyHashMap.prototype.get = function (key) {
  const hashIdx = this.hashFunction(key)
  const arr = this.table[hashIdx]
  if (arr) {
    const idx = arr.indexOf(key)
    if (idx === -1) return -1
    return +arr[idx + 1]
  }
  return -1
}

MyHashMap.prototype.remove = function (key) {
  const hashIdx = this.hashFunction(key)
  const arr = this.table[hashIdx]
  if (arr) {
    const idx = arr.indexOf(key)
    if (idx === -1) return
    arr.splice(idx, 2)
  }
}

const map = new MyHashMap()
