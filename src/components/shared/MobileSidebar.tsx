import {useRef} from "react";
import {AiOutlineCloseCircle} from "react-icons/ai";
import {Transition} from "@headlessui/react";
import {Link} from "react-router-dom";
import useMobileSidebar from "../../hooks/core/useMobileSidebar";
import {NavLinks} from "../config/Interfaces";
import Accordion from "./Accordion";

interface Props {
  navColor: string;
  textColor: string;
  burgerColor: string;
  hoverColor: string;
  mobileBorderColor: string;
  logo: string;
  buyButtonColor: string;
  navLinks: NavLinks[];
  mobileSidebarHeaderColor: string;
}

function MobileSidebar({
  navColor,
  textColor,
  burgerColor,
  hoverColor,
  logo,
  mobileBorderColor,
  buyButtonColor,
  navLinks,
  mobileSidebarHeaderColor,
}: Props) {
  /* Ref used to handle the function in the hook that handles the closing of the sidebar when clicking outside */

  const sidebarRef = useRef<HTMLDivElement>(null);

  /* Custom Hook that handles the visibility for the MobileSidebar component and the overlay under it */

  const {sidebarOpen, isOverlayOpen, handleToggle} =
    useMobileSidebar(sidebarRef);

  return (
    <div>
      <div>
        <button
          onClick={handleToggle}
          id="burger-menu"
          className="block lg:hidden ml-1"
          title="burgerMenu">
          <svg
            height="38px"
            version="1.1"
            viewBox="0 0 512 512"
            width="38px"
            stroke={`${burgerColor}`}
            fill={`${burgerColor}`}
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink">
            <g>
              <g>
                <path d="M424,394H89c-4.418,0-8-3.582-8-8s3.582-8,8-8h335c4.418,0,8,3.582,8,8S428.418,394,424,394z" />
              </g>
              <g>
                <path d="M424,265H89c-4.418,0-8-3.582-8-8c0-4.418,3.582-8,8-8h335c4.418,0,8,3.582,8,8C432,261.418,428.418,265,424,265z" />
              </g>
              <g>
                <path d="M424,135H89c-4.418,0-8-3.582-8-8s3.582-8,8-8h335c4.418,0,8,3.582,8,8S428.418,135,424,135z" />
              </g>
            </g>
          </svg>
        </button>
      </div>
      <div>
        <div
          className={`absolute top-0 left-0 w-screen ${navColor} bg-opacity-70 z-50 h-[97vh] ${
            !isOverlayOpen ? "hidden" : ""
          }`}></div>
        <div
          ref={sidebarRef}
          className={`absolute top-0 ${sidebarOpen} w-[66vw] z-[100]`}>
          <Transition
            appear={true}
            show={isOverlayOpen}
            enter="transform transition ease-in-out duration-2000"
            enterFrom="-translate-x-2/3"
            enterTo="translate-x-0"
            leave="ease-in-out duration-2000"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div
              className={`absolute flex justify-between items-center top-0 left-0 w-[66vw] ${mobileSidebarHeaderColor} z-[100] h-14`}>
              <img className="ml-3 h-6 w-12 lg:ml-12" src={`${logo}`} alt="" />
              <AiOutlineCloseCircle
                onClick={handleToggle}
                id="cross"
                className={`w-[38px] h-[38px] cursor-pointer mr-3 ${textColor}`}
              />
            </div>
            <div
              className={`${textColor} absolute h-[88.6vh] w-[66vw] py-3 px-5 top-0 mt-14 z-50 flex flex-col gap-3 overflow-scroll align-center ${navColor}`}>
              {navLinks.map((section) => {
                if (!section.subsections) {
                  return (
                    <Link
                      className={`h-9 pb-2 text-lg flex justify-start items-center border-b border-1 border-solid border-[${burgerColor}]`}
                      to={`${section.mainLink}`}>
                      {section.main}
                    </Link>
                  );
                } else {
                  return (
                    <div>
                      <Accordion
                        title={section.main}
                        burgerColor={burgerColor}
                        hoverColor={hoverColor}
                        mobileBorderColor={mobileBorderColor}
                        navColor={navColor}>
                        {section.subsections.map((subsection) => {
                          if (!subsection.title) {
                            return (
                              <div className="flex flex-col gap-2 mt-2 px-2">
                                {subsection.subTitles.map((subtitle) => {
                                  return (
                                    <Link
                                      className={`pb-1 border-b text-base flex items-center h-9 border-1 border-solid border-[${burgerColor}]`}
                                      to={subtitle.link}>
                                      {subtitle.title}
                                    </Link>
                                  );
                                })}
                              </div>
                            );
                          } else {
                            return (
                              <div className="px-2 py-1">
                                <Accordion
                                  title={subsection.title}
                                  burgerColor={burgerColor}
                                  mobileBorderColor={mobileBorderColor}
                                  hoverColor={hoverColor}
                                  navColor={navColor}>
                                  {subsection.subTitles.map((subtitle) => {
                                    return (
                                      <div className="px-2">
                                        <Link
                                          className={`pb-1 my-1 text-base border-b flex items-center h-9 border-1 border-solid border-[${burgerColor}]`}
                                          to={subtitle.link}>
                                          {subtitle.title}
                                        </Link>
                                      </div>
                                    );
                                  })}
                                </Accordion>
                              </div>
                            );
                          }
                        })}
                      </Accordion>
                    </div>
                  );
                }
              })}
              <button
                title="spacer"
                className={`h-24 cursor-default flex-1`}></button>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  );
}

export default MobileSidebar;
