//animate smooth scroll
$('#view-work').on('click',function(){
	const images=$('#images').position().top;
$('html','body').animate({
	scrollTop:images
},
900
);
});



// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// let xhr=new XMLHttpRequest();
// xhr.open('GET','https://json/placeholder.typicode.com/posts');
// xhr.send();
// const fetch = require("node-fetch");
// fetch('https://jsonplaceholder.typicode.com/todos')
// 	.then(function (response) {
// 		return response.json();
// 	})
// 	.then(function (data) {
// 		console.log('success', data);
// 	})
// 	.catch(function (error) {
// 		console.log('error', error);
// 	})//
