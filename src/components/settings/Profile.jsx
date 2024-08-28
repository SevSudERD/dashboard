import { User } from "lucide-react";
import SettingSection from "./SettingSection";

const Profile = () => {
	return (
		<SettingSection icon={User} title={"Profile"}>
			<div className='flex flex-col sm:flex-row items-center mb-6'>
				<img
					src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXjx8qiNEWFlsfhsiisyvNvZsuBZ3xpMebbzVc2okwhkNEDOPSqmz7H3xUV16Nq0PXXSI&usqp=CAU'
					alt='Profile'
					className='rounded-full w-20 h-20 object-cover mr-4'
				/>

				<div>
					<h3 className='text-lg font-semibold text-gray-100'>sude</h3>
					<p className='text-gray-400'>example@gmail.com</p>
				</div>
			</div>

			<button className='bg-purple-800 hover:bg-purple-950 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto'>
				Edit Profile
			</button>
		</SettingSection>
	);
};
export default Profile;