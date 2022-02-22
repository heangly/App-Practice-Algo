const isIsomorphic = (s, t) => {
  if (s.length !== t.length) return false
  if (s === t) return true

  const obj1 = new Map()
  const obj2 = new Map()

  for (let i = 0; i < s.length; i++) {
    const sLetter = s[i]
    const tLetter = t[i]

    if (!obj2.has(tLetter)) {
      obj2.set(tLetter, sLetter)
    }

    if (!obj1.has(sLetter)) {
      obj1.set(sLetter, tLetter)
    }

    if (obj1.get(sLetter) !== tLetter || obj2.get(tLetter) !== sLetter)
      return false
  }

  return true
}

const s = 'egg'
const t = 'add'
console.log(isIsomorphic(s, t))
