import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import NFTImg from '../../nft.png'

const App = () => {
    return <div>
                <Grid container spacing={3} >
                    <Grid item xs={6} style={{padding: 50, paddingTop: "5%"}}>
                            <Typography variant="h2" gutterBottom>
                                Get your <br />Romance NFT
                            </Typography>
                            <Button 
                            variant="contained" 
                            color="primary"
                            style={{color: "white"}}
                            >
                                Mint NFT
                            </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <img src={NFTImg} style={{width: "80%"}} />
                    </Grid>
                </Grid>
           </div>
}

export default App