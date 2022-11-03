let AreaItems;
let categoriesItem;
let categoryItem;
let displayCategoryElementById;
let mealItem;
async function displayApiCategory() {
  apiResponseCategory = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  responseCategoryData = await apiResponseCategory.json();
  AreaItems = await responseCategoryData.categories;
  displayCategory();
}
function displayCategory() {
  let categoryData = ``;
  for (let i = 0; i < AreaItems.length; i++) {
    categoriesItem = AreaItems[i].strCategory;
    categoryData += `
        <div class="col-md-3" >
            <div class="hover-item CategoriesFilter" onclick="displayApiCategoryElement('${categoriesItem}')">
                <img src="${AreaItems[i].strCategoryThumb}" alt="">
                <div class="hover-color image-hover d-flex flex-wrap text-center justify-content-center">
                    <h3>${AreaItems[i].strCategory}</h3>
                    <p>${AreaItems[i].strCategoryDescription}</p>
                </div>
            </div>  
        </div>
        `;
  }
  document.getElementById("CategoryData").innerHTML = categoryData;
}
async function displayApiCategoryElement(categoriesItem) {
  apiResponseCategoryElement = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoriesItem}`
  );
  responseCategoryElementData = await apiResponseCategoryElement.json();
  categoryItem = await responseCategoryElementData.meals;
  displayCategoryElement(categoryItem);
}
function displayCategoryElement(categoryItem) {
  let categoryElementData = ``;
  for (let i = 0; i < 20; i++) {
    displayCategoryElementById =  categoryItem[i].idMeal;
    categoryElementData += `
      <div class="col-md-3 mealDetailsCategory" onclick="mealDetails('${displayCategoryElementById}')" >
          <div class="hover-item">
              <img src="${categoryItem[i].strMealThumb}" alt="">
              <div class="hover-color image-hover d-flex flex-wrap text-center justify-content-center">
                  <h3>${categoryItem[i].strMeal}</h3>
              </div>
          </div>
      </div>
      `;
  }
  document.getElementById("CategoryFillterElement").innerHTML = categoryElementData;
}
displayApiCategory();




// function Ingredients() {
//   let IngredientsItems;
//   async function displayApiIngredients() {
//     apiResponseIngredients = await fetch(
//       "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
//     );
//     responseIngredientsData = await apiResponseIngredients.json();
//     IngredientsItems = await responseIngredientsData.meals;
//     console.log(IngredientsItems[1]);
//     displayIngredients();
//   }
//   function displayIngredients() {
//     let IngredientsData = ``;
//     for (let i = 0; i < 20; i++) {
//       let descriptionIngredient = IngredientsItems[i].strDescription;

//       IngredientsData += `
//         <div class="col-md-3 overflow-Ingredient">
//           <div class="text-center overflow-auto">
//             <i class="fa-solid fa-bowl-food fa-3x green-color"></i>
//             <h3 class="text-white">${IngredientsItems[i].strIngredient}</h3>
//             <p class="text-white">${descriptionIngredient}</p>
//           </div>
//         </div>
//         `;
//     }
//     document.getElementById("IngredientsData").innerHTML = IngredientsData;
//   }
//   displayApiIngredients();
// }

