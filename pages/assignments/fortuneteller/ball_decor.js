document.getElementById("red_overlay").classList.add('hidden');
document.getElementById("green_overlay").classList.add('hidden');
document.getElementById("blue_overlay").classList.add('hidden');

document.getElementById("secondary_overlay").classList.add('hidden');
      
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

document.getElementById("rune1").addEventListener("click", function () {
      const selected = this.value;
      
      if (selected) {
        document.getElementById('secondary_overlay').classList.remove('hidden');
        document.getElementById('secondary_overlay').src = "../../../images/soul.gif"
      }
      else {
        document.getElementById('secondary_overlay').classList.add('hidden');
      }
});

document.getElementById("rune2").addEventListener("click", function () {
      const selected = this.value;
      
      if (selected) {
        document.getElementById('secondary_overlay').classList.remove('hidden');
        document.getElementById('secondary_overlay').src = "../../../images/ripple.gif"
      }
      else {
        document.getElementById('secondary_overlay').classList.add('hidden');
      }
});

document.getElementById("rune3").addEventListener("click", function () {
      const selected = this.value;
      
      if (selected) {
        document.getElementById('secondary_overlay').classList.add('hidden');
        //document.getElementById('secondary_overlay').classList.remove('hidden');
        document.getElementById('secondary_overlay').src = "../../../images/placeholder.png"
      }
      else {
        document.getElementById('secondary_overlay').classList.add('hidden');
      }
});

document.getElementById("submit").addEventListener("mousedown", function () {
  const name = document.getElementById("namefield").value;

  if (name === 'Apateónas' || 'Apateonas' || 'deceiver' || 'Dermuskeuos') {
    window.location.replace("cavity")
  }
});