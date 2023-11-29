import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div
        className="container my-5"
        style={{
          border: "none", cursor: "default",
        }}
      >
        <footer className="text-center text-lg-start text-color3">
          <div className="container-fluid p-4 pb-0">
            <section className="">
              <hr className="mb-4" />
              <div className="row">
                <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase text-color">
                    Hotel Booking System
                  </h5>
                  <p>
                   TRAVO is the one of the best hotel booking system that you can find in Sri Lanka that has been developed by "Angular Whiplash" a team from university of Moratuwa!
                  </p>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-4">Text 1</h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="#!" class="text-color3">
                        Link 1
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color3">
                        Link 2
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color3">
                        Link 3
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color3">
                        Link 4
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-4">Text 2</h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="#!" class="text-color3">
                        Link 1
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color3">
                        Link 2
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color3">
                        Link 3
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color3">
                        Link 4
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-4">Text 3</h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="#!" class="text-color3">
                        Link 1
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color3">
                        Link 2
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color3">
                        Link 3
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color3">
                        Link 4
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-4">Text 4</h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="#!" class="text-color3">
                        Link 1
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color3">
                        Link 2
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color3">
                        Link 3
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color3">
                        Link 4
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <hr class="mb-4" />

            <section class="">
              <p class="d-flex justify-content-center align-items-center">
                <span class="me-3 text-color3">Register for free</span>
                <Link to="/user/customer/register" class="active">
                  <button
                    type="button"
                    class="btn btn-outline-light btn-rounded bg-color text-color"
                  >
                    Sign up!
                  </button>
                </Link>
              
                
              </p>
            </section>

            <hr class="mb-4" />
          </div>

          <div class="text-center3">
            © 2023 Copyright:
            <a class="text-color-3" href="">
              Angular Whiplash
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};export default Footer;