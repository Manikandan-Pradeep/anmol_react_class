function add(a, b) {
    return a + b + this.x + this.y
}

const addObj = {
    x: 10,
    y: 20
}

const boundAdd = add.bind(addObj)

console.log(boundAdd(50,50))