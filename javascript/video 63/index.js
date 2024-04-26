let arr = [1,2,3,4,5]
console.log(arr);
console.log(arr.length);
console.log(arr[0]);
console.log(arr[5]);
console.log(arr[4]);
arr[0] = 564;
console.log(arr ,typeof arr);

console.log(arr.toString())
console.log(arr.join(" and "))
console.log(arr.pop())
console.log(arr)
console.log(arr.pop())
console.log(arr)
console.log(arr.push(100))
console.log(arr)
console.log(arr.push("Harry"))
console.log(arr)
console.log(arr.shift())
console.log(arr)
console.log(arr.unshift("Amit"))
console.log(arr)
console.log(delete arr[4])
console.log(arr,arr.length)

let A1 = [23,34,45,56,67,78]
let A2 = [98,87,76,65,54,43]
let A =[1]

console.log(A.concat(A1,A2))
let b = A.concat(A1,A2)
console.log(b.sort())
console.log(A1)
console.log(A2)
console.log(A)
console.log(b.splice(1,2))
console.log(b)
console.log(b.splice(1,2,4,5))
console.log(b)

