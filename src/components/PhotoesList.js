import React from "react";
//import RenderPhoto from "./card";
import {useSelector} from "react-redux";
import {listSelector} from '../redux/selectors'


/*const mapStateToProps = (state) => {
  return{
    list: listSelector
  }

}*/

const PhotoesList = () => {
  const list = useSelector(listSelector)
  
  return (
    <div className="box">{
      list.map(value => {
          return (
              <div className="card" key={value.id}>
                  <img className="card-image" src={value.img_src} alt="img"  />
              </div>
          )
      })
  }
  </div>
  ); 
};

export default PhotoesList;
