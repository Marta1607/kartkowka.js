const tablica = new Array(1, 15, 150, 1500, "Jan", 5525, "henryk")
tablica.forEach(item => {

    console.log(item)
})
console.log(tablica.every ( item => item > 1)) //fałsz
console.log(tablica.indexOf("Jan"))

const liczby = new Array(1, 15, 150, 1500, 5525,)
console.log(liczby)

const imiona = new Array("Jan", "Henryk")
console.log(imiona)