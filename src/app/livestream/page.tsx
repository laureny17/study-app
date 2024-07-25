// src/app/livestream/page.tsx
"use client";
import { useState } from "react";
import Timer from "../components/Timer";
import Modal from "../components/Modal";
import Link from "next/link";

const Livestream: React.FC = () => {
  const [initialTime, setInitialTime] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);

  const handleSave = (hours: number, minutes: number) => {
    const totalSeconds = hours * 3600 + minutes * 60;
    setInitialTime(totalSeconds);
    setIsModalOpen(false); // Close the modal after saving the time
  };

  return (
    <div className="container">
      {initialTime > 0 && <Timer initialTime={initialTime} />}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
      />
      <Link href="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
};

export default Livestream;
