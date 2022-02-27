import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import Img from '../../love.png'

const App = () => {
    return <div>
                <Grid container spacing={3}>
                    <Grid item xs={6} style={{padding: 50, paddingTop: "11%"}}>
                        <Typography variant="h3" gutterBottom>
                            All Done!
                        </Typography>
                        <Typography variant="h5" gutterBottom>
                            Perfect! You and your parnet just won the
                            bonus with your romance NFT!
                        </Typography>
                        <Button 
                        variant="contained" 
                        color="primary"
                        style={{color: "white"}}
                        >
                            Great! Thanks!
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <img src={Img} style={{width: "80%"}} />
                    </Grid>
                </Grid>
           </div>
}

export default App