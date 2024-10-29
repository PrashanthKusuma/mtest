"use client";
import React, { use } from "react";
import { useRouter as navRouter } from "next/navigation";

interface MyPageProps{
  params: {
    username: string;
  };
}

export default function Users() {//{ params }: MyPageProps
  //const { userName} = React.use(params);
  // const router = useRouter();
  // const navigationrouter = navRouter();
  // const { userName }: { userName: string } = use(params);
  //{ params }: { params: { userName: string } }
  return (
    <>
      <div className="h-[70px] w-full flex bg-black">
        <span
          className="w-[50px] h-[50px] m-[10px] rounded-full flex justify-center items-center text-white active:bg-gray-500"
          onClick={() => navigationrouter.back()}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.81809 4.18179C8.99383 4.35753 8.99383 4.64245 8.81809 4.81819L6.13629 7.49999L8.81809 10.1818C8.99383 10.3575 8.99383 10.6424 8.81809 10.8182C8.64236 10.9939 8.35743 10.9939 8.1817 10.8182L5.1817 7.81819C5.09731 7.73379 5.0499 7.61933 5.0499 7.49999C5.0499 7.38064 5.09731 7.26618 5.1817 7.18179L8.1817 4.18179C8.35743 4.00605 8.64236 4.00605 8.81809 4.18179Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
        {/* {userName} */}
      </div>
    </>
  );
}
