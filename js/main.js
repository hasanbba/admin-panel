function sidebarToggle() {
	document.getElementById('sidebar-area').classList.toggle('active');
	document.getElementById('content-area').classList.toggle('active');
	document.getElementById('site-title').classList.toggle('active');
	document.getElementById('side-nav').classList.toggle('active');
}

//animated dropdown menu 
$('.dropdown-toggle').click(function () {
    $(this).next('.dropdown-menu').slideToggle(300);
});

$('.dropdown-toggle').focusout(function () {
    $(this).next('.dropdown-menu').slideUp(300);
})
//menu active function


 $(function() {
        // this will get the full URL at the address bar
        var url = window.location.href;
       
        // passes on every "a" tag
        $("nav a").each(function() {
        	console.log(this.href);
            // checks if its the same on the address bar
            if (url == (this.href)) {
                $(this).closest("a").addClass("active");
                $(this).closest(".dropdown").addClass("show");
                //for making parent of submenu active
               $(this).closest(".dropdown-menu").addClass("show");
            }
        });
    });        

 
$('#example').DataTable( {
    dom: 'Bfrtip',
    buttons: [
        'copy', 'excel', 'pdf'
    ]
} );

