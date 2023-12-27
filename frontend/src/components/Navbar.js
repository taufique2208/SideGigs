import { useEffect, useState } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../context/authContext'
// import { BASE_URL } from '../utils/config'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
const dropdownNavs = [
    {
        label: "Products", navs: [
            {
                title: "Graphics & Designing",
                path: "javascript:void(0)",
            },
            {
                title: "Reports",
                path: "javascript:void(0)",
        

                
            },
        ]
    }, {
        label: "Resources", navs: [
            {
                title: "Programming & Tech",
                path: "javascript:void(0)",
                
            },
            {
                title: "Digital Marketing",
                path: "javascript:void(0)",
                
            },
        ]
    }, {
        label: "", navs: [
            {
                title: "Video & Animation",
                path: "javascript:void(0)",
               
            },
            {
                title: "Musics & Audio",
                path: "javascript:void(0)",
            },
        ]
    }
]

export default () => {
    const headerRef=useRef(null);
    const navigate=useNavigate();
    const {user,dispatch} = useContext(AuthContext)
    console.log(user);
    // console.log(user,'78')

    const logout = ()=>{
        dispatch({type:'LOGOUT'})
        
localStorage.removeItem('user');

        navigate('/')
    }

    const [state, setState] = useState(false)
    const [drapdownState, setDrapdownState] = useState({ isActive: false, idx: null })

    // Replace javascript:void(0) paths with your paths
    const navigation = [
        { title: "Projects", path: '/projects', isDrapdown: false, navs: dropdownNavs },
        // { title: "Messages", path: '/inbox', isDrapdown: false },
        { title: "My Projects", path: '/dashboard', isDrapdown: false },
        { title: "Resume Builder", path: '/dresume-builder', isDrapdown: false },
        { title: "Ask AI", path: '/ask-ai', isDrapdown: false },
        { title: "Learn", path: '/courses', isDrapdown: false },
    ]

    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target;
            if (!target.closest(".nav-menu")) setDrapdownState({ isActive: false, idx: null });
        };
    }, [])

    return (
        <>
            <nav className={`relative z-20 bg-white w-full md:static md:text-sm md:border-none ${state ? "shadow-lg rounded-b-xl md:shadow-none" : ""}`}>
                <div className="items-center gap-x-14 px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href="/home">
                        <div class="container">
  <div class="row">
    <div class="col-md-12 text-center">
      <h3 class="animate-charcter"> SIDEGIGS</h3>
    </div>
  </div>
</div>
                            
                        </a>
                        <div className="md:hidden">
                            <button className="text-gray-500 hover:text-gray-800"
                                onClick={() => setState(!state)}
                            >
                                {
                                    state ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                                        </svg>

                                    )
                                }
                            </button>
                        </div>
                    </div>
                    <div className={`nav-menu flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                        <ul className="items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                            {
                                navigation.map((item, idx) => {
                                    return (
                                        <li key={idx}>
                                            {
                                                item.isDrapdown ? (
                                                    <button className="w-full flex items-center justify-between gap-1 "
                                                        onClick={() => setDrapdownState({ idx, isActive: !drapdownState.isActive })}
                                                    >
                                                        <span className='gradient-background'>{item.title}</span>
                                                        {
                                                            drapdownState.idx == idx && drapdownState.isActive ? (
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                                    <path fillRule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clipRule="evenodd" />
                                                                </svg>

                                                            ) : (
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                                                </svg>
                                                            )
                                                        }
                                                    </button>
                                                ) : (
                                                    <a href={item.path} className="">
                                                       <span className='gradient-background'> {item.title}</span>
                                                    </a>
                                                )
                                            }
                                            {
                                                item.isDrapdown && drapdownState.idx == idx && drapdownState.isActive ? (
                                                    <div className="mt-6 inset-x-0 top-20 w-full md:absolute md:border-y md:shadow-md md:mt-0">
                                                        <ul className='max-w-screen-xl mx-auto grid items-center gap-6 md:p-8 md:grid-cols-2 lg:grid-cols-3'>
                                                            {item?.navs.map((dropdownItem, idx) => (
                                                                <li key={idx}>
                                                                    <p className="">{dropdownItem.label}</p>
                                                                    <ul className='mt-5 space-y-6'>
                                                                        {dropdownItem.navs.map((navItem, idx) => (
                                                                            <li key={idx} className="group">
                                                                                <NavLink to={navItem.path} className='flex gap-3 items-center'>
                                                                                    <div className='w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center duration-150 group-hover:bg-indigo-600 group-hover:text-white md:w-14 md:h-14'>
                                                                                        {navItem.icon}
                                                                                    </div>
                                                                                    <div>
                                                                                        <span className="">{navItem.title}</span>
                                                                                        <p className=''>{navItem.desc}</p>
                                                                                    </div>
                                                                                </NavLink>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ) : ""
                                            }
                                        </li>
                                    )
                                })
                            }
                            {user?<>
                                <div className='flex-1 items-center justify-end gap-x-6 space-y-3 md:flex md:space-y-0'>
                                <NavLink to='/newjob' className="block py-3 px-4 font-medium text-center text-white ">
                                    <button class="comic-button">Post Project</button>
                                    </NavLink>
                            <h5 className="block font-medium text-center py-3 px-4">{user.username}</h5>
                            {/* <NavLink to='/dashboard'><div className="btn btn-dark ">My Projects</div></NavLink>
                            <NavLink to='/resume-builder'><div className="btn btn-dark ">Portfolio Maker</div></NavLink> */}
                            <div className="btn btn-dark" onClick={logout} color='red'><ExitToAppIcon color='red'/></div>
                            </div>
                            </>:
                            <div className='flex-1 items-center justify-end gap-x-6 space-y-3 md:flex md:space-y-0'>
                                <li>
                                    <NavLink to='/login' className="block py-3 text-center  border rounded-lg md:border-none">
                                        <span className='gradient-background'>Log in</span>  
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/Register' className="block py-3 px-4 font-medium text-center text-white ">
                                    <button class="comic-button">Sign In</button>
                                    </NavLink>
                                </li>
                            </div>

}
                        </ul>
                    </div>
                </div>
            </nav>
            {
                state ? (
                    <div
                        className="z-10 fixed top-0 w-screen h-screen bg-black/20 backdrop-blur-sm md:hidden"
                        onClick={() => setState(false)}></div>
                ) : ""
            }
        </>
    )
}