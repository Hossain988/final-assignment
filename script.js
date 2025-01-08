document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-input");
    const searchBtn = document.getElementById("search-btn");
    const mealResults = document.getElementById("meal-results");
    const showMoreBtn = document.getElementById("show-more-btn");
    const showMoreContainer = document.getElementById("show-more-container");

    let allMeals = [];     let currentIndex = 0; 
    const MEALS_PER_PAGE = 5; 


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


};    