//define functions here
function getIt() {
    $("p").on("click", () => {
        alert("Hey!");
        return;
    });
};

function frameIt() {
    $("img").on("load", () => {
        $("img").addClass("tasty");
        return;
    });
};

function pressIt() {
    $("input").on("keydown", key => {
        if (key.which == 71) {
            alert("You have pressed the G key.")
        }
    })
}

function submitIt() {

}

$(document).ready(function(){

// call functions here
    getIt()
    frameIt()
    pressIt()
});
