import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

interface IBox {
    user: string,
    getRepository: (user?: string) => void
    arrow: boolean
    onClick?: () => void
}

export const BoxComponent = ({user,getRepository, arrow, onClick}: IBox) => {
     const clickGetRepository = (userName: string) => {
        getRepository?.(userName)
    }
    return (
        <Box sx={{ width: '100%', height: '30px', backgroundColor: '#f5f1ed' }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mx: '1em', height: '100%' }} >
                <Typography>{user}</Typography>
                {arrow ? 
                    <KeyboardArrowUpIcon sx={{ cursor: 'pointer' }} onClick={onClick} />
                :
                    <KeyboardArrowDownIcon sx={{ cursor: 'pointer' }} onClick={() => clickGetRepository(user)} />}
                
            </Stack>
        </Box>
    )
}