function handler(event) {
    const value = event.target.innerText
    const screen = document.querySelector("#screen")
    
    switch(value) {
      case "C":
        screen.innerText = ""
        break
  
      case "AC":
        screen.innerText = screen.innerText.slice(0, -1)
        break
        
      case "=":
        screen.innerText = eval(screen.innerText)
        break
      
      default:
        screen.innerText += value
    }
  }


  