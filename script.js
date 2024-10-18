<script src="./stuff/jquery.min.js"></script>
    <script src="./stuff/howler.js"></script>
    <script>
        var something = new Howl({
          src: ['./stuff/start-something.ogg'],
          volume: 0.5,
          onend: function() {
            something2.play();
          }
        });
        var something2 = new Howl({
          src: ['./stuff/loop-something.ogg'],
          volume: 0.5,
          loop: true
        });

        $(document).ready(function(){
            something.play();
        });
    </script>
