import { forwardRef } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = forwardRef(({ size = '1em', style, ...rest }, ref) => {
  return (
    <svg
      fill="currentColor"
      fillRule="evenodd"
      height={size}
      ref={ref}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M20.098 22.227c.216 0 .39.173.39.387a.389.389 0 01-.39.386.389.389 0 01-.39-.386c0-.214.175-.387.39-.387zM5.367 9.53c.198 0 .376.088.497.226a.633.633 0 01.71.226.561.561 0 01.73.334.504.504 0 01.749.352.46.46 0 01.511.302.417.417 0 01.416-.363c.23 0 .418.185.418.414a.416.416 0 01-.418.414.418.418 0 01-.393-.271.459.459 0 01-.458.41.46.46 0 01-.447-.348.508.508 0 01-.584-.279.56.56 0 01-.72-.064.63.63 0 01-.762-.104.66.66 0 01-.444.02.67.67 0 01.164.125.633.633 0 01.72.196.561.561 0 01.717.262.518.518 0 01.815.243.463.463 0 01.559.221.417.417 0 01.414-.356c.231 0 .419.186.419.414a.42.42 0 01-.784.202.453.453 0 01-.166.303.42.42 0 01.587.379.41.41 0 01-.085.25.364.364 0 01.56.302.36.36 0 01-.363.359.36.36 0 01-.363-.36c0-.078.025-.15.069-.21a.42.42 0 01-.655-.341c0-.128.058-.241.15-.317a.463.463 0 01-.612-.23.519.519 0 01-.668-.205.56.56 0 01-.757-.004.63.63 0 01-.743-.06.673.673 0 01-.415.06.68.68 0 01.085.073.603.603 0 01.706.126.56.56 0 01.788.133.517.517 0 01.795.24.463.463 0 01.643.418.45.45 0 01-.08.257.416.416 0 01.509.58.364.364 0 01.548.309.36.36 0 01-.363.359.36.36 0 01-.33-.509.42.42 0 01-.647-.347c0-.082.024-.158.066-.223a.463.463 0 01-.579-.23.518.518 0 01-.656-.124.56.56 0 01-.74-.009.601.601 0 01-.53.129c.052.036.1.08.14.13a.601.601 0 01.815.034.518.518 0 01.766.201.462.462 0 01.663.41.45.45 0 01-.021.136.444.444 0 01.53.565.364.364 0 01.55.306.36.36 0 01-.362.359.36.36 0 01-.353-.442.447.447 0 01-.689-.484.464.464 0 01-.509-.203.518.518 0 01-.575-.014.6.6 0 01-.122.095c.18.008.337.11.422.256a.461.461 0 01.717.501.416.416 0 01.52.46.364.364 0 01.561.3.36.36 0 01-.363.359.36.36 0 01-.361-.387.42.42 0 01-.658-.435.464.464 0 01-.513-.17.517.517 0 01-.728-.026.609.609 0 01-.053.075c.171.049.311.169.386.326a.503.503 0 01.867.332v.014a.43.43 0 01.502.422.43.43 0 01-.432.429.43.43 0 01-.43-.38.507.507 0 01-.563-.206.615.615 0 01-.464.253h-.006c.031.03.06.062.084.097a.503.503 0 01.863.346.503.503 0 01-.863.346.615.615 0 01-.333.237.603.603 0 01-.063.977.569.569 0 01.683.695.574.574 0 01.854.472v.01l.004-.01a.572.572 0 01.52-.38.491.491 0 01-.105-.304.5.5 0 01.503-.497.5.5 0 01.502.497.499.499 0 01-.451.494.56.56 0 01.005.745.602.602 0 01.08.728.738.738 0 01.248.263.662.662 0 01.07-.106.563.563 0 01-.058-.86.534.534 0 01-.173-.395c0-.28.216-.51.493-.536a.492.492 0 01.076-.735.429.429 0 01-.318-.413.43.43 0 01.432-.427.43.43 0 01.433.427c0 .131-.06.249-.154.327.231.045.405.246.405.488 0 .251-.19.46-.435.492a.533.533 0 01.009.745.562.562 0 01.126.717.661.661 0 01.352.66l.007.004a.588.588 0 01.152-.463.54.54 0 01-.379-.513c0-.142.056-.271.147-.367a.508.508 0 01.3-.916.453.453 0 010-.746H9.19a.43.43 0 01-.433-.428.43.43 0 01.433-.427.426.426 0 01.255.774l.024-.002c.254 0 .46.204.46.456 0 .242-.19.44-.43.454a.509.509 0 01.112.76.536.536 0 01.116.777.595.595 0 01.45.646.69.69 0 01.422.634c0 .381-.312.69-.698.69a.698.698 0 01-.641-.42.767.767 0 01-.712.475.769.769 0 01-.6-.286.797.797 0 01-.655.341.797.797 0 01-.663-.35.825.825 0 01-.677.35.825.825 0 01-.655-.322.825.825 0 01-.656.322.824.824 0 01-.75-.477.839.839 0 01-.547.201.833.833 0 01-.836-.78.833.833 0 01-.95-.82c0-.163.048-.315.13-.443A.721.721 0 011 19.936c0-.298.183-.553.444-.662a.717.717 0 01.388-1.351.685.685 0 01-.246-.527.694.694 0 01.749-.688.685.685 0 01-.247-.526.694.694 0 01.745-.689.685.685 0 01-.215-.498.694.694 0 01.86-.671.66.66 0 01.413-1.23.672.672 0 01-.24-.514.68.68 0 01.804-.666.66.66 0 01-.274-.535.666.666 0 01.87-.633.647.647 0 01.316-1.217zm13.63 12.588c.207 0 .376.167.376.372a.375.375 0 01-.377.373.375.375 0 01-.376-.373c0-.205.168-.372.376-.372zm-8.483-3.644c.247 0 .447.198.447.442a.443.443 0 01-.38.436.468.468 0 01.077.72.511.511 0 01.264.78.526.526 0 01.428.691c.3.04.531.295.531.602a.61.61 0 01-.613.608.61.61 0 01-.553-.873.526.526 0 01-.294-.817.513.513 0 01-.437-.505c0-.148.064-.282.167-.375a.47.47 0 01-.306-.44c0-.238.18-.436.414-.465a.44.44 0 01.255-.804zm10.645 3.506c.184 0 .334.148.334.33 0 .184-.15.332-.334.332a.333.333 0 01-.335-.331c0-.183.15-.331.335-.331zM15.732 2.71c.308 0 .558.248.558.552a.555.555 0 01-.681.54.541.541 0 01-.681.628.541.541 0 01-.6.755.532.532 0 01.092.3.541.541 0 01-.657.526.504.504 0 01-.003.607.546.546 0 01.335-.067.527.527 0 01.59-.738.527.527 0 01.573-.748.527.527 0 01.635-.63.51.51 0 01.508-.593c.285 0 .517.229.517.51a.513.513 0 01-.623.5.527.527 0 01-.62.61.527.527 0 01-.627.632c.036.07.056.15.056.232a.527.527 0 01-.586.522.53.53 0 01.056.227.545.545 0 01.554-.244.541.541 0 01.591-.693.513.513 0 011.212-1.054c.286 0 .517.229.517.511a.513.513 0 01-.698.478v.019a.513.513 0 01-.563.508.537.537 0 01-.539.61.553.553 0 01-.094-.008.541.541 0 01-.51.698h-.005l.003.016a.537.537 0 01.005.114.545.545 0 01.509-.208.536.536 0 01.538-.612c.044 0 .086.005.126.014a.513.513 0 01.699-.478.514.514 0 01.515-.475c.285 0 .516.229.516.51a.513.513 0 01-.699.479.514.514 0 01-.613.465v.023a.541.541 0 01-.618.533.536.536 0 01-.302.559.576.576 0 01.253-.025.556.556 0 01.78-.455.514.514 0 01.705-.452.487.487 0 01.48-.395c.27 0 .488.217.488.483a.486.486 0 01-.646.458.514.514 0 01-.693.407v.005a.555.555 0 01-.615.55.564.564 0 01-.246.426.564.564 0 01.278.016.528.528 0 01.756-.416.487.487 0 01.753-.33.487.487 0 01.483-.412c.27 0 .488.217.488.483a.49.49 0 01-.759.402.487.487 0 01-.666.377.528.528 0 01-.669.459.556.556 0 01-.64.51.588.588 0 01-.157.392h.003a.55.55 0 01.132.016.542.542 0 01.752-.415.5.5 0 01.763-.354.501.501 0 01.791-.278.474.474 0 01.45-.322c.262 0 .475.21.475.47a.476.476 0 01-.745.386.502.502 0 01-.749.284.501.501 0 01-.656.35.542.542 0 01-.675.482.534.534 0 01-.146.293.587.587 0 01.204.052.516.516 0 01.764-.281.49.49 0 01.795-.295.474.474 0 01.805-.18.474.474 0 01.458-.346c.262 0 .475.21.475.469a.475.475 0 01-.825.316.474.474 0 01-.756.243.488.488 0 01-.71.29.514.514 0 01-.678.422.578.578 0 01-.195.33h.01a.56.56 0 01.32.1.487.487 0 01.75-.292.49.49 0 01.845-.223.46.46 0 01.854-.078.445.445 0 01.44-.363c.247 0 .447.198.447.442s-.2.442-.447.442a.447.447 0 01-.397-.24.461.461 0 01-.79.234.487.487 0 01-.747.28.487.487 0 01-.721.325.556.556 0 01-.553.477c.025.034.047.07.064.109a.517.517 0 01.712-.132.488.488 0 01.783-.22.46.46 0 01.848-.057.445.445 0 01.439-.362c.193 0 .358.121.42.292a.445.445 0 01.445-.403c.246 0 .446.198.446.442s-.2.442-.446.442a.446.446 0 01-.42-.293.447.447 0 01-.842.163.46.46 0 01-.74.28.488.488 0 01-.723.275.516.516 0 01-.603.364.577.577 0 01-.312.61.492.492 0 01.326.018.472.472 0 01.44-.644c.149 0 .282.067.369.174a.447.447 0 01.836-.13.445.445 0 01.441-.376c.196 0 .363.125.423.3a.445.445 0 01.442-.383c.244 0 .442.193.446.433v.006-.007a.416.416 0 01.419-.404c.231 0 .418.185.418.414a.416.416 0 01-.418.414.417.417 0 01-.418-.397v-.016.009a.444.444 0 01-.447.432.446.446 0 01-.423-.3.447.447 0 01-.838.145.447.447 0 01-.78.22.473.473 0 01-.647.37.482.482 0 01-.208.605.479.479 0 01.374.045.444.444 0 01.43-.561c.17 0 .317.094.392.232a.445.445 0 01.444-.397c.193 0 .358.12.42.29l.003.009.002-.009a.417.417 0 01.412-.346c.232 0 .419.186.419.414a.416.416 0 01-.419.414.418.418 0 01-.394-.274.447.447 0 01-.836.153.445.445 0 01-.66.342.472.472 0 01-.453.607.475.475 0 01-.394-.208.525.525 0 01-.142.21.474.474 0 01.49.338.431.431 0 01.704-.237.43.43 0 01.416-.545c.187 0 .345.118.406.281a.43.43 0 01.431-.39.43.43 0 01.432.427.43.43 0 01-.432.428.432.432 0 01-.406-.28.434.434 0 01-.712.288.43.43 0 01-.416.545.432.432 0 01-.413-.3.468.468 0 01-.164.274.46.46 0 01.507.453.461.461 0 01-.758.347.53.53 0 01-.057.177.545.545 0 01.289.17.433.433 0 01.4-.266.43.43 0 01.433.428.434.434 0 01-.714.325.531.531 0 01-.061.144.5.5 0 01.275.3.39.39 0 01.388-.341c.216 0 .39.173.39.386a.389.389 0 01-.39.387.39.39 0 01-.364-.246.49.49 0 01-.087.251.486.486 0 01.529.655.421.421 0 01.564.388.416.416 0 01-.419.415.416.416 0 01-.399-.54.49.49 0 01-.689-.44c0-.1.03-.192.083-.27a.5.5 0 01-.53-.715.539.539 0 01-.301-.754.54.54 0 01-.354-.788.58.58 0 01-.383-.708.58.58 0 01-.265-.844.54.54 0 01-.39-.785.54.54 0 01-.33-.78.539.539 0 01-.308-.773.539.539 0 01-.307-.773.539.539 0 01-.31-.768.538.538 0 01-.248-.75.539.539 0 01-.25-.856.54.54 0 01-.27-.83.416.416 0 01-.385-.413.42.42 0 01.777-.214.541.541 0 01.152-.192l.01-.008a.474.474 0 01-.439-.316l-.003-.009v.006a.39.39 0 01-.385.319.389.389 0 01-.39-.387.39.39 0 01.756-.136.464.464 0 01.092-.229.464.464 0 01-.011-.08.471.471 0 01-.42-.466c0-.132.057-.252.146-.338a.448.448 0 01-.62-.407c0-.244.2-.442.447-.442.246 0 .446.198.446.442a.438.438 0 01-.133.315.476.476 0 01.291-.028.531.531 0 01.06-.538.513.513 0 01-.529-.701.475.475 0 01-.847-.29c0-.26.213-.47.475-.47a.472.472 0 01.44.642.517.517 0 01.665-.133c.01-.1.05-.193.108-.27a.518.518 0 01-.767-.445.513.513 0 01.614-.502.532.532 0 01-.112-.326.541.541 0 01.65-.528.532.532 0 01-.092-.3.541.541 0 01.693-.519.541.541 0 01.605-.754.555.555 0 01.544-.674zM11.63 19.936a.472.472 0 01.403.718h.016c.25 0 .455.191.473.434a.54.54 0 01.462.532.541.541 0 01-.545.538.541.541 0 01-.541-.59.47.47 0 01-.251-.694h-.017a.472.472 0 01-.474-.469c0-.259.212-.469.474-.469zm7.66 1.463c.184 0 .334.148.334.331 0 .183-.15.331-.335.331a.333.333 0 01-.335-.33c0-.184.15-.332.335-.332zm1.506-.11c.185 0 .335.148.335.33 0 .184-.15.332-.335.332a.333.333 0 01-.335-.331c0-.183.15-.331.335-.331zm1.27-.249c.192 0 .348.155.348.345 0 .19-.156.345-.349.345a.347.347 0 01-.348-.345c0-.19.156-.345.348-.345zm-2.024.028c.185 0 .335.148.335.331 0 .183-.15.331-.335.331a.333.333 0 01-.334-.331c0-.183.15-.331.334-.331zm-1.506-.166c.216 0 .39.173.39.387a.389.389 0 01-.39.386.389.389 0 01-.39-.386c0-.214.174-.387.39-.387zm2.943-.359c.193 0 .35.155.35.345 0 .19-.157.345-.35.345a.347.347 0 01-.348-.345c0-.19.156-.345.348-.345zm-15.133.17a.6.6 0 01-.08.204c.069.053.128.118.175.192a.734.734 0 01.076-.1.605.605 0 01-.171-.296zm12.748-.39c.216 0 .39.172.39.386a.389.389 0 01-.39.386.389.389 0 01-.39-.386c0-.214.174-.387.39-.387zm-6.64-1.243c.207 0 .376.167.376.373a.37.37 0 01-.14.29.389.389 0 01.374.5.434.434 0 01.673.355.43.43 0 01-.433.428.43.43 0 01-.408-.568.392.392 0 01-.596-.329c0-.123.058-.233.149-.303a.375.375 0 01-.372-.373c0-.206.168-.373.376-.373zm-7.321 1.456l-.002.002a.683.683 0 01-.183.188c.13.064.236.168.302.296a.738.738 0 01.026-.03.6.6 0 01-.143-.456zm15.593-.241c.193 0 .349.154.349.345 0 .19-.156.345-.349.345a.347.347 0 01-.349-.345c0-.19.156-.345.35-.345zm-.767-.138c.216 0 .39.173.39.386a.389.389 0 01-.39.387.389.389 0 01-.39-.387c0-.213.174-.386.39-.386zm1.98-.58a.36.36 0 01.361.399.391.391 0 01.7.236.389.389 0 01-.39.386.389.389 0 01-.388-.437.363.363 0 01-.645-.225.36.36 0 01.363-.359zm-15.554.216a.569.569 0 01-.27.322c.11.084.192.203.225.341a.604.604 0 01.171-.317.56.56 0 01-.126-.329v-.017zm12.15-.299c.217 0 .391.173.391.387a.389.389 0 01-.39.386.389.389 0 01-.39-.386c0-.214.174-.387.39-.387zM4.544 19.32v.001a.681.681 0 01-.017.175h.031a.68.68 0 01.678.762.614.614 0 01.239-.204.562.562 0 01-.187-.578.574.574 0 01-.744-.156zm16.56.01c.215 0 .39.173.39.386a.389.389 0 01-.39.387.389.389 0 01-.39-.387c0-.213.174-.386.39-.386zm-.893-.11c.216 0 .39.172.39.386a.389.389 0 01-.39.386.389.389 0 01-.39-.386c0-.214.174-.387.39-.387zm-.92-.056c.215 0 .39.173.39.387a.389.389 0 01-.39.386.389.389 0 01-.391-.386c0-.214.174-.387.39-.387zm-7.827-.11c.246 0 .446.197.446.441s-.2.442-.446.442a.444.444 0 01-.447-.442c0-.244.2-.441.447-.441zm2.148.055a.32.32 0 01.321.317.32.32 0 01-.32.318.32.32 0 01-.322-.318.32.32 0 01.321-.317zm5.274-.883c.223 0 .404.179.404.4a.405.405 0 01-.708.265.43.43 0 01-.422.522.43.43 0 01-.432-.428.433.433 0 01.762-.277.402.402 0 01.396-.482zm3.683.303c.208 0 .376.167.376.373a.375.375 0 01-.376.373.375.375 0 01-.377-.373c0-.206.169-.373.377-.373zM6.329 18.17a.5.5 0 01.502.497.5.5 0 01-.502.497.5.5 0 01-.502-.497.5.5 0 01.502-.497zm6.543.332a.32.32 0 01.32.317.32.32 0 01-.32.318.32.32 0 01-.321-.318.32.32 0 01.32-.317zm8.747-.166c.208 0 .377.167.377.373a.375.375 0 01-.377.372.375.375 0 01-.377-.372c0-.206.169-.373.377-.373zm-9.793-.11c.215 0 .39.173.39.386a.389.389 0 01-.39.386.389.389 0 01-.391-.386c0-.213.175-.386.39-.386zm-7.61.21a.678.678 0 01-.181.254.684.684 0 01.397.283.564.564 0 01.257-.461.62.62 0 01-.473-.077zm16.454-.21c.208 0 .377.166.377.372a.375.375 0 01-.377.373.375.375 0 01-.376-.373c0-.206.168-.372.376-.372zm-.92-.056c.223 0 .404.18.404.4 0 .222-.181.4-.404.4a.402.402 0 01-.405-.4c0-.22.181-.4.405-.4zm-3.046.392l-.001.006a.574.574 0 01-.074.164c.072.028.136.07.188.124a.454.454 0 01.152-.247.48.48 0 01-.265-.047zm-3.218-.364c.17 0 .307.136.307.304a.305.305 0 01-.307.303.305.305 0 01-.307-.303c0-.168.137-.304.307-.304zm-3.32-.497c.223 0 .404.18.404.4 0 .221-.181.4-.404.4a.402.402 0 01-.405-.4c0-.22.181-.4.405-.4zm.99.028c.216 0 .39.173.39.386a.389.389 0 01-.39.387.389.389 0 01-.39-.387c0-.213.174-.386.39-.386zm1.283-.055c.2 0 .363.16.363.358a.36.36 0 01-.363.36.36.36 0 01-.362-.36.36.36 0 01.362-.358zm-5.175-.138a.43.43 0 01.432.427.43.43 0 01-.432.428.43.43 0 01-.433-.428.43.43 0 01.433-.427zm-1.577-.139a.5.5 0 01.503.497.5.5 0 01-.503.497.5.5 0 01-.502-.497.5.5 0 01.502-.497zm16.406-.11c.224 0 .405.18.405.4 0 .221-.181.4-.405.4a.402.402 0 01-.404-.4c0-.22.18-.4.404-.4zm-8.97.193c.154 0 .279.124.279.276a.278.278 0 01-.279.276.278.278 0 01-.279-.276c0-.152.125-.276.279-.276zm8.022-.276c.223 0 .404.18.404.4 0 .222-.181.4-.404.4a.402.402 0 01-.405-.4c0-.22.181-.4.405-.4zm-4.761.588a.569.569 0 01-.018.093c.042.018.082.04.118.067a.47.47 0 01.1-.144.535.535 0 01-.2-.016zm3.84-.67c.223 0 .404.179.404.4 0 .22-.18.4-.404.4a.402.402 0 01-.405-.4c0-.221.181-.4.405-.4zm-8.343 0c.2 0 .363.16.363.358a.36.36 0 01-.363.36.36.36 0 01-.362-.36.36.36 0 01.362-.359zm-5.259-.277a.43.43 0 01.433.428.43.43 0 01-.433.428.43.43 0 01-.432-.428.43.43 0 01.432-.428zm4.394.083c.2 0 .363.16.363.36a.36.36 0 01-.363.358.36.36 0 01-.362-.359.36.36 0 01.362-.359zm-.948-.027c.2 0 .363.16.363.358a.36.36 0 01-.363.36.36.36 0 01-.363-.36.36.36 0 01.363-.358zm-.893 0c.2 0 .363.16.363.358a.36.36 0 01-.363.36.36.36 0 01-.363-.36.36.36 0 01.363-.358zm-.92-.028c.2 0 .362.16.362.359a.36.36 0 01-.363.359.36.36 0 01-.362-.36.36.36 0 01.362-.358zm4.31-.028c.154 0 .279.124.279.276a.278.278 0 01-.279.276.278.278 0 01-.279-.276c0-.152.125-.276.279-.276zm-4.98-.524c.2 0 .362.16.362.359a.36.36 0 01-.362.359.36.36 0 01-.363-.36.36.36 0 01.363-.358zm9.126.368l-.003.005a.485.485 0 01-.062.082.53.53 0 01.337.244.473.473 0 01.2-.222.493.493 0 01-.472-.109zm-4.871-.285c.154 0 .279.123.279.276a.278.278 0 01-.28.276.278.278 0 01-.278-.276c0-.153.124-.276.279-.276zm9.737-.331c.231 0 .419.185.419.414a.416.416 0 01-.419.414.416.416 0 01-.418-.414c0-.23.187-.414.418-.414zm-.92-.056c.23 0 .418.186.418.414a.416.416 0 01-.419.414.416.416 0 01-.418-.414c0-.228.187-.414.418-.414zm-11.329.166c.155 0 .28.124.28.276a.278.278 0 01-.28.276.278.278 0 01-.279-.276c0-.152.125-.276.28-.276zm1.675 0c.154 0 .279.124.279.276a.278.278 0 01-.28.276.278.278 0 01-.278-.276c0-.152.124-.276.279-.276zm-.837 0c.154 0 .279.124.279.276a.278.278 0 01-.28.276.278.278 0 01-.279-.276c0-.152.125-.276.28-.276zm-1.59-.304c.153 0 .278.124.278.276a.278.278 0 01-.279.276.278.278 0 01-.279-.276c0-.152.125-.276.28-.276zm7.833.01v.003a.476.476 0 01-.022.08c.09.018.17.06.235.119a.488.488 0 01.192-.183.591.591 0 01-.405-.02zm-7.778-.81c.154 0 .279.123.279.276a.278.278 0 01-.28.276.278.278 0 01-.278-.276c0-.153.125-.276.279-.276zm.335-.773c.154 0 .279.123.279.276a.278.278 0 01-.28.276.278.278 0 01-.278-.276c0-.153.125-.276.279-.276zm-3.903-.083a.684.684 0 01-.05.05c.137.036.255.12.336.23a.517.517 0 01.126-.114.601.601 0 01-.412-.166zm4.238-.69c.154 0 .279.124.279.276a.278.278 0 01-.28.276.278.278 0 01-.278-.276c0-.152.124-.276.279-.276zm.348-.773c.162 0 .293.13.293.29 0 .16-.13.29-.293.29a.291.291 0 01-.293-.29c0-.16.132-.29.293-.29zm-.558-.58c.2 0 .363.161.363.36a.36.36 0 01-.363.358.36.36 0 01-.362-.359.36.36 0 01.362-.359zm.935-.193c.17 0 .307.136.307.304a.305.305 0 01-.307.303.305.305 0 01-.307-.303c0-.168.137-.304.307-.304zm-.572-.635c.2 0 .363.161.363.36a.36.36 0 01-.363.358.36.36 0 01-.363-.359.36.36 0 01.363-.359zm.893-.138a.32.32 0 01.32.318.32.32 0 01-.32.317.32.32 0 01-.321-.317.32.32 0 01.32-.318zm-.544-.69c.208 0 .376.167.376.373a.375.375 0 01-.376.373.375.375 0 01-.377-.373c0-.206.169-.373.377-.373zm.879-.083a.32.32 0 01.32.318.32.32 0 01-.32.317.32.32 0 01-.321-.317.32.32 0 01.32-.318zM5.84 8.343c.217 0 .408.108.52.274a.605.605 0 01.72.313.561.561 0 01.72.326.506.506 0 01.676.444.46.46 0 01.488.258.419.419 0 01.796.179.419.419 0 01-.79.191.46.46 0 01-.424.278.459.459 0 01-.457-.4.51.51 0 01-.566-.264.56.56 0 01-.73-.22.603.603 0 01-.732-.177.624.624 0 01-.849-.581c0-.343.281-.621.628-.621zm4.352 1.352c.208 0 .377.167.377.373a.375.375 0 01-.377.372.375.375 0 01-.376-.372c0-.206.168-.373.376-.373zm5.82.237l-.008.002a.581.581 0 01-.157.007.607.607 0 01-.255.391.605.605 0 01.182.011.55.55 0 01.237-.41zm-4.983-.264c.185 0 .335.148.335.33 0 .184-.15.332-.335.332a.333.333 0 01-.334-.331c0-.183.15-.331.334-.331zM6.4 7.1c.242 0 .452.136.557.334a.6.6 0 01.624.397.529.529 0 01.636.406.505.505 0 01.68.464c0 .021-.001.041-.004.061a.46.46 0 01.504.288.42.42 0 01.783.203.419.419 0 01-.803.164.46.46 0 01-.87-.231.501.501 0 01-.6-.362.533.533 0 01-.682-.243.604.604 0 01-.723-.247.624.624 0 01-.73-.613c0-.343.281-.62.628-.62zm4.185 1.767c.208 0 .377.167.377.373a.375.375 0 01-.377.372.375.375 0 01-.377-.372c0-.206.169-.373.377-.373zm.851.028c.193 0 .349.154.349.345 0 .19-.156.345-.349.345a.347.347 0 01-.349-.345c0-.19.156-.345.349-.345zm.781-.056c.193 0 .349.155.349.345 0 .191-.156.345-.349.345a.347.347 0 01-.349-.345c0-.19.157-.345.35-.345zm3.435.029l-.005.001a.548.548 0 01-.153.025.557.557 0 01-.017.103.573.573 0 01.175-.13zm-4.676-.83c.208 0 .376.168.376.374a.375.375 0 01-.376.372.375.375 0 01-.377-.372c0-.206.169-.373.377-.373zM6.873 5.914a.6.6 0 01.556.37.599.599 0 01.701.46.528.528 0 01.566.453.5.5 0 01.61.573h.008a.46.46 0 01.503.293.42.42 0 01.725.28.419.419 0 01-.802.165.461.461 0 01-.813-.343.5.5 0 01-.609-.394.535.535 0 01-.646-.325.6.6 0 01-.685-.356.597.597 0 01-.714-.583c0-.327.269-.593.6-.593zm4.883 1.74c.208 0 .377.166.377.372a.375.375 0 01-.377.373.375.375 0 01-.377-.373c0-.206.169-.373.377-.373zM7.403 4.725a.6.6 0 01.573.416.572.572 0 01.613.557.528.528 0 01.611.464l.03-.001a.5.5 0 01.472.668.458.458 0 01.528.513.419.419 0 01.786.199.416.416 0 01-.418.414.416.416 0 01-.415-.464.46.46 0 01-.848-.347.507.507 0 01-.6-.407.528.528 0 01-.59-.48.578.578 0 01-.662-.35.597.597 0 01-.68-.588c0-.328.269-.594.6-.594zm7.13 2.647l-.007.006a.805.805 0 01-.078.06l.061.034h.04a.371.371 0 01-.017-.1zm-3.112-.797a.43.43 0 01.433.428.43.43 0 01-.433.428.43.43 0 01-.432-.428.43.43 0 01.432-.428zM7.933 3.54c.29 0 .53.202.588.471a.569.569 0 01.622.638.513.513 0 01.585.582.5.5 0 01.592.489.491.491 0 01-.095.29.462.462 0 01.652.414.458.458 0 01-.46.456.458.458 0 01-.46-.456.45.45 0 01.08-.257.504.504 0 01-.718-.512.513.513 0 01-.617-.528.577.577 0 01-.68-.407.597.597 0 01-.689-.587c0-.328.27-.593.6-.593zm3.39 1.932c.262 0 .475.21.475.469 0 .26-.213.47-.475.47a.472.472 0 01-.474-.47c0-.26.212-.47.474-.47zm1.033-.083a.5.5 0 01.502.497.5.5 0 01-.502.497.5.5 0 01-.502-.497.5.5 0 01.502-.497zm-3.67-2.954a.597.597 0 01.599.64.569.569 0 01.607.762.527.527 0 01.679.504.518.518 0 01-.09.29.504.504 0 01.759.427.5.5 0 01-.503.497.5.5 0 01-.502-.497c0-.1.03-.192.08-.27a.532.532 0 01-.805-.448c0-.058.01-.114.027-.167a.569.569 0 01-.752-.559.597.597 0 01-.698-.586c0-.327.268-.593.6-.593zm6.07-.607c.307 0 .557.247.557.552a.555.555 0 01-.815.49c.057.085.09.187.09.297a.541.541 0 01-.711.512.533.533 0 01.125.344.541.541 0 01-.707.513c.109.099.177.24.177.398a.541.541 0 01-.544.538.541.541 0 01-.544-.538.541.541 0 01.707-.514.534.534 0 01-.177-.397.541.541 0 01.71-.513.533.533 0 01-.124-.343.541.541 0 01.792-.48.545.545 0 01-.095-.307c0-.305.25-.552.558-.552zm-2.944 2.457c.285 0 .516.228.516.51 0 .283-.231.511-.516.511a.513.513 0 01-.517-.51c0-.283.232-.511.517-.511zm-2.065-2.65a.569.569 0 01.51.823.569.569 0 01.732.543.56.56 0 01-.122.348.546.546 0 01.791.48.541.541 0 01-.544.539.541.541 0 01-.544-.539c0-.122.042-.236.112-.326A.574.574 0 019.845 3c0-.092.022-.18.062-.257a.569.569 0 01-.732-.543c0-.313.256-.566.572-.566zm2.567 1.546c.3 0 .544.24.544.538a.541.541 0 01-.544.538.541.541 0 01-.544-.538c0-.297.243-.538.544-.538zm.572-1.022c.308 0 .558.248.558.552 0 .305-.25.552-.558.552a.555.555 0 01-.558-.552c0-.304.25-.552.558-.552zm-1.256-.055c.308 0 .558.247.558.552 0 .305-.25.552-.558.552a.555.555 0 01-.558-.552c0-.305.25-.552.558-.552zm1.925-.883c.309 0 .559.247.559.552 0 .305-.25.552-.559.552a.555.555 0 01-.558-.552c0-.305.25-.552.558-.552zm-2.608-.083c.316 0 .572.253.572.566a.569.569 0 01-.572.566.569.569 0 01-.572-.566c0-.313.256-.566.572-.566zM12.272 1c.308 0 .558.247.558.552 0 .305-.25.552-.558.552a.555.555 0 01-.558-.552c0-.305.25-.552.558-.552z"></path>
    </svg>
  );
});

export default Icon;
