console.log("HELLO WORLD");

const style = document.createElement("style");
style.innerHTML = `
  @keyframes colorShift {
    0% { background-color: #333; color: #efefef; }
    25% { background-color: #aaa; color: #333; }
    50% { background-color: #ddd; color: #333; }
    75% { background-color: #aaa; color: #333; }
    100% { background-color: #333; color: #efefef; }
  }

  body {
    animation: colorShift 10s infinite;
  }
`;
document.head.appendChild(style);
