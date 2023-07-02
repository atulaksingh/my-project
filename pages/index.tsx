import Footer from "@/components/Shared/Footer";
import Header from "@/components/Shared/Header";
import Image from "next/image";
import TopCategoriesData from "../data";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <Header />

        <div className="py-20 text-center">
          <div className="text-sm">
            Find Job, Employment, and Career Opportunities
          </div>
          <div className="text-5xl py-2">
            The Eassiest Way to Get Your New Job
          </div>
          <div className="">
            <div className="text-xs">JOB CATEGORIES</div>
            <div className="text-3xl font-medium">Top Categories</div>
            <div className="grid grid-cols-4 mx-20 gap-5">
              {TopCategoriesData.map((item, index) => (
                <Link key={index} href={`/browsejob/${item.id}`}>
                  <div className="parents   py-4 rounded-md cursor-pointer">
                    <div className="text-xl">{item.jobField}</div>
                    <div className="text-sm flex gap-2 justify-center my-3">
                      <div className="bg-white py-0.5 px-1.5 rounded-md text-orange-300">
                        {item.position}
                      </div>
                      <div className="text-gray-400 child">Open Position</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
