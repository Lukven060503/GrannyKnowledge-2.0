function Closebutton1(){
  document.getElementById('blackBar').style.display = 'none'; //Stänger ner den svarta reklamen i toppen av sidan
}
function Closebutton(){
  document.getElementById('whiteBar').style.display = 'none'; //Stänger ner den vita "Cookies"
}
function AcceptCookies() {
    document.getElementById('whiteBar').style.display = 'none'; //Stänger ner den vita "Cookies"
}

function showContent(contentId) {
    // Hide all content divs
    var contentDivs = document.querySelectorAll('.container'); //Denna funktion stänger ner eller gömmer de contents som inte används 
    contentDivs.forEach(function(div) {
      div.classList.add('hidden');
    });

    var selectedDiv = document.getElementById(contentId); //Denna funktion visar upp rätt content när man trycker på knapparna "Home", "Shop", "Info", eller "About".
    selectedDiv.classList.remove('hidden');
  }
