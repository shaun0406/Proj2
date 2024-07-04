const sentences = [
    "Hey Josie",
    "You might still be unsure about the future",
    "I know I am",
    "But I would like to try",
    "We'll date in secret",
    "sooo...."
  ];
  
  let currentSentenceIndex = 0;
  
  document.addEventListener("click", () => {
    const sentenceElement = document.getElementById("sentence");
    sentenceElement.classList.add("out");
  
    setTimeout(() => {
      sentenceElement.textContent = sentences[currentSentenceIndex];
      sentenceElement.classList.remove("out");
      sentenceElement.classList.add("in");
  
      const chars = sentenceElement.textContent.split("");
      sentenceElement.innerHTML = "";
      chars.forEach((char, index) => {
        const charElement = document.createElement("span");
        charElement.className = "char";
        charElement.style.animationDelay = index * 6 + "ms";
        charElement.textContent = char; // Use a regular space character
        sentenceElement.appendChild(charElement);
      });
  
      const continueElement = document.getElementById("continue");
      continueElement.textContent = "Click to continue";
  
      currentSentenceIndex++;
  
      if (currentSentenceIndex >= sentences.length) {
        window.location.href = "index.html";
      }
    }, 500);
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const sentenceElement = document.getElementById("sentence");
    sentenceElement.textContent = sentences[0];
  
    const chars = sentenceElement.textContent.split("");
    sentenceElement.innerHTML = "";
    chars.forEach((char, index) => {
      const charElement = document.createElement("span");
      charElement.className = "char";
      charElement.style.animationDelay = index * 6 + "ms";
      charElement.textContent = char; // Use a regular space character
      sentenceElement.appendChild(charElement);
    });
  
    const continueElement = document.getElementById("continue");
    continueElement.textContent = "Click to continue";
  });