/********App Initialization *************/
var myApp = new Framework7({

    material : true,
    materialRipple : true,
    materialRippleElements : '.ripple',
    modalTitle : 'Fluffy!',
    fastClicks : false,
    sortable : false
   });

// Export selectors engine
var $$ = Dom7;



document.addEventListener("deviceready", deviceIsReady, false);


function deviceIsReady(){

document.addEventListener("backbutton", trapBackButton, false);

}


function trapBackButton(){
        
        var cpage = mainView.activePage;
        var cpageName = cpage.name;

         //Exit App
        if(cpageName == "dashboard" || cpageName == "theswipe"){

            navigator.app.exitApp();
        }
        else{

            mainView.router.back();
        }
}


// Add main view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
/******** App Initialization *************/


myApp.onPageInit('theswipe', function(page){

	
	$$("#get-started-btn").on("click", function(){

		mainView.router.loadPage("dashboard.html");
	})

});