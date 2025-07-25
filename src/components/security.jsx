import { useEffect } from "react";

const Security = () => {
  useEffect(() => {
    // 🔒 Disable Right-Click
    document.addEventListener("contextmenu", (event) => event.preventDefault());

    // 🔒 Disable Drag & Drop of Images
    document.addEventListener("dragstart", (event) => event.preventDefault());

    // 🔒 Disable Keyboard Shortcuts (Save, Inspect, View Source, PrintScreen)
    document.addEventListener("keydown", (event) => {
      if (
        event.ctrlKey &&
        ["s", "u", "i", "p", "c", "x"].includes(event.key.toLowerCase())
      ) {
        event.preventDefault();
      }
      if (event.key === "PrintScreen") {
        alert("Screenshots are disabled on this website.");
        event.preventDefault();
      }
    });

    // 🔒 Detect Screen Capturing (Canvas Trick)
    const detectScreenCapture = setInterval(() => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "red";
      ctx.fillRect(0, 0, 100, 100);
      const data = canvas.toDataURL("image/png");

      if (data.length < 1000) {
        alert("Screen capturing detected! Reloading...");
        window.location.reload();
      }
    }, 3000);

    // ✅ Cleanup event listeners when component unmounts
    return () => {
      document.removeEventListener("contextmenu", (event) =>
        event.preventDefault()
      );
      document.removeEventListener("dragstart", (event) =>
        event.preventDefault()
      );
      document.removeEventListener("keydown", (event) => {
        if (
          event.ctrlKey &&
          ["s", "u", "i", "p", "c", "x"].includes(event.key.toLowerCase())
        ) {
          event.preventDefault();
        }
        if (event.key === "PrintScreen") {
          event.preventDefault();
        }
      });
      clearInterval(detectScreenCapture);
    };
  }, []);

  return null; // 🔹 No UI, just security functions
};

export default Security;