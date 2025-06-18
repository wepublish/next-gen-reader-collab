import { HiMicrophone } from 'react-icons/hi';

export default function VoiceComment() {
  return (
    <div
      className="
      fixed left-1/2 bottom-0
      -translate-x-1/2
      w-full max-w-[700px]
      bg-white
      shadow-[0_-2px_16px_rgba(0,0,0,0.1)]
      rounded-t-2xl
      p-6
      z-[1000]
      "
    >
      <h3 className="text-lg font-semibold">Voice Comment</h3>
      {/* Add your modal content here */}
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 mb-4">
        <HiMicrophone size={24} />
      </span>
    </div>
  );
}
