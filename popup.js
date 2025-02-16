document.addEventListener("DOMContentLoaded", function () {
  // ✅ 1. Création de l'overlay (fond sombre)
  let overlay = document.createElement("div");
  overlay.id = "popup-overlay";
  overlay.style.cssText = `
    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
    background: rgba(0, 0, 0, 0.6); display: flex;
    align-items: center; justify-content: center; z-index: 1000;
  `;

  // ✅ 2. Création du popup
  let popup = document.createElement("div");
  popup.id = "popup-content";
  popup.style.cssText = `
    background: white; padding: 20px; border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3); text-align: center;
    position: relative; width: 350px; padding: 20px;
  `;

  // ✅ 3. Ajout du contenu HTML du popup
  popup.innerHTML = `
    <button id="popup-close" style="position: absolute; top: 10px; right: 10px; font-size: 18px; background: none; border: none; cursor: pointer;">✖</button>
    <h2 style="font-size: 18px; margin-bottom: 10px;">🎙️ Découvrez notre outil vocal !</h2>
    <p style="margin-bottom: 15px;">Testez notre assistant vocal interactif pour une expérience inédite.</p>
    <button id="popup-button" style="background: #007bff; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">OK, tester maintenant</button>
  `;

  // ✅ 4. Ajout du popup à l'overlay
  overlay.appendChild(popup);
  document.body.appendChild(overlay);

  // ✅ 5. Gestion de la fermeture du popup
  function closePopup() {
    overlay.remove();
  }

  document.getElementById("popup-close").addEventListener("click", closePopup);
  document.getElementById("popup-button").addEventListener("click", closePopup);
  overlay.addEventListener("click", closePopup);
  popup.addEventListener("click", (e) => e.stopPropagation()); // Empêche la fermeture au clic intérieur

  // ✅ 6. Ouvre automatiquement le popup après 3 secondes
  setTimeout(() => {
    overlay.style.display = "flex";
  }, 3000);
});
