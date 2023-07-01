import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-[#00224F] text-white text-center py-20">
        <h5 className="text-2xl font-normal">Save time save Jobs!</h5>
        <h1 className="text-gray-400 text-sm">
          Sign up and well send the best deals to you
        </h1>
        <div className="my-2">
          <input className="py-3 px-1 text-black w-96" type="email" />
          <button className="text-xl bg-[#0071C2] py-2.5 px-3 mx-1 ">
            Subscribe
          </button>
        </div>
      </div>
      <div className="bg-white text-[#0071C2]">
        <div className="grid grid-cols-5 py-5 mx-5">
          <div className="mx-auto ">
            <h1 className="text-base text-start pb-5 font-bold">
              Skillhunt Jobboard
            </h1>
            <h1 className="text-sm text-start ">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </h1>
            {/* <h1 className="text-sm text-start ">Cities</h1>
            <h1 className="text-sm text-start ">Districts</h1>
            <h1 className="text-sm text-start ">Airports</h1>
            <h1 className="text-sm text-start ">Hotels</h1>
            <h1 className="text-sm text-start ">Places of interest</h1> */}
          </div>
          <div className="mx-auto ">
            <h1 className="text-base text-start pb-5 font-bold">Employers</h1>
            <h1 className="text-sm text-start ">Browse Candidates</h1>
            <h1 className="text-sm text-start ">Post a Job</h1>
            <h1 className="text-sm text-start ">Employer Listing</h1>
            <h1 className="text-sm text-start ">Resume Page</h1>
          </div>
          <div className="mx-auto ">
            <h1 className="text-base text-start pb-5 font-bold">Candidate</h1>
            <h1 className="text-sm text-start ">Browse Jobs</h1>
            <h1 className="text-sm text-start ">Submit Resume</h1>
            <h1 className="text-sm text-start ">Dashboard</h1>
            <h1 className="text-sm text-start ">Browse Categories</h1>
          </div>
          <div className="mx-auto ">
            <h1 className="text-base text-start pb-5 font-bold">Account</h1>
            <h1 className="text-sm text-start ">My Account</h1>
            <h1 className="text-sm text-start ">Sign In</h1>
            <h1 className="text-sm text-start ">Create Account</h1>
            <h1 className="text-sm text-start ">Checkout</h1>
          </div>
          <div className="mx-auto ">
            <h1 className="text-base text-start pb-5 font-bold">
              Have a Questions?
            </h1>
            <h1 className="text-sm text-start ">
              {" "}
              203 Fake St. Mountain View, San Francisco, California, USA
            </h1>
            <h1 className="text-sm text-start mt-3 "> +2 392 3929 210</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
