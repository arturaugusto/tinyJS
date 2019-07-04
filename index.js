var _ = function(value) {
  this.value = value;
  this.groupBy = (...args) => {
    // arg
    var arr, fn;
    if (this.value !== undefined) {
      arr = this.value;
      fn = args[0];
    } else {
      arr = args[0];
      fn = args[1];
    }
    // logic
    var res = arr.reduce((acc, curr, i, arr) => {
      let r = fn(curr, i, arr);
      if(!acc[r]){
        acc[r] = []
      };
      acc[r].push(curr);
      return acc;
    }, {});
    console.log(res)
    // return
    if (this.value !== undefined) {
      this.value = res
      return this
    } else {
      return res
    }
  }
}

x = new _([1,2,3,4,5]).groupBy((x) => x%2)
