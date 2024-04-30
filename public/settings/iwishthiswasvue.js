if(localStorage.getItem("proxy-select") == null){
  localStorage.setItem("proxy-select", "uv");
}

if(localStorage.getItem("proxy-select") == "uv"){
  document.getElementById("uv").style.background = "lime";
}
else if(localStorage.getItem("proxy-select") == "dynamic"){
  document.getElementById("dynamic").style.background = "lime";
}
else{
  console.log("error")
}

if(localStorage.getItem("adblock") == null){
  localStorage.setItem("adblock", 1);
}

if(localStorage.getItem("adblock") == 1){
  document.getElementById("adblock-on").style.background = "lime";
}
else if(localStorage.getItem("adblock") == 0){
  document.getElementById("adblock-off").style.background = "lime";
}
else{
  console.log("error")
}

function change(idk, select){
  localStorage.setItem(idk, select);
  //refresh to update color cause I can't be bothered to switch it again
  location.reload()
}
