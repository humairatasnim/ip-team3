import React from "react";
import "./WhatsAppPage.scss";
import PageBanner from "../../components/PageBanner/PageBanner";
import userImage from "../../assets/images/team/user.png";
const WhatsAppPage = () => {
  return (
    <>
      <PageBanner pageTitle="whatApp Message From UnKnown User" />
      <div className="whatsapp-app  flex items-center justify-center p-4">
        <div className="whatsapp-container w-full max-w-md bg-white rounded-xl overflow-hidden shadow-lg">
          <div className="whatsapp-header flex justify-between items-center p-3">
            <div className="flex items-center">
              <div className="w-9 h-9 rounded-full overflow-hidden border border-gray-300 bg-white">
                <img
                  src={userImage}
                  alt={""}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="ml-2 font-semibold">Unknown</span>
            </div>
            <div className="flex space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="white">
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="white">
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
              </svg>
            </div>
          </div>

          <div className="whatsapp-messages p-4 overflow-y-auto">
            <div className="flex justify-end mb-4">
              <div className="spam-message p-3 rounded-lg rounded-br-none">
                <p>
                  Congratulations! You've won a free iPhone! Click this link to
                  claim your prize immediately!
                </p>
                <a
                  href=""
                  className="text-blue-500 hover:text-blue-700 underline">
                  Click here
                </a>
              </div>
            </div>

            <div className="spam-warning text-center">
              ⚠️ High Risk Spam Message Detected
              <div className="text-sm mt-1">
                This message shows signs of being a scam or phishing attempt.
              </div>
            </div>

            <div className="text-center text-gray-600 text-sm mt-4">
              This looks like it could be a scam. Here's why:
              <ul className="mt-2 space-y-1">
                <li>• Unsolicited prize offer</li>
                <li>• Urgent call to action</li>
                <li>• Suspicious link implied</li>
              </ul>
            </div>
          </div>

          <div className="whatsapp-footer bg-[#F0F0F0] p-3 flex items-center">
            <input
              type="text"
              placeholder="Type a message"
              className="message-input w-full p-2 bg-white text-black rounded-full border"
            />
            <button className="ml-2 send-button bg-[#008069] p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsAppPage;
