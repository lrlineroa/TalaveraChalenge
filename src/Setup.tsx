import { ThemeProvider } from '@shopify/restyle';
// import { NavigationContainer } from '@react-navigation/native';
import theme from './theme';
import { StoreProvider } from 'easy-peasy';
import { store } from "./store/index"
import Navigation from './navigation/Navigation';
const Setup = () => (
    <StoreProvider store={store}>
            <ThemeProvider theme={theme}>
                <Navigation/>
            </ThemeProvider>
    </StoreProvider>
);

export default Setup;