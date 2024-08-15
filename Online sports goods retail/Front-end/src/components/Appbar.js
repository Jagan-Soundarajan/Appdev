import {Link} from 'react-router-dom';
import './home.css';
export default function Appbar()
{
    return(
        <div>
            <div >
                <div className='homeapp'>
                        <nav className='navbar navbar-expand-lg navbar-light bg-light' style={{display:'flex',justifyContent:'space-around' ,alignItems:'center',height:'10vh',backgroundColor:'black',}}>
                   <div className='htext'> <Link to='/' style={{color:'white',textDecoration:'none'}}><p>ONLINE SPORTS GOODS RETAIL</p></Link></div>
                   
                            <ul className='navbar nav' style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:0,padding:'1rem',gap:'1rem',marginRight:50}}>
                                <li className='nav-item' style={{marginRight:10}}>
                                    <Link to='/' className='nav-link' style={{color:'white',textDecoration:'none'}}>HOME</Link>
                                </li>
                                <li className='nav-item' style={{marginRight:10}}>
                                    <Link to='/blog' className='nav-link' style={{color:'white',textDecoration:'none'}}>BLOG</Link>
                                </li>
                                <li className='nav-item' style={{marginRight:10}}>
                                    <Link  to='/login' className='nav-link' style={{color:'white',textDecoration:'none'}}>LOGIN</Link>
                                </li>
                                <li className='nav-item' style={{marginRight:10}}>
                                    <Link  to='/prof' className='nav-link' style={{color:'white',textDecoration:'none'}}>CART</Link>
                                </li>
                                {/* <li className='nav-item' style={{marginRight:10}}>
                                    <Link to='/register' className='nav-link'>Register</Link>
                                </li> */}
                            </ul>
                            
                        </nav>
                </div>
                
            </div>
        </div>
    );
}