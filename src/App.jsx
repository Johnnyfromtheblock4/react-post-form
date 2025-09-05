import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    public: false, // public: "" - invece se uso la select
    body: "",
  });

  const handleChange = (e) => {
    // recupero le proprietà indicate poiche mi servono per valorizzare le proprietà dell'oggetto formData
    // const { value, name } = e.target; // da usare se uso la select
    const { value, name, type, checked } = e.target; // da usare invece se uso la checkbox

    // UTILIZZO DELLA CHECKBOX IN PUBLIC
    const newFormData = {
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    };

    // UTILIZZO DELLA SELECT IN PUBLIC
    // const newFormData = {
    //   ...formData,
    //   [name]: value,
    // };

    setFormData(newFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", formData)
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((err) =>
        console.log("Errore nell'effettuare la chimata ajax" + err)
      );
  };

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <h1>Reac Post Form</h1>
          </div>
          <div className="col-12">
            <form onSubmit={handleSubmit}>
              <div className="row gy-3">
                {/* Autore */}
                <div className="col-12 col-md-4">
                  <label htmlFor="" className="form-label">
                    Autore
                  </label>
                  <input
                    type="text"
                    name="author"
                    value={formData.author}
                    className="form-control"
                    placeholder="Autore"
                    onChange={handleChange}
                  />
                </div>
                {/* Titolo */}
                <div className="col-12 col-md-4">
                  <label htmlFor="" className="form-label">
                    Titolo
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    className="form-control"
                    placeholder="Titolo"
                    onChange={handleChange}
                  />
                </div>
                {/* Pubblico */}
                <div className="col-12 col-md-4">
                  <label htmlFor="" className="form-label">
                    Pubblico
                  </label>
                  <div>
                    <input
                      type="checkbox"
                      name="public"
                      checked={formData.public}
                      className="form-check"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                {/* <div className="col-12 col-md-4">
                  <label htmlFor="" className="form-label">
                    Pubblico
                  </label>
                  <select
                    name="public"
                    id="public"
                    className="form-select"
                    onChange={handleChange}
                    value={formData.public}
                  >
                    <option value="">Seleziona se pubblico o no</option>
                    <option value="yes">SI</option>
                    <option value="no">NO</option>
                  </select>
                </div> */}
                {/* Testo */}
                <div className="col-12">
                  <label htmlFor="" className="form-label">
                    Testo
                  </label>
                  <textarea
                    name="body"
                    id="body"
                    value={formData.body}
                    className="form-control"
                    rows="4"
                    placeholder="Testo"
                    onChange={handleChange}
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
