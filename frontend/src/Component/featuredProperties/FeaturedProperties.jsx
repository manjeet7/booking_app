import { useDispatch, useSelector } from "react-redux";
import useFetch from "../../Hooks/FetchHook";
import "./FeaturedProperties.css";
import { useEffect } from "react";
import { featurePropertyAction } from "../../Actions/Hotel";

const FeaturedProperties = () => {
  const dispatch = useDispatch();
  const { loading, list } = useSelector((state) => state.featureProperty);
  console.log("data is ", list);

  useEffect(() => {
    dispatch(featurePropertyAction("featured=true&limit=2"));
  }, []);

  return (
    <div className="fp">
      {loading ? (
        "loading"
      ) : (
        <>
          {list.map((item, i) => (
            <div className="fpItem">
              <img
                src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
                alt=""
                className="fpImg"
              />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">{`Starting from ${item.cheapestPrice}`}</span>
              <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
