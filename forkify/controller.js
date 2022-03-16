// 'use strict';
import * as model from './model.js';
import recipeView from './views/recipeView.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';
import { MODAL_CLOSE_SEC } from './views/config.js';
//
//
//this is not javaScrip, its coming from parcel
// if (model.hot) {
//   model.hot.accept();
// }
const overlay = document.querySelector('.overlay');
const recipeForm = document.querySelector('.add-recipe-form');
const addRecipeBtn = document.querySelector('.add-recipe');

//
//
//
//
//
//

//we are adding the overlay on the packgroud of our add recipe page here

addRecipeBtn.addEventListener('click', function (e) {
  e.preventDefault();
  recipeForm.classList.remove('hidden');
  overlay.classList.remove('hidden');
});
//
//
//
//
//When you click on the overlay then the page disappears bt addding the hidden class
overlay.addEventListener('click', function () {
  overlay.classList.add('hidden');
  recipeForm.classList.add('hidden');
});
//
//
//
//
//when we tap on the escape key, it also closes the overlay
document.addEventListener('keydown', function (e) {
  e.preventDefault();
  if (e.key === 'Escape') {
    recipeForm.classList.add('hidden');
    overlay.classList.add('hidden');
  }
});
// .................................................................................
//
//
//
//
const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.btn-search');
const addBookMark = document.querySelector('.bookmark');
const sideBar = document.querySelector('.side-bar');
const mainContent = document.querySelector('.main-content');

const controlRecipes = async function () {
  try {
    //here we are filter the id from the url and slicing only the after the #
    //we then pass that id to the url instead of picking it from the api response dynamicallly
    //this will help us to be able to listen to click and loads on each recipe.
    const id = window.location.hash.slice(1);
    //first put a guard check
    if (!id) return;
    bookmarksView.update(model.state.bookmarks);
    //we are rendering the spinnenr as we fetch data from the APi
    recipeView.renderSpinner();
    //(0) Updates results view to mark selected search result
    resultsView.update(model.getSearchResultsPage);
    //
    await model.loadRecipe(id);
    // const { recipe } = model.state;
    // console.log(recipe);
    // const mine = recipe.ingredients;
    //rendering the recipes
    //remember the recipes' ingredients comes as array contining
    //quantities, units and descriptions and so we have  to loop throught
    //the array and retrun the new array using the map() as below

    recipeView.render(model.state.recipe);
  } catch (error) {
    recipeView.renderError();
  }
};
//
//
//
//

const controlSearchResults = async function () {
  try {
    recipeView.renderSpinner();
    //get search query
    const query = searchView.getQuery();
    //the guard
    if (!query) return;
    ///
    //
    //Load search results
    await model.loadSearchResults(query);

    //render results
    // console.log(model.state.search.results);
    // console.log(model.getSearchResultsPage());
    resultsView.render(model.getSearchResultsPage());

    //render the initial pagination bar
    paginationView.render(model.state.search);
  } catch (error) {
    throw error;
  }
};
//
//

const controlPagination = function (goToPage) {
  //Render New results
  resultsView.render(model.getSearchResultsPage(goToPage));
  //Render New Pagination page
  paginationView.render(model.state.search);
};
//
///

//
// controller servings controoler

const controlServings = function (newServings) {
  //update the recipe serving (in state)
  model.updateServings(newServings);
  //update the recipe view
  //   recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const controlAddBookMark = function () {
  //1).Add or remove a bookmark
  if (!model.state.recipe.bookmarked) model.addBookMark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  //2).Update recipe view
  recipeView.update(model.state.recipe);

  //3).Render Bookmars
  bookmarksView.render(model.state.bookmarks);
};

//
//

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

/**
 *
 * @param {Object | objecet[]} newRecipe  the recipe after clearing the old recipe
 */

const controlAddRecipe = async function (newRecipe) {
  try {
    // render aloading spinner before uploading data
    addRecipeView.renderSpinner();
    //upload the new recipe data
    await model.uploadRecipe(newRecipe);
    //Receive Recipe
    recipeView.render(model.state.recipe);
    //Success Message
    addRecipeView.renderMessage();
    //render bookmark
    bookmarksView.render(model.state.bookmarks);
    //close form after sometime
    setTimeout(function () {
      addRecipeView.toggleWindow();

      //   change the ID in URL
      window.history.pushState(null, '', `#${model.state.recipe.id}`);
      //   window.history.back()
    }, MODAL_CLOSE_SEC * 1000);
  } catch (err) {
    console.error('🔥🔥', err);
    addRecipeView.renderError(error.message);

    //close form window
  }
};
//
const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.adddHanderUpdateServings(controlServings);
  recipeView.addHandlerAddBookMark(controlAddBookMark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandleClick(controlPagination);
  addRecipeView._addHandlerUpload(controlAddRecipe);
};
init();
//
//
//
//
// Here we are listening to the load and click events to get the respective items and loading
// them on the main content ares/
//that is if  user click a displayed item on the side bar, we display it on the main display area
//respectively
//And when we load the same URL on to another brower window, it also opens the recipe just like it was
//on the previous browser window
// controlRecipes();

//this event call #hashchange will call the show recipe function to display content on the main
//display window and this keeps chaning according to the clicked item on the side bar.
// window.addEventListener('hashchange', controlRecipes);
//on the same way, when we copy and load the same url on a differnt browser window, it should also at
// the same time load the same contents just like it was in  the previos window.
//by calling the load event and passing it controlRecipes callback function
// window.addEventListener('load', controlRecipes);

//another way of displaying two event or more at the same time.
// ['hashchange', 'load'].forEach((ive) =>
//   window.addEventListener(ive, controlRecipes)
// );
