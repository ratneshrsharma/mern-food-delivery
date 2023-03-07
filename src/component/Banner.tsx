export default function Banner() {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-caption mx-auto" style={{ zIndex: '10' }}>
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>

          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-secondary" type="submit">Search</button>
          </form>
        </div>

        <div className="carousel-item active">
          <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80" className="img-fluid" alt="..."
            style={{ width: '100%', filter: 'brightness(0.5)' }}
          />
        </div>
        <div className="carousel-item">
          <img src="https://images.unsplash.com/photo-1662116765994-1e4200c43589?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=500&q=80" className="img-fluid" alt="..."
            style={{ width: '100%', filter: 'brightness(0.5)' }}
          />
        </div>
        <div className="carousel-item">
          <img src="https://images.unsplash.com/photo-1547104550-386a4a8594bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80" className="img-fluid" alt="..."
            style={{ width: '100%', filter: 'brightness(0.5)' }}
          />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}
