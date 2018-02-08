(function colorSwitcher () {
    var buttons = document.querySelectorAll("li")
    for(var i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", function(evt){
            document.body.style.backgroundColor = evt.target.className
        })
    }
})()
