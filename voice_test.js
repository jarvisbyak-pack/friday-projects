// Check for browser support and instantiate the API
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;

  // Start listening
  recognition.start();

  // Handle the speech results
  recognition.onresult = (event) => {
    const transcript = Array.from(event.results)
      .map(result => result[0].transcript)
      .join('');
    console.log("Recognized Speech:", transcript);
  };

  recognition.onerror = (event) => console.error("Speech Recognition Error:", event.error);
} else {
  console.warn("Speech Recognition not supported in this browser.");
}