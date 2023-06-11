import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Apart hotel </span>
        <span className="fpCity">Ella</span>
        <span className="fpPrice">Starting from Rs12000</span>
        <div className="fpRating">
          <button>4.0</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/217276615.jpg?k=bf809abf158f5188c60b36065307a3dddca010644da36b7ac55f23d697a0de5f&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Rominrich</span>
        <span className="fpCity">Hikkaduwa</span>
        <span className="fpPrice">Starting from Rs14000</span>
        <div className="fpRating">
          <button>5.0</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/420255135.jpg?k=4aa99c2107d851226f1462df7c74f1411ce25a15af5673dea899c1011a05313c&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Arcadia</span>
        <span className="fpCity">Mirissa</span>
        <span className="fpPrice">Starting from Rs8000</span>
        <div className="fpRating">
          <button>4.0</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/112516884.jpg?k=3c9d9f3562af9b4d4dae3f6ba4724a5f4271ee54f9073d2f81bb3199b9fc82aa&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Cinnamon Grand</span>
        <span className="fpCity">Colombo</span>
        <span className="fpPrice">Starting from Rs45000</span>
        <div className="fpRating">
          <button>4.0</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
