import "./Features.scss";

function Features() {
  const features = [
    {
      icon: "fa-solid fa-triangle-exclamation",
      title: "High-Risk Content Alerts",
      description:
        "Automatically flag friend requests or Facebook posts with a high likelihood of being scams. These alerts are designed to help users make informed decisions before interacting.",
    },
    {
      icon: "fa-solid fa-lightbulb",
      title: "Educational Insights",
      description:
        "Includes helpful tips and best practices for avoiding scams, ensuring users feel empowered and informed when navigating potential risks.",
    },
    {
      icon: "fa-solid fa-message",
      title: "Explainable Warnings",
      description:
        "Provides users with a clear reason why a request or post is flagged as high risk, such as 'This account was recently created' or 'Content contains phishing indicators'.",
    },
    {
      icon: "fa-solid fa-users",
      title: "User Control and Flexibility",
      description:
        "Allows users to decide whether to proceed, block, or report flagged content. Users maintain full control of their interactions, with the option to override warnings when necessary.",
    },
  ];

  return (
    <>
      <section id="features" className="ip-features">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ip-section-title">
                <span>Features</span>
                <h2>Main Features</h2>
                <p>
                  Discover the innovative features that make our platform stand
                  out. Explore the possibilities and transform your Meta experience.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {features.map((feature, index) => (
              <div
                className="col-xl-3 col-lg-3 col-sm-6"
                key={index}
              >
                <div
                  className="ip-feature"
                >
                  <div className="ip-feature__icon">
                    <i className={feature.icon}></i>
                  </div>
                  <div className="ip-feature__content">
                    <h3 className="ip-feature__title">{feature.title}</h3>
                    <p className="ip-feature__desc">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
