$(document).ready(function(){
	var ok = true;
	var error_mess;
	$("#register_submit").click(function(){
		var username = $("#username").val();
		var password1 = $("#password1").val();
		var password2 = $("#password2").val();
		var first_name = $("#first_name").val();
		var last_name = $("#last_name").val();
		var email = $("#email").val();
		error_mess = '';	
		// check_blan(username, password1, password2, first_name, last_name, email);
		
		check_username(username);
		check_pass(password1);
		check_pass_confirm(password1, password2);
		check_email(email);

		if (error_mess.length > 0 ){
			$("#error_mess").addClass('error');
		}else{
			$("#error_mess").removeClass('error');
		}
		$("#error_mess").text(error_mess);

		$("#register_form").on("submit",function(e){
			if (!ok){
				e.preventDefault();
		 		ok = true;
			}
		});
	});

	// function check_blan(username, password1, password2, first_name, last_name, email){
	// 	if (username.length == 0){
	// 		$("#username").next('span').text('This field is required');
	// 		error_mess += 'This field is required. ';
	//     	ok = false;
	// 	}
	// 	else {
	// 		$("#username").next('span').text('');
	// 	}
	// 	if (password1.length == 0){
	// 		$("#password1").next('span').text('This field is required');
	// 		error_mess += 'This field is required. ';
	//     	ok = false;
	// 	}
	// 	else {
	// 		$("#password1").next('span').text('');
	// 	}
	// 	if (password2.length == 0){
	// 		$("#password2").next('span').text('This field is required');
	// 		error_mess += 'This field is required. ';
	//     	ok = false;
	// 	}
	// 	else {
	// 		$("#password2").next('span').text('');
	// 	}
	// 	if (first_name.length == 0){
	// 		$("#first_name").next('span').text('This field is required');
	// 		error_mess += 'This field is required. ';
	//     	ok = false;
	// 	}
	// 	else {
	// 		$("#first_name").next('span').text('');
	// 	}
	// 	if (last_name.length == 0){
	// 		$("#last_name").next('span').text('This field is required');
	// 		error_mess += 'This field is required. ';
	//     	ok = false;
	// 	}
	// 	else {
	// 		$("#last_name").next('span').text('');
	// 	}
	// 	if (email.length == 0){
	// 		$("#email").next('span').text('This field is required');
	// 		error_mess += 'This field is required. ';
	//     	ok = false;
	// 	}
	// 	else {
	// 		$("#email").next('span').text('');
	// 	}
	// }	


	function check_username(username){
		if (username.length > 0 && !/^[a-zA-Z0-9]+$/.test(username)){    
	    	$("#username").next('span').text('Username to not allow special characters');
	    	error_mess += 'Username invalid. ';
	    	ok = false;

		}else{
			$("#username").next('span').text('');
			ok = true;
		}	
	}

	function check_pass(password1){
		if( password1.length > 0 && password1.length < 6 ){
			$("#password1").next('span').text('Passwords must be at least 6 characters in length');
			error_mess += '\nPassword too short. ';
			ok = false;

		}else{
			$("#password1").next('span').text('');
		}
	}

	function check_pass_confirm(password1, password2){
		if(password1.length > 0 && password1 != password2){
			$("#password2").next('span').text('Password confirmation doesn\'t match Password');
			error_mess += '\nPassword confirm not match. ';
			ok = false;
		}else{
			$("#password2").next('span').text('');
		}
	}
	function check_email(email){
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(email.length > 0 && !regex.test(email)){
			$("#email").next('span').text('The email is invalid');
			error_mess += '\nEmail invalid. ';
			ok = false;
		}else{
			$("#email").next('span').text('');
		}
	}


})

// function CheckId() {
// $.post('/register', {username: $(this).val()},
//     function(data){
//         if(data == "True"){
//             $('#error_mess').html("You may use this ID");
//         } else {
//             $('#error_mess').html("Unavailable");
//         }
// });
// }
// function onChange(){
//  $("#username").change( function() {CheckId()});
// }
// $(document).ready(onChange);