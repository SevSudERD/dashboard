import Header from "../components/basic/Header";
import Profile from "../components/settings/Profile";
import Security from "../components/settings/Security";
 
const SettingsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10  bg-indigo-950">
     <Header title="Settings"/>
     <main className="max-w-4xl mx-auto py-6 px-4 lg:px-8">
      <Profile />
      <Security />

     </main>
      
    </div>
  );
};

export default SettingsPage
