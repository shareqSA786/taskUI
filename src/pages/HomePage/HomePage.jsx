import './HomePage.css'
import Navbar from '../../components/Navbar/Navbar'

const HomePage=()=>{
  return (
    <>
    <div>
    <Navbar/>
    <div className='container'>
    <div className='details'>
    <div className='title'>EMPLOYEE</div>
    <div className='sub-title'>Transport Management Software</div>
    <div className='list-items'>
    <div className='list-item'>
    <div className="list-item-icon">+</div>
    <div className='list-item-txt'>Multiple Shift Management</div>
    </div>
    <div className='list-item'>
    <div className="list-item-icon">+</div>
    <div className='list-item-txt'>AI</div>
    </div>
    <div className='list-item'>
    <div className="list-item-icon">+</div>
    <div className='list-item-txt'>80+ Reports</div>
    </div>
    </div>
    </div>
    <div className='shadow'></div>
    <div className='image-container'>
    </div>
    </div>
    </div>
    <div className='sub-container'>
    <div className='text-container'>
    <div className='text'>
    Morbi mollis nibh sed ristique tristique. In varius sapien ipsum, ullamcorper finibus tellus consequat et.
    </div>
    <div className='button'>
    Get Started
    </div>
    </div>
    </div>
    </>
  )
}
export default HomePage;