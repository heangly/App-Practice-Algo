function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

var addTwoNumbers = function (l1, l2) {
  let carry = 0
  let head = new ListNode(0)
  let l3 = head

  while (carry || l1 || l2) {
    if (l1) {
      carry += l1.val
      l1 = l1.next
    }

    if (l2) {
      carry += l2.val
      l2 = l2.next
    }

    let val = carry % 10
    carry = Math.floor(carry / 10)

    l3.next = new ListNode(val)
    l3 = l3.next
  }

  return head.next
}

const l1 = new ListNode(2)
l1.next = new ListNode(4)
l1.next.next = new ListNode(3)

const l2 = new ListNode(5)
l2.next = new ListNode(6)
l2.next.next = new ListNode(4)

console.log(addTwoNumbers(l1, l2))
