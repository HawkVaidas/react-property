
import { useEffect, useState } from "react";
import style from "../styles/Home.module.css";
import Header from "../components/Header/header";
import Main from "../components/Main/main";
import Footer from "../components/Footer/footer"
import axios from 'axios';

const MainPage = () => {
  const [flats, setFlats] = useState();

  const fetchFlats = async () => {
    const fetchedFlats = await axios.get("https://666165aa63e6a0189fe99a3f.mockapi.io/flats");
    setFlats(fetchedFlats.data);
    console.log(fetchedFlats);
  };
  useEffect(() => {
    fetchFlats();
  },[]);

  const links = [
    {link: "#", title: "About"},
    {link: "#", title: "Contacts"},
    {link: "#", title: "Portfolio"},
  ];
  return (
    <> 
    <Header links={links}/>
    <Main flats={flats} setFlats={setFlats}/>
    <Footer/>
    </>
  )
};

export default MainPage;