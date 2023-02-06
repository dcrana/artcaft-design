import { useState } from "react";
import Banner from "./components/banner/Banner";
import CustomArt from "./components/customart/CustomArt";
import HandPainting from "./components/handpainting/HandPainting";
import Header from "./components/header/Header";
import Introduction from "./components/introduction/Introduction";
import Menuopen from "./components/menuopen/Menuopen";
import PrintArt from "./components/printart/PrintArt";

const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div style={{
        position:'fixed',
        display:'flex',
        flexDirection:'column',
        left:'40px',
        top:"50%"
      }}>
          <a href="#banner" style={{width:'0px',height:'30px',border:"solid 3px #fff",marginTop:'10px'}}></a>
          <a href="#introduction" style={{width:'0px',height:'30px',border:"solid 3px #fff",marginTop:'10px'}}></a>
          <a href="#handpainting" style={{width:'0px',height:'30px',border:"solid 3px #fff",marginTop:'10px'}}></a>
          <a href="#paintart" style={{width:'0px',height:'30px',border:"solid 3px #fff",marginTop:'10px'}}></a>
          <a href="#customart" style={{width:'0px',height:'30px',border:"solid 3px #fff",marginTop:'10px'}}></a>
      </div>
      <Header open={open} setOpen={setOpen} />
      <Menuopen open={open} setOpen={setOpen} />
      <Banner />
      <Introduction/>
      <HandPainting/>
      <PrintArt/>
      <CustomArt/>
    </>
  )
}
export default App;