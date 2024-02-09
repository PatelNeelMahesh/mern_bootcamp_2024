import CourseList from "./components/CourseList";
import CourseDetails from "./components/CourseDetails";
import AddCourse from "./components/AddCourse";
import RateCourse from "./components/RateCourse";
import EditCourse from "./components/EditCourse";
import DeleteCourse from "./components/DeleteCourse";
import Cloudinary from './Cloudinary';
const apiKey = import.meta.env.VITE_REACT_APP_DOMAIN;

function App() {

  return (
    <>
      <div>
        <Cloudinary/>
        {/* <CourseList/>
        <CourseDetails/>
        <AddCourse/>
        <RateCourse/>
        <EditCourse/>
        <DeleteCourse/> */}
      </div>
    </>
  )
}

export default App
