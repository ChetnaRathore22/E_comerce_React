function Caroseul(){
    return<>
    <div id="video-carousel-example2" className="carousel slide carousel-fade" data-ride="carousel">
    
      <ol className="carousel-indicators">
        <li data-target="#video-carousel-example2" data-slide-to="0" className="active"></li>
        <li data-target="#video-carousel-example2" data-slide-to="1"></li>
        <li data-target="#video-carousel-example2" data-slide-to="2"></li>
      </ol>
     
      <div className="carousel-inner" role="listbox">
     
        <div className="carousel-item active">
         
          <div className="view">
           
            <img src="https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg"  style={{height:"400px",width:"100%"}}/>
            <div className="mask rgba-indigo-light"></div>
          </div>
    
       
          <div className="carousel-caption">
            <div className="animated fadeInDown">
              <h3 className="h3-responsive text-white">Light mask</h3>
            <button className="btn btn-dark">Shop</button>
            </div>
          </div>
        
        </div>
      
        <div className="carousel-item">
         
          <div className="view">
            <img  src="https://m.media-amazon.com/images/I/51ovs76vmtL._SX3000_.jpg" style={{height:"400px",width:"100%"}}/>
            
            <div className="mask rgba-purple-slight"></div>
          </div>
    
       
          <div className="carousel-caption">
            <div className="animated fadeInDown">
              <h3 className="h3-responsive">Super light mask</h3>
              
            </div>
          </div>
         
        </div>
        
        <div className="carousel-item">
         
          <div className="view">
           <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/UNREC/UNrec_3000._CB591865002_.jpg" style={{height:"400px",width:"100%"}} />
          
            <div className="mask rgba-black-strong"></div>
          </div>
    
         
          <div className="carousel-caption">
            <div className="animated fadeInDown">
              <h3 className="h3-responsive">Strong mask</h3>
              <button className="btn btn-dark">Shop</button>
            </div>
          </div>
       
        </div>
      
      </div>
      
      <a className="carousel-control-prev" href="#video-carousel-example2" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#video-carousel-example2" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
     
    </div>
    
  
    </>
}

export default Caroseul;