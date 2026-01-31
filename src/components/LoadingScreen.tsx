import { useEffect, useState } from "react";
interface Props {
  onComplete: () => void;
}
const LoadingScreen = ({ onComplete }: Props) => {
  const [text, setText] = useState("");
  const fullText = "Schulich Soundstage!";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 500);
      }
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);
  return (
    <div className="fixed inset-0 z-100 bg-black text-gray-100 flex flex-col items-center justify-center">
      <div className="mx-auto justify-center mb-4 text-4xl font-dosis font-semi-bold">
        {text}
        <span className="animate-blink ml-1"> | </span>
      </div>
    </div>
  );
};

export default LoadingScreen;
