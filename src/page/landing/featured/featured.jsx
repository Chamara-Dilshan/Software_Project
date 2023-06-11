import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/423613542.jpg?k=64ca26019686cfb9daa80438147e4bd7be035cc5ea1d6c63dad49013851a07b3&o=&hp=1"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
         <div className = "hotel1"> <h1>Ella</h1> 
          <h2>properties</h2></div>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/202700144.jpg?k=ac3ae06230ef2b28592e7160652bf872335a5e0c8d5883c848a5e7e06fa815ee&o=&hp=1"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Mirissa</h1>
          <h2>properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/297835501.jpg?k=2e4f96934b7b67f86dae46cb12ce5d4d033b399703ceadd63b66baab6a6aec3e&o=&hp=1"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Thalpe</h1>
          <h2>properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/156672332.jpg?k=b4f3d04cbc8b0c80193f63046e63e576ba1a50fc9f48289aa152f10a026aab4d&o=&hp=1"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Colombo</h1>
          <h2>properties</h2>
        </div>
      </div>
      
     
    </div>
  );
};

export default Featured;
