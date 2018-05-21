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
        document.querySelector(`.${rating} .number-rating`).innerHTML = ratings[rating];
    }
}

document.addEventListener('DOMContentLoaded', getRatings);

const productSelect = document.getElementById("product-select");
const ratingControl = document.getElementById("rating-control");

let product;

productSelect.addEventListener("change", ev=>{
    product = ev.target.value;
    ratingControl.disabled = false;
    ratingControl.value = ratings[product];
})

ratingControl.addEventListener('blur', ev=>{
    const rating = ev.target.value;
    if(rating > 5 || rating < 1){
        alert("Please set rating between 1-5");
        return;
    }
    ratings[product] = rating;
    getRatings();
})
