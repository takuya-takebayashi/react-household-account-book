import { Box } from '@mui/material'
import React from 'react'
import MonthlySummary from '../components/MonthlySummary'
import Calendar from '../components/Calendar'
import TransactionMenu from '../components/TransactionMenu'
import TransactionForm from '../components/TransactionForm'

const Home = () => {
    return (
        <Box sx={{ display: "flex" }}>
            {/* 左側のコンテンツ */}
            <Box sx={{ flexGrow: 1 }}>
                <MonthlySummary />
                <Calendar />
            </Box>
            {/* 左側のコンテンツ */}
            <Box>
                <Box>
                    <TransactionMenu />
                    <TransactionForm />
                </Box>
            </Box>
        </Box>
    )
}

export default Home