import Sidebar from "@/components/Sidebar";

const DashboardLayout = ({ children }) => {
    return (
        <div className="flex">
            <Sidebar />
            <div className=" flex-grow">
                {children}
            </div>
        </div>
    );
}

export default DashboardLayout