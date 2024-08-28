
import { motion } from "framer-motion";
import Header from "../components/basic/Header";
import SalesOverview from "../components/overview/SalesOverviewChart";
import SalesChannel from "../components/overview/SalesChannelChart";
import CategoryDistribution from "../components/overview/CategoryDistribution";


const OverviewPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10  bg-indigo-950'>
			<Header title='Overview' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				{/* status */}
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					
				</motion.div>

				{/* CHARTS */}

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
					<SalesOverview />
                         <CategoryDistribution />
					<SalesChannel />
				</div>
			</main>
		</div>
	);
};
export default OverviewPage;