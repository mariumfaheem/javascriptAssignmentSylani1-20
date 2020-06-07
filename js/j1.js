color_array=["red","green","blue"];

color=prompt("Enter a color name to add in the begninning :");
color_array.unshift(color);
document.write("<br>Updated colors are :"+color_array+"<br>") 
color=prompt("Enter a color name to add in the End :");
color_array.push(color);
document.write("<br>Updated colors are :"+color_array+"<br>") 
color=prompt("Enter a color name to delete in the begninning :");
color_array.shift(color);
document.write("<br>Updated colors after deletetion are :"+color_array+"<br>") 

color=prompt("Enter a color name to delete in the End :");
color_array.pop(color);
document.write("<br>Updated colors after deletetion of last element are :"+color_array+"<br>") 

//yahan se masla arha h is m 
color=prompt("Enter a color name :");
index=prompt("Enter a index number :");
color_array.splice(index, 0, color)
document.write(`<br>Updated colors of  element are at ${index},${color} : color_array<br>`) 
document.write(color_array)

color.splice(4,1);
document.write(color +"<br>");
document.write(color_array)