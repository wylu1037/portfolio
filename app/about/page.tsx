"use client";

import { useState } from "react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-4">
      <Button onClick={openModal}>Open Modal without Close Button</Button>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Create a new project"
        description=""
        footer={
          <>
            <Button variant="outline" onClick={closeModal}>
              Cancel
            </Button>
            <Button onClick={closeModal}>Confirm</Button>
          </>
        }
      >
        <div className="py-4">
          <p>
            This modal does not have a close button in the top right corner.
          </p>
          <p>
            You can only close it using the footer buttons or by clicking
            outside the modal.
          </p>
        </div>
      </Modal>
    </div>
  );
}
