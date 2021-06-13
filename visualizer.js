var sortingAlgorithm = "bubble"
var bars = document.querySelector(".bars")
var bubble = document.querySelector("#bubble")
var insertion = document.querySelector("#insertion")
var merge = document.querySelector("#merge")
var quick = document.querySelector("#quick")
var slide = document.querySelector("#slide")
var reset  = document.querySelector("#reset")
var sort = document.querySelector("#sort")

function setUp() {
  for (let i=0;i<100;i++) {
    var bar = document.createElement("div")
    var height_amount = String((Math.random()*490)+10)
    bar.style.height = height_amount + "px"
    bar.style.width = "6.25px"
    bar.style.background = determine_color(height_amount)
    bar.style.margin = "0 0.5px 0 0"
    bars.appendChild(bar)
  }
}

function determine_color(height_amount) {
  return (height_amount < 75) ? "#df1616"
       : (height_amount < 100) ? "#df3e16"
       : (height_amount < 125) ? "#df5216"
       : (height_amount < 150) ? "#df8116"
       : (height_amount < 175) ? "#dfbd16"
       : (height_amount < 200) ? "#dbdf16"
       : (height_amount < 225) ? "#84df16"
       : (height_amount < 250) ? "#37df16"
       : (height_amount < 275) ? "#16df63"
       : (height_amount < 300) ? "#16dfa6"
       : (height_amount < 325) ? "#16dfd1"
       : (height_amount < 350) ? "#16c7df"
       : (height_amount < 375) ? "#1692df"
       : (height_amount < 400) ? "#1677df"
       : (height_amount < 425) ? "#165cdf"
       : (height_amount < 450) ? "#1648df"
       : (height_amount < 475) ? "#162ddf"
       : "#2316df"
}

function setBubble() {
  sortingAlgorithm = "bubble"
  bubble.style.background = "#16c7df"
  insertion.style.background = "#2c2f30"
  merge.style.background = "#2c2f30"
  quick.style.background = "#2c2f30"
}

function setInsertion() {
  sortingAlgorithm = "insertion"
  insertion.style.background = "#16c7df"
  bubble.style.background = "#2c2f30"
  merge.style.background = "#2c2f30"
  quick.style.background = "#2c2f30"
}

function setMerge() {
  // sortingAlgorithm = "merge"
  // merge.style.background = "#16c7df"
  // bubble.style.background = "#2c2f30"
  // insertion.style.background = "#2c2f30"
  // quick.style.background = "#2c2f30"
}

function setQuick() {
  // sortingAlgorithm = "quick"
  // quick.style.background = "#16c7df"
  // bubble.style.background = "#2c2f30"
  // insertion.style.background = "#2c2f30"
  // merge.style.background = "#2c2f30"
}

bubble.addEventListener("click",setBubble)
insertion.addEventListener("click",setInsertion)
merge.addEventListener("click",setMerge)
quick.addEventListener("click",setQuick)

bubble.addEventListener("mouseover",function(){
  if (sortingAlgorithm !== "bubble") {
    bubble.style.background = "#3e4141"
  }
})
insertion.addEventListener("mouseover",function(){
  if (sortingAlgorithm !== "insertion") {
    insertion.style.background = "#3e4141"
  }
})
merge.addEventListener("mouseover",function(){
  // if (sortingAlgorithm !== "merge") {
  //   merge.style.background = "#3e4141"
  // }
})
quick.addEventListener("mouseover",function(){
  // if (sortingAlgorithm !== "quick") {
  //   quick.style.background = "#3e4141"
  // }
})

bubble.addEventListener("mouseout",function(){
  if (sortingAlgorithm !== "bubble") {
    bubble.style.background = "#2c2f30"
  }
})
insertion.addEventListener("mouseout",function(){
  if (sortingAlgorithm !== "insertion") {
    insertion.style.background = "#2c2f30"
  }
})
merge.addEventListener("mouseout",function(){
  // if (sortingAlgorithm !== "merge") {
  //   merge.style.background = "#2c2f30"
  // }
})
quick.addEventListener("mouseout",function(){
  // if (sortingAlgorithm !== "quick") {
  //   quick.style.background = "#2c2f30"
  // }
})

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve,ms))
}

async function bubbleSort(waitTime,arrBar) {
  for (let i=arrBar.length-1;i>=0;i--) {
    for (let j=0;j<i;j++) {
      if (Number(arrBar[j].style.height.slice(0,arrBar[j].style.height.length-2))>Number(arrBar[j+1].style.height.slice(0,arrBar[j+1].style.height.length-2))) {
        var temp_height = arrBar[j+1].style.height
        var temp_background = arrBar[j+1].style.background
        arrBar[j+1].style.height = arrBar[j].style.height
        arrBar[j+1].style.background = arrBar[j].style.background
        arrBar[j].style.height = temp_height
        arrBar[j].style.background = temp_background
        await sleep(waitTime)
      }
    }
  }
}

async function insertionSort(waitTime,arrBar) {
  for (let i=1;i<arrBar.length;i++) {
    var temp_height = arrBar[i].style.height
    var temp_background = arrBar[i].style.background
    let j = i-1
    while (j>-1&&Number(arrBar[j].style.height.slice(0,arrBar[j].style.height.length-2))>Number(temp_height.slice(0,temp_height.length-2))) {
      arrBar[j+1].style.height = arrBar[j].style.height
      arrBar[j+1].style.background = arrBar[j].style.background
      await sleep(waitTime)
      j--
    }
    arrBar[j+1].style.height = temp_height
    arrBar[j+1].style.background = temp_background
    await sleep(waitTime)
  }
}

async function mergeSort(waitTime,arrBar) {

}

async function quickSort(waitTime,arrBar) {

}

async function sortItems() {
  //alter to change the speed
  var waitTime = (100-Number(slide.value))/5 + 1
  var arrBar = Array.from(bars.querySelectorAll("div"))
  if (sortingAlgorithm === "bubble") {
    bubbleSort(waitTime,arrBar)
  } else if (sortingAlgorithm === "insertion") {
    insertionSort(waitTime,arrBar)
  } else if (sortingAlgorithm === "merge") {
    mergeSort(waitTime,arrBar)
  } else {
    quickSort(waitTime,arrBar)
  }
}

function resetItems() {
  var bars_bars = bars.querySelectorAll("div")
  for (let i=0;i<bars_bars.length;i++) {
    bars.removeChild(bars_bars[i])
  }
  setUp()
}

sort.addEventListener("click",sortItems)
reset.addEventListener("click",resetItems)

setUp()
setBubble()
console.log(slide.value)
