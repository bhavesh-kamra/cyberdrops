import React, { useState } from "react";
import { Container } from "react-bootstrap";
import pagelogo from "../assets/images/png/pagelogo.png";
import cross from "../assets/images/png/cross.png";

const MyNav = () => {
  const [first, setfirst] = useState(true);
  if (first) {
    document.body.classList.remove("overflow-hidden")
  }
  else {
    document.body.classList.add("overflow-hidden");
  }
    return (
      <section className=" bg-black">
        <Container>
          <nav className=" d-flex align-items-center justify-content-between ">
            <a href="">
              <img src={pagelogo} alt="pagelogo" />
            </a>
            {/* <input id="navshow" className=" d-none" type="checkbox" />
          <label className=" d-lg-none" for="navshow"> */}
            <div
              className=" d-flex flex-column d-lg-none"
              onClick={() => {
                setfirst(false);
              }}
            >
              <span className="navlines "></span>
              <span className="navlines  mt-2"></span>
              <span className="navlines  mt-2"></span>
            </div>
            {/* </label> */}
            <ul
              className={
                first
                  ? "d-flex gap-4 align-items-center navmenu leftminus100"
                  : "d-flex gap-4 align-items-center navmenu left0"
              }
            >
              <li>
                <a className=" text-white fs_xsm navli ff_lato_400" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className=" text-white fs_xsm navli ff_lato_400" href="#">
                  About
                </a>
              </li>
              <li>
                <a className=" text-white fs_xsm navli ff_lato_400" href="#">
                  Team
                </a>
              </li>
              <li>
                <a className=" text-white fs_xsm navli ff_lato_400" href="#">
                  Roadmap
                </a>
              </li>
              <li>
                <a className=" text-white fs_xsm navli ff_lato_400" href="#">
                  Partners
                </a>
              </li>

              <li className=" d-flex gap-3">
                <a
                  className="image_circular_border justify-content-center align-items-center d-flex  text-center navimg img_transition"
                  href="#"
                >
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.375 0C4.19844 0 0 4.19844 0 9.375C0 14.5516 4.19844 18.75 9.375 18.75C14.5516 18.75 18.75 14.5516 18.75 9.375C18.75 4.19844 14.5539 0 9.375 0ZM4.625 9.68984L4.66484 9.62656L7.10469 5.81094C7.11286 5.79839 7.12425 5.78828 7.13767 5.78164C7.15109 5.775 7.16604 5.77209 7.18097 5.77321C7.1959 5.77433 7.21025 5.77943 7.22253 5.78799C7.23481 5.79655 7.24457 5.80826 7.25078 5.82188C7.65703 6.73516 8.01016 7.87109 7.84453 8.57812C7.77578 8.86875 7.58281 9.2625 7.36484 9.62656C7.33688 9.67982 7.30638 9.7317 7.27344 9.78203C7.26555 9.79326 7.25499 9.80235 7.24272 9.80848C7.23045 9.81462 7.21684 9.81761 7.20313 9.81719H4.69766C4.6827 9.81742 4.66796 9.8136 4.65501 9.80612C4.64205 9.79865 4.63136 9.78781 4.62407 9.77475C4.61678 9.76169 4.61316 9.7469 4.6136 9.73195C4.61404 9.717 4.61852 9.70245 4.62656 9.68984H4.625ZM15.4953 11.0023C15.4955 11.019 15.4908 11.0354 15.4818 11.0494C15.4727 11.0635 15.4598 11.0745 15.4445 11.0813C15.2547 11.1617 14.6086 11.4602 14.3398 11.8328C13.6539 12.7875 13.1305 14.1531 11.9586 14.1531H7.07266C6.66013 14.1525 6.25177 14.0706 5.8709 13.9121C5.49004 13.7536 5.14415 13.5216 4.85299 13.2293C4.56184 12.9371 4.33112 12.5903 4.17404 12.2089C4.01695 11.8274 3.93658 11.4188 3.9375 11.0063V10.95C3.9375 10.9047 3.975 10.8672 4.02187 10.8672H6.74453C6.79922 10.8672 6.83828 10.9164 6.83438 10.9703C6.81406 11.1469 6.84766 11.3289 6.93203 11.4937C7.09297 11.8219 7.42891 12.0266 7.79063 12.0266H9.13906V10.9742H7.80469C7.78905 10.9741 7.77376 10.9696 7.76045 10.9614C7.74715 10.9532 7.73633 10.9415 7.72918 10.9276C7.72203 10.9137 7.7188 10.8981 7.71986 10.8825C7.72091 10.8669 7.7262 10.8519 7.73516 10.8391L7.78437 10.7688C7.90937 10.5883 8.08984 10.3109 8.26953 9.99375C8.39141 9.77969 8.51016 9.55156 8.60547 9.32188C8.62422 9.28125 8.63906 9.23828 8.65625 9.19688C8.68203 9.12344 8.70859 9.05469 8.72734 8.98672C8.74574 8.92909 8.76268 8.87099 8.77813 8.8125C8.82266 8.61719 8.84141 8.41094 8.84141 8.19766C8.84141 8.11328 8.83828 8.025 8.83047 7.94219C8.82656 7.85078 8.81484 7.75859 8.80391 7.66719C8.79517 7.5854 8.78266 7.50407 8.76641 7.42344C8.74538 7.30066 8.71984 7.17871 8.68984 7.05781L8.67891 7.01094C8.65547 6.92656 8.63516 6.84687 8.60859 6.76328C8.5342 6.50657 8.44871 6.2532 8.35234 6.00391C8.31877 5.91013 8.28176 5.81762 8.24141 5.72656C8.18516 5.5875 8.12734 5.46172 8.075 5.34375C8.04896 5.29321 8.02446 5.24188 8.00156 5.18984C7.97615 5.1337 7.94932 5.07822 7.92109 5.02344C7.90234 4.98203 7.87969 4.94219 7.86484 4.90469L7.7 4.60156C7.67734 4.56016 7.71484 4.50938 7.76016 4.52266L8.79141 4.80156H8.79922L8.93437 4.84063L9.08438 4.88281L9.13906 4.89766V4.28594C9.13906 3.98984 9.375 3.75 9.66953 3.75C9.73908 3.74981 9.80795 3.7637 9.87199 3.79082C9.93603 3.81794 9.99393 3.85774 10.0422 3.90781C10.1419 4.00842 10.1981 4.14426 10.1984 4.28594V5.19531L10.3086 5.22578C10.3164 5.22969 10.3258 5.23359 10.3328 5.23906C10.3594 5.25781 10.3984 5.2875 10.4477 5.325C10.4867 5.35469 10.5281 5.39219 10.5766 5.43203C10.7308 5.55772 10.8804 5.68906 11.025 5.82578C11.1922 5.98125 11.3797 6.16328 11.5594 6.36562C11.6102 6.42344 11.6586 6.47969 11.7094 6.54219C11.7578 6.60391 11.8125 6.66406 11.8578 6.72344C11.9195 6.80469 11.9828 6.88906 12.0414 6.97656C12.0672 7.01797 12.0992 7.06094 12.1234 7.10234C12.1984 7.21328 12.2625 7.32734 12.3242 7.44219C12.3508 7.49453 12.3766 7.55234 12.3992 7.60859C12.4688 7.7625 12.5234 7.91797 12.557 8.07578C12.5681 8.10928 12.5757 8.14384 12.5797 8.17891V8.18672C12.5906 8.23125 12.5945 8.28047 12.5984 8.33047C12.6204 8.56138 12.5922 8.79432 12.5156 9.01328C12.4914 9.07891 12.4687 9.14609 12.4391 9.21172C12.3805 9.34453 12.3133 9.47969 12.2328 9.60391C12.2062 9.65078 12.1742 9.69922 12.1445 9.74609C12.1109 9.79531 12.075 9.84219 12.0453 9.88672C12.0024 9.94588 11.9573 10.0035 11.9102 10.0594C11.8687 10.1156 11.8273 10.1719 11.7805 10.2227C11.7172 10.2992 11.6555 10.3711 11.5891 10.4398C11.5516 10.4852 11.5109 10.532 11.4672 10.5727C11.4266 10.6195 11.3828 10.6609 11.3453 10.6984C11.2797 10.7641 11.2281 10.8133 11.1828 10.8562L11.0758 10.9516C11.0609 10.9665 11.0406 10.9749 11.0195 10.975H10.1984V12.0266H11.2313C11.4617 12.0266 11.6813 11.9453 11.8594 11.7937C11.9195 11.7414 12.1836 11.5125 12.4969 11.1672C12.5071 11.1554 12.5208 11.1472 12.5359 11.1437L15.3875 10.318C15.4 10.3143 15.4132 10.3137 15.426 10.316C15.4389 10.3183 15.451 10.3236 15.4614 10.3314C15.4719 10.3392 15.4803 10.3493 15.4862 10.3609C15.4921 10.3726 15.4952 10.3854 15.4953 10.3984V11.0023Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <a
                  className="image_circular_border justify-content-center align-items-center d-flex  text-center navimg img_transition"
                  href="#"
                >
                  <svg
                    width="19"
                    height="15"
                    viewBox="0 0 19 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.1227 1.50938C14.9274 0.970322 13.6461 0.571885 12.3063 0.345322C12.2943 0.343032 12.282 0.344508 12.2709 0.349547C12.2599 0.354586 12.2506 0.362938 12.2445 0.373447C12.0805 0.661729 11.8977 1.03751 11.7695 1.33438C10.3485 1.12207 8.90384 1.12207 7.48282 1.33438C7.34011 1.00537 7.17919 0.68456 7.00079 0.373447C6.99474 0.362809 6.9856 0.354268 6.97457 0.348963C6.96354 0.343659 6.95116 0.341844 6.93907 0.34376C5.60001 0.570322 4.31876 0.96876 3.12267 1.5086C3.11238 1.51292 3.10365 1.52028 3.09767 1.5297C0.666416 5.10392 9.26158e-06 8.58985 0.327353 12.032C0.328264 12.0405 0.330881 12.0486 0.335044 12.056C0.339208 12.0634 0.344831 12.0699 0.351572 12.075C1.77063 13.1082 3.3534 13.8952 5.0336 14.4031C5.04532 14.4067 5.05784 14.4067 5.06955 14.4031C5.08126 14.3995 5.0916 14.3924 5.09923 14.3828C5.46079 13.8993 5.78118 13.3863 6.05704 12.8492C6.06087 12.8419 6.06308 12.8338 6.06351 12.8255C6.06395 12.8173 6.0626 12.809 6.05956 12.8013C6.05653 12.7936 6.05187 12.7866 6.04591 12.7809C6.03995 12.7751 6.03282 12.7707 6.02501 12.768C5.52033 12.5779 5.03133 12.3486 4.56251 12.082C4.55409 12.0772 4.54699 12.0704 4.54185 12.0622C4.53671 12.054 4.5337 12.0446 4.53308 12.0349C4.53246 12.0252 4.53426 12.0155 4.5383 12.0067C4.54235 11.9979 4.54852 11.9902 4.55626 11.9844C4.6547 11.9117 4.75313 11.8359 4.84688 11.7602C4.85532 11.7534 4.86549 11.749 4.87625 11.7476C4.88701 11.7463 4.89794 11.7479 4.90782 11.7524C7.97579 13.1305 11.2984 13.1305 14.3305 11.7524C14.3404 11.7476 14.3514 11.7458 14.3623 11.747C14.3733 11.7483 14.3836 11.7525 14.3922 11.7594C14.4859 11.8359 14.5836 11.9117 14.6828 11.9844C14.6906 11.9901 14.6969 11.9977 14.7011 12.0064C14.7053 12.0152 14.7072 12.0248 14.7067 12.0345C14.7063 12.0441 14.7034 12.0536 14.6984 12.0619C14.6934 12.0702 14.6865 12.0771 14.6781 12.082C14.2109 12.3508 13.725 12.5781 13.2149 12.7672C13.207 12.77 13.1999 12.7745 13.1939 12.7803C13.188 12.7862 13.1833 12.7932 13.1803 12.801C13.1772 12.8087 13.1759 12.817 13.1763 12.8254C13.1768 12.8337 13.179 12.8418 13.1828 12.8492C13.4641 13.3859 13.7859 13.8969 14.1399 14.382C14.1472 14.392 14.1575 14.3994 14.1692 14.4034C14.181 14.4073 14.1936 14.4075 14.2055 14.4039C15.8886 13.8974 17.4739 13.11 18.8945 12.075C18.9015 12.0702 18.9073 12.0639 18.9116 12.0566C18.9159 12.0493 18.9186 12.0412 18.9195 12.0328C19.3102 8.05313 18.2649 4.59532 16.1469 1.53126C16.1417 1.5213 16.1331 1.51354 16.1227 1.50938ZM6.51564 9.93595C5.5922 9.93595 4.83048 9.10079 4.83048 8.07657C4.83048 7.05157 5.57735 6.2172 6.51564 6.2172C7.46095 6.2172 8.21563 7.0586 8.20079 8.07657C8.20079 9.10157 7.45392 9.93595 6.51564 9.93595V9.93595ZM12.7461 9.93595C11.8219 9.93595 11.0609 9.10079 11.0609 8.07657C11.0609 7.05157 11.807 6.2172 12.7461 6.2172C13.6914 6.2172 14.4461 7.0586 14.4313 8.07657C14.4313 9.10157 13.6922 9.93595 12.7461 9.93595V9.93595Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <a
                  className="image_circular_border justify-content-center align-items-center d-flex  text-center navimg img_transition"
                  href="#"
                >
                  <svg
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.9452 2.26141C18.2686 2.56203 17.5417 2.76516 16.7776 2.85697C17.566 2.38392 18.1559 1.63941 18.4371 0.762343C17.6964 1.20352 16.8856 1.51406 16.0402 1.68047C15.4716 1.0718 14.7186 0.668358 13.8979 0.532791C13.0773 0.397223 12.235 0.537111 11.5017 0.930736C10.7685 1.32436 10.1854 1.9497 9.84292 2.70966C9.50046 3.46963 9.41781 4.3217 9.6078 5.13359C8.10682 5.05803 6.63846 4.66685 5.29801 3.98545C3.95756 3.30405 2.77498 2.34766 1.82703 1.17834C1.5029 1.73897 1.31652 2.38897 1.31652 3.08122C1.31616 3.7044 1.46921 4.31804 1.7621 4.86769C2.05499 5.41734 2.47866 5.886 2.99552 6.23209C2.3961 6.21297 1.80991 6.05057 1.28573 5.75841V5.80716C1.28567 6.68119 1.5872 7.52834 2.13915 8.20484C2.69111 8.88134 3.45949 9.34554 4.31393 9.51866C3.75787 9.66955 3.17488 9.69178 2.60899 9.58366C2.85007 10.3357 3.31965 10.9934 3.95201 11.4645C4.58436 11.9357 5.34784 12.1968 6.13554 12.2113C4.79837 13.2638 3.14696 13.8347 1.44698 13.8322C1.14585 13.8323 0.844971 13.8147 0.545898 13.7794C2.27147 14.8919 4.28017 15.4823 6.33164 15.48C13.2762 15.48 17.0725 9.71284 17.0725 4.71109C17.0725 4.54859 17.0685 4.38447 17.0612 4.22197C17.7996 3.68651 18.4371 3.02345 18.9436 2.26384L18.9452 2.26141Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <a
                  className="image_circular_border justify-content-center align-items-center d-flex  text-center navimg img_transition"
                  href="#"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.375 0.890625C6.03296 0.890625 0.890625 6.03296 0.890625 12.375C0.890625 18.717 6.03296 23.8594 12.375 23.8594C18.717 23.8594 23.8594 18.717 23.8594 12.375C23.8594 6.03296 18.717 0.890625 12.375 0.890625ZM18.9375 7.39417L17.8916 8.39648C17.7993 8.4657 17.7557 8.57849 17.7737 8.68872V16.0638C17.7557 16.1766 17.7993 16.2894 17.8916 16.3561L18.917 17.3584V17.5814H13.7695V17.3687L14.8282 16.3407C14.9333 16.2356 14.9333 16.2048 14.9333 16.0485V10.0807L11.9854 17.5558H11.588L8.15808 10.0807V15.0923C8.12732 15.3025 8.20166 15.5153 8.35034 15.6665L9.72949 17.3353V17.5583H5.8125V17.3353L7.19165 15.6665C7.26431 15.5914 7.31839 15.5004 7.34955 15.4007C7.38071 15.301 7.38809 15.1954 7.37109 15.0923V9.29883C7.38904 9.13733 7.32751 8.98096 7.20447 8.87073L5.97913 7.39417V7.17114H9.78589L12.7236 13.6183L15.3102 7.17627H18.9375V7.39417Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </li>
              <button className="bg_cream py-2 px-4 border-0 rounded-3  text-white btn_connect_wallet">
                Connect Wallet
              </button>
              <img
                src={cross}
                alt="cross"
                className="position-absolute cross_pos d-lg-none"
                onClick={() => {
                  setfirst(true);
                }}
              />
            </ul>
          </nav>
        </Container>
      </section>
    );
};

export default MyNav;
