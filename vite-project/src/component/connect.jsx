import 'bootstrap/dist/css/bootstrap.min.css';

export default function Connect() {
  return (
    <section id="contact" className="py-5" style={{ backgroundColor: '#050714', color: 'white' }}>
      <div className="container">

        {/* TITRE PRINCIPAL */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <h1 className="fw-bold display-5 mb-3">Contact <span style={{ color: '#4f6cf6' }}>Me</span></h1>
            <p className="opacity-75 lead">
              Feel free to reach out if you have a question, an opportunity, or just want to say hello.
            </p>
          </div>
        </div>

        {/* CARTES DE CONTACT (LinkedIn & GitHub) */}
        <div className="row justify-content-center g-4 mb-5">
          <div className="col-md-5 col-lg-4">
            <div className="p-4 text-center rounded-4 h-100 border-0 shadow-sm" style={{ backgroundColor: '#0a1128', border: '1px solid #1a254d' }}>
              <h5 className="fw-bold" style={{ color: '#4f6cf6' }}>LinkedIn</h5>
              <a href="https://www.linkedin.com/in/wichey-kaiz-66421b267/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-white opacity-75 fw-semibold">
                My Profile
              </a>
            </div>
          </div>

          <div className="col-md-5 col-lg-4">
            <div className="p-4 text-center rounded-4 h-100 border-0 shadow-sm" style={{ backgroundColor: '#0a1128', border: '1px solid #1a254d' }}>
              <h5 className="fw-bold" style={{ color: '#4f6cf6' }}>GitHub</h5>
              <a href="https://github.com/miche-kazadi" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-white opacity-75 fw-semibold">
                miche-kazadi
              </a>
            </div>
          </div>
        </div>

        {/* FORMULAIRE DE CONTACT */}
        <div className="row justify-content-center">
          {/* On passe de col-lg-10 à col-lg-7 pour un cadre moins large */}
          <div className="col-lg-7 col-md-9">
            <div className="p-4 p-md-4 rounded-4" style={{ backgroundColor: '#0a1128', border: '1px solid #1a254d' }}>
              <h4 className="mb-4 fw-bold text-center">Send me a message</h4>

              {/* Correction de l'URL action pour que l'envoi fonctionne */}
              <form action="https://api.web3forms.com/submit" method="POST">
                {/* N'oublie pas de mettre TA CLÉ réelle ici */}
                <input type="hidden" name="access_key" value="b48c0c71-8fbb-4764-a0db-ab4654cd1e9f" />

                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="small opacity-50 mb-1">Your Name</label>
                    <input type="text" name="name" className="form-control bg-transparent text-white border-secondary py-2 shadow-none" required style={{ borderRadius: '8px' }} />
                  </div>
                  <div className="col-md-6">
                    <label className="small opacity-50 mb-1">Your Email</label>
                    <input type="email" name="email" className="form-control bg-transparent text-white border-secondary py-2 shadow-none" required style={{ borderRadius: '8px' }} />
                  </div>
                  <div className="col-12">
                    <label className="small opacity-50 mb-1">Message</label>
                    <textarea name="message" className="form-control bg-transparent text-white border-secondary py-2 shadow-none" rows="4" required style={{ borderRadius: '8px' }}></textarea>
                  </div>

                  <input type="hidden" name="redirect" value="https://portfolio-wichey.web.app/" />

                  <div className="col-12 text-center">
                    <button type="submit" className="btn px-4 py-2 fw-bold mt-2 shadow-lg" style={{ backgroundColor: '#4f6cf6', color: 'white', borderRadius: '8px', border: 'none' }}>
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}