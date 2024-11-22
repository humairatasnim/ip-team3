import "./PageBanner.scss";

function PageBanner({ pageTitle }) {
  return (
    <>
      <section class="ip-page-banner">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="ip-page-banner__content">
                <h1 class="ip-page-banner__title">{pageTitle}</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PageBanner;
