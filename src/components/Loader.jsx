import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html
      center
      className="flex items-center justify-center w-full h-screen 
      font-bold text-xl text-white 
      bg-black backdrop-blur-2xl z-[-100]"
    >
      {Math.floor(progress)}% Loaded
    </Html>
  );
};

export default Loader;
