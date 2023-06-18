import bootstrapLogo from '../assets/bootstrap-logo.svg'

export default function FooterComponent() {
  return (
    <footer className="pt-4 my-md-5 pt-md-5 border-top">
      <div className="row">
        <div className="col-12 col-md">
          <img
            className="mb-2"
            src={bootstrapLogo}
            alt=""
            width="24"
            height="19"
          />
          <small className="d-block mb-3 text-muted">
            &copy; 2018-2023 V1.0.6
          </small>
        </div>
        <div className="col-6 col-md">
          <h5>Features</h5>
          <ul className="list-unstyled text-small">
            <li className="mb-1">
              <button className="btn btn-link link-secondary text-decoration-none">
                Cool stuff
              </button>
            </li>
            <li className="mb-1">
              <button className="btn btn-link link-secondary text-decoration-none">
                Random feature
              </button>
            </li>
            <li className="mb-1">
              <button className="btn btn-link link-secondary text-decoration-none">
                Team feature
              </button>
            </li>
            <li className="mb-1">
              <button className="btn btn-link link-secondary text-decoration-none">
                Stuff for developers
              </button>
            </li>
            <li className="mb-1">
              <button className="btn btn-link link-secondary text-decoration-none">
                Another one
              </button>
            </li>
            <li className="mb-1">
              <button className="btn btn-link link-secondary text-decoration-none">
                Last time
              </button>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>Resources</h5>
          <ul className="list-unstyled text-small">
            <li className="mb-1">
              <button className="btn btn-link link-secondary text-decoration-none">
                Resource
              </button>
            </li>
            <li className="mb-1">
              <button className="btn btn-link link-secondary text-decoration-none">
                Resource name
              </button>
            </li>
            <li className="mb-1">
              <button className="btn btn-link link-secondary text-decoration-none">
                Another resource
              </button>
            </li>
            <li className="mb-1">
              <button className="btn btn-link link-secondary text-decoration-none">
                Final resource
              </button>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>About</h5>
          <ul className="list-unstyled text-small">
            <li className="mb-1">
              <button className="btn btn-link link-secondary text-decoration-none">
                Team
              </button>
            </li>
            <li className="mb-1">
              <button className="btn btn-link link-secondary text-decoration-none">
                Locations
              </button>
            </li>
            <li className="mb-1">
              <button className="btn btn-link link-secondary text-decoration-none">
                Privacy
              </button>
            </li>
            <li className="mb-1">
              <button className="btn btn-link link-secondary text-decoration-none">
                Terms
              </button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
