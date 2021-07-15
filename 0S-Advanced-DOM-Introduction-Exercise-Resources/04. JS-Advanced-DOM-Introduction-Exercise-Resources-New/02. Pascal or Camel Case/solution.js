function solve() {
  let arr = [];
  let wordToWrap = (document.getElementById("text").value).toLowerCase();
  let wrappingCase = document.getElementById("naming-convension").value;
  let result = document.getElementById("result");
  arr = wordToWrap.split(" ");
  if (wrappingCase.includes("Camel case")) {

    for (let i = 1; i < arr.length; i++) {
      const element = arr[i];
      arr[i] = element[0].toUpperCase();

    }
  } else if (wrappingCase.includes("Camel case")) {
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      arr[i] = element[0].toUpperCase();

    }

  }
  else {
    return "Error";
  }
result.textContent+=arr.join("");
}