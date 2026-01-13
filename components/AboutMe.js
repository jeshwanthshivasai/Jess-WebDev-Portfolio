import React from "react";
import userData from "@constants/data";

export default function AboutMe() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          About Me.
        </h1>
      </div>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-2xl md:text-4xl font-semibold  mx-4"
            style={{ lineHeight: "3rem" }}
          >
            {userData.about.title}. 
            {/* Currently working on{" "}
            <a
              className="bg-red-500 rounded-md px-2 py-1 text-white"
              href={userData.about.currentProjectUrl}
            >
              {userData.about.currentProject} ✈️
            </a> */}
          </p>
        </div>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Buttons */}
          <div className="inline-flex flex-col">
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Contact
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                For any sort help / enquiry, shoot a{" "}
                <a
                  href={`mailto:${userData.email}`}
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  mail
                </a>{" "}
                and I'll get back. I swear.
              </p>
            </div>
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Job Opportunities
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                I'm looking for a job currently, If you see me as a good fit,
                check my{" "}
                <a
                  href={userData.resumeUrl}
                  target="__blank"
                  className="text-red-600 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-red-600"
                >
                  CV
                </a>{" "}
                and I'd love to work for you.
              </p>
            </div>
            {/* Social Links */}
            <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
              Social Links
            </h1>
            <div className="mt-4 ml-4">
              {/* <div className="flex flex-row justify-start items-center ">
                <a
                  href={userData.socialLinks.peerlist}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    Peerlist
                  </div>
                </a>
              </div> */}
              {/* <div className="flex flex-row justify-start items-center ">
                <a
                  href={userData.socialLinks.facebook}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    Facebook
                  </div>
                </a>
              </div> */}
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.github}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-green-500 font-mono relative overflow-hidden dark:text-green-300">
                    <div className="absolute h-0.5 w-full bg-green-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    GitHub
                  </div>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.linkedin}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-blue-500 font-mono relative overflow-hidden dark:text-blue-300">
                    <div className="absolute h-0.5 w-full bg-blue-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    LinkedIn
                  </div>
                </a>
              </div>

              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.youtube}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-red-500 font-mono relative overflow-hidden dark:text-red-300">
                    <div className="absolute h-0.5 w-full bg-red-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    YouTube
                  </div>
                </a>
              </div>

              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.instagram}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-amber-500 font-mono relative overflow-hidden dark:text-amber-300">
                    <div className="absolute h-0.5 w-full bg-amber-400 bottom-0 transform -translate-x-28 group-hover:translate-x-0 transition duration-300"></div>
                    Instagram
                  </div>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.twitter}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-bluegrey-500 font-mono relative overflow-hidden dark:text-grey-300">
                    <div className="absolute h-0.5 w-full bg-bluegrey-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    Twitter
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* Text area */}
          <div className="col-span-1 md:col-span-2">
            {userData.about.description?.map((desc, idx) => (
              <p
                key={idx}
                className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
              >
                {desc}
              </p>
            ))}
            <br></br><br></br>
            <h1 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
              Tech Stack
            </h1>
            <div className="flex flex-row flex-wrap mt-8">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1024px-Adobe_Photoshop_CC_icon.svg.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/512px-Adobe_Premiere_Pro_CC_icon.svg.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/512px-Adobe_After_Effects_CC_icon.svg.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/512px-Adobe_Illustrator_CC_icon.svg.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Adobe_Photoshop_Lightroom_CC_logo.svg/640px-Adobe_Photoshop_Lightroom_CC_logo.svg.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                className="h-20 w-20 mx-4 my-4"
              />
              {/* <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"
                className="h-20 w-20 mx-4 my-4"
              /> */}
              <img
                src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/free-sass-logo-icon-download-in-svg-png-gif-file-formats--brand-development-tools-pack-logos-icons-226054.png?"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/ant-design-2.svg"
                className="h-20 w-20 mx-4 my-4"
              />
              {/* <img
                src="https://static-00.iconduck.com/assets.00/postgresql-icon-1987x2048-v2fkmdaw.png"
                className="h-20 w-20 mx-4 my-4"
              /> */}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Visual_Studio_Code_0.10.1_icon.png"
                className="h-20 w-20 mx-4 my-4"
              />          
              <img
                src="https://static.macupdate.com/products/11662/l/eclipse-ide-logo.png?v=1617819161"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/2078px-Vitejs-logo.svg.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Github-desktop-logo-symbol.svg/2048px-Github-desktop-logo-symbol.svg.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://d33wubrfki0l68.cloudfront.net/7c8561d6a2795e512d1f3165ed7edd9405419968/ad392/img/symbol/svg/full_colored_light.svg"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://www.svgrepo.com/show/374118/tailwind.svg"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/bootstrap-5-logo-icon.png"
                className="h-20 w-20 mx-4 my-4"
              />
              {/* <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Logo_D3.svg/800px-Logo_D3.svg.png"
                className="h-20 w-20 mx-4 my-4"
              /> */}
              {/* <img
                src="https://static-00.iconduck.com/assets.00/jquery-original-wordmark-icon-1939x2048-155digcc.png"
                className="h-20 w-20 mx-4 my-4"
              /> */}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Virtualbox_logo.png"
                className="h-20 w-20 mx-4 my-4"
              />
              {/* <img
                src="https://cdn.pixabay.com/photo/2017/01/31/15/33/linux-2025130_640.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://www.scoringnotes.com/wp-content/uploads/2024/09/mac-os-sequoia-thumb.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Windows_logo_-_2012.svg/1024px-Windows_logo_-_2012.svg.png"
                className="h-20 w-20 mx-4 my-4"
              /> */}
              {/* <img
                src="https://cdn.worldvectorlogo.com/logos/office-2.svg"
                className="h-20 w-20 mx-4 my-4"
              /> */}
              {/* <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Adobe_Creative_Cloud_rainbow_icon.svg/2101px-Adobe_Creative_Cloud_rainbow_icon.svg.png"
                className="h-20 w-20 mx-4 my-4"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


