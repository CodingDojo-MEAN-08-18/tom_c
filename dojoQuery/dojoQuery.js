// DojoQuery - Tom Compton

function $Dojo(id) {
    this.id = document.getElementById(id);
    this.click = function(callback) {
        this.id.myEventListener("click", callback);
    };
    this.hover = function(hoverIn, hoverOut) {
        this.id.myEventListener("mouseover", hoverIn);
        this.id.myEventListener("mouseout", hoverOut);
    };
    return this;
}
