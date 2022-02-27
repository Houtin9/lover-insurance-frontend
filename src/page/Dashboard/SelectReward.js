import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import money from '../../money.png'
import flower from '../../flower.jpg'

const App = () => {
    return <div>
                <Grid container spacing={3} style={{padding: 40, marginTop: 40, background:"white"}}>
                    <Grid item xs={6}>
                        <Typography variant="h6" gutterBottom>
                            Option 1
                        </Typography>
                        <Typography variant="h4" gutterBottom>
                            Transfer your 25$ bonus to your wallet
                        </Typography>
                        <Button variant="contained" color="primary" style={{color: "white"}}>
                            Transfer
                        </Button>
                    </Grid>
                    <Grid item xs={6} style={{textAlign: "right"}}>
                        <img src={money} style={{ width: 200, height:200, objectFit: "cover"}} />
                    </Grid>
                </Grid>
                <Grid container spacing={3} style={{padding: 40, marginTop: 40, background:"white"}}>
                    <Grid item xs={6}>
                        <Typography variant="h6" gutterBottom>
                            Option 2
                        </Typography>
                        <Typography variant="h4" gutterBottom>
                            Deliver flower to your home
                        </Typography>
                        <Button 
                            variant="contained" 
                            color="primary"
                            style={{color: "white"}}
                        >
                            Deliver
                        </Button>
                    </Grid>
                    <Grid item xs={6} style={{textAlign: "right"}}>
                        <img 
                            src={flower} 
                            style={{ width: 100, height:200, objectFit: "center"}} 
                        />
                    </Grid>
                </Grid>
           </div>
}

export default App