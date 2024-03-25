import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material'

const ResusableProd = ({handleClick,title}) => {
  return (
   <>
   <Card  sx={{ borderRadius: '10px', background: 'linear-gradient(to left, hsl(0, 19%, 2%), hsl(0, 60%, 30%))', display: 'flex', flexDirection:"column",alignItems: 'center', width: '100%',gap:"22px",marginY:"20px",marginX:"22px" }}>
        <Box>
        <CardContent sx={{ padding: '20px', textAlign: 'center', flexGrow: 1, display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <Box>
          <Typography variant="h1" component="div" sx={{ fontWeight: 'bold', color: 'white', textUnderlineOffset: '2px', marginBottom: '30px', lineHeight: '30px', fontSize: '1.8rem' }}>
            Banking on MiFix
          </Typography>
          <Typography   variant="body1" component="div" sx={{ color: 'white', marginBottom: '20px', fontSize: '0.9rem', maxWidth: '100%' , fontSize:"1.2rem", }}>
            MiFiX connects banks, NBFCs, and other financial institutions seamlessly with customers, business correspondents, DSAs, field officers, branches, and 3rd party partners. <br />
            It facilitates the origination process, complete KYC, underwriting of loans, documentation completion, account opening, payment disbursement, collections management, reporting requirements, and billing and settlement. <br />
            With MiFiX, financial institutions experience proven efficiency gains of over 500%, streamlining operations and enhancing customer experiences. Experience the transformative power of MiFiX in optimizing financial interactions and driving greater efficiency across the financial ecosystem.
          </Typography>
          </Box>
      
          <CardMedia
          component="img"
          src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt={title}
          sx={{ width: '50%', height: '100%', objectFit: 'cover', borderRadius: '10px 0 0 10px' }}
        />
        </CardContent>
        </Box>
        
        <Button onClick={handleClick} variant="contained" sx={{ alignSelf: 'center',marginBottom:"20px" }} >
            Click here for the Demo
          </Button>
      </Card>
      </>
  )
}

export default ResusableProd
