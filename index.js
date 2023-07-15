let meow = {
   div: null,
   kitty: function(){
    this.div = document.createElement("div")
     this.div.style.position = "absolute"
     this.div.style.left = "0"
     this.div.style.right = "0"
     this.div.style.top = "0"
     this.div.style.bottom = "0"
     document.body.appendChild(this.div)
     this.div.style.backgroundColor = "Black"
     this.div.style.color = "White"
     this.div.style.textShadow = "White 2px 2px"
     this.div.innerHTML = "mew"
   },
}
