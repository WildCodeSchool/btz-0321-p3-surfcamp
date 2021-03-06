import Images from "next/image";

export default function Footer(): JSX.Element {
  return (
    <div className="w-full bg-BlueCamp text-white flex flex-col">
      <div className="w-full flex justify-center p-4">
        <Images
          src="/Images/logoSC.svg"
          width={150}
          height={100}
          alt="Logo SurfCamp"
        />
      </div>
      <div className="flex flex-col md:flex-row w-full text-center md:text-left">
        <div className="w-full md:w-1/2 flex flex-col px-11 pb-11">
          <h3 className="mb-6 text-lg font-bold">Un guide expert et avéré</h3>

          <p className="w-full text-sm">
            Nos articles camps de surf sont reconnus par la communauté pour
            apporter de réels conseils aux surfeurs désireux de voir le monde et
            de s’essayer à l’expérience surf à l’étranger. Notre support est
            totalement gratuit et ne vise qu’à vous aider au mieux dans la
            préparation de vos surf trips en France et à l’étranger. Dans ce
            souci, nous nous plions en quatre pour vous apporter toutes les
            réponses à vos questions, et vous permettre de passer les meilleurs
            séjours surf possibles ! Aloha !
          </p>
        </div>
        <div className="border border-white w-36 h-0 md:w-0 md:h-36 md:my-auto mx-auto mb-11     "></div>
        <div className="flex flex-col w-full md:w-1/2 text-sm md:text-base px-2 pb-4 md:px-11 md:pb-11 justify-between">
          <div className="flex w-full justify-between md-justify-around">
            <div className="flex flex-col text-center  w-1/3">
              <h3 className="mb-6 text-lg font-bold text-center ">Société</h3>
              <a className="pb-2 text-sm" href="/login">
                Qui sommes nous ?
              </a>
              <a className="pb-2 text-sm" href="/login">
                Mentions légales
              </a>
              <a className="pb-2 text-sm" href="/login">
                Confidentialité
              </a>
            </div>
            <div className="flex flex-col text-center">
              <h3 className="text-lg font-bold text-center ">
                Réseaux sociaux
              </h3>
              <div className="flex flex-col md:flex-row justify-around md:justify-around items-center h-full">
                <div className="w-full h-full flex flex-col md:flex-row justify-around items-center ">
                  <a href="/login">
                    <svg
                      width="35"
                      height="35"
                      viewBox="0 0 35 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 17.211C0 25.7203 6.16892 32.7961 14.2371 34.231V21.8693H9.96594V17.1155H14.2371V13.3116C14.2371 9.03269 16.9891 6.65649 20.8815 6.65649C22.1144 6.65649 23.4442 6.84619 24.6771 7.03589V11.4103H22.4946C20.406 11.4103 19.9319 12.4558 19.9319 13.7879V17.1155H24.4877L23.7289 21.8693H19.9319V34.231C28 32.7961 34.1689 25.7217 34.1689 17.211C34.1689 7.74475 26.4809 0 17.0845 0C7.68801 0 0 7.74475 0 17.211Z"
                        fill="#F4F4F4"
                      />
                    </svg>
                  </a>
                  <a href="/login">
                    <svg
                      width="35"
                      height="35"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.2043 0.134174C10.8743 0.0571545 11.4068 0.0400391 15.6608 0.0400391C19.9149 0.0400391 20.4473 0.0585808 22.1159 0.134174C23.7845 0.209768 24.9235 0.476484 25.9201 0.863009C26.9637 1.25809 27.9104 1.87568 28.6935 2.6744C29.4908 3.45743 30.1058 4.40449 30.4988 5.45139C30.886 6.44979 31.1508 7.59083 31.2277 9.25959C31.3046 10.9355 31.3217 11.4689 31.3217 15.7292C31.3217 19.991 31.3031 20.5244 31.2277 22.1975C31.1522 23.8662 30.886 25.0073 30.4988 26.0057C30.1058 27.0527 29.4897 28.0013 28.6935 28.7855C27.9104 29.5842 26.9637 30.2004 25.9201 30.5941C24.9235 30.982 23.7845 31.2473 22.1188 31.3243C20.4473 31.4013 19.9149 31.4185 15.6608 31.4185C11.4068 31.4185 10.8743 31.3999 9.2043 31.3243C7.53855 31.2487 6.39958 30.982 5.40299 30.5941C4.35787 30.2004 3.41096 29.5832 2.62817 28.7855C1.83143 28.002 1.21487 27.0538 0.821482 26.0071C0.435656 25.0087 0.170845 23.8677 0.0939649 22.1989C0.0170845 20.523 0 19.9896 0 15.7292C0 11.4675 0.0185082 10.9341 0.0939649 9.26244C0.169422 7.59083 0.435656 6.44979 0.821482 5.45139C1.21546 4.40461 1.83249 3.45645 2.6296 2.67297C3.41127 1.87496 4.35723 1.2573 5.40156 0.863009C6.39816 0.476484 7.53713 0.211194 9.20287 0.134174H9.2043ZM21.9892 2.95823C20.3377 2.88264 19.8423 2.86695 15.6608 2.86695C11.4794 2.86695 10.9839 2.88264 9.33243 2.95823C7.80479 3.02812 6.97619 3.28343 6.42379 3.4988C5.69342 3.78405 5.17092 4.12209 4.62279 4.67121C4.1032 5.17762 3.70333 5.7941 3.4525 6.47547C3.23752 7.02887 2.98268 7.85897 2.91291 9.38938C2.83746 11.0439 2.8218 11.5402 2.8218 15.7292C2.8218 19.9183 2.83746 20.4146 2.91291 22.0691C2.98268 23.5995 3.23752 24.4296 3.4525 24.983C3.70307 25.6634 4.10314 26.281 4.62279 26.7873C5.12821 27.3079 5.74468 27.7087 6.42379 27.9597C6.97619 28.1751 7.80479 28.4304 9.33243 28.5003C10.9839 28.5759 11.478 28.5915 15.6608 28.5915C19.8437 28.5915 20.3377 28.5759 21.9892 28.5003C23.5169 28.4304 24.3455 28.1751 24.8979 27.9597C25.6282 27.6744 26.1507 27.3364 26.6989 26.7873C27.2185 26.281 27.6186 25.6634 27.8692 24.983C28.0841 24.4296 28.339 23.5995 28.4087 22.0691C28.4842 20.4146 28.4999 19.9183 28.4999 15.7292C28.4999 11.5402 28.4842 11.0439 28.4087 9.38938C28.339 7.85897 28.0841 7.02887 27.8692 6.47547C27.5844 5.74378 27.247 5.22033 26.6989 4.67121C26.1933 4.15071 25.578 3.75012 24.8979 3.4988C24.3455 3.28343 23.5169 3.02812 21.9892 2.95823ZM13.6605 20.5658C14.7776 21.0317 16.0216 21.0946 17.1798 20.7437C18.3381 20.3928 19.3388 19.65 20.0111 18.6421C20.6834 17.6342 20.9856 16.4237 20.866 15.2174C20.7464 14.011 20.2124 12.8838 19.3554 12.028C18.809 11.481 18.1484 11.0622 17.421 10.8016C16.6937 10.5411 15.9177 10.4454 15.149 10.5213C14.3803 10.5973 13.638 10.843 12.9754 11.2409C12.3129 11.6388 11.7467 12.1788 11.3175 12.8223C10.8883 13.4657 10.6069 14.1964 10.4935 14.9618C10.3801 15.7273 10.4374 16.5084 10.6615 17.249C10.8856 17.9895 11.2708 18.6711 11.7894 19.2447C12.3079 19.8182 12.947 20.2694 13.6605 20.5658ZM9.96883 10.0269C10.7163 9.2781 11.6037 8.68408 12.5803 8.27882C13.557 7.87355 14.6037 7.66496 15.6608 7.66496C16.7179 7.66496 17.7647 7.87355 18.7413 8.27882C19.718 8.68408 20.6053 9.2781 21.3528 10.0269C22.1003 10.7758 22.6932 11.6648 23.0978 12.6432C23.5023 13.6216 23.7105 14.6702 23.7105 15.7292C23.7105 16.7883 23.5023 17.8369 23.0978 18.8153C22.6932 19.7937 22.1003 20.6827 21.3528 21.4316C19.8432 22.9439 17.7957 23.7935 15.6608 23.7935C13.5259 23.7935 11.4784 22.9439 9.96883 21.4316C8.45922 19.9192 7.61113 17.868 7.61113 15.7292C7.61113 13.5905 8.45922 11.5393 9.96883 10.0269ZM25.4958 8.86593C25.6811 8.69088 25.8293 8.48038 25.9319 8.24688C26.0345 8.01339 26.0892 7.76165 26.093 7.50658C26.0967 7.2515 26.0493 6.99827 25.9535 6.76188C25.8578 6.52549 25.7157 6.31075 25.5356 6.13036C25.3556 5.94998 25.1412 5.80762 24.9053 5.71171C24.6693 5.61581 24.4165 5.56831 24.1619 5.57203C23.9073 5.57575 23.656 5.63061 23.4229 5.73336C23.1899 5.83612 22.9797 5.98467 22.805 6.17024C22.4652 6.53113 22.2791 7.0105 22.2864 7.50658C22.2936 8.00265 22.4935 8.47638 22.8437 8.8272C23.1939 9.17801 23.6667 9.3783 24.1619 9.38553C24.6571 9.39276 25.1356 9.20637 25.4958 8.86593Z"
                        fill="#F4F4F4"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col text-center w-1/3">
              <h3 className="mb-6 text-lg font-bold">Pour nous rejoindre</h3>
              <a className="pb-2 text-sm" href="/login">
                Publicité
              </a>
              <a className="pb-2 text-sm" href="login">
                A propos
              </a>
              <a className="pb-2 text-sm" href="login">
                Contact
              </a>
            </div>
          </div>
          <div className="flex justify-center text-sm">
            <p>2020 SurfCamp.fr, Inc. Tout droits réservés</p>
          </div>
        </div>
      </div>
    </div>
  );
}
