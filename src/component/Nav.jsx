import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav=()=>{
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return(
    <div>
         <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Navega Aqui !!!
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link to={"/paginaPrincipal"} onClick={handleClose}>Pagina Principal</Link> <br />
        <Link to={"/usuarios"} onClick={handleClose}>Usuarios</Link> <br />
        <Link to={"/portafolio"} onClick={handleClose}>Portafolio</Link> <br />
        <Link to={"/administracion"} onClick={handleClose}>Administracion</Link> <br />
        <Link to={"/informacionGeneral"} onClick={handleClose}>Informacion General</Link> 
      </Menu>
    </div>
  )
}
export default Nav;