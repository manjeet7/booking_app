import { useDispatch, useSelector } from "react-redux";
import useFetch from "../../Hooks/FetchHook";
import "./Featured.css";
import { useEffect } from "react";
import { featureListAction } from "../../Actions/Hotel";

const Featured = () => {
  const dispatch = useDispatch();
  const { loading, list } = useSelector((state) => state.featureList);
  console.log("data is ", list);
  useEffect(() => {
    dispatch(featureListAction());
  }, []);
  return (
    <div className="featured">
      {loading ? (
        "loading..."
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Dublin</h1>
              <h2>{list[0]}</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Reno</h1>
              <h2>{list[1]}</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Austin</h1>
              <h2>{list[2]}</h2>
            </div>
          </div>
        </>
      )}
      {/* {loading ? "loading" : "hello"} */}
    </div>
  );
};

export default Featured;
