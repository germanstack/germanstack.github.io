window.onload = function(){
    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    
    });
    $("#side-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
    $("#express-toggler").click(function (e) {
        e.preventDefault();
        $("#express-menu").toggleClass("d-none");
        $("#node-menu").addClass("d-none");
        $("#mongodb-menu").addClass("d-none");
        
    });
    $("#node-toggler").click(function (e) {
        e.preventDefault();
        $("#node-menu").toggleClass("d-none");
        $("#express-menu").addClass("d-none");
        $("#mongodb-menu").addClass("d-none");
    });
    $("#mongodb-toggler").click(function (e) {
        e.preventDefault();
        $("#mongodb-menu").toggleClass("d-none");
        $("#express-menu").addClass("d-none");
        $("#node-menu").addClass("d-none");
    });
    
    let screenSize = {
        xs: window.matchMedia("(max-width: 767px)"),
        md: window.matchMedia("(min-width:768px)")
    }
    function hiddenToggle(screenSize) {
        if (screenSize.matches) {
            $("#wrapper").toggleClass("toggled")
        }
    }
    
    function showToggle(screenSize) {
        if (screenSize.matches) {
            $("#wrapper").addClass("toggled")
        }
    }
    hiddenToggle(screenSize.xs);
    showToggle(screenSize.md);
}