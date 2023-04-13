import dynamic from "next/dynamic";

const Services = () => {
  return (
    <section
      id="services"
      data-nav-tooltip="Services"
      className="pp-section pp-scrollable section"
    >
      <div className="container">
        <div className="title">
          <h3>What I do?</h3>
        </div>
        <div className="row">
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-mobile" />
              <div className="feature-content media-body">
                <h5>Web Design</h5>
                <p>
                My approach to website design is to create a website that strengthens your company’s brand while ensuring ease of use and simplicity for your audience.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-desktop" />
              <div className="feature-content media-body">
                <h5>Web Development</h5>
                <p>
                The web development process involves taking the graphical elements defined in the design process and coding them into a custom theme.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon ti-shopping-cart" />
              <div className="feature-content media-body">
                <h5>eCommerce Solution</h5>
                <p>
                An eCommerce solution is a feature-filled, customisable online storefront and shopping cart that will be directly integrated into your website. 
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-mobile" />
              <div className="feature-content media-body">
                <h5>Responsive Website Design</h5>
                <p>
                Having a responsive layout means that your website fluidly resizes for optimal viewing regardless of the screen size or device                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />
      </div>
    </section>
  );
};
export default Services;
