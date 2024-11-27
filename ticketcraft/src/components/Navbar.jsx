import logo from '../images/logo.png';

// mui
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar sx={{ bgcolor: "#fff" }} position="static">
                <Toolbar>
                    <Button color="inherit"><img src={logo} alt="TicketCraft logo" style={{'height': '60px'}}/></Button>
                    <h2 style={{color: 'black'}}>TicketCraft</h2>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;
