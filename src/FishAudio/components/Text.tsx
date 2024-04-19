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
      viewBox="0 0 167 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M2.721 21.578c-.48 0-.721-.2-.721-.598V2.599c0-.4.24-.599.721-.599h15.21c.48 0 .72.2.72.599v2.184c0 .4-.24.599-.72.599H5.998v4.73H16.16c.48 0 .721.2.721.599v2.184c0 .4-.24.599-.721.599H6v7.486c0 .399-.241.598-.722.598H2.721zm36.91.409c-1.826 0-3.514-.236-5.063-.708-.37-.109-.607-.222-.711-.34-.104-.118-.156-.313-.156-.585v-.98c0-.363.162-.545.485-.545.126 0 .35.033.672.099l.3.064c1.64.363 3.12.545 4.438.545 1.157 0 2-.14 2.532-.422.532-.281.798-.712.798-1.293 0-.4-.162-.721-.486-.966-.298-.227-.834-.457-1.605-.69l-3.077-.93c-2.59-.78-3.884-2.05-3.884-3.811 0-1.27.601-2.273 1.803-3.008 1.203-.735 2.81-1.102 4.821-1.102 1.434 0 2.879.19 4.335.571.347.091.578.195.694.313.116.118.173.322.173.613v.953c0 .2-.04.34-.121.421-.08.082-.225.123-.433.123a3.65 3.65 0 01-.498-.067l-.37-.07c-1.456-.271-2.635-.407-3.537-.407-1.064 0-1.844.122-2.341.367-.497.245-.746.63-.746 1.157 0 .4.18.721.538.966.358.245 1 .513 1.925.803l2.67.817c1.387.417 2.387.916 3 1.497.613.58.92 1.316.92 2.205 0 1.361-.625 2.436-1.874 3.226-1.248.79-2.982 1.184-5.202 1.184zm13.432-.409c-.481 0-.721-.2-.721-.598V2.75c0-.4.24-.6.72-.6h2.427c.48 0 .72.2.72.6v5.357c.34-.248 2.597-.985 4.673-.985 2.08 0 4.299.542 5.13 1.24.83.7 1.245 1.711 1.245 3.036v9.582c0 .399-.24.598-.721.598H64.11c-.48 0-.721-.2-.721-.598v-7.594c0-.89-.223-1.825-.656-2.212-.432-.387-1.745-.664-2.706-.664-1.443 0-3.817.303-3.817 1.25v9.22c0 .399-.24.598-.721.598h-2.426zM89.332 2.714c.22 0 .396.046.525.136a.808.808 0 01.265.36l6.453 17.443.073.21.052.164a.86.86 0 01.041.198.308.308 0 01-.124.258.557.557 0 01-.346.095h-2.74c-.204 0-.356-.04-.457-.122-.101-.082-.189-.222-.263-.422L88.032 7.851l-4.751 13.183c-.074.218-.162.363-.263.436-.101.072-.253.108-.456.108h-2.63a.557.557 0 01-.346-.095.308.308 0 01-.125-.258c0-.073.055-.264.166-.572l6.442-17.34c.074-.218.175-.372.304-.463.13-.09.304-.136.526-.136h2.433zm17.306 19.273c-1.551 0-2.748-.359-3.59-1.075-.84-.717-1.261-1.747-1.261-3.09v-9.5c0-.4.24-.599.721-.599h2.426c.48 0 .721.2.721.599v8.547c0 .89.219 1.543.656 1.96.437.418 1.136.626 2.098.626 1.355 0 2.72-.372 4.097-1.116V8.322c0-.4.24-.599.721-.599h2.426c.481 0 .721.2.721.599V20.98c0 .399-.24.598-.72.598h-2.363c-.306 0-.479-.292-.523-.492v-.174c-2.054 1.288-4.097 1.075-6.13 1.075zm20.094-.11c-2.098 0-3.776-.648-5.032-1.945-1.257-1.298-1.885-3.045-1.885-5.24 0-1.507.3-2.818.901-3.934s1.437-1.969 2.508-2.559c1.071-.59 2.306-.884 3.704-.884 1.749 0 3.225.185 4.786.776V2.75c0-.4.24-.599.722-.599h2.425c.481 0 .722.2.722.6v18.23c0 .399-.24.598-.722.598h-2.166c-.48 0-.73-.137-.817-.5v-.303c-1.486 1.09-3.201 1.103-5.146 1.103zm1.213-2.53c1.289 0 2.546-.345 3.77-1.035v-7.486c-1.115-.653-2.35-.98-3.705-.98-1.464 0-2.54.386-3.229 1.157-.688.771-1.032 1.955-1.032 3.552 0 3.194 1.398 4.791 4.196 4.791zm13.495 2.231c-.48 0-.72-.22-.72-.66V7.668c0-.44.24-.66.72-.66h2.426c.481 0 .721.22.721.66v13.25c0 .44-.24.66-.72.66h-2.427zm-117.584 0c-.48 0-.72-.22-.72-.66V7.668c0-.44.24-.66.72-.66h2.426c.481 0 .721.22.721.66v13.25c0 .44-.24.66-.72.66h-2.427zM141.44 5.841c-.48 0-.72-.2-.72-.599V2.599c0-.4.24-.599.72-.599h2.426c.481 0 .721.2.721.599v2.643c0 .4-.24.599-.72.599h-2.427zm-117.584 0c-.48 0-.72-.2-.72-.599V2.599c0-.4.24-.599.72-.599h2.426c.481 0 .721.2.721.599v2.643c0 .4-.24.599-.72.599h-2.427zm133.08 16.146c-2.535 0-4.513-.649-5.933-1.946-1.421-1.298-2.131-3.1-2.131-5.404 0-2.305.71-4.101 2.13-5.39 1.421-1.288 3.399-1.932 5.934-1.932s4.513.644 5.933 1.932c1.42 1.289 2.131 3.085 2.131 5.39 0 2.305-.71 4.106-2.13 5.404-1.421 1.297-3.4 1.946-5.934 1.946zm0-2.532c2.753 0 4.13-1.606 4.13-4.818 0-3.194-1.377-4.79-4.13-4.79-2.754 0-4.13 1.596-4.13 4.79 0 3.212 1.376 4.818 4.13 4.818z"></path>
    </svg>
  );
});

export default Icon;
