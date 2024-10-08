import { ReactNode } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from '../Home/Header';
import Siderbar from '../SideBar/Sidebar';

type ILayoutProps = {
	children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
	return (
		<div className='grid grid-cols-12 gap-6 px-12 my-12 lg:px-32 sm:px-20 md:px-28 '>
			<div className='col-span-12 p-4 text-center bg-white shadow-custom-light dark:shadow-custom-dark dark:bg-dark-500 lg:col-span-3 rounded-2xl'>
				<Siderbar />
			</div>
			<div className='flex flex-col col-span-12 overflow-hidden bg-white shadow-custom-light dark:shadow-custom-dark dark:bg-dark-500 lg:col-span-9 rounded-2xl'>
				<Header />
				<AnimatePresence exitBeforeEnter>{children}</AnimatePresence>
			</div>
		</div>
	);
};

export default Layout;
