import React from 'react'
import { useRoute } from '@react-navigation/native';
import { Box, Card, Text } from '../../../ui/components';

export default function StockDetailsScreen() {
    const route = useRoute()
    /* 2. Get the param */
    const { stock } = route.params;

    return (
        <Card>
            <Text variant="header">Stocks Details</Text>

            <Box flexDirection="column" justifyContent="space-between" gap='l' marginBottom="s" marginTop="s">
                <Box>
                    <Text variant="bold">
                        Name
                    </Text>
                    <Text>
                        {stock.name}
                    </Text>
                </Box>
                <Box>
                    <Text variant="bold">
                        Symbol
                    </Text>
                    <Text>
                        {stock.symbol}
                    </Text>
                </Box>
                <Box>
                    <Text variant="bold">
                        price
                    </Text>
                    <Text>
                        {stock.price}
                    </Text>
                </Box>
                <Box>
                    <Text variant="bold">
                        Change
                    </Text>
                    <Text>
                        {stock.daily_change}
                    </Text>
                </Box>
            </Box>

        </Card >
    )
}