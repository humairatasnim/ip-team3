import React from "react";
import "./FacebookFriendRequestPage.scss";
import PageBanner from "../../components/PageBanner/PageBanner";
export default function FacebookFriendRequestPage() {
  return (
    <>
      <PageBanner pageTitle="Facebook Friend Requests" />
      <div className="fb-fr-rq__container">
        <div className="fb-fr-rq__safety-helper">
          <h2 className="fb-fr-rq__safety-helper-title">
            Friend Request Safety Helper
          </h2>
          <p className="fb-fr-rq__safety-helper-description">
            Not sure whether to accept a friend request? We'll help you spot the
            difference between real people and fake profiles. Think of this like
            having a wise friend helping you decide who to trust online.
          </p>
        </div>
        <div className="fb-fr-rq fb-fr-rq--high-risk">
          <div className="fb-fr-rq__profile">
            <div className="fb-fr-rq__profile-header">
              <div className="fb-fr-rq__profile-picture">
                <img
                  src="https://via.placeholder.com/50"
                  alt="James Morrison Profile"
                  className="fb-fr-rq__profile-img"
                />
              </div>
              <div className="fb-fr-rq__profile-info">
                <h3>James Morrison</h3>
                <p className="fb-fr-rq__risk-level fb-fr-rq__risk-level--high">
                  ⚠️ High Risk
                </p>
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
                  src="https://via.placeholder.com/50"
                  alt="Sarah Williams Profile"
                  className="fb-fr-rq__profile-img"
                />
              </div>
              <div className="fb-fr-rq__profile-info">
                <h3>Sarah Williams</h3>
                <p className="fb-fr-rq__risk-level fb-fr-rq__risk-level--low">
                  ✅ Low Risk
                </p>
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