function SearchByName() {
  let searchByName;
  let searchInput = document.getElementById("searchByName");
  searchInput.addEventListener("keyup", function () {
    searchByName = searchInput.value;
    console.log(searchByName);
    displayApiSearch(searchByName);
  });
  let SearchItems;
  async function displayApiSearch() {
    apiResponseSearch = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchByName}`
    );
    responseSearchData = await apiResponseSearch.json();
    SearchItems = await responseSearchData.meals;
    console.log(SearchItems);
    displaySearch();
  }
  function displaySearch() {
    let SearchData = ``;
    for (let i = 0; i < 20; i++) {
      displayCategoryElementById = SearchItems[i].idMeal;
      SearchData += `
        <div class="col-md-3 mealDetailsCategory" onclick="mealDetails('${displayCategoryElementById}')">
            <div class="hover-item">
              <img src="${SearchItems[i].strMealThumb}" alt="">
              <div class="hover-color image-hover">
                <h3>${SearchItems[i].strMeal}</h3>
              </div>
            </div>  
          </div>
        `;
    }
    document.getElementById("SearchData").innerHTML = SearchData;
  }
}

function SearchByFirstLetter() {
  let searchByFirstLetter;
  let searchInput = document.getElementById("searchByFirstLetter");
  searchInput.addEventListener("keyup", function () {
    searchByFirstLetter = searchInput.value;
    console.log(searchByFirstLetter);
    displayApiSearch(searchByFirstLetter);
  });
  let SearchItemsLetter;
  async function displayApiSearch() {
    apiResponseSearch = await fetch(
      `https://themealdb.com/api/json/v1/1/search.php?f=${searchByFirstLetter}`
    );
    responseSearchData = await apiResponseSearch.json();
    SearchItemsLetter = await responseSearchData.meals;
    console.log(SearchItemsLetter);
    displaySearchByLetter();
  }
  function displaySearchByLetter() {
    let SearchData = ``;
    for (let i = 0; i < SearchItemsLetter.length; i++) {
      displayCategoryElementById = SearchItemsLetter[i].idMeal;
      SearchData += `
        <div class="col-md-3 mealDetailsCategory" onclick="mealDetails('${displayCategoryElementById}')">
            <div class="hover-item">
              <img src="${SearchItemsLetter[i].strMealThumb}" alt="">
              <div class="hover-color image-hover">
                <h3>${SearchItemsLetter[i].strMeal}</h3>
              </div>
            </div>  
          </div>
        `;
    }
    document.getElementById("SearchData").innerHTML = SearchData;
  }
}






let areaItems;
let AreasItem;
let areaItem;
async function displayApiArea() {
  let apiResponseArea = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
  );
  let responseAreaData = await apiResponseArea.json();
  areaItems = await responseAreaData.meals;
  displayArea();
}
function displayArea() {
  let areaData = ``;
  for (let i = 0; i < 20; i++) {
    AreasItem = areaItems[i].strArea;
    areaData += `
          <div class="col-md-3 AreaFilterElement"onclick="displayApiElementArea('${AreasItem}')">
            <div class="text-center">
              <i class="fa-solid fa-city fa-3x text-danger"></i>
              <h3 class="text-white">${AreasItem}</h3>
            </div>
          </div>
        `;
  }
  document.getElementById("areaData").innerHTML = areaData;
}
async function displayApiElementArea(AreasItem) {
  console.log(AreasItem)
  let apiResponseAreaElement = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${AreasItem}`
  );
  let responseAreaElementData = await apiResponseAreaElement.json();
  areaItem = await responseAreaElementData.meals;
  displayAreaElement(areaItem);
}
function displayAreaElement(areaItem) {
  console.log(areaItem)
  let AreaElementData = ``;
  for (let i = 0; i < areaItem.length; i++) {
    displayCategoryElementById =  areaItem[i].idMeal;
    AreaElementData += `
      <div class="col-md-3 mealDetailsCategory" onclick="mealDetails('${displayCategoryElementById}')" >
          <div class="hover-item">
              <img src="${areaItem[i].strMealThumb}" alt="">
              <div class="hover-color image-hover d-flex flex-wrap text-center justify-content-center">
                  <h3>${areaItem[i].strMeal}</h3>
              </div>
          </div>
      </div>
      `;
  }
  document.getElementById("AreaFilterElement").innerHTML = AreaElementData;
}
displayApiArea();


let ingredientItems;
let IngredientsItem;
let ingredientItem;
async function displayApiIngredient() {
  let apiResponseIngredient = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
  );
  let responseIngredientData = await apiResponseIngredient.json();
  ingredientItems = await responseIngredientData.meals;
  displayIngredient();
}
function displayIngredient(){
  let ingredient = ``;
  for (let i = 0; i < 20; i++) {
    IngredientsItem = ingredientItems[i].strIngredient;
    ingredient += `
            <div class="col-md-3 overflow-Ingredient IngredientsFilter" onclick="displayApiElementIngredient('${IngredientsItem}')">
              <div class="text-center overflow-auto">
                <i class="fa-solid fa-bowl-food fa-3x green-color"></i>
                <h3 class="text-white">${ingredientItems[i].strIngredient}</h3>
                <p class="text-white">${ingredientItems[i].strDescription}</p>
              </div>
            </div>
        `;
  }
  document.getElementById("IngredientsData").innerHTML = ingredient;
}
async function displayApiElementIngredient(IngredientsItem) {
  let apiResponseIngredientElement = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${IngredientsItem}`
  );
  let responseIngredientElementData = await apiResponseIngredientElement.json();
  ingredientItem = await responseIngredientElementData.meals;
  displayIngredientElement(ingredientItem);
}
function displayIngredientElement(ingredientItem) {
  console.log(ingredientItem)
  let IngredientElementData = ``;
  for (let i = 0; i < ingredientItem.length; i++) {
    displayCategoryElementById =  ingredientItem[i].idMeal;
    console.log(displayCategoryElementById)
    IngredientElementData += `
      <div class="col-md-3 mealDetailsCategory" onclick="mealDetails('${displayCategoryElementById}')" >
          <div class="hover-item">
              <img src="${ingredientItem[i].strMealThumb}" alt="">
              <div class="hover-color image-hover d-flex flex-wrap text-center justify-content-center">
                  <h3>${ingredientItem[i].strMeal}</h3>
              </div>
          </div>
      </div>
      `;
  }
  document.getElementById("IngredientFilterElement").innerHTML = IngredientElementData;
}
displayApiIngredient()



