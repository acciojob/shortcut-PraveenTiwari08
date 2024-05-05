function shortcut(s1, s2) {
  // your code here
	let str = "";
	if((s1 && s2).trim() === ""){
		return "";
	}else{
		return str += (s1[0] ? s1[0] : "") + (s2[0] ? s2[0] : "");
	}
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
