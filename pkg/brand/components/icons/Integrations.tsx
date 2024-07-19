import React from 'react'
import { type LucideProps } from 'lucide-react'

const Integrations: React.FC<LucideProps> = (props: LucideProps) => (
  <svg
    width={26}
    height={26}
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.787598 23.4673C0.787598 24.5595 1.66162 25.4335 2.75384 25.4335H18.1082C19.1687 25.3713 19.9806 24.4973 19.9806 23.4673L19.9794 15.8536C19.9794 15.7914 19.9794 15.7292 19.9477 15.6975C19.8855 15.5415 19.7295 15.4477 19.5735 15.4477H16.2968C16.0164 15.4477 15.7666 15.6037 15.6105 15.8219C15.4545 16.0718 15.4545 16.3521 15.5788 16.602C15.7349 16.8824 15.8287 17.2262 15.8287 17.4444C15.8287 17.9124 15.4545 18.2867 14.9864 18.2867C14.5183 18.2867 14.1441 17.9124 14.1441 17.4444C14.1441 17.1945 14.238 16.8824 14.394 16.5703C14.5183 16.3204 14.4878 16.0401 14.3623 15.7902C14.2063 15.5403 13.9564 15.4159 13.676 15.4159H10.7736V12.5769C11.1795 12.7646 11.6159 12.889 11.9901 12.889C12.8946 12.889 13.6126 12.171 13.6126 11.2665C13.6126 10.362 12.8946 9.64402 11.9901 9.64402C11.6159 9.64402 11.1783 9.76835 10.7736 9.98778V6.64778C10.7736 6.42958 10.5859 6.24185 10.3676 6.24185H2.75396C1.66174 6.24185 0.787714 7.11588 0.787714 8.20809L0.787598 23.4673ZM9.99343 24.6534H2.78417C2.12834 24.6534 1.59809 24.1231 1.59809 23.4673L1.5993 16.2593H4.50173C4.7821 16.2593 5.03199 16.1032 5.18802 15.885C5.34405 15.6351 5.34405 15.3548 5.21971 15.1049C5.06368 14.8245 4.96982 14.4808 4.96982 14.2626C4.96982 13.7945 5.34404 13.4202 5.81214 13.4202C6.28023 13.4202 6.65446 13.7945 6.65446 14.2626C6.65446 14.5125 6.56059 14.8245 6.40456 15.1366C6.28022 15.3865 6.28022 15.6985 6.43626 15.9167C6.59229 16.1349 6.84219 16.291 7.12254 16.291H10.025V19.1617C9.61904 18.974 9.18265 18.8496 8.80843 18.8496C7.90395 18.8496 7.18595 19.5676 7.18595 20.4721C7.18595 21.3766 7.90395 22.0946 8.80843 22.0946C9.18265 22.0946 9.62029 21.9702 10.025 21.7825V24.6532L9.99343 24.6534ZM10.8053 19.1302V16.2277H13.676C13.4578 16.6337 13.364 17.0701 13.364 17.4443C13.364 18.3488 14.1124 19.0668 14.9864 19.0668C15.8909 19.0668 16.6089 18.3183 16.6089 17.4443C16.6089 17.0701 16.4846 16.6324 16.2651 16.2277H19.1992V23.437C19.1992 24.0611 18.6994 24.5914 18.107 24.6231H10.8054V21.7207C10.8054 21.4403 10.6494 21.1904 10.4312 21.0344C10.1813 20.8783 9.9009 20.8783 9.651 21.0027C9.37064 21.1587 9.02688 21.2526 8.80869 21.2526C8.34059 21.2526 7.96637 20.8783 7.96637 20.4103C7.96637 19.9422 8.34059 19.5679 8.80869 19.5679C9.05858 19.5679 9.37065 19.6618 9.651 19.8178C9.9009 19.9422 10.1813 19.9422 10.4312 19.7861C10.6494 19.6923 10.8053 19.4106 10.8053 19.1302ZM1.59946 8.23982C1.59946 7.58399 2.12971 7.05374 2.78554 7.05374H9.9948V10.0183C9.9948 10.1122 10.0265 10.2061 10.0887 10.2682C10.1508 10.4243 10.2764 10.5486 10.4324 10.6424C10.6506 10.7668 10.9322 10.7363 11.1504 10.6424C11.4308 10.4864 11.7746 10.3926 11.9927 10.3926C12.4608 10.3926 12.8351 10.7668 12.8351 11.2349C12.8351 11.703 12.4608 12.0772 11.9927 12.0772C11.7429 12.0772 11.4308 11.9833 11.1504 11.8273C10.9322 11.703 10.6506 11.703 10.4324 11.8273C10.2447 11.9212 10.1204 12.0772 10.0582 12.2637C10.0265 12.2954 10.0265 12.3259 10.0265 12.3575V15.4172H7.15579C7.34352 15.0113 7.46786 14.5749 7.46786 14.2007C7.46786 13.2962 6.74986 12.5782 5.84538 12.5782C4.9409 12.5782 4.22291 13.2962 4.22291 14.2007C4.22291 14.5749 4.34725 15.0125 4.56668 15.4172H1.66425L1.66181 8.23979L1.59946 8.23982Z"
      fill="#949494"
    />
    <path
      d="M14.1443 8.86401C14.176 8.86401 14.176 8.8957 14.176 8.92617C14.3637 9.1139 14.6124 9.17607 14.8318 9.14437C15.0817 9.11268 15.2999 8.95665 15.4243 8.73844C15.5803 8.45807 15.7985 8.20819 16.0167 8.08261C16.2044 7.95828 16.4226 7.92658 16.6408 7.95828C16.859 7.98997 17.0467 8.11431 17.1711 8.30204C17.421 8.67627 17.3271 9.20652 16.9212 9.45642C16.7334 9.58076 16.3909 9.70632 16.0789 9.73679C15.829 9.76849 15.6108 9.89283 15.4864 10.111C15.3621 10.3292 15.3304 10.5791 15.4243 10.829C15.4243 10.8607 15.456 10.8607 15.4864 10.8912L17.3271 13.6997C17.4514 13.8875 17.7013 13.9496 17.8891 13.8241L20.6355 12.0139C20.6672 12.4503 20.8232 12.8879 21.0414 13.2C21.2913 13.5742 21.6338 13.8241 22.0714 13.8862C22.1958 13.9179 22.2896 13.9179 22.4152 13.9179C22.7273 13.9179 23.0393 13.8241 23.3197 13.6376C24.0681 13.1378 24.2876 12.1394 23.7878 11.3593C23.6001 11.0472 23.2575 10.7351 22.8516 10.5169L25.598 8.70673C25.7857 8.58239 25.8479 8.33251 25.7223 8.14477L21.5082 1.84268C20.9158 0.938195 19.6676 0.688295 18.7618 1.28071L12.3964 5.46172C12.2087 5.58606 12.1465 5.83595 12.2721 6.02368L14.1443 8.86401ZM19.1994 1.93529C19.7297 1.59152 20.4794 1.71709 20.8219 2.27906L24.7848 8.30217L22.3821 9.89419C22.1322 10.0502 22.0079 10.3001 22.0079 10.5805C22.0079 10.8608 22.1639 11.1107 22.4138 11.2363C22.6942 11.3923 22.9441 11.6105 23.0697 11.8287C23.194 12.0164 23.2257 12.2347 23.194 12.4528C23.1623 12.671 23.038 12.8588 22.8502 12.9831C22.6625 13.1074 22.4443 13.1391 22.2261 13.1074C22.0079 13.0757 21.8202 12.9514 21.6959 12.7637C21.5715 12.5455 21.446 12.2334 21.4155 11.9214C21.3838 11.641 21.1973 11.3911 20.9474 11.2972C20.6975 11.1729 20.4171 11.2034 20.1672 11.3594L17.7646 12.9514L16.1726 10.5488C16.609 10.4866 17.0466 10.3611 17.3587 10.1429C17.7329 9.89296 17.9828 9.55044 18.045 9.1128C18.1071 8.67641 18.045 8.23878 17.8268 7.89626C17.5769 7.52203 17.2344 7.27213 16.7967 7.20997C16.3603 7.11611 15.9227 7.20997 15.5802 7.42817C15.2681 7.61589 14.9561 7.95843 14.7683 8.36436L13.1763 5.96173L19.1994 1.93529Z"
      fill="#949494"
    />
  </svg>

)

export default Integrations