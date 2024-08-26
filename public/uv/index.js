"use strict";

/**
 * @type {HTMLFormElement}
 */
const form = document.getElementById("proxy-form");
/**
 * @type {HTMLInputElement}
 */
const address = document.getElementById("proxy-address");
/**
 * @type {HTMLInputElement}
 */
const searchEngine = document.getElementById("proxy-search-engine");
/**
 * @type {HTMLParagraphElement}
 */
const error = document.getElementById("proxy-error");
/**
 * @type {HTMLPreElement}
 */
const errorCode = document.getElementById("proxy-error-code");

var url = search(address.value, searchEngine.value)

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  if(localStorage.getItem("proxy-select") == null){
    localStorage.setItem("proxy-select", "uv");
  }
  if(localStorage.getItem("adblock") == null){
    localStorage.setItem("adblock", 1);
  }
  if(localStorage.getItem("adblock") == 0){
    url = search(address.value, searchEngine.value) + "defrgthyju"
  }
  if(localStorage.getItem("adblock") == 1){
    url = search(address.value, searchEngine.value) + "lokijuhygt"
  }
  if(localStorage.getItem("proxy-select") == "uv"){
    localStorage.setItem("proxy-load", __uv$config.prefix + __uv$config.encodeUrl(url));
  }
  else if(localStorage.getItem("proxy-select") == "dynamic"){
    localStorage.setItem("proxy-load", __dynamic$config.prefix + __uv$config.encodeUrl(url));
  }
  else{
    console.log("error")
  }

  // console.log(__uv$config.prefix + __uv$config.encodeUrl(url))
  location.href = "../load.html"
});

//const queryString = window.location.search;
//const urlParams = new URLSearchParams(queryString);
//const searchquery = urlParams.get('search')
//var searchqueryaddress = search(searchquery, `https://www.google.com/search?q=%s`)
if (searchqueryaddress !== null || searchqueryaddress !== '') {
  if(localStorage.getItem("proxy-select") == null){
    localStorage.setItem("proxy-select", "uv");
  }
  if(localStorage.getItem("adblock") == null){
    localStorage.setItem("adblock", 1);
  }
  if(localStorage.getItem("adblock") == 0){
    url = search(address.value, searchEngine.value) + "defrgthyju"
  }
  if(localStorage.getItem("adblock") == 1){
    url = search(address.value, searchEngine.value) + "lokijuhygt"
  }
  if(localStorage.getItem("proxy-select") == "uv"){
    localStorage.setItem("proxy-load", __uv$config.prefix + __uv$config.encodeUrl(searchqueryaddress));
  }
  else if(localStorage.getItem("proxy-select") == "dynamic"){
    localStorage.setItem("proxy-load", __dynamic$config.prefix + __uv$config.encodeUrl(searchqueryaddress));
  }
  else{
    console.log("error")
  }

  // console.log(__uv$config.prefix + __uv$config.encodeUrl(url))
  location.href = "../load.html"
}
