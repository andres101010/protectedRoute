import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import perfil from '/src/assets/foto_perfil_hombre.jpg'
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
const Portafolio = ()=>{
    return(
        <div>
            <h1>Portafolio</h1>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item>
            <h1>Acerca de mi</h1>
            <img src={perfil} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos distinctio mollitia unde accusantium nulla temporibus explicabo tempora, omnis voluptate dolorum deleniti. Repellendus illo dolor iusto excepturi laboriosam veritatis nemo nisi?
            Fugit non ullam facere recusandae, accusamus excepturi? Possimus eaque, ea iusto et accusantium at placeat rem nisi quis consequatur sit, magni assumenda officia! Voluptas deleniti omnis dolores voluptatibus cupiditate cumque.</p>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <h1>Habilidades</h1>
            <ul>
                <li>Html</li>
                <li>Css3</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Node.js</li>
            </ul>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste accusantium quis maxime harum alias, temporibus, ut repudiandae exercitationem voluptate iure enim, eum ea praesentium expedita possimus porro illo molestiae maiores?</p>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <h2>Intereses personales</h2>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas fugiat enim iure amet, libero totam consequuntur quod? Praesentium, magnam minus? Nihil et quasi aut explicabo fugiat dolores atque, ipsum cumque.
            Quas amet debitis necessitatibus vel eaque! Odit ex, aliquam nisi facere veritatis suscipit a provident sint, mollitia, expedita perferendis fugiat velit iusto impedit earum? Dolorem dolore ex quisquam officiis expedita?
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <h2>Contacto</h2>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore beatae assumenda repellat nisi, eveniet id incidunt repellendus officia neque eaque corrupti error dolorem fuga minus officiis, earum dolor eum atque.
            Autem vel possimus nemo quas molestias error nisi voluptate, quo nam at provident illo rem consequatur aut veritatis nihil illum id modi excepturi ipsam et aperiam ab eveniet? Ab, corporis.
          </Item>
        </Grid>
      </Grid>
    </Box>
        </div>
    )
}

export default Portafolio