import './App.css';
import Slide from './component/slider/Slide';
// import Star from './component/star-rating/Star';
function App() {
  return (
    <div>
      {/* <Index/>
      <Star noofStar={10}/> */}
      <Slide url={"https://picsum.photos/v2/list"}page={"1"}  limit={"10"} />
    </div>
  );
}

export default App;
