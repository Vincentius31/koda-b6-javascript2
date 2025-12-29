const hello = { 
    world: "Hello World"
}
const {world} = hello
console.log(world) 

const we = { 
    are: {
        the: {
            best: "Koda"
        }
    }
}
const{are:{the:{best}}} = we
console.log(best)


const obj = {str: [0,1,2,[0,[0,1,{man:[{tech:{academy: "Tech Academy"}}]}]]]}
const {academy} = obj.str[3][1][2].man[0].tech
console.log(academy)


const my = [{favourite: [0,1,2,{fruit: {is: "Apple"}}]}]
const {is} = my[0].favourite[3].fruit
console.log(is)

