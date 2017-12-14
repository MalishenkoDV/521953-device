    var linkWrite = document.querySelector(".write");
    var write = document.querySelector(".write-us");
    var linkMap = document.querySelector(".map");
    var Map = document.querySelector(".big-map");

    var form = write.querySelector("form");
    var name = write.querySelector("[name=name]");
    var email = write.querySelector("[name=email]");
    var storageName = localStorage.getItem("name");
    var storageEmail = localStorage.getItem("email");
    var closeMap = document.querySelector(".big-map .btn-close");

    var closeWrite = document.querySelector(".write-us .btn-close");
    
    linkWrite.addEventListener("click", function(event){
      event.preventDefault();
      write.classList.add("write-us-show");
    });
    
    closeWrite.addEventListener("click", function(event){
      event.preventDefault();
      write.classList.remove("write-us-show");
      write.classList.remove("modal-error");
    });
    
        
    form.addEventListener("submit", function(event){
      if (!name.value || !email.value){
        event.preventDefault();
        write.classList.remove("modal-error");
        write.offsetWidth = write.offsetWidth;
        
        write.classList.add("modal-error");
      } else {
          localStorage.setItem("name", name.value);
          localStorage.setItem("email", email.value);
        }
      
    });
    
    
    linkMap.addEventListener("click", function(event){
      event.preventDefault();
      Map.classList.add("map-show");
    });
    
    closeMap.addEventListener("click", function(event){
      event.preventDefault();
      Map.classList.remove("map-show");
    });
    
    
    window.addEventListener("keydown", function(event){
      if (event.keyCode === 27){
        Map.classList.remove("map-show");
        write.classList.remove("write-us-show");
        write.classList.remove("modal-error");
      }
    });
    