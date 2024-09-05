import { SignOutButton, UserProfile } from "@clerk/nextjs";
import React from "react";
// import { auth, currentUser } from "@clerk/nextjs/server";

export default function Profile() {
    // const { userId } = auth();
    // const { ...current } = await currentUser();

    // console.log(userId);
    // console.log("current", current);

    return (
        <div className="flex flex-col gap-4 items-start mt-4">
            <div className="flex flex-col justify-start items-start w-full mb-2">
                <h1 className="text-2xl font-semibold">Profile</h1>
                <div className="flex items-center mt-6 mb-12">
                    <UserProfile />
                </div>
            </div>
        </div>
    );
}
