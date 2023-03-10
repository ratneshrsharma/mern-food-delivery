export default function Banner() {
  return (
    <div id="carouselExampleFade" className="homeBanner carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-caption bannerCaption mx-auto" style={{ zIndex: '10' }}>
          <h5 className='title'><span>Fast and Delicious,</span> Get Food Quickly!</h5>
          <div className='content'>
            <p>Quickly satisfying, Fast and Delicious is the go-to spot for tasty bites on the fly. No compromise on flavor, always speedy service.</p>
          </div>
         
          <form className="searchForm">
            <input className="form-control me-2" type="search" placeholder="Search for Cuisines..." aria-label="Search" />
            <button className="btn btn-primary" type="submit">Search</button>
          </form>
        </div>

        <div className="carousel-item active">
          <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80" className="img-fluid" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://images.unsplash.com/photo-1662116765994-1e4200c43589?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=500&q=80" className="img-fluid" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://images.unsplash.com/photo-1547104550-386a4a8594bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80" className="img-fluid" alt="..." />
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
