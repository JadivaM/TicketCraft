import Navbar from './Navbar.jsx'
import Button from '@mui/material/Button';

function Home() {
    return (
        <>
            <Navbar />
            <div class="homepage">
                <div class="homepage-text">
                    <p className='bold'>Simplify your project management process</p>
                    <Button href="/board" style={{ width: '50%', margin: 'auto' }} variant="contained">Get started</Button>
                </div>
            </div>
        </>
    );
}

export default Home;
