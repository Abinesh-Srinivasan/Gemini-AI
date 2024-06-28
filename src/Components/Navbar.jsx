import { useState } from "react";
import Abinesh from "../assets/Abinesh2.png";
const Navbar = ({ sidebarQuestions, questionFromNav }) => {
  const [sidebar, setSidebar] = useState(false);
  const sendQuestionToMainpage = (qn) => questionFromNav(qn);
  return (
    <div className=" flex justify-between p-5 items-center ">
      <div className="flex gap-4 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="white"
          class="w-6 h-6"
          className=" w-7 z-20 lg:w-9"
          onClick={() => setSidebar(!sidebar)}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <p className=" text-xl z-20 lg:text-3xl">
          <a href="https://blog.google/technology/ai/google-gemini-ai">
            Gemini
          </a>
        </p>
      </div>
      <div>
        <a
          href="https://www.instagram.com/a_b_i_n_e_s_h__s?igsh=djB0cGt1YzljaG5t"
          target="__blank"
        >
          <img src={Abinesh} className=" w-8" />
        </a>
      </div>

      {/* Sidebar */}
      <div
        className={`bg-sidebarbg w-80 absolute bottom-0 z-10 top-0 transition-all duration-300 md:w-[40rem] lg:w-[66rem] ${
          sidebar ? "left-0" : "-left-[66rem]"
        }`}
      >
        <div className=" flex flex-col items-start ml-6 mt-20 md:mt-18">
          <p className=" text-white font-semibold lg:text-xl">Recent</p>
          <div
            className=" overflow-y-scroll mt-5 pr-4 w-[17.5rem] h-[25rem] md:h-[7.6rem] md:w-[37rem] lg:w-[63rem] lg:no-scrollbar lg:h-[14rem]"
          >
            <div>
              <ul>
                {sidebarQuestions.map((sidebarQuestion, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      sendQuestionToMainpage(sidebarQuestion);
                      setSidebar(!sidebar);
                    }}
                    className="mb-7 text-lg tracking-wide flex items-center md:mb-3"
                  >
                    <span>
                      <svg
                        width="30px"
                        height="30px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className=" mr-2"
                      >
                        <path
                          d="M3 7.2C3 6.07989 3 5.51984 3.21799 5.09202C3.40973 4.71569 3.71569 4.40973 4.09202 4.21799C4.51984 4 5.0799 4 6.2 4H17.8C18.9201 4 19.4802 4 19.908 4.21799C20.2843 4.40973 20.5903 4.71569 20.782 5.09202C21 5.51984 21 6.0799 21 7.2V20L17.6757 18.3378C17.4237 18.2118 17.2977 18.1488 17.1656 18.1044C17.0484 18.065 16.9277 18.0365 16.8052 18.0193C16.6672 18 16.5263 18 16.2446 18H6.2C5.07989 18 4.51984 18 4.09202 17.782C3.71569 17.5903 3.40973 17.2843 3.21799 16.908C3 16.4802 3 15.9201 3 14.8V7.2Z"
                          stroke="#e9ebed"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                    <span className=" truncate">{sidebarQuestion}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className=" mt-10 flex flex-col gap-5 text-white text-xl font-semibold tracking-wide md:text-lg md:gap-3 md:mt-8">
            <div className=" HELP">
              <a
                href="https://support.google.com/gemini/?hl=en#topic=13194540"
                className="flex gap-2 items-center"
              >
                <svg
                  version="1.1"
                  id="_x32_"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  xml:space="preserve"
                  width="22px"
                  height="22px"
                  fill="#ffffff"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <path
                        class="st0"
                        d="M306.068,156.129c-6.566-5.771-14.205-10.186-22.912-13.244c-8.715-3.051-17.82-4.58-27.326-4.58 c-9.961,0-19.236,1.59-27.834,4.752c-8.605,3.171-16.127,7.638-22.576,13.41c-6.449,5.772-11.539,12.9-15.272,21.384 c-3.736,8.486-5.604,17.937-5.604,28.34h44.131c0-7.915,2.258-14.593,6.785-20.028c4.524-5.426,11.314-8.138,20.369-8.138 c8.598,0,15.328,2.661,20.197,7.974c4.864,5.322,7.297,11.942,7.297,19.856c0,3.854-0.965,7.698-2.887,11.543 c-1.922,3.854-4.242,7.586-6.959,11.197l-21.26,27.232c-4.527,5.884-16.758,22.908-16.758,40.316v10.187h44.129v-7.128 c0-2.938,0.562-5.996,1.699-9.168c1.127-3.162,6.453-10.904,8.268-13.168l21.264-28.243c4.752-6.333,8.705-12.839,11.881-19.518 c3.166-6.67,4.752-14.308,4.752-22.913c0-10.86-1.926-20.478-5.772-28.85C317.832,168.969,312.627,161.892,306.068,156.129z"
                      ></path>{" "}
                      <rect
                        x="234.106"
                        y="328.551"
                        class="st0"
                        width="46.842"
                        height="45.144"
                      ></rect>{" "}
                      <path
                        class="st0"
                        d="M256,0C114.613,0,0,114.615,0,256s114.613,256,256,256c141.383,0,256-114.615,256-256S397.383,0,256,0z M256,448c-105.871,0-192-86.131-192-192S150.129,64,256,64c105.867,0,192,86.131,192,192S361.867,448,256,448z"
                      ></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
                <p>Help</p>
              </a>
            </div>
            <div className=" ACTIVITY -ml-0.5">
              <a
                href="https://support.google.com/gemini/answer/13278892?hl=en&co=GENIE.Platform%3DDesktop"
                className="flex gap-2 items-center"
              >
                <svg
                  width="25px"
                  height="25px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M12 8V12L14.5 14.5"
                      stroke="#ffffff"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
                      stroke="#ffffff"
                      stroke-width="2.5"
                      stroke-linecap="round"
                    ></path>{" "}
                  </g>
                </svg>
                <p>Activity</p>
              </a>
            </div>
            <div className=" DEVELOPER INFO -ml-1">
              <a
                href="https://abineshsrinivasan.netlify.app/"
                target="__blank"
                className="flex gap-1 items-center"
              >
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0.5 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M12 21.5C17.1086 21.5 21.25 17.3586 21.25 12.25C21.25 7.14137 17.1086 3 12 3C6.89137 3 2.75 7.14137 2.75 12.25C2.75 17.3586 6.89137 21.5 12 21.5Z"
                      stroke="#ffffff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M12.9309 8.15005C12.9256 8.39231 12.825 8.62272 12.6509 8.79123C12.4767 8.95974 12.2431 9.05271 12.0008 9.05002C11.8242 9.04413 11.6533 8.98641 11.5093 8.884C11.3652 8.7816 11.2546 8.63903 11.1911 8.47415C11.1275 8.30927 11.1139 8.12932 11.152 7.95675C11.19 7.78419 11.278 7.6267 11.405 7.50381C11.532 7.38093 11.6923 7.29814 11.866 7.26578C12.0397 7.23341 12.2192 7.25289 12.3819 7.32181C12.5446 7.39072 12.6834 7.506 12.781 7.65329C12.8787 7.80057 12.9308 7.97335 12.9309 8.15005ZM11.2909 16.5301V11.1501C11.2882 11.0556 11.3046 10.9615 11.3392 10.8736C11.3738 10.7857 11.4258 10.7057 11.4922 10.6385C11.5585 10.5712 11.6378 10.518 11.7252 10.4822C11.8126 10.4464 11.9064 10.4286 12.0008 10.43C12.094 10.4299 12.1863 10.4487 12.272 10.4853C12.3577 10.5218 12.4352 10.5753 12.4997 10.6426C12.5642 10.7099 12.6143 10.7895 12.6472 10.8767C12.6801 10.9639 12.6949 11.0569 12.6908 11.1501V16.5301C12.6908 16.622 12.6727 16.713 12.6376 16.7979C12.6024 16.8828 12.5508 16.96 12.4858 17.025C12.4208 17.09 12.3437 17.1415 12.2588 17.1767C12.1738 17.2119 12.0828 17.23 11.9909 17.23C11.899 17.23 11.8079 17.2119 11.723 17.1767C11.6381 17.1415 11.5609 17.09 11.4959 17.025C11.4309 16.96 11.3793 16.8828 11.3442 16.7979C11.309 16.713 11.2909 16.622 11.2909 16.5301Z"
                      fill="#ffffff"
                    ></path>{" "}
                  </g>
                </svg>
                <p>Developer Info</p>
              </a>
            </div>
          </div>
          <div className=" LOCATION text-sm text-white mt-8 flex gap-2 items-center ml-1 md:mt-5">
            <div className=" w-3 h-3 bg-white rounded-full"></div>
            <a
              href="https://maps.app.goo.gl/CJTMPYPuahUk1UFLA"
              target="__blank"
            >
              <p>Cuddalore, Tamil Nadu, India.</p>
            </a>
          </div>
          <p className=" text-sm text-copyrightblue ml-6 mt-1 font-bold tracking-wide">
            Copyright &#169; {new Date().getFullYear()} | Gemini - AS
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
