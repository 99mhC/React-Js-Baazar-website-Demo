import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const Home = () => {
  return (
    <>
      <div>
        <div className="imgoheder">
          <img
            className="carlolseimag"
            src="https://cdn.pixabay.com/photo/2017/02/08/02/56/booties-2047596__340.jpg"
            alt="..."
          />
        </div>
        <div className="homecardSection_1">
          <div className="homecard_1">
            <Link to="/women">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/a1adaa79-f742-45a1-9ad6-59fedd33aa421653643704538-QL_Tops_Tees.jpg"
                alt="product img"
              />
            </Link>
          </div>
          <div className="homecard_2">
            <Link to="/pents">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/fcb5c92a-f48b-4959-af1d-a18e05cf4f4e1653643704557-QL_TrackPants.jpg"
                alt="product img"
              />
            </Link>
          </div>
          <div className="homecard_3">
            <Link to="/skincare">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/26176aa9-ebc4-42f6-8977-a468286082521653643704138-QL_-Skincare.jpg"
                alt="product img"
              />
            </Link>
          </div>
          <div className="homecard_4">
            <Link to="/fragrance">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/306481ec-1b07-46a5-81f9-210fa4ee21481653643704251-QL_Fragrances.jpg"
                alt="product img"
              />
            </Link>
          </div>
        </div>

        <div className="homecardSection_1">
          <div className="homecard_1">
            <Link to="/man">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/f54d3d79-4d55-4353-8dda-61be55def9371653371609475-BudgetBuys_Kurtas_Sets.jpg"
                alt="product img"
              />
            </Link>
          </div>
          <div className="homecard_2">
            <Link to="/man">
              {" "}
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/d1b24c63-35f0-4800-8673-e404eff3678c1653371609502-BudgetBuys_Loungewear.jpg"
                alt="product img"
              />
            </Link>
          </div>
          <div className="homecard_3">
            <Link to="/mecup">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/80fc29d1-16f6-4043-82ce-35e4db4ebbf31653371609520-BudgetBuys_Makeup.jpg"
                alt="product img"
              />
            </Link>
          </div>
          <div className="homecard_4">
            <Link to="/man">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/3b16a87f-4bdb-4349-bfd2-25cb3114d8741653371609559-BudgetBuys_Shampoos_Conditioners.jpg"
                alt="product img"
              />
            </Link>
          </div>
        </div>
        <div className="homecardSection_1">
          <div className="homecard_1">
            <Link to="/women">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/5ed1bde8-f82a-427b-a71b-a38ec997c9031653557668365-Forever_21.jpg"
                alt="product img"
              />
            </Link>
          </div>
          <div className="homecard_2">
            <Link to="/girlstop">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/d21dcf05-a081-4f98-be1a-ab1d7f6bac261653557668623-Sassafras.jpg"
                alt="product img"
              />
            </Link>
          </div>
          <div className="homecard_3">
            <Link to="/girlstop">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/336fb662-c6c6-46ef-9738-7beaf8eec6b61653557668660-Street_9.jpg"
                alt="product img"
              />
            </Link>
          </div>
          <div className="homecard_4">
            <Link to="/girlstop">
              {" "}
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/75a972cb-d3c3-42a8-909f-6ff87aa2d4781653557668722-Vero_Moda.jpg"
                alt="product img"
              />
            </Link>
          </div>
        </div>
        <div className="homecardSection_1">
          <div className="homecard_1">
            <Link to="/bra">
              {" "}
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/c901f5f6-1a2f-458d-a515-a8e31be07d571653557793075-M-S_and_Triumph.jpg"
                alt="product img"
              />
            </Link>
          </div>
          <div className="homecard_2">
            <Link to="/bra">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/7e2470d0-bc26-41ac-b740-b03e9ca885691653557793047-Jockey_-_Van_Heusen.jpg"
                alt="product img"
              />
            </Link>
          </div>
          <div className="homecard_3">
            <Link to="/bra">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/ad9a4d2a-2e0e-419b-87c4-7fb9f6fe903b1653557793053-Kanvin_-_Sweet_Dreams.jpg"
                alt="product img"
              />
            </Link>
          </div>
          <div className="homecard_4">
            <Link to="/bra">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/7/fd445a32-1832-4299-96f1-6dea1cb7d9e51654590216319-image_jpeg_487874744.jpg"
                alt="product img"
              />
            </Link>
          </div>
        </div>
        <div className="homecardSection_1">
          <div className="homecard_1">
            <Link to="/shoes">
              {" "}
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/e4d18e71-7924-4587-b006-f2b93b8a97631653557737911-Nike.jpg"
                alt="product img"
              />
            </Link>
          </div>
          <div className="homecard_2">
            <Link to="/shoes">
              {" "}
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/2fab2729-9f60-4336-8406-0e5e9abd4f981653557737944-Skechers__.jpg"
                alt="product img"
              />
            </Link>
          </div>
          <div className="homecard_3">
            <Link to="/shoes">
              {" "}
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/f1f56c46-6eb5-40aa-84d8-01595229f5311653557737848-Crocs.jpg"
                alt="product img"
              />
            </Link>
          </div>
          <div className="homecard_4">
            <Link to="/shoes">
              {" "}
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/5b6d9644-5d68-4bbe-a413-fb375aa526f11653557737917-Puma.jpg"
                alt="product img"
              />
            </Link>
          </div>
        </div>
        <div className="homecardSection_1">
          <div className="homecard_1">
            <Link to="/kids">
              {" "}
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/9f77891a-ee01-43c1-a429-0725fdbba4191653557830704-UTH_-_Roadster.jpg"
                alt="product img"
              />
            </Link>
          </div>
          <div className="homecard_2">
            <Link to="/kids">
              {" "}
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/ffd00197-07fa-4554-be04-24ae327752a21653557830621-Allen_solly_-_USPA.jpg"
                alt="product img"
              />
            </Link>
          </div>
          <div className="homecard_3">
            <Link to="/kids">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/aad601c6-aa4e-4842-a5a0-ee3c0f9db3c71653557830651-M-S.jpg"
                alt="product img"
              />
            </Link>
          </div>
          <div className="homecard_4">
            <Link to="/kids">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/94f21508-0488-4c64-bf3f-2d95a5467ac31653557830671-Mothercare_-_Mini_Klub_1.jpg"
                alt="product img"
              />
            </Link>
          </div>
        </div>
        <div className="homecardSection_1">
          <div className="homecard_1">
            <Link to="/mecup">
              {" "}
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/e6d88126-c27d-4337-980b-a35b1e0872501653558945963-Maybelline.jpg"
                alt="product img"
              />
            </Link>
          </div>
          <div className="homecard_2">
            <Link to="/mecup">
              {" "}
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/7747b639-fccd-4ccf-b54a-562b2861d4681653558945909-L-Oreal_Professionnel.jpg"
                alt="product img"
              />
            </Link>
          </div>
          <div className="homecard_3">
            <Link to="/mecup">
              {" "}
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/28/dfc3e6b0-84f1-44c9-9c6d-05d323ba23ca1653760633284-image_jpeg327693797.jpg"
                alt="product img"
              />
            </Link>
          </div>
          <div className="homecard_4">
            <Link to="/mecup">
              {" "}
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/1c8392af-9b25-4a1d-84f3-ff3e2026cf261653558945946-Mamaearth.jpg"
                alt="product img"
              />
            </Link>
          </div>
        </div>
        <div className="homecardSection_1">
          <div className="homecard_1">
            <Link to="/neckles">
              {" "}
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/3c82c871-9e5c-4e9d-8654-90f1165c9e3e1653558546266-Dressberry-_Mast_-_Harbour.jpg"
                alt="product img"
              />
            </Link>
          </div>
          <div className="homecard_2">
            <Link to="/neckles">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/ccb9e9ec-9e47-452f-8a2e-4714312c5af41653558546297-Giva.jpg"
                alt="product img"
              />
            </Link>
          </div>
          <div className="homecard_3">
            <Link to="/neckles">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/1727b0a7-fae6-40ac-b585-37b7877bc3c51653558546247-All_1.jpg"
                alt="product img"
              />
            </Link>
          </div>
          <div className="homecard_4">
            <Link to="/neckles">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/23be2eb3-6ae1-43b3-8384-0141b4d852391653558546253-All_2.jpg"
                alt="product img"
              />
            </Link>
          </div>
        </div>
        <div className="homecardSection_1">
          <div className="homecard_1">
            <Link to="/furniture">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/bb2cc6d5-2f7b-416e-bcfc-35e10ca4addc1653557869692-.jpg"
                alt="product img"
              />
            </Link>
          </div>
          <div className="homecard_2">
            <Link to="/furniture">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/f47c3381-c46c-44db-a5f1-551e6598b5921653557869699-_1.jpg"
                alt="product img"
              />
            </Link>
          </div>
          <div className="homecard_3">
            <Link to="/furniture">
              {" "}
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/d41f7d0d-11fa-433a-8301-8cf17cf134951653557869706-Cortina.jpg"
                alt="product img"
              />
            </Link>
          </div>
          <div className="homecard_4">
            <Link to="/furniture">
              <img
                src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/464a682a-4896-4975-8e20-2dcc8a76dbd21653557869732-Swiss_Republic_II_Trident.jpg"
                alt="product img"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
