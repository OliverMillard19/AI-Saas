import React from "react";

const DashboardLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return(
        <div className="h-full relative">
            <div className="hidden h-full md:fex md:flex-col md:fixed md:inset-y-0 z-[80] bg-grey-900">
                <div>
                    hello sidebar
                </div>
            </div>
        </div>
    );
}

export default DashboardLayout;