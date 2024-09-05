
import './App.css';
// import Insrtuction from './componunts/leftSide/Insrtuction';
import Insrtuction from './componunts/letSide/Insrtuction';
// import BoxA from './componunts/rightSide/BoxA';
import BoxCombine from './componunts/rightSide/BoxCombine';

function App() {
  return (
    <div className="flex justify-between gap-10 p-5 bg-[#171717] ">
     <Insrtuction/>
     {/* <BoxA/> */}
     <BoxCombine/>
    </div>
  );
}

export default App;
