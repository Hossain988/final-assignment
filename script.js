document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-input");
    const searchBtn = document.getElementById("search-btn");
    const mealResults = document.getElementById("meal-results");
    const showMoreBtn = document.getElementById("show-more-btn");
    const showMoreContainer = document.getElementById("show-more-container");

    let allMeals = []; // Full list of fetched meals
    let currentIndex = 0; // Tracks how many meals have been shown
    const MEALS_PER_PAGE = 5; // Number of meals per batch

    // Fetch meals from API
    const fetchMeals = async (query) => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data.meals || [];
        } catch (error) {
            console.error("Error fetching meals:", error);
            return [];
        }
    };


    const renderMeals = () => {
        const mealsToRender = allMeals.slice(currentIndex, currentIndex + MEALS_PER_PAGE);
        mealsToRender.forEach((meal) => {
            const mealCard = document.createElement("div");
            mealCard.classList.add("meal-card");
            mealCard.innerHTML = `
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                <div class="meal-info">
                    <h3>${meal.strMeal}</h3>
                    <p><strong>ID:</strong> ${meal.idMeal}</p>
                    <p>${meal.strInstructions.slice(0, 100)}...</p>
                </div> `;
                
            mealResults.appendChild(mealCard);
        });

        currentIndex += mealsToRender.length;
        toggleShowMoreButton();
    };

    
};    