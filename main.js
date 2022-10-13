<main>
    <div class="container my-5 tect-center">
      <button class="btn btn-danger w-100" onclick="traer()">Obtener</button>
      <div class="mt-5" id="contenido">
        
      </div>
    </div>

    <script>
      var contenido = document.querySelector('#contenido')
        function traer() {
          fetch('texto.txt')
          .then(data => data.text())
          .then(res =>{
            console.log(res)
            
          })

        }
    </script>


  </main>