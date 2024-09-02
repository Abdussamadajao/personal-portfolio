import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import Layout from '../components/Layout/Layout';

function MyApp({ Component, pageProps, router }) {
	return (
		<ThemeProvider attribute='class'>
			<Layout>
				<Component {...pageProps} key={router.route} />
			</Layout>
		</ThemeProvider>
	);
}

export default MyApp;
