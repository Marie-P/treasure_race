import Controller from"./controller.js";window.addEventListener("load",async()=>new Main);class Main{constructor(){this.controller=new Controller,window.addEventListener("keydown",n=>this.controller.keydownFunction(n)),window.addEventListener("keyup",n=>this.controller.keyupFunction(n)),window.addEventListener("mousemove",n=>this.controller.mousemoveFunction(n)),window.addEventListener("mouseup",n=>this.controller.mouseupFunction(n)),window.addEventListener("mousedown",n=>this.controller.mousedownFunction(n)),window.addEventListener("touchstart",n=>this.controller.touchstartFunction(n)),window.addEventListener("touchmove",n=>this.controller.touchmoveFunction(n)),window.addEventListener("touchend",n=>this.controller.touchendFunction(n)),this.controller.mainMenu()}}