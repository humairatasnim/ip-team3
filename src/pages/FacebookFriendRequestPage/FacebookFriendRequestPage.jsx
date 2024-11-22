import React from "react";
import "./FacebookFriendRequestPage.scss";
import PageBanner from "../../components/PageBanner/PageBanner";
import avatarImage from "/src/assets/images/avatar.png";
export default function FacebookFriendRequestPage() {
  return (
    <>
      <PageBanner pageTitle="Facebook Friend Requests Scam" />
      <div className="w-full max-w-2xl mx-auto space-y-4 p-4">
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h2 className="text-lg font-bold mb-2">Friend Request Safety Helper</h2>
          <p className="text-sm">
            Not sure whether to accept a friend request? We'll help you spot the
            difference between real people and fake profiles. Think of this like
            having a wise friend helping you decide who to trust online.
          </p>
        </div>
      </div>
      <div className="fb-fr-rq__container">
        <div className="fb-fr-rq fb-fr-rq--high-risk">
          <div className="fb-fr-rq__profile">
            <div className="fb-fr-rq__profile-header">
              <div className="fb-fr-rq__profile-picture">
                <img
                  src={avatarImage}
                  alt="James Morrison Profile"
                  className="fb-fr-rq__profile-img"
                />
              </div>
              <div className="fb-fr-rq__profile-info">
                <h3>James Morrison</h3>
                <button class="friend-badge flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border bg-red-100 text-red-800 border-red-200 ">Warning: High Risk</button>
                <div className="fb-fr-rq__button-container">
                  <button className="fb-fr-rq__ai-button">
                    🌟 Learn Why With AI Assistant
                  </button>
                </div>
                <p>
                  <strong>Mutual Friends:</strong> 0
                </p>
                <p>
                  <strong>Location:</strong> Paris, France
                </p>
                <p>
                  <strong>Work:</strong> Self-Employed CEO
                </p>
              </div>
            </div>
            <div className="fb-fr-rq__profile-stats">
              <p>
                <strong>Photos:</strong> 1
              </p>
              <p>
                <strong>Posts:</strong> 2
              </p>
              <p>
                <strong>Friends:</strong> 4
              </p>
            </div>
          </div>

          <div className="fb-fr-rq__action-buttons">
            <button className="fb-fr-rq__button fb-fr-rq__button--decline">
              Decline Request
            </button>
            <button className="fb-fr-rq__button fb-fr-rq__button--report">
              Report Profile
            </button>
          </div>
        </div>

        <div className="fb-fr-rq fb-fr-rq--low-risk">
          <div className="fb-fr-rq__profile">
            <div className="fb-fr-rq__profile-header">
              <div className="fb-fr-rq__profile-picture">
                <img
                  src={avatarImage}
                  alt="Sarah Williams Profile"
                  className="fb-fr-rq__profile-img"
                />
              </div>
              <div className="fb-fr-rq__profile-info">
                <h3>Sarah Williams</h3>
                <button class="friend-badge flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border bg-green-100 text-green-800 border-green-200 ">Safe: Low Risk</button>
                <div className="fb-fr-rq__button-container">
                  <button className="fb-fr-rq__ai-button">
                    🌟 Learn Why With AI Assistant
                  </button>
                </div>
                <p>
                  <strong>Mutual Friends:</strong> 15
                </p>
                <p>
                  <strong>Location:</strong> Phoenix, AZ
                </p>
                <p>
                  <strong>Work:</strong> Retired Teacher
                </p>
              </div>
            </div>
            <div className="fb-fr-rq__profile-stats">
              <p>
                <strong>Photos:</strong> 127
              </p>
              <p>
                <strong>Posts:</strong> 432
              </p>
              <p>
                <strong>Friends:</strong> 285
              </p>
            </div>
          </div>

          <div className="fb-fr-rq__action-buttons">
            <button className="fb-fr-rq__button fb-fr-rq__button--decline">
              Decline Request
            </button>
            <button className="fb-fr-rq__button fb-fr-rq__button--report">
              Report Profile
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
