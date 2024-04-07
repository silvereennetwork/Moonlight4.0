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

function change(select){
  console.log(select)
  localStorage.setItem("proxy-select", select);
  //refresh to update color cause I can't be bothered to switch it again
  location.reload()
}

console.log(localStorage.getItem("proxy-select"))