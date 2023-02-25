let i = 0;
const image = document.getElementsByClassName('image')
const text = document.querySelectorAll('.text')
const slide = document.querySelector('.slide')
const next = document.querySelectorAll('.nextSlide')
const prev = document.querySelectorAll('.prevSlide')
let images = [
    'GT500.png',
    'FordGTMKIV.png',
    'ChallengerDemon.png',
    'GTRNISMO.png'
]
let description = [
    "The Shelby Mustang GT500 is originally a Mustang GT500 modified by Shelby, just like the GT350, with the difference that its engine is more powerful and it also brings improvements in the suspension. In my opinion the best thing from that car is the agressive look with a sport shape1",
    "FordGTMKIV is the Ford hypercar, a beautiful car with such a good aerodynamic shape, it can produce 800 HP, it's made from the FordGTMKIV a car that came back from death after winning against Ferrari on LeMans",
    "One of the most iconic muscle cars, the Dodge Challenger, in its Demon version, with such an agressive hood air intake, and of course with its supercharger, a beautiful car with some boat shape",
    "Nissan GT-R, but its not just a usual GT-R, it has better aerodynamic, HorsePower, suspension, its obviusly faster, the car that can battle against a Lamborghini Huracán, the Nismo version, a Japanese car that looks pretty good and has a beautiful red line at the bottom going all around the car, and a bigger spoiler so it has most aerodynamic charge, the details make the beast"
]

function showSlide() {
    document.getElementById('image').src = images[i]
    document.getElementById('text').textContent = description[i]
    console.log('showSlide funciona')
}

function nextSlide() {
    if(i >= images.length - 1){
        i = 0
        showSlide()
        console.log('if')
    }else if( i <= images.length - 1){
        i++
        showSlide()
        console.log('else if', i)
    }else{
        console.error('fallo en nextSlide')
    }
}


function prevSlide() {
    if(i <= 0){
        i = images.length - 1
        showSlide()
        console.log('prev if')
    }else if(i >= 0){
        i--
        showSlide()
        console.log('prev else if', i)
    }else{
        console.error('fallo en prevSlide')
    }
}

