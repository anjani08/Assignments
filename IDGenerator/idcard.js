// function generateCard(){
	
// 	var name= document.getElementById('name');
// 	var clgName = document.getElementById('clgName');
// 	var clas = document.getElementById('clas');

// 	function readImage(){
// 		var img = document.getElementById('studentPhoto').src;
// 		document.getElementById('showStudentPhoto').innerHTML = img;
// 	}
// 	readImage();
// 	document.getElementById('showDetail').style.visibility='visible';
// 	document.getElementById('showName').label = name;
// 	document.getElementById('showClgName').label = clgName;
// 	document.getElementById('showClass').label = clas;


// }

// generateCard();


function generateCard(){
	var name = document.entryform.name.value;
	var clgName = document.entryform.clgName.value;
	var clas = document.entryform.clas.value;

	document.getElementById('showDetail').innerText = "Name: "+ "\t"+ name+"\n"+ "College Name : " +"\t" + clgName+"\n" + "Class: " +"\t"+ clas;
	

	function readimage(){
		var img = document.getElementById('studentPhoto').src;
    	document.getElementById('output').src = img;
	}
}

generateCard();



