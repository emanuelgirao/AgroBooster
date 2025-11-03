  const card = document.getElementById("card");
   const cardContent = document.getElementById("cardContent");

  function handleCardClick(e) {
    if (cardContent.classList.contains("show")) {
      // Se já está visível 
      cardContent.classList.remove("show");
      cardContent.classList.add("hide");
      card.classList.remove("box-active");
    } else {
      // Se está escondido 
      cardContent.classList.remove("hide");
      cardContent.classList.add("show");
      card.classList.add("box-active");
    }
  }
    card.addEventListener("click", handleCardClick);
