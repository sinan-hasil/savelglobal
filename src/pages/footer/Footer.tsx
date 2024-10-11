import { Container, Nav } from "react-bootstrap"
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import gamLogo from "../../images/gamino-logo.png";
import logo from "../../icons/logopng.png";
import "./footer.css"

const Footer = () => {
  
  return (
    <footer className="bg-dark py-4">
        <Container>
          <img src={logo} width={150} />

          <div className="d-flex gap-3 mt-5">
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.625 4.8125C2.625 12.3028 8.69714 18.375 16.1875 18.375C16.5254 18.375 16.8605 18.3627 17.1923 18.3383C17.573 18.3104 17.7633 18.2965 17.9366 18.1968C18.0801 18.1142 18.2162 17.9677 18.2881 17.8185C18.375 17.6384 18.375 17.4283 18.375 17.0082V14.5431C18.375 14.1898 18.375 14.0131 18.3168 13.8617C18.2655 13.728 18.1821 13.6089 18.0739 13.5149C17.9515 13.4085 17.7854 13.3481 17.4534 13.2274L14.6475 12.207C14.2612 12.0666 14.068 11.9963 13.8848 12.0082C13.7231 12.0187 13.5677 12.0739 13.4355 12.1676C13.2857 12.2737 13.18 12.4499 12.9685 12.8025L12.25 14C9.93134 12.9499 8.05166 11.0678 7 8.75L8.19755 8.03147C8.55002 7.81999 8.72625 7.71424 8.83242 7.56443C8.92605 7.43232 8.98126 7.27682 8.99176 7.11524C9.00366 6.93199 8.9334 6.73884 8.79296 6.35254L7.77262 3.54656C7.65187 3.21454 7.59151 3.04853 7.48512 2.92609C7.39113 2.81793 7.27203 2.73451 7.13827 2.68314C6.98684 2.625 6.81019 2.625 6.4569 2.625H3.99176C3.57164 2.625 3.36158 2.625 3.18148 2.71184C3.03231 2.78378 2.88587 2.91988 2.80324 3.0634C2.70347 3.23669 2.68953 3.42704 2.66165 3.80776C2.63736 4.1395 2.625 4.47456 2.625 4.8125Z"
                stroke="white"
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="text-white">0262 658 00 70</p>
          </div>

          <div className="w-100 d-flex justify-content-between mt-2 footer-location">
            <div className="d-flex gap-3 location-icon">
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_11_670)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.5018 -0.00012207L0.306274 10.1954L1.17034 11.057L10.5018 1.72556L19.8332 11.057L20.6961 10.1954L10.5018 -0.00012207ZM17.214 11.2364V19.7794H13.5515V13.6773H7.45057V19.7794H3.78927V11.2364H2.56761V20.9999H18.4345V11.2364H17.214ZM12.3323 14.8977V19.7807H8.671V14.8977H12.3323ZM10.5014 7.57523C11.1751 7.57523 11.7218 8.12199 11.7218 8.79566C11.7218 9.46935 11.1751 10.0161 10.5014 10.0161C9.82773 10.0161 9.28097 9.46934 9.28097 8.79566C9.28097 8.12199 9.82774 7.57523 10.5014 7.57523ZM12.9423 8.79566C12.9423 7.44953 11.8475 6.35479 10.5014 6.35479C9.15527 6.35479 8.06055 7.44953 8.06055 8.79566C8.06055 10.1418 9.15528 11.2365 10.5014 11.2365C11.8475 11.2365 12.9423 10.1418 12.9423 8.79566Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_11_670">
                    <rect width="21" height="21" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className="text-white">
                Sepetlipınar Mah. D-130 Karayolu Cad. No:110 Başiskele / Kocaeli
                41275
              </p>
            </div>
            <Nav.Link href="https://www.gamino.tech/">
              <img src={gamLogo} width={110} height={30} />
            </Nav.Link>
          </div>

          <div className="d-flex justify-content-between mt-2 footer-mail">
            <div className="d-flex gap-3">
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.5 3.5C18.9498 3.5 20.125 4.67526 20.125 6.125V14.875C20.125 16.3248 18.9498 17.5 17.5 17.5H3.5C2.05026 17.5 0.875 16.3248 0.875 14.875V6.125C0.875 4.67526 2.05026 3.5 3.5 3.5H17.5ZM16.8463 5.25H4.15378L9.95785 9.83211C10.2757 10.0831 10.7243 10.0831 11.0422 9.83211L16.8463 5.25ZM2.625 6.2727V14.875C2.625 15.3583 3.01675 15.75 3.5 15.75H17.5C17.9833 15.75 18.375 15.3583 18.375 14.875V6.27272L12.1265 11.2057C11.1729 11.9586 9.82712 11.9586 8.87346 11.2057L2.625 6.2727Z"
                  fill="white"
                />
              </svg>
              <p className="text-white">info@savel.com.tr</p>
            </div>
            <p className="text-white">2024©Tüm Hakları Saklıdır</p>
            <div className="text-white d-flex gap-3 contact-icon">
              <FaXTwitter />
              <FaInstagram />
              <FaLinkedinIn />
              <FaFacebookF />
            </div>
          </div>
          <div className="footer-bottom-logo d-flex justify-content-center align-items-center d-md-none d-sm-block">
            <img src={logo} width={100} className="mt-1" height={20} />
            <img src={gamLogo} width={110} height={30} />
          </div>
        </Container>
      </footer>
  )
}

export default Footer