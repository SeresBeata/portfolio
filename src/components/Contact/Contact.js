import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="frame">
        <div className="card">
          <div className="flip hvr-outline-in">
            <div className="front">
              <h1 className="H1">hi</h1>
              <p className="flip-me myP">Flip me</p>
              <div className="line line-1"></div>
              <div className="line line-2"></div>
              {/* <i class="fa fa-heart"></i> */}
            </div>

            <div className="back">
              {/* <i class="fa fa-heart"></i> */}
              <h3 className="H3">CONTACT</h3>
              <div className="line line-3"></div>
              {/* <h2 className="H2">Beata Molnar</h2> */}
              <h3 className="name H3">Beata Molnar</h3>
              <div className="social">
                {/* <i class="fab fa-codepen"></i> */}
                {/* <i class="fab fa-twitter"></i> */}
                {/* <i class="fab fa-linkedin-in"></i> */}
                {/* <i class="fab fa-github"></i> */}
                <div>
                  <a
                    href="https://github.com/SeresBeata"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/be%C3%A1ta-moln%C3%A1r-428112282/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
