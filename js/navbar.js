// This function will hide tutorials, goToTop link, showTutorials link, navbar-tutorial, main-nav-section  and hideTutorials link
function hideTutorials(){
	document.getElementById("navbar-tutorials").style.display = 'none';
	document.getElementById("hideTutorials").style.display = 'none';
	document.getElementById("showTutorials").style.display = 'block';
	document.getElementById("goToTop").style.display = "none";
	document.getElementById("main-nav-section").style.display = "block";
	
} 

// This function will show 'navbar-tutorials', 'hideTutorials', hide 'showTutorials', hide 'main-nav-section' and show 'goToTop'
function showTutorials(){
	document.getElementById("navbar-tutorials").style.display = 'block';
	document.getElementById("hideTutorials").style.display = "block";
	document.getElementById("showTutorials").style.display = "none";
	document.getElementById("main-nav-section").style.display = "none";
	document.getElementById("goToTop").style.display = "block";
}

/*
This function will get the navbar div by its identifer than will undisplay it than it'll show 'showNavb' and it will than undisplay 
'goToTop' 
*/
function closeNavBar(){
	var navbar = document.getElementById("navbar");
	navbar.style.display = 'none';
	document.getElementById("showNavb").style.display = 'block';
	document.getElementById("goToTop").style.display = "none";
}
