document.addEventListener("DOMContentLoaded", function() {
    const cartTotal = document.getElementById("cart-total");
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    let totalPrice = 0;
  
    addToCartButtons.forEach(button => {
      button.addEventListener("click", function() {
        const price = parseFloat(button.dataset.price);
        totalPrice += price;
        cartTotal.textContent = totalPrice.toFixed(2);
      });
    });
  });
  
/* Adicione ao final do seu arquivo de script */
document.addEventListener("DOMContentLoaded", function() {
    const artWorks = document.querySelectorAll(".artwork");
    const overlay = document.getElementById("overlay");
    const popup = document.getElementById("popup");
    const popupTitle = document.getElementById("popup-title");
    const popupArtist = document.getElementById("popup-artist");
    const popupPrice = document.getElementById("popup-price");
    const closePopupButton = document.getElementById("close-popup");
  
    artWorks.forEach(artWork => {
      artWork.addEventListener("click", function() {
        const title = artWork.querySelector("h2").textContent;
        const artist = artWork.querySelector("p:nth-child(2)").textContent;
        const price = artWork.querySelector("p:nth-child(3)").textContent;
        popupTitle.textContent = title;
        popupArtist.textContent = artist;
        popupPrice.textContent = price;
        overlay.style.display = "block";
        popup.style.display = "block";
      });
    });
  
    closePopupButton.addEventListener("click", function() {
      overlay.style.display = "none";
      popup.style.display = "none";
    });
  });
  