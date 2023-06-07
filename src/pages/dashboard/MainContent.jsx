import { useOutletContext } from "react-router-dom";
import AllUsers from "./users/all-users/AllUsers";
import AddUser from "./users/add-user/AddUser";
import EditUser from "./users/edit-user/EditUser";
import Dispatch from "./dispatcher/dispatch/Dispatch";
import PartsDispatch from "./dispatcher/parts-dispatch/PartsDispatch";
import Inbound from "./inbound/inbound/Inbound";
import InboundApproval from "./inbound/inbound-approval/InboundApproval";
import InboundApproved from "./inbound/inbound-approved/InboundApproved";
import DomesticMachine from "./machine-outbound/domestic-machine/DomesticMachine";
import ExportMachine from "./machine-outbound/export-machine/ExportMachine";
import ManualMachineBill from "./machine-outbound/manual-machine-bill/ManualMachineBill";
import DomesticParts from "./parts-outbound/domestic-parts/DomesticParts";
import ExportParts from "./parts-outbound/export-parts/ExportParts";
import TransporterCharges from "./parts-outbound/transporter-charges/TransporterCharges";
import DeliveryPartner from "./parts-outbound/delivery-partner/DeliveryPartner";
import MyProfile from "./my-profile/MyProfile";

const MainContent = () => {
    const [outletContext] = useOutletContext();
    return (
        <div className="ms-5 me-4">
            {outletContext.activeTab === 0 && <AllUsers />}
            {outletContext.activeTab === 1 && <AddUser />}
            {outletContext.activeTab === 2 && <Dispatch />}
            {outletContext.activeTab === 3 && <PartsDispatch />}
            {outletContext.activeTab === 4 && <Inbound />}
            {outletContext.activeTab === 5 && <InboundApproval />}
            {outletContext.activeTab === 6 && <InboundApproved />}
            {outletContext.activeTab === 7 && <DomesticMachine />}
            {outletContext.activeTab === 8 && <ExportMachine />}
            {outletContext.activeTab === 9 && <ManualMachineBill />}
            {outletContext.activeTab === 10 && <DomesticParts />}
            {outletContext.activeTab === 11 && <ExportParts />}
            {outletContext.activeTab === 12 && <TransporterCharges />}
            {outletContext.activeTab === 13 && <DeliveryPartner />}

            {outletContext.activeTab === 998 && <EditUser />}
            {outletContext.activeTab === 999 && <MyProfile />}
        </div>
    );
};

export default MainContent;
