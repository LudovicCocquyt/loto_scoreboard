function startCountdown(duration, display) {
    let timer = duration, minutes, seconds;
    const interval = setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
        clearInterval(interval);
      }
    }, 1000);
  }

  document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.querySelector('#startButton');
    startButton.addEventListener('click', function() {
        const time = localStorage.getItem('breakTime') || 60;
        const countdownDuration = 60 * time; // Durée en secondes (ici, 5 minutes)
        const display = document.querySelector('#countdown');
        startCountdown(countdownDuration, display);
        startButton.setAttribute('hidden', '')
    });

});
