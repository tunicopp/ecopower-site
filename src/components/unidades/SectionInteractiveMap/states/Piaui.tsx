import React from "react";

const Piaui: React.FC = () => {
  return (
    <a
      id="pi"
      className="cursor-pointer fill-beige-200 hover:fill-hover-map transition-all duration-300 relative"
    >
      <path
        d="M1019.92 364.866L1019.84 364.635C1019.11 364.02 1019.15 364.52 1018.5 362.637C1007.24 362.022 1010.08 351.685 1005.39 340.003C1004.47 335.738 1006.74 325.17 1001.36 320.828C999.824 319.445 1000.09 318.599 1000.28 314.872C999.978 314.757 999.555 313.45 998.556 311.721C997.135 308.301 996.021 303.805 994.676 298.156C994.215 294.775 997.327 293.852 999.862 289.395C995.867 277.252 982.613 264.994 994.561 249.738C994.1 249.507 994.714 249.546 993.139 248.278V248.7H992.947C992.947 248.7 992.947 248.355 992.486 248.201L992.333 248.278C992.333 248.278 992.179 248.278 991.718 247.855L992.025 247.778L992.14 247.586C992.14 247.586 992.294 247.509 991.91 247.048C991.295 247.048 991.718 246.625 988.76 246.779L988.99 247.471C988.99 247.471 988.837 247.701 988.376 247.663C988.376 247.624 988.375 247.471 988.568 247.24C988.568 247.24 988.491 247.24 988.183 247.24L988.491 246.856V246.549C988.491 246.549 988.568 246.472 987.991 246.049C987.991 246.164 984.956 247.74 982.382 245.434C982.267 245.434 981.806 246.164 980.922 245.434V245.242C980.922 245.242 980.846 245.165 981.537 245.434C981.537 245.473 981.537 245.319 981.345 245.011C981.422 245.088 981.422 245.011 982.19 245.434C981.614 244.051 981.383 245.434 977.619 241.707C977.619 241.591 977.311 242.206 976.581 242.322C976.389 243.052 976.466 242.398 976.159 244.589C976.043 244.512 976.159 244.55 975.736 244.397C975.967 244.896 975.505 246.395 977.388 247.471L977.465 248.047C976.428 249.277 977.042 251.275 974.122 252.658C974.046 252.966 973.854 252.466 973.316 254.695L973.162 254.849C972.816 254.887 972.202 254.926 972.048 256.117C971.741 256.501 972.048 256.117 968.245 257.5C968.398 257.692 968.245 257.577 968.782 258L968.859 258.23C968.475 258.807 968.667 259.153 965.21 262.457C964.749 262.88 961.867 262.304 960.138 263.38C959.754 263.303 958.717 263.456 957.641 263.802C957.564 263.802 957.411 263.649 956.988 262.995H956.604C955.682 265.8 954.107 265.647 951.302 270.45C951.648 271.142 951.456 270.335 951.61 273.102C950.188 274.062 950.803 277.136 948.267 277.982C946.884 281.671 941.967 283.9 941.852 288.818C942.159 288.934 941.852 289.318 942.889 291.316L943.311 291.086C945.578 291.585 947.076 297.157 942.966 299.424C942.85 299.693 943.081 299.808 943.58 301.653C943.58 301.884 943.196 301.807 942.889 302.998L943.081 303.536C947.153 308.762 949.497 317.447 943.081 323.326C942.697 322.749 941.045 327.553 938.356 328.629C938.24 328.898 938.97 329.705 938.509 330.704C938.509 330.781 938.548 330.704 938.932 331.319C938.509 332.971 937.549 332.203 938.74 336.314C937.011 337.851 940.392 339.312 939.162 341.694C941.006 343.615 942.197 346.19 945.617 347.266L946.039 347.727V349.994L946.193 350.225C946.193 350.225 946.193 350.148 946.577 350.302L946.654 350.686L945.924 351.186C945.655 351.762 945.194 353.107 945.809 354.644L945.693 354.913C945.693 354.913 945.463 354.99 945.155 355.259C945.463 358.602 941.775 366.057 935.436 362.867C932.708 363.636 928.175 367.402 924.794 363.674C924.717 363.521 924.794 363.559 924.487 362.752L924.256 362.598C924.256 362.598 924.064 362.752 923.411 362.714L923.296 362.483L921.644 361.561H921.836C920.222 360.216 916.112 362.176 912.5 363.021C912.385 362.867 912.616 363.021 912.193 362.483L911.847 362.368C911.617 362.829 911.117 363.021 909.542 363.405C909.427 363.521 909.542 363.597 909.12 365.058C909.12 365.058 909.043 365.058 908.274 364.443C908.274 364.52 907.89 364.366 907.621 364.981C907.621 365.019 908.005 365.058 908.236 365.749L908.159 365.865C908.159 365.865 908.082 365.903 907.506 365.788L907.66 365.673C907.66 365.673 907.237 366.249 906.123 366.787C906.046 366.902 906.085 366.941 905.931 367.94C905.124 368.17 905.239 369.9 903.203 370.399C903.203 369.861 903.088 371.821 901.743 373.55C901.897 373.704 900.745 373.166 899.784 373.973C897.978 374.05 894.905 375.817 892.331 379.583L892.139 379.391C891.908 379.506 890.449 380.16 889.949 382.081L889.411 382.311C889.411 382.311 889.219 382.004 888.22 381.312C887.836 381.159 887.375 382.235 886.299 381.274C886.684 381.197 885.147 381.581 884.686 382.811C884.609 382.811 884.801 382.888 883.956 382.811C883.879 383.003 883.764 382.888 883.725 383.503L883.533 383.733C878.501 386.961 865.861 385.155 864.632 396.299C864.632 396.337 864.593 396.299 864.286 396.529C864.401 397.26 864.67 396.683 864.286 398.22L864.094 397.99C864.094 397.99 864.094 398.451 863.902 399.527L864.094 399.873V400.065L863.864 400.295C863.864 400.295 863.787 400.372 864.209 400.641L864.286 400.872L864.171 401.064L863.825 401.256C864.017 403.754 861.597 407.75 859.83 411.939C858.447 413.399 858.792 412.554 858.024 417.703L857.064 418.395V418.625L857.64 418.817L857.563 419.086C856.526 419.048 857.025 421.661 854.797 422.583C854.874 422.429 854.067 423.352 853.76 424.043H853.299C853.26 424.389 853.299 423.505 852.223 425.542L852.3 426.349C850.072 428.193 852.146 432.151 853.337 436.57V436.763L853.145 436.916C851.647 439.875 859.177 443.872 855.45 447.369C855.757 448.483 854.605 450.289 855.642 454.747C854.605 456.13 854.72 456.86 854.758 461.663C854.874 461.663 854.413 461.74 853.529 462.355C853.491 462.47 853.529 462.855 853.529 464.2C853.721 464.084 853.068 464.469 851.877 467.12C852.953 468.35 851.877 468.542 852.108 471.347C864.401 464.238 872.776 503.895 892.792 482.452C895.942 476.765 909.85 487.679 918.57 465.007C927.483 454.631 905.124 446.216 927.829 440.336C930.173 447.138 936.934 439.991 940.814 444.41C945.732 447.753 949.42 448.022 957.027 446.293C957.296 446.062 957.18 446.1 957.334 445.37C960.254 440.836 965.286 440.529 971.28 437.762C975.544 437.377 980.538 439.991 979.578 430.653C984.764 430.23 988.375 429.346 990.834 422.199C990.642 422.89 1000.4 416.742 1001.21 413.591C1001.98 413.13 1002.36 412.899 1004.43 413.745C1005.39 413.361 1004.93 412.592 1005.7 411.017C1006.05 410.94 1006.2 411.132 1007.12 411.593C1008.24 411.17 1006.78 410.479 1009.01 409.633C1009.85 406.636 1023.57 399.834 1012.39 393.263C1017.69 389.766 1004.17 383.003 1016.11 382.004C1014.85 376.048 1014.61 374.319 1019.88 364.635L1019.92 364.866Z"
        fill="inherit"
        stroke="#F8F6F1"
        strokeWidth="4.60134"
        mask="url(#path-89-inside-11_2957_11459)"
      />
      <path
        d="M1019.92 364.866L1019.84 364.635C1019.11 364.02 1019.15 364.52 1018.5 362.637C1007.24 362.022 1010.08 351.685 1005.39 340.003C1004.47 335.738 1006.74 325.17 1001.36 320.828C999.824 319.445 1000.09 318.599 1000.28 314.872C999.978 314.757 999.555 313.45 998.556 311.721C997.135 308.301 996.021 303.805 994.676 298.156C994.215 294.775 997.327 293.852 999.862 289.395C995.867 277.252 982.613 264.994 994.561 249.738C994.1 249.507 994.714 249.546 993.139 248.278V248.7H992.947C992.947 248.7 992.947 248.355 992.486 248.201L992.333 248.278C992.333 248.278 992.179 248.278 991.718 247.855L992.025 247.778L992.14 247.586C992.14 247.586 992.294 247.509 991.91 247.048C991.295 247.048 991.718 246.625 988.76 246.779L988.99 247.471C988.99 247.471 988.837 247.701 988.376 247.663C988.376 247.624 988.375 247.471 988.568 247.24C988.568 247.24 988.491 247.24 988.183 247.24L988.491 246.856V246.549C988.491 246.549 988.568 246.472 987.991 246.049C987.991 246.164 984.956 247.74 982.382 245.434C982.267 245.434 981.806 246.164 980.922 245.434V245.242C980.922 245.242 980.846 245.165 981.537 245.434C981.537 245.473 981.537 245.319 981.345 245.011C981.422 245.088 981.422 245.011 982.19 245.434C981.614 244.051 981.383 245.434 977.619 241.707C977.619 241.591 977.311 242.206 976.581 242.322C976.389 243.052 976.466 242.398 976.159 244.589C976.043 244.512 976.159 244.55 975.736 244.397C975.967 244.896 975.505 246.395 977.388 247.471L977.465 248.047C976.428 249.277 977.042 251.275 974.122 252.658C974.046 252.966 973.854 252.466 973.316 254.695L973.162 254.849C972.816 254.887 972.202 254.926 972.048 256.117C971.741 256.501 972.048 256.117 968.245 257.5C968.398 257.692 968.245 257.577 968.782 258L968.859 258.23C968.475 258.807 968.667 259.153 965.21 262.457C964.749 262.88 961.867 262.304 960.138 263.38C959.754 263.303 958.717 263.456 957.641 263.802C957.564 263.802 957.411 263.649 956.988 262.995H956.604C955.682 265.8 954.107 265.647 951.302 270.45C951.648 271.142 951.456 270.335 951.61 273.102C950.188 274.062 950.803 277.136 948.267 277.982C946.884 281.671 941.967 283.9 941.852 288.818C942.159 288.934 941.852 289.318 942.889 291.316L943.311 291.086C945.578 291.585 947.076 297.157 942.966 299.424C942.85 299.693 943.081 299.808 943.58 301.653C943.58 301.884 943.196 301.807 942.889 302.998L943.081 303.536C947.153 308.762 949.497 317.447 943.081 323.326C942.697 322.749 941.045 327.553 938.356 328.629C938.24 328.898 938.97 329.705 938.509 330.704C938.509 330.781 938.548 330.704 938.932 331.319C938.509 332.971 937.549 332.203 938.74 336.314C937.011 337.851 940.392 339.312 939.162 341.694C941.006 343.615 942.197 346.19 945.617 347.266L946.039 347.727V349.994L946.193 350.225C946.193 350.225 946.193 350.148 946.577 350.302L946.654 350.686L945.924 351.186C945.655 351.762 945.194 353.107 945.809 354.644L945.693 354.913C945.693 354.913 945.463 354.99 945.155 355.259C945.463 358.602 941.775 366.057 935.436 362.867C932.708 363.636 928.175 367.402 924.794 363.674C924.717 363.521 924.794 363.559 924.487 362.752L924.256 362.598C924.256 362.598 924.064 362.752 923.411 362.714L923.296 362.483L921.644 361.561H921.836C920.222 360.216 916.112 362.176 912.5 363.021C912.385 362.867 912.616 363.021 912.193 362.483L911.847 362.368C911.617 362.829 911.117 363.021 909.542 363.405C909.427 363.521 909.542 363.597 909.12 365.058C909.12 365.058 909.043 365.058 908.274 364.443C908.274 364.52 907.89 364.366 907.621 364.981C907.621 365.019 908.005 365.058 908.236 365.749L908.159 365.865C908.159 365.865 908.082 365.903 907.506 365.788L907.66 365.673C907.66 365.673 907.237 366.249 906.123 366.787C906.046 366.902 906.085 366.941 905.931 367.94C905.124 368.17 905.239 369.9 903.203 370.399C903.203 369.861 903.088 371.821 901.743 373.55C901.897 373.704 900.745 373.166 899.784 373.973C897.978 374.05 894.905 375.817 892.331 379.583L892.139 379.391C891.908 379.506 890.449 380.16 889.949 382.081L889.411 382.311C889.411 382.311 889.219 382.004 888.22 381.312C887.836 381.159 887.375 382.235 886.299 381.274C886.684 381.197 885.147 381.581 884.686 382.811C884.609 382.811 884.801 382.888 883.956 382.811C883.879 383.003 883.764 382.888 883.725 383.503L883.533 383.733C878.501 386.961 865.861 385.155 864.632 396.299C864.632 396.337 864.593 396.299 864.286 396.529C864.401 397.26 864.67 396.683 864.286 398.22L864.094 397.99C864.094 397.99 864.094 398.451 863.902 399.527L864.094 399.873V400.065L863.864 400.295C863.864 400.295 863.787 400.372 864.209 400.641L864.286 400.872L864.171 401.064L863.825 401.256C864.017 403.754 861.597 407.75 859.83 411.939C858.447 413.399 858.792 412.554 858.024 417.703L857.064 418.395V418.625L857.64 418.817L857.563 419.086C856.526 419.048 857.025 421.661 854.797 422.583C854.874 422.429 854.067 423.352 853.76 424.043H853.299C853.26 424.389 853.299 423.505 852.223 425.542L852.3 426.349C850.072 428.193 852.146 432.151 853.337 436.57V436.763L853.145 436.916C851.647 439.875 859.177 443.872 855.45 447.369C855.757 448.483 854.605 450.289 855.642 454.747C854.605 456.13 854.72 456.86 854.758 461.663C854.874 461.663 854.413 461.74 853.529 462.355C853.491 462.47 853.529 462.855 853.529 464.2C853.721 464.084 853.068 464.469 851.877 467.12C852.953 468.35 851.877 468.542 852.108 471.347C864.401 464.238 872.776 503.895 892.792 482.452C895.942 476.765 909.85 487.679 918.57 465.007C927.483 454.631 905.124 446.216 927.829 440.336C930.173 447.138 936.934 439.991 940.814 444.41C945.732 447.753 949.42 448.022 957.027 446.293C957.296 446.062 957.18 446.1 957.334 445.37C960.254 440.836 965.286 440.529 971.28 437.762C975.544 437.377 980.538 439.991 979.578 430.653C984.764 430.23 988.375 429.346 990.834 422.199C990.642 422.89 1000.4 416.742 1001.21 413.591C1001.98 413.13 1002.36 412.899 1004.43 413.745C1005.39 413.361 1004.93 412.592 1005.7 411.017C1006.05 410.94 1006.2 411.132 1007.12 411.593C1008.24 411.17 1006.78 410.479 1009.01 409.633C1009.85 406.636 1023.57 399.834 1012.39 393.263C1017.69 389.766 1004.17 383.003 1016.11 382.004C1014.85 376.048 1014.61 374.319 1019.88 364.635L1019.92 364.866Z"
        fill="inherit"
        stroke="#F8F6F1"
        strokeWidth="1.15034"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g style={{ transform: `translate(-70px, 90px)` }}>
        <path
          d="M1060 285C1060 296.598 1039 320 1039 320C1039 320 1018 296.598 1018 285C1018 273.402 1027.4 264 1039 264C1050.6 264 1060 273.402 1060 285Z"
          fill="#01B040"
        />
        <circle cx="1039" cy="285" r="14" fill="#01802E" />
        <path
          d="M1037.61 277L1037.69 277.023C1037.71 277.029 1037.7 277.033 1037.68 277.037C1036.09 277.287 1034.92 278.136 1034.17 279.58C1034.15 279.633 1034.16 279.64 1034.2 279.601C1034.39 279.44 1034.59 279.26 1034.77 279.138C1036.71 277.795 1039.26 278.14 1040.79 279.981C1040.81 279.998 1040.8 280.002 1040.78 279.994C1040.39 279.832 1040.07 279.88 1039.82 280.138C1039.52 280.459 1039.51 280.97 1039.82 281.283C1039.97 281.432 1040.21 281.543 1040.55 281.62C1042.54 282.073 1044.1 280.11 1043.3 278.196C1042.9 277.238 1041.62 277.659 1041.79 278.714C1041.8 278.756 1041.79 278.761 1041.76 278.728C1040.98 277.755 1039.97 277.192 1038.73 277.038C1038.69 277.033 1038.69 277.028 1038.73 277.023L1038.95 277H1037.61Z"
          fill="white"
        />
        <path
          d="M1031 286.744L1031.02 286.306C1031.02 286.225 1031.03 286.225 1031.04 286.305C1031.07 286.59 1031.07 286.887 1031.15 287.151C1031.5 288.477 1032.28 289.479 1033.48 290.156C1033.5 290.163 1033.51 290.158 1033.52 290.145C1033.52 290.135 1033.52 290.123 1033.52 290.115C1031.75 288.114 1031.9 285.141 1033.88 283.358C1033.91 283.335 1033.91 283.34 1033.9 283.373C1033.51 284.506 1034.87 285.094 1035.34 284.057C1036.27 281.981 1034.27 279.941 1032.23 280.731C1031.26 281.11 1031.54 282.457 1032.67 282.33C1032.7 282.326 1032.71 282.335 1032.68 282.359C1031.73 283.163 1031.18 284.198 1031.04 285.464C1031.03 285.532 1031.03 285.532 1031.02 285.464L1031 285.21V286.744Z"
          fill="white"
        />
        <path
          d="M1045.34 287.79C1045.32 287.792 1045.31 287.79 1045.31 287.784C1045.31 287.782 1045.31 287.78 1045.32 287.778C1045.32 287.775 1045.32 287.773 1045.32 287.77C1045.32 287.767 1045.33 287.765 1045.33 287.763C1047.9 285.533 1047.41 281.54 1044.49 279.95C1044.48 279.947 1044.48 279.947 1044.47 279.95L1044.47 279.951L1044.47 279.954C1044.47 279.954 1044.47 279.956 1044.47 279.957C1044.47 279.961 1044.47 279.967 1044.47 279.971C1046.24 282.007 1046.13 284.954 1044.13 286.744C1044.1 286.771 1044.09 286.765 1044.11 286.726C1044.52 285.579 1043.07 284.986 1042.61 286.193C1041.79 288.285 1043.85 290.167 1045.81 289.363C1046.76 288.973 1046.42 287.652 1045.34 287.789V287.79Z"
          fill="white"
        />
        <path
          d="M1037.19 285.284C1037.06 285.161 1036.96 285.081 1036.88 285.044C1036.66 284.944 1036.54 285.2 1036.56 285.374C1036.57 285.439 1036.61 285.523 1036.68 285.623C1037.48 286.685 1037.73 287.89 1037.42 289.24C1037.17 290.334 1036.51 291.221 1035.41 291.446C1034.37 291.658 1034.6 293.172 1035.82 292.976C1036.71 292.833 1037.39 292.364 1037.86 291.569C1038.99 289.645 1038.86 286.85 1037.19 285.284Z"
          fill="white"
        />
        <path
          d="M1042.96 291.616C1042.95 291.602 1042.93 291.591 1042.92 291.58C1042.91 291.569 1042.89 291.559 1042.88 291.55C1042.87 291.544 1042.86 291.539 1042.86 291.533C1042.84 291.52 1042.82 291.509 1042.8 291.501C1042.8 291.498 1042.79 291.496 1042.79 291.494C1042.77 291.487 1042.76 291.484 1042.75 291.483C1041.87 291.386 1041.22 290.941 1040.82 290.146C1040.08 288.709 1040.23 286.881 1041.23 285.624C1041.43 285.368 1041.31 284.825 1040.98 285.07C1039.37 286.26 1039.01 288.59 1039.54 290.433C1039.95 291.85 1040.95 292.97 1042.43 293C1043.18 293.015 1043.56 292.123 1042.96 291.616Z"
          fill="white"
        />
      </g>
    </a>
  );
};

export default Piaui;
