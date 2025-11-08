import React, { useEffect, useState } from "react";

const Blog = () => {
  const [sidebar, setSidebar] = useState(false);
  useEffect(() => {
    if (sidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sidebar]);

  const blog = {
    title: "Blog Home",
    sections: [
      { name: "Releases and Announcements", link: "#" },
      { name: "Understand Bittensor", link: "#" },
      { name: "Wallets and Keys", link: "#" },
      { name: "Staking/Delegation", link: "#" },
      { name: "Mining", link: "#" },
      { name: "Validating", link: "#" },
      { name: "Liquidity Positions ", link: "#" },
      { name: "Managing Subnets", link: "#" },
      { name: "BTCLI: The Bittensor CLI", link: "#" },
      { name: "Bittensor Python SDK", link: "#" },
    ],
  };

  return (
    <>
      <div className="blog mt-20 min-h-[90vh]  flex flex-row gap-10 ">
        <div className="md:max-w-[30%] h-screen hidden md:flex flex-col fixed border-r border-gray-300 bg-white">
          {/* Title */}
          <div className="px-10 py-6 border-b border-gray-200">
            <span className="text-lg font-semibold">{blog.title}</span>
          </div>

          {/* Scrollable section */}
          <ul className="flex flex-col gap-3 overflow-y-auto px-10 py-5 flex-1 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
            {blog.sections.map((item, index) => (
              <a key={index} href={item.link}>
                <li className="border-b border-dotted pb-2 border-gray-400 lg:whitespace-nowrap hover:text-blue-600 transition-colors">
                  {item.name}
                </li>
              </a>
            ))}
          </ul>
        </div>

        <div
          className={`absolute md:hidden w-full min-h-screen bg-white  transform transition-all duration-500 ${
            sidebar ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between  px-10 pb-10">
            <span className="text-lg font-semibold  ">{blog.title}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-x-circle-fill"
              viewBox="0 0 16 16"
              onClick={() => setSidebar(false)}
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
            </svg>
          </div>
          <ul className="flex flex-col gap-3 ">
            {blog.sections.map((item) => (
              <a href={item.link}>
                <li className="border-b border-dotted pb-2 px-10 border-gray-400 whitespace-nowrap ">
                  {item.name}
                </li>
              </a>
            ))}
          </ul>
        </div>
        <div className="w-full flex flex-col gap-5 px-10 md:px-3 md:ml-[30%]">
          <div className="flex gap-3 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-filter-left md:hidden"
              viewBox="0 0 16 16"
              onClick={() => setSidebar(true)}
            >
              <path d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              class="bi bi-house-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
              <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" />
            </svg>
            <span>/</span>
            <span>Blog Home</span>
          </div>

          <span className="text-xl">Releases and Announcements</span>
          <span className="text-[.8rem] font-[200] pb-10">
            Written by Const, core dev @ Jhon Doe
          </span>
          <div className="flex flex-col gap-5 text-justify md:pr-10">
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
              recusandae nam minima reprehenderit, aliquam accusantium laborum
              cumque consequuntur voluptatum animi possimus facilis ullam ad
              earum numquam! Beatae, est. Culpa, ab!
            </span>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consectetur neque aspernatur sunt reprehenderit provident alias a
              et? Error ea rerum, totam laboriosam provident ratione commodi
              deleniti hic quidem excepturi consequatur?Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Ad quo accusamus enim ex.
              Distinctio sit quidem velit consequuntur placeat ea est obcaecati,
              mollitia numquam eum omnis minima porro unde temporibus.Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Quam asperiores
              debitis odit vel omnis natus quis repellat at exercitationem
              assumenda autem tempora nobis nesciunt accusantium adipisci,
              perspiciatis animi soluta dolor!
            </span>
            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusamus, doloribus itaque qui, temporibus illo explicabo error
              reprehenderit, quis recusandae laboriosam quibusdam impedit
              tempora quos sint eos eum consequuntur deserunt id. Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Ducimus non, dolor
              quia harum quisquam omnis possimus reiciendis. Harum possimus
              similique vitae dicta, quidem error neque hic, iusto distinctio
              repellat eius!
            </span>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consectetur neque aspernatur sunt reprehenderit provident alias a
              et? Error ea rerum, totam laboriosam provident ratione commodi
              deleniti hic quidem excepturi consequatur?Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Ad quo accusamus enim ex.
              Distinctio sit quidem velit consequuntur placeat ea est obcaecati,
              mollitia numquam eum omnis minima porro unde temporibus.Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Quam asperiores
              debitis odit vel omnis natus quis repellat at exercitationem
              assumenda autem tempora nobis nesciunt accusantium adipisci,
              perspiciatis animi soluta dolor!
            </span>
            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusamus, doloribus itaque qui, temporibus illo explicabo error
              reprehenderit, quis recusandae laboriosam quibusdam impedit
              tempora quos sint eos eum consequuntur deserunt id. Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Ducimus non, dolor
              quia harum quisquam omnis possimus reiciendis. Harum possimus
              similique vitae dicta, quidem error neque hic, iusto distinctio
              repellat eius!
            </span>
          </div>
          <div className="w-full flex flex-row items-center justify-between px-5  md:mr-10 bg-gray-900 h-30 text-white">
        <img src="/public/logo.png" className="lg:h-25 h-10" alt="" />
        <span>&#169;2025 XYZ.com</span>
      </div>
        </div>
        
      </div>
      
    </>
  );
};

export default Blog;
