function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);


    var text = document.getElementById('text');
        var newDom = '';
        var animationDelay = 6;

        for(let i = 0; i < text.innerText.length; i++)
        {
            newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</span>';
        }

        text.innerHTML = newDom;
        var length = text.children.length;

        for(let i = 0; i < length; i++)
        {
            text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
        }
    
        var cursor = document.querySelector('.cursor');
        var cursorinner = document.querySelector('.cursor2');
        var a = document.querySelectorAll('a');
        
        document.addEventListener('mousemove', function(e){
          var x = e.clientX;
          var y = e.clientY;
          cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
        });
        
        document.addEventListener('mousemove', function(e){
          var x = e.clientX;
          var y = e.clientY;
          cursorinner.style.left = x + 'px';
          cursorinner.style.top = y + 'px';
        });
        
        document.addEventListener('mousedown', function(){
          cursor.classList.add('click');
          cursorinner.classList.add('cursorinnerhover')
        });
        
        document.addEventListener('mouseup', function(){
          cursor.classList.remove('click')
          cursorinner.classList.remove('cursorinnerhover')
        });
        
        a.forEach(item => {
          item.addEventListener('mouseover', () => {
            cursor.classList.add('hover');
          });
          item.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
          });
        })