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
      style={{ flex: 'none', lineHeight: 1, width: 'fit-content', ...style }}
      viewBox="0 0 121 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M2 19.913V2h2.49v15.516h9.182v2.397H2zm14.655-9.385c.503-2.6 2.717-4.29 5.534-4.29 3.245 0 5.383 1.893 5.383 5.601v5.072c0 .58.252.832.805.832h.579v2.17h-.705c-1.61 0-2.565-.858-2.817-2.044-.503 1.237-2.063 2.347-4.15 2.347-2.692 0-4.855-1.413-4.855-3.81 0-2.775 2.037-3.557 5.106-4.138l3.597-.706c-.025-2.044-1.182-3.053-2.968-3.053-1.51 0-2.616.908-2.918 2.195l-2.59-.176zm2.34 5.828c.025.933.83 1.715 2.59 1.715 2.013 0 3.598-1.413 3.598-3.81v-.58l-2.868.505c-1.861.328-3.32.48-3.32 2.17zM32.29 6.54h2.24l.075 2.246c.704-1.716 2.188-2.548 3.974-2.548 2.968 0 4.427 2.194 4.427 5.07v8.604h-2.44V11.94c0-2.371-.78-3.607-2.616-3.607-1.937 0-3.22 1.236-3.22 3.607v7.973h-2.44V6.54zM52.13 19.206c-3.296 0-5.635-2.649-5.635-6.408 0-3.885 2.34-6.56 5.635-6.56 1.786 0 3.345.96 3.949 2.347l.025-2.044h2.34V18.45c-.026 3.658-2.34 5.55-5.912 5.55-2.918 0-5.03-1.539-5.66-3.86l2.566-.177c.528 1.16 1.56 1.842 3.094 1.842 2.163 0 3.446-.984 3.471-2.826v-1.993c-.679 1.287-2.289 2.22-3.873 2.22zm-3.07-6.433c0 2.523 1.334 4.289 3.522 4.289 2.139 0 3.447-1.766 3.472-4.29.05-2.497-1.283-4.263-3.472-4.263-2.188 0-3.521 1.766-3.521 4.264zM65.3 5.96C65.3 3.489 66.532 2 69.25 2h3.672v2.17h-3.723c-.855 0-1.459.656-1.459 1.74V7.4h5.006v2.169H67.74v10.344H65.3V9.569h-3.496v-2.17h3.496V5.961zm22.63 13.952h-2.315l-.025-2.17c-.704 1.665-2.163 2.473-3.874 2.473-2.918 0-4.351-2.195-4.351-5.072V6.541h2.44v7.973c0 2.371.78 3.608 2.54 3.608 1.887 0 3.144-1.237 3.144-3.608V6.54h2.44v13.372zm12.844-9.184c-.277-1.412-1.585-2.22-3.144-2.22-1.283 0-2.465.63-2.44 1.867 0 1.337 1.61 1.64 3.094 2.018 2.54.631 5.081 1.565 5.081 4.062 0 2.624-2.515 3.76-5.282 3.76-3.12 0-5.66-1.766-5.861-4.542l2.565-.151c.252 1.488 1.585 2.422 3.296 2.422 1.333 0 2.716-.353 2.716-1.615 0-1.312-1.685-1.539-3.17-1.892-2.515-.605-5.005-1.539-5.005-3.96 0-2.7 2.415-4.24 5.232-4.24s5.006 1.69 5.434 4.34l-2.516.151zm6.128 2.498c0-4.264 2.44-6.988 6.188-6.988 2.993 0 5.71 1.942 5.911 6.761v.933h-9.508c.2 2.523 1.484 4.012 3.597 4.012 1.333 0 2.54-.782 3.119-2.12l2.59.228c-.754 2.548-3.043 4.163-5.71 4.163-3.747 0-6.187-2.725-6.187-6.989zm2.666-1.261h6.767c-.353-2.549-1.736-3.457-3.245-3.457-1.937 0-3.17 1.287-3.522 3.457z"></path>
    </svg>
  );
});

export default Icon;
