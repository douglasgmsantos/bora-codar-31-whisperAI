const copyButton = document.querySelector("#btnCopy");
copyButton.addEventListener("click", async () => {
  const texts = document.querySelectorAll(".transcription .content p");
  const output = [...texts].reduce((acc, text) => acc + text.innerText, "");

  navigator.clipboard.writeText(output);

  const icon = copyButton.querySelector("i.ph");
  icon.setAttribute("class", "ph ph-copy-circle");

  setTimeout(() => {
    icon.setAttribute("class", "ph ph-copy-simple");
  }, 2000);
});
