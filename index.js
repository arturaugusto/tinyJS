var _ = function(value) {
  this._value = value
  this.groupBy = (...args) => {
    // arg
    var arr, fn
    if (this._value !== undefined) {
      arr = this._value
      fn = args[0]
    } else {
      arr = args[0]
      fn = args[1]
    }
    // logic
    var res = arr.reduce((acc, curr, i, arr) => {
      let r = fn(curr, i, arr)
      if(!acc[r]){
        acc[r] = []
      }
      acc[r].push(curr)
      return acc
    }, {})
    // return
    if (this._value !== undefined) {
      this._value = res
      return this
    } else {
      return res
    }
  }

  // End chain
  this.value = () => {
    var res = this._value
    this._value = undefined
    return res
  }

  ['map', 'filter', 'reduce'].map((fnName) => {
    this[fnName] = (...args) => {
      if (this._value === undefined) {
        console.error('Method only avaliable for chaining.')
        return
      }
      var res = arr[fnName](...args)
      this._value = res
      return this
    }
  })
}

x = new _([1,2,3,4,5]).filter((x) => x < 5).groupBy((x) => x%2).value()