function mealDetails(displayCategoryElementById) {
  async function displayApiMeal() {
    apiResponseMeal = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${displayCategoryElementById}`
    );
    responseMealData = await apiResponseMeal.json();
    mealItem = await responseMealData.meals;
    displayMeal(displayCategoryElementById)
  }

  function displayMeal(displayCategoryElementById) {
    let mealDetailsData = ``;
    console.log(mealItem[0].strMeal);
    mealDetailsData = `
        <div class="${displayCategoryElementById}"></div>
        <div class="col-4">
          <img class="w-100" src="${mealItem[0].strMealThumb}" alt="">
          <h2 class="text-center">${mealItem[0].strMeal}</h2>
        </div>
        <div class="col-8">
          <h2>Instructions</h2>
          <p class="lh-sm">${mealItem[0].strInstructions}</p>
          <h5>Areas : <span>${mealItem[0].strArea}</span></h5>
          <h5>Category : <span>${mealItem[0].strCategory}</span></h5>
          <h5>Recipes : <br>
            <div>
              <ul class="d-flex lh-1 flex-wrap list-unstyled">
                <li class="my-3 mx-1 p-1 alert-success bg-white rounded text-black">${mealItem[0].strMeasure1}  ${mealItem[0].strIngredient1}</li>
                <li class="my-3 mx-1 p-1 alert-success bg-white rounded text-black">${mealItem[0].strMeasure2}  ${mealItem[0].strIngredient2}</li>
                <li class="my-3 mx-1 p-1 alert-success bg-white rounded text-black">${mealItem[0].strMeasure3}  ${mealItem[0].strIngredient3}</li>
                <li class="my-3 mx-1 p-1 alert-success bg-white rounded text-black">${mealItem[0].strMeasure4}  ${mealItem[0].strIngredient4}</li>
                <li class="my-3 mx-1 p-1 alert-success bg-white rounded text-black">${mealItem[0].strMeasure5}  ${mealItem[0].strIngredient5}</li>
                <li class="my-3 mx-1 p-1 alert-success bg-white rounded text-black">${mealItem[0].strMeasure6}  ${mealItem[0].strIngredient6}</li>
                <li class="my-3 mx-1 p-1 alert-success bg-white rounded text-black">${mealItem[0].strMeasure7}  ${mealItem[0].strIngredient7}</li>
                <li class="my-3 mx-1 p-1 alert-success bg-white rounded text-black">${mealItem[0].strMeasure8}  ${mealItem[0].strIngredient8}</li>
                <li class="my-3 mx-1 p-1 alert-success bg-white rounded text-black">${mealItem[0].strMeasure9}  ${mealItem[0].strIngredient9}</li>
                <li class="my-3 mx-1 p-1 alert-success bg-white rounded text-black">${mealItem[0].strMeasure10} ${mealItem[0].strIngredient10}</li>
                <li class="my-3 mx-1 p-1 alert-success bg-white rounded text-black">${mealItem[0].strMeasure11} ${mealItem[0].strIngredient11}</li>
                <li class="my-3 mx-1 p-1 alert-success bg-white rounded text-black">${mealItem[0].strMeasure12} ${mealItem[0].strIngredient12}</li>
                <li class="my-3 mx-1 p-1 alert-success bg-white rounded text-black">${mealItem[0].strMeasure13} ${mealItem[0].strIngredient13}</li>
                <li class="my-3 mx-1 p-1 alert-success bg-white rounded text-black">${mealItem[0].strMeasure14} ${mealItem[0].strIngredient14}</li>
                <li class="my-3 mx-1 p-1 alert-success bg-white rounded text-black">${mealItem[0].strMeasure15} ${mealItem[0].strIngredient15}</li>
                <li class="my-3 mx-1 p-1 alert-success bg-white rounded text-black">${mealItem[0].strMeasure16} ${mealItem[0].strIngredient16}</li>
                <li class="my-3 mx-1 p-1 alert-success bg-white rounded text-black">${mealItem[0].strMeasure17} ${mealItem[0].strIngredient17}</li>
                <li class="my-3 mx-1 p-1 alert-success bg-white rounded text-black">${mealItem[0].strMeasure18} ${mealItem[0].strIngredient18}</li>
                <li class="my-3 mx-1 p-1 alert-success bg-white rounded text-black">${mealItem[0].strMeasure19} ${mealItem[0].strIngredient19}</li>
                <li class="my-3 mx-1 p-1 alert-success bg-white rounded text-black">${mealItem[0].strMeasure20} ${mealItem[0].strIngredient20}</li>
              </ul>
            </div>
          </h5>
          <h5>Tags : <br>
            <ul class="d-flex lh-1 flex-wrap list-unstyled">
              <li class="my-3 mx-1 p-1 alert-success bg-white text-black rounded">${mealItem[0].strTags}</li>
            </ul>
          </h5>
          <a class="btn btn-success text-white" target="_blank" href="https://findingtimeforcooking.com/main-dishes/red-lentil-soup-corba/">Source</a>
          <a class="btn btn-danger text-white" target="_blank" href="${mealItem[0].strYoutube}">Youtube</a>
        </div>
        `;
      document.getElementById("mealDetails").innerHTML = mealDetailsData;
      }
  displayApiMeal();
}



(function () {
  
  $("#Toggle-menu i").click(function () {
    let searchElement = document.getElementById("Search");
  let categoryElement = document.getElementById("Category");
  let CategoryFilter = document.getElementById("Category-Fillter");
  let areaElement = document.getElementById("Area");
  let AreaFilter = document.getElementById("Area-Fillter");
  let IngredientsElement = document.getElementById("Ingredients");
  let IngredientFilter = document.getElementById("Ingredient-Fillter");
  let MealElement = document.getElementById("meal-details");
  let ContactUs = document.getElementById("Contact-Us");
    $(".IngredientsFilter").click(function () {
      $(".loading-container").fadeIn(500);
      IngredientFilter.classList.replace("d-none","d-block")
      CategoryFilter.classList.replace("d-block", "d-none");
      MealElement.classList.replace("d-block", "d-none");
      searchElement.classList.replace("d-block", "d-none");
      categoryElement.classList.replace("d-block", "d-none");
      areaElement.classList.replace("d-block", "d-none");
      IngredientsElement.classList.replace("d-block", "d-none");
      AreaFilter.classList.replace("d-block", "d-none");
      ContactUs.classList.replace("d-block", "d-none");
      $(".loading-container").fadeOut(500);
    });
    $("#Search-link").click(function () {
      $(".loading-container").fadeIn(500);
      searchElement.classList.replace("d-none", "d-block");
      categoryElement.classList.replace("d-block", "d-none");
      CategoryFilter.classList.replace("d-block", "d-none");
      areaElement.classList.replace("d-block", "d-none");
      IngredientsElement.classList.replace("d-block", "d-none");
      IngredientFilter.classList.replace("d-block","d-none")
      MealElement.classList.replace("d-block", "d-none");
      AreaFilter.classList.replace("d-block", "d-none");
      ContactUs.classList.replace("d-block", "d-none");
      SearchByName();
      SearchByFirstLetter();
      $("#sideBar").animate({ left: `0px` }, 1000);
      menuIcon.classList.remove("fa-times");
      $(".loading-container").fadeOut(500);
    });
    $("#Categories-link").click(function () {
      $(".loading-container").fadeIn(500);
      categoryElement.classList.replace("d-none", "d-block");
      CategoryFilter.classList.replace("d-block", "d-none");
      searchElement.classList.replace("d-block", "d-none");
      areaElement.classList.replace("d-block", "d-none");
      IngredientsElement.classList.replace("d-block", "d-none");
      IngredientFilter.classList.replace("d-block","d-none")
      MealElement.classList.replace("d-block", "d-none");
      AreaFilter.classList.replace("d-block", "d-none");
      ContactUs.classList.replace("d-block", "d-none");
      $("#sideBar").animate({ left: `0px` }, 1000);
      menuIcon.classList.remove("fa-times");
      $(".loading-container").fadeOut(500);
    });
    $(".CategoriesFilter").click(function () {
      $(".loading-container").fadeIn(500);
      CategoryFilter.classList.replace("d-none", "d-block");
      MealElement.classList.replace("d-block", "d-none");
      searchElement.classList.replace("d-block", "d-none");
      categoryElement.classList.replace("d-block", "d-none");
      areaElement.classList.replace("d-block", "d-none");
      IngredientsElement.classList.replace("d-block", "d-none");
      IngredientFilter.classList.replace("d-block","d-none")
      AreaFilter.classList.replace("d-block", "d-none");
      ContactUs.classList.replace("d-block", "d-none");
      $(".loading-container").fadeOut(500);
    });
    $(".AreaFilterElement").click(function () {
      $(".loading-container").fadeIn(500);
      AreaFilter.classList.replace("d-none", "d-block");
      CategoryFilter.classList.replace("d-block", "d-none");
      MealElement.classList.replace("d-block", "d-none");
      searchElement.classList.replace("d-block", "d-none");
      categoryElement.classList.replace("d-block", "d-none");
      areaElement.classList.replace("d-block", "d-none");
      IngredientsElement.classList.replace("d-block", "d-none");
      IngredientFilter.classList.replace("d-block","d-none")
      ContactUs.classList.replace("d-block", "d-none");
      $(".loading-container").fadeOut(500);
    });
    $(".mealDetailsCategory").click(function () {
      $(".loading-container").fadeIn(500);
      MealElement.classList.replace("d-none", "d-block");
      IngredientsElement.classList.replace("d-block", "d-none");
      IngredientFilter.classList.replace("d-block","d-none")
      searchElement.classList.replace("d-block", "d-none");
      categoryElement.classList.replace("d-block", "d-none");
      CategoryFilter.classList.replace("d-block", "d-none");
      areaElement.classList.replace("d-block", "d-none");
      AreaFilter.classList.replace("d-block", "d-none");
      ContactUs.classList.replace("d-block", "d-none");
      $(".loading-container").fadeOut(500);
    });
    $("#Area-link").click(function () {
      $(".loading-container").fadeIn(500);
      areaElement.classList.replace("d-none", "d-block");
      searchElement.classList.replace("d-block", "d-none");
      categoryElement.classList.replace("d-block", "d-none");
      CategoryFilter.classList.replace("d-block", "d-none");
      IngredientsElement.classList.replace("d-block", "d-none");
      IngredientFilter.classList.replace("d-block","d-none")
      MealElement.classList.replace("d-block", "d-none");
      AreaFilter.classList.replace("d-block", "d-none");
      ContactUs.classList.replace("d-block", "d-none");
      $("#sideBar").animate({ left: `0px` }, 1000);
      menuIcon.classList.remove("fa-times");
      $(".loading-container").fadeOut(500);
    });
    $("#Ingredients-link").click(function () {
      $(".loading-container").fadeIn(500);
      IngredientsElement.classList.replace("d-none", "d-block");
      IngredientFilter.classList.replace("d-block","d-none")
      searchElement.classList.replace("d-block", "d-none");
      categoryElement.classList.replace("d-block", "d-none");
      CategoryFilter.classList.replace("d-block", "d-none");
      areaElement.classList.replace("d-block", "d-none");
      MealElement.classList.replace("d-block", "d-none");
      AreaFilter.classList.replace("d-block", "d-none");
      ContactUs.classList.replace("d-block", "d-none");
      $("#sideBar").animate({ left: `0px` }, 1000);
      menuIcon.classList.remove("fa-times");
      $(".loading-container").fadeOut(500);
    });
    $("#Contact-link").click(function () {
      $(".loading-container").fadeIn(500);
      ContactUs.classList.replace("d-none", "d-block");
      IngredientsElement.classList.replace("d-block", "d-none");
      IngredientFilter.classList.replace("d-block","d-none")
      searchElement.classList.replace("d-block", "d-none");
      categoryElement.classList.replace("d-block", "d-none");
      CategoryFilter.classList.replace("d-block", "d-none");
      areaElement.classList.replace("d-block", "d-none");
      MealElement.classList.replace("d-block", "d-none");
      AreaFilter.classList.replace("d-block", "d-none");
      $("#sideBar").animate({ left: `0px` }, 1000);
      menuIcon.classList.remove("fa-times");
      $(".loading-container").fadeOut(500);
    });
    
    
    let boxWidth = $("#boxMenu").outerWidth();
    let menuIcon = document.getElementById("icon-menu");
    if ($("#sideBar").css("left") === "0px") {
      $("#sideBar").animate({ left: `+${boxWidth}` }, 1000);
      $(".item-icon").slideDown(2000);
      menuIcon.classList.add("fa-times");
    } else {
      $("#sideBar").animate({ left: `0px` }, 1000);
      $(".item-icon").fadeOut(1000);
      menuIcon.classList.remove("fa-times");
    }
  });
})();



userName = document.getElementById("name"),
userEmail = document.getElementById("email"),
userPhone = document.getElementById("phone"),
userAge = document.getElementById("age"),
userPassword = document.getElementById("password"),
userRePassword = document.getElementById("rePassword"),
userNameAlert = document.getElementById("namealert"),
userEmailAlert = document.getElementById("emailalert"),
userPhoneAlert = document.getElementById("phonealert"),
userAgeAlert = document.getElementById("agealert"),
userpasswordAlert = document.getElementById("passwordalert"),
userRepasswordAlert = document.getElementById("repasswordalert");

userName.addEventListener("focus", () => {
nameToached = true
})
userEmail.addEventListener("focus", () => {
emailToached = true
})
userPhone.addEventListener("focus", () => {
phoneToached = true
})
userAge.addEventListener("focus", () => {
ageToached = true
})
userPassword.addEventListener("focus", () => {
passwordToached = true
})
userRePassword.addEventListener("focus", () => {
repasswordToached = true
})

let nameToached = false,
    emailToached = false,
    phoneToached = false,
    ageToached = false,
    passwordToached = false,
    repasswordToached = false;

function validation() {

  if (nameToached) {
      if (userNameValid()) {
          userName.classList.remove("is-invalid")
          userName.classList.add("is-valid")
          userNameAlert.classList.replace("d-block", "d-none")
          userNameAlert.classList.replace("d-block", "d-none")

      } else {
          userName.classList.replace("is-valid", "is-invalid")
          userNameAlert.classList.replace("d-none", "d-block")
      }
  }

  if (emailToached) {
      if (userEmailValid()) {
          userEmail.classList.remove("is-invalid")
          userEmail.classList.add("is-valid")
          userEmailAlert.classList.replace("d-block", "d-none")
          userEmailAlert.classList.replace("d-block", "d-none")
      } else {
          userEmail.classList.replace("is-valid", "is-invalid")
          userEmailAlert.classList.replace("d-none", "d-block")
      }
  }

  if (phoneToached) {
      if (userPhoneValid()) {
          userPhone.classList.remove("is-invalid")
          userPhone.classList.add("is-valid")
          userPhoneAlert.classList.replace("d-block", "d-none")
          userPhoneAlert.classList.replace("d-block", "d-none")
      } else {
          userPhone.classList.replace("is-valid", "is-invalid")
          userPhoneAlert.classList.replace("d-none", "d-block")
      }
  }

  if (ageToached) {
      if (userAgeValid()) {
          userAge.classList.remove("is-invalid")
          userAge.classList.add("is-valid")
          userAgeAlert.classList.replace("d-block", "d-none")
          userAgeAlert.classList.replace("d-block", "d-none")
      } else {
          userAge.classList.replace("is-valid", "is-invalid")
          userAgeAlert.classList.replace("d-none", "d-block")
      }
  }

  if (passwordToached) {
      if (userPasswordValid()) {
          userPassword.classList.remove("is-invalid")
          userPassword.classList.add("is-valid")
          userpasswordAlert.classList.replace("d-block", "d-none")
          userpasswordAlert.classList.replace("d-block", "d-none")
      } else {
          userPassword.classList.replace("is-valid", "is-invalid")
          userpasswordAlert.classList.replace("d-none", "d-block")
      }
  }

  if (repasswordToached) {
      if (userRePasswordValid()) {
          userRePassword.classList.remove("is-invalid")
          userRePassword.classList.add("is-valid")
          userRepasswordAlert.classList.replace("d-block", "d-none")
          userRepasswordAlert.classList.replace("d-block", "d-none")
      } else {
          userRePassword.classList.replace("is-valid", "is-invalid")
          userRepasswordAlert.classList.replace("d-none", "d-block")
      }
  }

  if(userNameValid() && userEmailValid() && userPhoneValid() && userAgeValid() && userPasswordValid() && userRePasswordValid()){
      document.getElementById("submitBtn").removeAttribute("disabled")
  }else{
      document.getElementById("submitBtn").setAttribute("disabled","true")
  }

}

function userNameValid() {
  return /^[a-zA-Z ]+$/.test(userName.value)
}

function userEmailValid() {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(userEmail.value)
}

function userPhoneValid() {
  return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(userPhone.value)
}

function userAgeValid() {
  return /^[1-9][0-9]?$|^100$/.test(userAge.value)
}

function userPasswordValid() {
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(userPassword.value)
}

function userRePasswordValid() {
  return userPassword.value == userRePassword.value
}

