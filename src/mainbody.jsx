"use client";
import { InfiniteMovingCards } from "./components/ui/infinite-moving-cards";
import Footer from "./footer";

const Mainbody = () => {
  const logos = [
    {
      logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 8" width="120" height="24"><circle cx="4" cy="4" r="4" fill="#fc0"/><text x="10" y="6" font-size="5" fill="#fff" font-family="sans-serif">DOT</text></svg>`,
    },
    {
      logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 8" width="120" height="24"><rect width="8" height="8" fill="#00f"/><text x="10" y="6" font-size="5" fill="#fff" font-family="sans-serif">AAVE</text></svg>`,
    },
    {
      logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 8" width="120" height="24"><circle cx="4" cy="4" r="4" fill="#0f0"/><text x="10" y="6" font-size="5" fill="#fff" font-family="sans-serif">USDT</text></svg>`,
    },
    {
      logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 8" width="120" height="24"><rect width="8" height="8" fill="#ff4500"/><text x="10" y="6" font-size="5" fill="#fff" font-family="sans-serif">AVAX</text></svg>`,
    },
    {
      logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 8" width="120" height="24"><circle cx="4" cy="4" r="4" fill="#00bcd4"/><text x="10" y="6" font-size="5" fill="#fff" font-family="sans-serif">SOL</text></svg>`,
    },
    {
      logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 8" width="120" height="24"><rect width="8" height="8" fill="#e91e63"/><text x="10" y="6" font-size="5" fill="#fff" font-family="sans-serif">UNI</text></svg>`,
    },
    {
      logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 8" width="120" height="24"><circle cx="4" cy="4" r="4" fill="#673ab7"/><text x="10" y="6" font-size="5" fill="#fff" font-family="sans-serif">LINK</text></svg>`,
    },
    {
      logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 8" width="120" height="24"><rect width="8" height="8" fill="#ff9800"/><text x="10" y="6" font-size="5" fill="#fff" font-family="sans-serif">ETH</text></svg>`,
    },
    {
      logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 8" width="120" height="24"><circle cx="4" cy="4" r="4" fill="#2196f3"/><text x="10" y="6" font-size="5" fill="#fff" font-family="sans-serif">BTC</text></svg>`,
    },
    {
      logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 8" width="120" height="24"><rect width="8" height="8" fill="#9c27b0"/><text x="10" y="6" font-size="5" fill="#fff" font-family="sans-serif">MATIC</text></svg>`,
    },
  ];
  const quotes = [
    {
      quote:
        "XYZ has played a pivotal role in driving USDT’s growth within the DeFi ecosystem. By providing stability and liquidity, USDT bridges traditional finance and crypto, forming a strong foundation when integrated with XYZ.",
      name: "Paolo Ardoino, CEO",
    },
    {
      quote:
        "Through XYZ’s protocol, we’ve seen how decentralized liquidity can transform market accessibility and transparency.",
      name: "Stani Kulechov, Founder of XYZ",
    },
    {
      quote:
        "XYZ’s innovation in DeFi continues to shape the way institutions and individuals interact with crypto liquidity pools.",
      name: "Christine Lagarde, Financial Analyst",
    },
  ];

  return (
    <>
      <div className="lg:px-50 md:px-25 px-5 mainbody">
        <div className="max-h-screen flex flex-col gap-5 py-15 mt-10">
          <div className="md:text-sm text-[0.6rem] px-5 py-1 rounded-full bg-[#1111113c] flex gap-3 items-center w-fit">
            <span className="">The Horizon RWA market is live on XYZ</span>
            <a href="http://aave.com/">
              <span className=" text-gray-500 flex gap-2 items-center">
                &#8226; Learn more &#8594;
              </span>
            </a>
          </div>
          <div className="flex flex-col gap-8">
            <span className="md:text-6xl text-4xl font-bold">
              XYZ's largest lending network.
            </span>
            <span className="md:text-xl text-lg text-gray-500 font-[500]">
              Earn, borrow, save, and swap with millions of users.
            </span>
            <span className="py-1 px-5 rounded-full border w-fit flex items-center">
              Get Started &#8594;
            </span>
            <span className="text-md text-gray-500">
              &#8226; $61.58 billion deposits currently supplied in XYZ.
            </span>
          </div>
          <div className="flex items-end justify-center">
            <img
              src="/public/Screenshot__113_-removebg-preview.png"
              alt=""
              className="w-full lg:-translate-y-30 md:-translate-y-20 -translate-y-5 -z-10"
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-5 py-15">
          <div className="md:w-1/2 w-full rounded-lg  flex items-center">
            <span className="lg:text-4xl text-3xl font-medium">
              Be the first to hear XYZ ecosystem news.
            </span>
          </div>
          <div className="md:w-1/2 w-full rounded-xl px-5 py-10 flex flex-col gap-3 bg-[#11111121]">
            <span className="text-gray-700">Email &#8226; </span>
            <div className="flex gap-0 w-full ">
              <input
                type="text"
                className="w-7/10 py-3 px-5 rounded-l-full bg-[#11111144] "
              />
              <span className="w-3/10  py- bg-[#111111d0] text-white rounded-r-full flex justify-center items-center font-bold">
                SignUp &#8594;
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-15 py-15">
          <span className="lg:text-4xl text-3xl font-[600] md:w-7/10">
            {" "}
            Trusted by the best.{" "}
            <span className="text-gray-500">
              XYZ is used by leading institutions and companies.
            </span>
          </span>
          <div className="w-full">
            <InfiniteMovingCards items={quotes} direction="left" speed="slow" />
          </div>
        </div>
        <div class="w-full py-15 flex md:flex-row flex-col items-center justify-center">
          <div className="flex flex-wrap gap-3  w-full items-center justify-center">
            <img
              src="https://kaanch.com/Image/partner/aveai.png"
              className=" w-30 py-3 px-5 rounded-md bg-gray-700"
              alt=""
            />
            <img
              src="https://kaanch.com/Image/partner/daostarter.png"
              className=" w-30 py-3 px-5 rounded-md bg-gray-700"
              alt=""
            />
            <img
              src="https://kaanch.com/Image/partner/digibuy.png"
              className=" w-30 py-3 px-5 rounded-md bg-gray-700"
              alt=""
            />
            <img
              src="https://kaanch.com/Image/partner/dimai.png"
              className=" w-30 py-3 px-5 rounded-md bg-gray-700"
              alt=""
            />
            <img
              src="https://kaanch.com/Image/partner/daostarter.png"
              className=" w-30 py-3 px-5 rounded-md bg-gray-700"
              alt=""
            />
            <img
              src="https://kaanch.com/Image/partner/digibuy.png"
              className=" w-30 py-3 px-5 rounded-md bg-gray-700"
              alt=""
            />
          </div>
          <img src="/public/vlogger.gif" className="rounded-xl w-30" alt="" />
          <div className="flex flex-wrap gap-3 w-full items-center justify-center">
            <img
              src="https://kaanch.com/Image/partner/aveai.png"
              className=" w-30 py-3 px-5 rounded-md bg-gray-700"
              alt=""
            />
            <img
              src="https://kaanch.com/Image/partner/daostarter.png"
              className=" w-30 py-3 px-5 rounded-md bg-gray-700"
              alt=""
            />
            <img
              src="https://kaanch.com/Image/partner/digibuy.png"
              className=" w-30 py-3 px-5 rounded-md bg-gray-700"
              alt=""
            />
            <img
              src="https://kaanch.com/Image/partner/daostarter.png"
              className=" w-30 py-3 px-5 rounded-md bg-gray-700"
              alt=""
            />
            <img
              src="https://kaanch.com/Image/partner/digibuy.png"
              className=" w-30 py-3 px-5 rounded-md bg-gray-700"
              alt=""
            />
            <img
              src="https://kaanch.com/Image/partner/dimai.png"
              className=" w-30 py-3 px-5 rounded-md bg-gray-700"
              alt=""
            />
          </div>
        </div>
        <div className="w-full py-15 flex flex-col gap-10">
          <span className="lg:text-4xl text-3xl font-semibold">Your money Your Choise!</span>

          <div class=" flex flex-col items-center justify-center gap-10">
            <div className="flex md:flex-row flex-col gap-10">
              <div className="relative lg:h-70 h-50 lg:w-100 w-60 rounded-xl overflow-hidden">
                <img src="/public/p1.png" alt="" className="w-full" />
                <div className="absolute bottom-5 left-5 flex flex-col gap-2">
                  <span className="text-lg font-bold">Earn</span>
                  <span className="text-md">
                    Earn interest lending out assets.
                  </span>
                </div>
              </div>
              <div className="relative lg:h-70 h-50 lg:w-100 w-60 rounded-xl overflow-hidden">
                <img src="/public/p2.png" alt="" className="w-full" />
                <div className="absolute bottom-5 left-5 flex flex-col gap-2">
                  <span className="text-lg font-bold">Swap</span>
                  <span className="text-md">
                    Swap assets, even those borrowed or supplied.
                  </span>
                </div>
              </div>
            </div>
            <div className="flex md:flex-row flex-col gap-10">
              <div className="relative lg:h-70 h-50 lg:w-100 w-60 rounded-xl overflow-hidden">
                <img src="/public/p3.png" alt="" className="w-full" />
                <div className="absolute bottom-5 left-5 flex flex-col gap-2">
                  <span className="text-lg font-bold">Save</span>
                  <span className="text-md">
                    Save and earn yield with Aave's native stablecoin GHO.
                  </span>
                </div>
              </div>
              <div className="relative lg:h-70 h-50 lg:w-100 w-60 rounded-xl overflow-hidden">
                <img src="/public/p4.png" alt="" className="w-full" />
                <div className="absolute bottom-5 left-5 flex flex-col gap-2">
                  <span className="text-lg font-bold">Health Factor</span>
                  <span className="text-md">Easily track your loans.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Mainbody;
