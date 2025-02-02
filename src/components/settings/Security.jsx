
import { Lock } from "lucide-react";
import SettingSection from "./SettingSection";
import ToggleSwitch from "./ToggleSwitch";
import { useState } from "react";

const Security = () => {
     const [twoFactor, setTwoFactor] = useState(false);

  return (
     <SettingSection icon={Lock} title={"Security"}>
          <ToggleSwitch label={"two factor authentication"} isOn={twoFactor} onToggle={() => setTwoFactor(!twoFactor)} 
               />
               <div className="mt-4">
               <button
					className='bg-purple-800 hover:bg-purple-950 text-white font-bold py-2 px-4 rounded 
        transition duration-200
        '
				>
					Change Password
				</button>
			</div>
		</SettingSection>
	);
};
export default Security;