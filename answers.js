//1.
/*for (i = 1; i <= 20; i ++) {
	console.log(i);
}
//2.
for (i = 0; i <= 200; i ++) {
	if (i % 2 === 0) {
		console.log(i);
	}
}
//3.
const cat = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."];
for (i = 1; i <= 20; i ++) {
	if (i % 2 === 0) {
		answer = cat[Math.floor(Math.random() * 3)];
		console.log(answer);
	} else {
	console.log("Love me, pet me! HSSSSSS!");
}
}
//4.
for (i = 1; i <= 100; i ++) {
	if ((i % 3 === 0) && (i % 5 === 0)) {
		console.log("FizzBuzz");
	} else if (i % 3 === 0) {
		console.log("Fizz");
	} else if (i % 5 === 0) {
		console.log("Buzz");
	} else {
		console.log(i);
}
}
//5.
const thom = ["Thom", 1000, "Christchurch"]
const karolin = ["Karolin", 16, "New York"]
const kristyn = ["Kristyn", 5, "Pittsburgh"]
const matt = ["Matt H", 186, "Philadelphia"]

thom[0] = "Gameboy";

karolin[1] = 17;

matt[2] = "Gotham City";

kristyn[2] = "Brooklyn"; 
//6.
const nTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
for (i = 0; i < nTurtles.length; i ++) {
	nTurtles[0] = nTurtles[0].toUpperCase();
	nTurtles[1] = nTurtles[1].toUpperCase();
	nTurtles[2] = nTurtles[2].toUpperCase();
	nTurtles[3] = nTurtles[3].toUpperCase();
	console.log(nTurtles[i]);
}*/
//5.
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];


kristynsCloset.shift();
let kristynsShoe = "left shoe";

thomsCloset.splice(3, 2, kristynsShoe);

console.log("Outfit one: " + kristynsCloset[1] +  ", " + kristynsCloset[3] + ", " + kristynsCloset[2]);
console.log("Outfit two: " + thomsCloset[0] + ", " + thomsCloset[5] + ", " + thomsCloset[9]); 

















































