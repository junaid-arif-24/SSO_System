import CustomCircularProgress from '../CustomCircularProgress';
import {useRecoilValue} from 'recoil';
import {productsAtom} from '../../store/userAtom';
import {Box, Card, Typography, useMediaQuery} from '@mui/material';

const ProgressCard = () => {
  const products = useRecoilValue(productsAtom);
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <>
      <Card
        sx={{
          height: '400px',
          width: isMobile ? '80%' : '22%',
          borderRadius: '15px',
          marginTop: '1rem',
          border: '1px solid #0000001A',
          boxShadow: '7px 7px 10px 0px #0000001A',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
          paddingTop: '1rem',
        }}>
        <Box>
          <Typography
            variant="body2"
            sx={{
              color: '#000000',
              fontFamily: 'Nunito',
              fontSize: '14px',
              fontWeight: '700',
            }}>
            Your Progress
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              color: '#818181',
              fontFamily: 'Nunito',
              fontSize: '8px',
              fontWeight: '700',
              marginLeft: '10px',
            }}>
            towards XeroCodee
          </Typography>
        </Box>
        <CustomCircularProgress products={products} />
        <Box>
          {products.map(product => {
            return (
              <Box key={product._id}>
                <Typography
                  variant="caption"
                  sx={{
                    fontSize: '8px',
                    fontFamily: 'Nunito',
                    fontWeight: '700',
                    color: '#79797980',
                    marginLeft: '5px',
                  }}>
                  {product.label}
                </Typography>
                <Card
                  sx={{
                    width: '180px',
                    height: '40px',
                    padding: '0.5rem 1rem',
                    borderRadius: '15px',
                    backgroundColor: product.bg,
                    border: `1px solid ${product.bg}`,
                    display: 'flex',
                    boxShadow: '5px 5px 10px 0px #0000001A',
                    justifyContent: 'space-between',
                  }}>
                  <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                    <Typography
                      variant="body1"
                      sx={{fontFamily: 'Nunito', fontWeight: 700}}>
                      {product.name}
                    </Typography>
                  </Box>
                  <Box sx={{display: 'flex', gap: 1}}>
                    <Box
                      sx={{
                        height: '35px',
                        width: '35px',
                        backgroundColor: '#FFFFFF',
                        borderRadius: '10px',
                        p: '0.2rem 0.6rem',
                      }}>
                      <img
                        src={`${product.imgLink}`}
                        height={'35px'}
                        width={'35px'}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 0.5,
                        mt: '5px',
                      }}>
                      <div
                        style={{
                          backgroundColor: '#2423313B',
                          height: '8px',
                          width: '8px',
                          borderRadius: '50%',
                        }}
                      />
                      <div
                        style={{
                          backgroundColor: '#2423313B',
                          height: '8px',
                          width: '8px',
                          borderRadius: '50%',
                        }}
                      />
                      <div
                        style={{
                          backgroundColor: '#2423313B',
                          height: '8px',
                          width: '8px',
                          borderRadius: '50%',
                        }}
                      />
                    </Box>
                  </Box>
                </Card>
              </Box>
            );
          })}
        </Box>
      </Card>
    </>
  );
};

export default ProgressCard;
