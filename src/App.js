
import './App.css';
import Slideshow from './Components/Slideshow';

function App() {
  return (
    <div className="App">
      <Slideshow 
        images= {[
          "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
          "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg",
          "https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=",
          "https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        ]}
        // there needs to be a prop which decides if the movement is automatic or manual
        // autoplay is nothing but time delay between two slides
        // it should be more than 500 otherwise it won't work
        autoplay = {1500}
        // if it is automatic, then you should accept time delay, and direction,
        // "dec" means decreasing order i.e. last image in the array will be shown first and then second last image and so on..
        // "inc" means increasing order normal order....
        direction="inc"


        // there should be a prop (limit) that decides how many images to be shown
        limit={2}


        // width and height of the container also should be given as a prop
        wid="600px"
        heig="250px"
      />
    </div>
  );
}

export default App;
