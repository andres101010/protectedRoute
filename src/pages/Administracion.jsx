import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import admin from '/src/assets/administracion123.jpg'
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
const Administracion = ()=>{
    return(
        <div>
            <h1>Administracion</h1>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>
            <img src={admin} alt="" /> 
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <h2>Estadisticas</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi unde sunt sequi tempore sapiente? Quasi veniam odio itaque, nulla, debitis ea voluptatem error unde cumque quia expedita deserunt corporis laudantium.
            Eaque delectus, exercitationem cupiditate perspiciatis deleniti atque. Sed rem placeat animi quaerat quasi ullam assumenda ipsam quos earum esse, dolor maxime ipsum, dolore consequuntur. Hic eaque inventore rem optio totam.</p>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <h3>Encuesta</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quam voluptates illum quisquam cumque! Eligendi, officia vel! Tempore veniam reiciendis esse itaque est! Labore eius dolorem odio? Inventore, perspiciatis deserunt!
            Optio quia saepe ab, sequi itaque quidem. Quo, voluptatibus! Error et officiis eaque reprehenderit minima ex totam dolorem aliquam illum. Voluptas deserunt, earum culpa quo laudantium ex iste ipsa quae?
            Aliquid nobis labore saepe architecto aut eius asperiores itaque quos consectetur molestiae corporis alias voluptate nam ut distinctio, commodi iusto provident eveniet harum ducimus omnis. Optio qui nostrum earum doloremque?</p>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            <h3>Resumen</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fuga quo ab ipsam, odit deleniti quae perspiciatis nihil in, quasi ea? Facere praesentium quos est atque amet, ipsam tempore vitae?
            Cum velit atque aliquam voluptas optio doloribus numquam facilis. Officiis, architecto totam? Nisi optio debitis eos quia, fugiat error, dicta, amet praesentium id soluta cupiditate ad nam? Ipsa, adipisci minima!
            Ex consequuntur iusto mollitia quos exercitationem debitis dolorem! Amet labore illo repudiandae delectus velit nisi, praesentium at accusantium, quod omnis quisquam reprehenderit ex commodi hic animi optio, unde sunt excepturi?</p>
          </Item>
        </Grid>
      </Grid>
    </Box>
        </div>
    )
}

export default Administracion