import './App.css';
import menus from './component/tree/data';
// import Slide from './component/slider/Slide';
// import Star from './component/star-rating/Star';
import Index from './component/tree/index';
function App() {
  return (
    <div>
      {/* <Index/>
      <Star noofStar={10}/> */}
      {/* <Slide url={"https://picsum.photos/v2/list"}page={"1"}  limit={"10"} /> */}
      <Index menus={menus}/>
    </div>
  );
}

export default App;
