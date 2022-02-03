import Nav from "./Nav";
import Headinfo from "./Headinfo";

export default function Layout({children}) {
  return (<> 
    <Headinfo></Headinfo>
    <Nav></Nav>
    <div>
        {children}
    </div>
  </>);
}
