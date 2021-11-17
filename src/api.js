import React, {useState, useEffect, useContext, createContext, useRef} from "react";
import axios from 'axios'
import Videos from "./components/Layout/Videos/Videos";
const {fetchedData} = createContext;

const YoutubeApi = ({API,
   setAPI,
   search,
   setSearch,}) => {
      const [data, setData] = useState([]);

      const getData = async () => {
         const response = await fetch(API);
         setData(await response.json());
       };
       useEffect(() => {
         setAPI(
           `https://youtube.googleapis.com/youtube/v3/search?part=snippet&chart=mostPopular&regionCode=IN&maxResults=50&key=AIzaSyAoUJioByIeFEahylpEWCu5BBZ0xnk3hcM `
         );
         getData();
       }, [API]);

       const prevData = useRef("");

       useEffect(() => {
         prevData.current = data;
       }, [data]);

   return (
      <div>
         <fetchedData.Provider value={data}>
        {/* <Videos/> */}
      </fetchedData.Provider>
      </div>
   )
}

// export default YoutubeApi
export {fetchedData}
