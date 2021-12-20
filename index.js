 let randomNumber = Math.floor(Math.random() * 100) + 1;
      const guesses = document.querySelector('.intentos');
      const lastResult = document.querySelector('.resultado');
      const lowOrHi = document.querySelector('.margen');
      const guessSubmit = document.querySelector('.jugar');
      const guessField = document.querySelector('.guessField');
      let guessCount = 1;
      let resetButton;

      function checkGuess() {
        const userGuess = Number(guessField.value);
        if (guessCount === 1) {
          guesses.textContent = 'Intentos anteriores: ';
        }

        guesses.textContent += userGuess + ' ';

        if (userGuess === randomNumber) {
          lastResult.textContent = '¡Felicitaciones, lograste adivinar el numero!';
          lowOrHi.textContent = '';
          setGameOver();
        } else if (guessCount === 10) {
          lastResult.textContent = '!Haz perdido!';
          lowOrHi.textContent = '';
          setGameOver();
        } else {
          lastResult.textContent = 'Incorrecto!';
          if(userGuess < randomNumber) {
            lowOrHi.textContent = '¡El numero es por debajo!' ;
          } else if(userGuess > randomNumber) {
            lowOrHi.textContent = '¡El numero esta por encima!';
          }
        }

        guessCount++;
        guessField.value = '';
        guessField.focus();
      }

      guessSubmit.addEventListener('click', checkGuess);

      function setGameOver() {
        guessField.disabled = true;
        guessSubmit.disabled = true;
        resetButton = document.createElement('button');
        resetButton.textContent = 'Iniciar un nuevo juego';
        document.getElementById("reiniciar").appendChild(resetButton);
        resetButton.addEventListener('click', resetGame);
      }

      function resetGame() {
        guessCount = 1;
        location.reload();
        randomNumber = Math.floor(Math.random() * 100) + 1;
      }