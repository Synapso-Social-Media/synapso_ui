import { Box, Divider, Typography, useTheme } from '@mui/material'
import FlexBetween from '../styles/FlexBetween'
import WidgetWrapper from '../styles/WidgetWrapper'
import UserImage from './UserImage'
import { LocationOnOutlined, ManageAccountsOutlined, WorkOutlineOutlined } from '@mui/icons-material'

export default function UserWidget() {
  /* Theme configuration */
  const { palette } = useTheme() as any
  const dark = palette.neutral.dark
  const medium = palette.neutral.medium
  const main = palette.neutral.main

  return (
    <WidgetWrapper>
      {/* First row */}
      <FlexBetween gap='.5rem' pb='1.1rem'>
        <FlexBetween gap='1rem'>
          <UserImage />
          <Box>
            <Typography
              variant='h4'
              fontWeight='700'
              color={dark}
              sx={{
                '&:hover': {
                  color: palette.primary.light,
                  cursor: 'pointer'
                }
              }}
            >
              Fiantso Harena
            </Typography>
            <Typography color={medium}>69 friends</Typography>
          </Box>
        </FlexBetween>
        <ManageAccountsOutlined />
      </FlexBetween>

      <Divider />

      {/* Second row */}
      <Box p='1rem 0'>
        <Box display='flex' alignItems='center' gap='1rem' mb='.5rem'>
          <LocationOnOutlined fontSize='medium' sx={{ color: main }} />
          <Typography color={medium}>Antananarivo Madagascar</Typography>
        </Box>
        <Box display='flex' alignItems='center' gap='1rem' mb='.5rem'>
          <WorkOutlineOutlined fontSize='medium' sx={{ color: main }} />
          <Typography color={medium}>Je ne travaille pas je suis une princesse</Typography>
        </Box>
      </Box>

      <Divider />

      {/* Third rows */}
      <Box p='1rem 0'>
        <FlexBetween mb='.5rem'>
          <Typography color={medium}>Profile viewed : </Typography>
          <Typography color={main} fontWeight='500'>
            69
          </Typography>
        </FlexBetween>
        <FlexBetween>
          <Typography color={medium}>Post impressions : </Typography>
          <Typography color={main} fontWeight='500'>
            69k
          </Typography>
        </FlexBetween>
      </Box>
    </WidgetWrapper>
  )
}
