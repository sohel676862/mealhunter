const submit = document.getElementById('submit')
const search = document.getElementById('search')
const random = document.getElementById('random')

const single_meal = document.getElementById('single-meal')


//addevent linsnet

submit.addEventListener('click', searchMeal)



function getmealID(mealID) {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${data-mealID}`)
        .then(res => res.json())
        .then(data => console.log(data))

}

function searchMeal(e) {
    e.preventDefault()

    const term = search.value

    if (term.trim()) {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
            .then(res => res.json())
            .then(data => grtalldata(data))
    } else {
        const error = document.getElementById('error')
        error.innerHTML = ` <h2>please give your demand</h2>`
    }
}
const grtalldata = findfood => {
    const resultHeading = document.getElementById('resultHeading')
    resultHeading.innerHTML = ""

    if (findfood.meals == null) {
        const error = document.getElementById('error')
        error.innerHTML = ` <h2>food is not find</h2>`
    }
    findfood.meals.forEach(element => {
        const div = document.createElement('div')
        div.className = "radies"
        const foodinfo = `
        <div onclick="getfullinformation(${element.idMeal})">
        <div class="foodname" data-mealID="${element.idMeal}>
        <h1 class="food_info" >${element.strMeal}</h1>
          </div>
          <div class="foodimg">
             <img src="${element.strMealThumb}" alt="">
          </div>
          <div class="catagori">

  <p>${element.strTags} </p>
          </div>
        
        </div>
              `


        div.innerHTML = foodinfo
        resultHeading.appendChild(div)

    });






}
const getfullinformation = number => {
    const displaynone = document.getElementById('displaynone')
    displaynone.style.display = 'none'

    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${number}`)
        .then(res => res.json())
        .then(data => moreinformation(data.meals[0]))
}

const moreinformation = allfood => {
    console.log(allfood.strCategory)
    const meal = document.getElementById('meal')
    meal.innerHTML = `
    <div class="maidDiv">
    <div class="foodimg">
  <img src="${allfood.strMealThumb}" alt="">
   </div>
    <div class="strCategory">
    <h3>${allfood.strCategory}</h3>
   
    </div>
    <div class="strCategory">
    <p>${allfood.strTags}</p>
    </div>
    <div class="strCategory">
    <p>${allfood.strArea}</p>
    </div>
    <div class="strCategory">
    <p>${allfood.strIngredient1}</p>
    </div>
    <div class="strCategory">
    <p>${allfood.strIngredient2}</p>
    </div>
    <div class="strCategory">
    <p>${allfood.strIngredient3}</p>
    </div>
    <div class="strCategory">
    <p>${allfood.strIngredient4}</p>
    </div>
    <div class="strCategory">
    <p>${allfood.strIngredient5}</p>
    </div>
    <div class="strCategory">
    <p>${allfood.strIngredient6}</p>
    </div>
    <div class="strCategory">
    <p>${allfood.strIngredient7}</p>
    </div>
    <div class="strCategory">
    <p>${allfood.strIngredient8}</p>
    </div>
   
    <div class="strCategory">
    <p>${allfood.strInstructions}</p>
    </div>
   
</div>


    `
}