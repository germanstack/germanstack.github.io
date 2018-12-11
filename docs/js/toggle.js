window.onload = function(){
    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    
    });
    $("#side-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
    $("#react-toggler").click(function (e) {
        e.preventDefault();
        $("#react-menu").toggleClass("d-none");
        $("#node-menu").addClass("d-none");
    });
    $("#node-toggler").click(function (e) {
        e.preventDefault();
        $("#node-menu").toggleClass("d-none");
        $("#react-menu").addClass("d-none");
    
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