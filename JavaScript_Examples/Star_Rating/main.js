const ratings ={
    sony: 4.9,
    samsung: 3.4,
    visio: 2.3,
    panasonic: 4,
    phillips: 3.8
}
const starsTotal = 5;
const getRatings = () =>{
    for(let rating in ratings){
        const starPercentage = (ratings[rating]/ starsTotal)*100;
        const starRounded = `${Math.round(starPercentage/10)*10}%`
        
        document.querySelector(`.${rating} .stars-inner`).style.width = starRounded;
    }
}


document.addEventListener('DOMContentLoaded', getRatings)
