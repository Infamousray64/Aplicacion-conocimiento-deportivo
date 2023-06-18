export default function ChatComponent() {
  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Chat</h1>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card chat-widget" id="chat3">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0">
                  <div className="p-3">
                    <div className="input-group rounded mb-3">
                      <input
                        type="search"
                        className="form-control rounded"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="search-addon"
                      />
                      <span
                        className="input-group-text border-0"
                        id="search-addon"
                      >
                        <i className="fas fa-search"></i>
                      </span>
                    </div>
                    <div
                      data-mdb-perfect-scrollbar="true"
                      className="chat-list"
                    >
                      <ul className="list-unstyled mb-0">
                        <li className="p-2 border-bottom">
                          <a
                            href="#!"
                            className="d-flex justify-content-between"
                          >
                            <div className="d-flex flex-row">
                              <div>
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                  alt="avatar"
                                  className="d-flex align-self-center me-3"
                                  width="60"
                                />
                                <span className="badge bg-success badge-dot"></span>
                              </div>
                              <div className="pt-1">
                                <p className="fw-bold mb-0">Marie Horwitz</p>
                                <p className="small text-muted">
                                  Hello, Are you there?
                                </p>
                              </div>
                            </div>
                            <div className="pt-1">
                              <p className="small text-muted mb-1">Just now</p>
                              <span className="badge bg-danger rounded-pill float-end">
                                3
                              </span>
                            </div>
                          </a>
                        </li>
                        <li className="p-2 border-bottom">
                          <a
                            href="#!"
                            className="d-flex justify-content-between"
                          >
                            <div className="d-flex flex-row">
                              <div>
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                                  alt="avatar"
                                  className="d-flex align-self-center me-3"
                                  width="60"
                                />
                                <span className="badge bg-warning badge-dot"></span>
                              </div>
                              <div className="pt-1">
                                <p className="fw-bold mb-0">Alexa Chung</p>
                                <p className="small text-muted">
                                  Lorem ipsum dolor sit.
                                </p>
                              </div>
                            </div>
                            <div className="pt-1">
                              <p className="small text-muted mb-1">
                                5 mins ago
                              </p>
                              <span className="badge bg-danger rounded-pill float-end">
                                2
                              </span>
                            </div>
                          </a>
                        </li>
                        <li className="p-2 border-bottom">
                          <a
                            href="#!"
                            className="d-flex justify-content-between"
                          >
                            <div className="d-flex flex-row">
                              <div>
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                                  alt="avatar"
                                  className="d-flex align-self-center me-3"
                                  width="60"
                                />
                                <span className="badge bg-success badge-dot"></span>
                              </div>
                              <div className="pt-1">
                                <p className="fw-bold mb-0">Danny McChain</p>
                                <p className="small text-muted">
                                  Lorem ipsum dolor sit.
                                </p>
                              </div>
                            </div>
                            <div className="pt-1">
                              <p className="small text-muted mb-1">Yesterday</p>
                            </div>
                          </a>
                        </li>
                        <li className="p-2 border-bottom">
                          <a
                            href="#!"
                            className="d-flex justify-content-between"
                          >
                            <div className="d-flex flex-row">
                              <div>
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
                                  alt="avatar"
                                  className="d-flex align-self-center me-3"
                                  width="60"
                                />
                                <span className="badge bg-danger badge-dot"></span>
                              </div>
                              <div className="pt-1">
                                <p className="fw-bold mb-0">Ashley Olsen</p>
                                <p className="small text-muted">
                                  Lorem ipsum dolor sit.
                                </p>
                              </div>
                            </div>
                            <div className="pt-1">
                              <p className="small text-muted mb-1">Yesterday</p>
                            </div>
                          </a>
                        </li>
                        <li className="p-2 border-bottom">
                          <a
                            href="#!"
                            className="d-flex justify-content-between"
                          >
                            <div className="d-flex flex-row">
                              <div>
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava5-bg.webp"
                                  alt="avatar"
                                  className="d-flex align-self-center me-3"
                                  width="60"
                                />
                                <span className="badge bg-warning badge-dot"></span>
                              </div>
                              <div className="pt-1">
                                <p className="fw-bold mb-0">Kate Moss</p>
                                <p className="small text-muted">
                                  Lorem ipsum dolor sit.
                                </p>
                              </div>
                            </div>
                            <div className="pt-1">
                              <p className="small text-muted mb-1">Yesterday</p>
                            </div>
                          </a>
                        </li>
                        <li className="p-2">
                          <a
                            href="#!"
                            className="d-flex justify-content-between"
                          >
                            <div className="d-flex flex-row">
                              <div>
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                                  alt="avatar"
                                  className="d-flex align-self-center me-3"
                                  width="60"
                                />
                                <span className="badge bg-success badge-dot"></span>
                              </div>
                              <div className="pt-1">
                                <p className="fw-bold mb-0">Ben Smith</p>
                                <p className="small text-muted">
                                  Lorem ipsum dolor sit.
                                </p>
                              </div>
                            </div>
                            <div className="pt-1">
                              <p className="small text-muted mb-1">Yesterday</p>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-7 col-xl-8">
                  <div
                    className="pt-3 pe-3 chat-list"
                    data-mdb-perfect-scrollbar="true"
                  >
                    <div className="d-flex flex-row justify-content-start">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                        alt="avatar 1"
                        className="avatar"
                      />
                      <div>
                        <p className="message">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                        <p className="small ms-3 mb-3 rounded-3 text-muted float-end">
                          12:00 PM | Aug 13
                        </p>
                      </div>
                    </div>

                    <div className="d-flex flex-row justify-content-end">
                      <div>
                        <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                          Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ea commodo
                          consequat.
                        </p>
                        <p className="small me-3 mb-3 rounded-3 text-muted">
                          12:00 PM | Aug 13
                        </p>
                      </div>
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                        alt="avatar 1"
                        className="avatar"
                      />
                    </div>

                    <div className="d-flex flex-row justify-content-start">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                        alt="avatar 1"
                        className="avatar"
                      />
                      <div>
                        <p className="message">
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <p className="small ms-3 mb-3 rounded-3 text-muted float-end">
                          12:00 PM | Aug 13
                        </p>
                      </div>
                    </div>

                    <div className="d-flex flex-row justify-content-end">
                      <div>
                        <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum.
                        </p>
                        <p className="small me-3 mb-3 rounded-3 text-muted">
                          12:00 PM | Aug 13
                        </p>
                      </div>
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                        alt="avatar 1"
                        className="avatar"
                      />
                    </div>

                    <div className="d-flex flex-row justify-content-start">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                        alt="avatar 1"
                        className="avatar"
                      />
                      <div>
                        <p className="message">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo.
                        </p>
                        <p className="small ms-3 mb-3 rounded-3 text-muted float-end">
                          12:00 PM | Aug 13
                        </p>
                      </div>
                    </div>

                    <div className="d-flex flex-row justify-content-end">
                      <div>
                        <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                          Nemo enim ipsam voluptatem quia voluptas sit
                          aspernatur aut odit aut fugit, sed quia consequuntur
                          magni dolores eos qui ratione voluptatem sequi
                          nesciunt.
                        </p>
                        <p className="small me-3 mb-3 rounded-3 text-muted">
                          12:00 PM | Aug 13
                        </p>
                      </div>
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                        alt="avatar 1"
                        className="avatar"
                      />
                    </div>

                    <div className="d-flex flex-row justify-content-start">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                        alt="avatar 1"
                        className="avatar"
                      />
                      <div>
                        <p className="message">
                          Neque porro quisquam est, qui dolorem ipsum quia dolor
                          sit amet, consectetur, adipisci velit, sed quia non
                          numquam eius modi tempora incidunt ut labore et dolore
                          magnam aliquam quaerat voluptatem.
                        </p>
                        <p className="small ms-3 mb-3 rounded-3 text-muted float-end">
                          12:00 PM | Aug 13
                        </p>
                      </div>
                    </div>

                    <div className="d-flex flex-row justify-content-end">
                      <div>
                        <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                          Ut enim ad minima veniam, quis nostrum exercitationem
                          ullam corporis suscipit nisi ut aliquid ex ea commodi
                          consequatur?
                        </p>
                        <p className="small me-3 mb-3 rounded-3 text-muted">
                          12:00 PM | Aug 13
                        </p>
                      </div>
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                        alt="avatar 1"
                        className="avatar"
                      />
                    </div>
                  </div>

                  <div className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                      alt="avatar 3"
                      className="avatar"
                    />
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="exampleFormControlInput2"
                      placeholder="Type message"
                    />
                    <a className="ms-3" href="#!">
                      📎
                    </a>
                    <a className="ms-1 text-muted" href="#!">
                      😀
                    </a>
                    <a className="ms-3 text-muted" href="#!">
                      🐦
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
