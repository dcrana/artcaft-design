import { useState } from "react";
import Banner from "./components/banner/Banner";
import CustomArt from "./components/customart/CustomArt";
import HandPainting from "./components/handpainting/HandPainting";
import Header from "./components/header/Header";
import Introduction from "./components/introduction/Introduction";
import Link from "./components/links/Links";
import Menuopen from "./components/menuopen/Menuopen";
import PrintArt from "./components/printart/PrintArt";

const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Link />
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
