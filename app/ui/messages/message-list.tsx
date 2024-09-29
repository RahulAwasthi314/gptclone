'use client';
import { GroupedMessages } from "@/app/lib/definitions";
import { useState } from "react";

interface MessageViewerProps {
    messages: GroupedMessages;
}

export const MessageViewer: React.FC<MessageViewerProps> = ({ messages }) => {
const messageIds = Object.keys(messages); // All message IDs
  const [currentMsgIdIndex, setCurrentMsgIdIndex] = useState(0); // Current message index
  const [currentVersionIndex, setCurrentVersionIndex] = useState(0); // Current version index

  const currentMsgId = messageIds[currentMsgIdIndex]; // Current message ID
  const versionIds = Object.keys(messages[currentMsgId]); // All version IDs for the current message
  const currentVersionId = versionIds[currentVersionIndex]; // Current version ID
  const currentMessage = messages[currentMsgId][currentVersionId][0]; // Current message content

  // Helper functions for navigation
  const handlePrevVersion = () => {
    if (currentVersionIndex > 0) {
      setCurrentVersionIndex(currentVersionIndex - 1);
    }
  };

  const handleNextVersion = () => {
    if (currentVersionIndex < versionIds.length - 1) {
      setCurrentVersionIndex(currentVersionIndex + 1);
    }
  };

  const handlePrevMessage = () => {
    if (currentMsgIdIndex > 0) {
      setCurrentMsgIdIndex(currentMsgIdIndex - 1);
      setCurrentVersionIndex(0); // Reset to the first version of the new message
    }
  };

  const handleNextMessage = () => {
    if (currentMsgIdIndex < messageIds.length - 1) {
      setCurrentMsgIdIndex(currentMsgIdIndex + 1);
      setCurrentVersionIndex(0); // Reset to the first version of the new message
    }
  };

  return (
    <div className="message-viewer">
      <div className="message-content">
        <h3>Message ID: {currentMsgId}</h3>
        <h4>Version ID: {currentVersionId}</h4>
        <p>{currentMessage.content}</p>
      </div>

      <div className="navigation-buttons">
        <button onClick={handlePrevVersion} disabled={currentVersionIndex === 0}>
          Previous Version
        </button>
        <button onClick={handleNextVersion} disabled={currentVersionIndex === versionIds.length - 1}>
          Next Version
        </button>
        <button onClick={handlePrevMessage} disabled={currentMsgIdIndex === 0}>
          Previous Message
        </button>
        <button onClick={handleNextMessage} disabled={currentMsgIdIndex === messageIds.length - 1}>
          Next Message
        </button>
      </div>
    </div>
  );
};