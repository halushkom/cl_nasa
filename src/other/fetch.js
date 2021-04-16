import { GET_FETCHED_LIST } from "../redux/action";

export const Fetch = async (rover, camera, sol, dispatch) => {
  let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?&sol=${sol}&camera=${camera}&api_key=m3F2E4i18nyoXclthel1ChrmRCQ1ajagegTSEb5I`;
  try {
    let response = await fetch(url);
    let result = await response.json();
    let { photo } = result;
    dispatch(GET_FETCHED_LIST(photo));
  } catch (error) {
    console.log("You have got error " + error);
  }
};
