const hasilUjianJohn = [75,80,79,90]
const hasilUjianEd = [66,77,88,99]

const gabunganHasilUjian = [
    ...hasilUjianJohn, 
    ...hasilUjianEd
]


let terkecil = gabunganHasilUjian[0]
let terbesar = gabunganHasilUjian[0]
let rataRata = 0
let hasilRataRata = 0

for(i=0; i<= gabunganHasilUjian.length-1; i++){
    if(gabunganHasilUjian[i]<terkecil){
        terkecil = gabunganHasilUjian[i]
    }
    else if(gabunganHasilUjian[i]>terbesar){
        terbesar = gabunganHasilUjian[i]
    }
    rataRata += gabunganHasilUjian[i]
    hasilRataRata = rataRata / gabunganHasilUjian.length
}

console.log(terkecil)
console.log(terbesar)
console.log(hasilRataRata)