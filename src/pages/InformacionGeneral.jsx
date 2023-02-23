import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import origen from '/src/assets/origen.webp'
const InformacionGeneral = ()=>{
    return(
        <div>
            <h1>Informacion general</h1>
            <Card sx={{ maxWidth: 345 }} style={{marginLeft:'60px'}}>
      <CardMedia
        sx={{ height: 140 }}
        image={origen}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eaque dignissimos, voluptatibus nostrum, natus consectetur unde facere magnam, culpa quia numquam autem deserunt praesentium odit temporibus voluptates suscipit tempora repellat.
          Eos tenetur beatae voluptatem hic quidem accusamus commodi neque perferendis, eum quasi. Doloremque numquam exercitationem voluptate autem laborum ea temporibus, earum consectetur id, rerum quidem. Aspernatur animi iusto dolorum vitae?
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  
        </div>
    )
}

export default InformacionGeneral;