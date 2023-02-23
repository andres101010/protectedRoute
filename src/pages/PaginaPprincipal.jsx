import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
const PaginaPrincipal = ({handleLogin, handleLogaut})=>{
    return(
        <div>
            <h1>Pagina Principal</h1>

            <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Enyoi
        </Typography>
        <Typography variant="h5" component="div">
          Challenge VII
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          23/02/2023
        </Typography>
        <Typography variant="body2">
          Logearse para tener acceso a todas las rutas
          <br />
          {'"Ruta protejida: Portafolio"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>{handleLogin()}}>Login</Button>
        <Button size="small" onClick={()=>{handleLogaut()}}>Logaut</Button>
      </CardActions>
    </Card>
        </div>
    )
}

export default PaginaPrincipal;