function App() {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <h1>Reac Post Form</h1>
          </div>
          <div className="col-12">
            <form>
              <div className="row gy-3">
                {/* Autore */}
                <div className="col-12 col-md-4">
                  <label htmlFor="" className="form-label">
                    Autore
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Autore"
                  />
                </div>
                {/* Titolo */}
                <div className="col-12 col-md-4">
                  <label htmlFor="" className="form-label">
                    Titolo
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Titolo"
                  />
                </div>
                {/* Pubblico */}
                <div className="col-12 col-md-4">
                  <label htmlFor="" className="form-label">
                    Pubblico
                  </label>
                  <div>
                    <input type="checkbox" className="form-check" />
                  </div>
                </div>
                {/* Testo */}
                <div className="col-12">
                  <label htmlFor="" className="form-label">
                    Testo
                  </label>
                  <textarea
                    name=""
                    id=""
                    className="form-control"
                    rows="4"
                    placeholder="Testo"
                  ></textarea>
                </div>
                {/* Button */}
                <div className="col-12">
                  <button className="btn btn-primary">Salva</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
