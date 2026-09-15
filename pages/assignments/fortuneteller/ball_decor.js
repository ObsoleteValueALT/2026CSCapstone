document.getElementById("red_overlay").classList.add('hidden');
document.getElementById("green_overlay").classList.add('hidden');
document.getElementById("blue_overlay").classList.add('hidden');
      
document.getElementById("color").addEventListener("change", function () {
      const selected = this.value;

      document.getElementById("red_overlay").classList.add('hidden');
      document.getElementById("green_overlay").classList.add('hidden');
      document.getElementById("blue_overlay").classList.add('hidden');

        if (selected === 'red') {
          document.getElementById('red_overlay').classList.remove('hidden');
        } else if (selected === 'green') {
            document.getElementById('green_overlay').classList.remove('hidden');
        } else if (selected === 'blue') {
            document.getElementById('blue_overlay').classList.remove('hidden');
        }
});