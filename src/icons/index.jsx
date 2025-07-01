import * as React from "react"


export function SendMessageIcon(props) {
  return (
    <svg
      viewBox="0 -0.5 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.455 9.883L7.063 4.143a1.048 1.048 0 00-1.563.733.82.82 0 00.08.326l2.169 5.24c.109.348.168.71.176 1.074a3.875 3.875 0 01-.176 1.074L5.58 17.83a.82.82 0 00-.08.326 1.048 1.048 0 001.562.732l11.393-5.74a1.8 1.8 0 000-3.265v0z"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ShareIcon(props) {
  return (
    <svg
      viewBox="-0.5 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.47 4.14c-.73.22-1.19 1.82-1.38 3.77C6.78 7.91 2 13.48 2 20.08c2.19-6 7-7.63 10.14-7.63.2 1.76.65 3.17 1.33 3.37 2.1.61 8.53-3.38 8.53-5.84s-6.43-6.45-8.53-5.84z"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function CommentIcon(props)  {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          d="M12 21a9 9 0 10-9-9c0 1.488.36 2.891 1 4.127L3 21l4.873-1c1.236.64 2.64 1 4.127 1z"
          stroke="#292929"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function LikeIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.975 12.185l-.739-.128.74.128zm-.705 4.08l-.74-.128.74.128zM6.938 20.477l-.747.065.747-.065zm-.812-9.393l.747-.064-.747.064zm7.869-5.863l.74.122-.74-.122zm-.663 4.045l.74.121-.74-.121zm-6.634.411l-.49-.568.49.568zm1.439-1.24l.49.569-.49-.568zm2.381-3.653l-.726-.189.726.189zm.476-1.834l.726.188-.726-.188zm1.674-.886l-.23.714.23-.714zm.145.047l.229-.714-.23.714zM9.862 6.463l.662.353-.662-.353zm4.043-3.215l-.726.188.726-.188zm-2.23-1.116l-.326-.675.325.675zM3.971 21.471l-.748.064.748-.064zM3 10.234l.747-.064a.75.75 0 00-1.497.064H3zm17.236 1.823l-.705 4.08 1.478.256.705-4.08-1.478-.256zm-6.991 9.193H8.596v1.5h4.649v-1.5zm-5.56-.837l-.812-9.393-1.495.129.813 9.393 1.494-.13zm11.846-4.276c-.507 2.93-3.15 5.113-6.286 5.113v1.5c3.826 0 7.126-2.669 7.764-6.357l-1.478-.256zM13.255 5.1l-.663 4.045 1.48.242.663-4.044-1.48-.243zm-6.067 5.146l1.438-1.24-.979-1.136L6.21 9.11l.979 1.136zm4.056-5.274l.476-1.834-1.452-.376-.476 1.833 1.452.377zm1.194-2.194l.145.047.459-1.428-.145-.047-.459 1.428zm-1.915 4.038a8.378 8.378 0 00.721-1.844l-1.452-.377A6.878 6.878 0 019.2 6.11l1.324.707zm2.06-3.991a.885.885 0 01.596.61l1.452-.376a2.385 2.385 0 00-1.589-1.662l-.459 1.428zm-.863.313a.515.515 0 01.28-.33l-.651-1.351c-.532.256-.932.73-1.081 1.305l1.452.376zm.28-.33a.596.596 0 01.438-.03l.459-1.428a2.096 2.096 0 00-1.548.107l.65 1.351zm2.154 8.176h5.18v-1.5h-5.18v1.5zM4.719 21.406L3.747 10.17l-1.494.129.971 11.236 1.495-.129zm-.969.107V10.234h-1.5v11.279h1.5zm-.526.022a.263.263 0 01.263-.285v1.5c.726 0 1.294-.622 1.232-1.344l-1.495.13zM14.735 5.343a5.533 5.533 0 00-.104-2.284l-1.452.377a4.03 4.03 0 01.076 1.664l1.48.243zM8.596 21.25a.916.916 0 01-.911-.837l-1.494.129a2.416 2.416 0 002.405 2.208v-1.5zm.03-12.244c.68-.586 1.413-1.283 1.898-2.19L9.2 6.109c-.346.649-.897 1.196-1.553 1.76l.98 1.137zm13.088 3.307a2.416 2.416 0 00-2.38-2.829v1.5c.567 0 1 .512.902 1.073l1.478.256zM3.487 21.25c.146 0 .263.118.263.263h-1.5c0 .682.553 1.237 1.237 1.237v-1.5zm9.105-12.105a1.583 1.583 0 001.562 1.84v-1.5a.083.083 0 01-.082-.098l-1.48-.242zm-5.72 1.875a.918.918 0 01.316-.774l-.98-1.137a2.418 2.418 0 00-.83 2.04l1.495-.13z"
        fill="#1C274C"
      />
    </svg>
  )
}

export function CloseIcon(props) {
  return (
    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M195.2 195.2a64 64 0 0190.496 0L512 421.504 738.304 195.2a64 64 0 0190.496 90.496L602.496 512 828.8 738.304a64 64 0 01-90.496 90.496L512 602.496 285.696 828.8a64 64 0 01-90.496-90.496L421.504 512 195.2 285.696a64 64 0 010-90.496z" />
    </svg>
  )
}

export function ThreeDotIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g stroke="#1C274C" strokeWidth={1.5}>
        <circle cx={5} cy={12} r={2} />
        <circle cx={12} cy={12} r={2} />
        <circle cx={19} cy={12} r={2} />
      </g>
    </svg>
  )
}

export function PhotoIcon2(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#4CBB17"
      {...props}
    >
      <g strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 11a2 2 0 100-4 2 2 0 000 4zM5.56 21c5.57-9.9 10.2-11.64 15.44-5.21" />
        <path d="M12.28 3H5a4 4 0 00-4 4v10a4 4 0 004 4h12a4 4 0 004-4v-5M18.75 8.83v-8M15.55 4.03l3.2-3.2 3.2 3.2" />
      </g>
    </svg>
  )
}

export function PhotoIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      xmlSpace="preserve"
      fill="#89F336"
      stroke="#89F336"
      {...props}
    >
      <path d="M60 0H4C1.789 0 0 1.789 0 4v56c0 2.211 1.789 4 4 4h56c2.211 0 4-1.789 4-4V4c0-2.211-1.789-4-4-4zM8 8h48v32.688l-9.113-9.113a4.005 4.005 0 00-5.656 0L16.805 56H8V8z" />
      <circle cx={24} cy={24} r={8} />
    </svg>
  )
}

export function ActivityIcon(props) {
  return (
    <svg
      viewBox="0 0 246 246"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#a)">
        <g filter="url(#b)">
          <path
            d="M0 115C0 51.487 51.487 0 115 0h12c65.722 0 119 53.278 119 119v8c0 65.722-53.278 119-119 119h-4C55.069 246 0 190.931 0 123v-8z"
            fill="url(#c)"
          />
        </g>
        <g filter="url(#d)">
          <path
            d="M101.54 115.5c4.12 0 7.541-3.378 6.657-7.402a34.5 34.5 0 00-67.162-.984c-1.138 4.538 2.757 8.386 7.436 8.386 4.385 0 7.792-3.719 9.656-7.689a18.088 18.088 0 0132.29-.902c2.349 4.351 6.18 8.591 11.123 8.591z"
            fill="#C4C4C4"
          />
          <path
            d="M101.54 115.5c4.12 0 7.541-3.378 6.657-7.402a34.5 34.5 0 00-67.162-.984c-1.138 4.538 2.757 8.386 7.436 8.386 4.385 0 7.792-3.719 9.656-7.689a18.088 18.088 0 0132.29-.902c2.349 4.351 6.18 8.591 11.123 8.591z"
            fill="#221725"
          />
        </g>
        <g filter="url(#e)">
          <path
            d="M198.54 115.5c4.12 0 7.541-3.378 6.657-7.402a34.5 34.5 0 00-67.162-.984c-1.138 4.538 2.757 8.386 7.436 8.386 4.385 0 7.792-3.719 9.656-7.689a18.087 18.087 0 0132.291-.902c2.348 4.351 6.178 8.591 11.122 8.591z"
            fill="#C4C4C4"
          />
          <path
            d="M198.54 115.5c4.12 0 7.541-3.378 6.657-7.402a34.5 34.5 0 00-67.162-.984c-1.138 4.538 2.757 8.386 7.436 8.386 4.385 0 7.792-3.719 9.656-7.689a18.087 18.087 0 0132.291-.902c2.348 4.351 6.178 8.591 11.122 8.591z"
            fill="#221725"
          />
        </g>
        <g filter="url(#f)">
          <path
            d="M176.643 145.251L135.5 166.5l32.116 21.452c.252.169.379.253.478.318 12.835 8.39 30.137 2.728 35.529-11.625l.198-.54c.113-.31.17-.466.21-.581 5.316-15.091-6.114-30.835-22.109-30.454-.123.002-.288.008-.618.02l-4.661.161z"
            fill="#C4C4C4"
          />
          <path
            d="M176.643 145.251L135.5 166.5l32.116 21.452c.252.169.379.253.478.318 12.835 8.39 30.137 2.728 35.529-11.625l.198-.54c.113-.31.17-.466.21-.581 5.316-15.091-6.114-30.835-22.109-30.454-.123.002-.288.008-.618.02l-4.661.161z"
            fill="url(#g)"
          />
        </g>
        <path
          d="M160.443 152.907c1.992-2.145 5.745-1.321 7.062 1.293 1.333 2.645 3.243 5.723 5.835 8.352 3.595 3.648 10.227 7.621 14.94 10.207 2.272 1.247 2.368 4.567.124 5.865a4.2 4.2 0 01-4.303-.032c-3.507-2.145-10.503-6.6-14.668-10.437-4.153-3.826-7.489-8.175-9.339-10.79-.974-1.377-.798-3.222.349-4.458z"
          fill="#000"
          fillOpacity={0.21}
        />
        <g filter="url(#h)">
          <mask id="j" fill="#fff">
            <path d="M178.213 126.527c4.734.342 8.341 4.507 7.245 9.125-2.089 8.797-6.256 17.082-12.24 24.226-7.881 9.409-18.56 16.414-30.686 20.13a68.578 68.578 0 01-37.439.747c-9.341-2.456-17.933-6.845-25.164-12.804-3.697-3.047-3.248-8.623.486-11.625 3.414-2.744 8.335-2.293 11.791.399 5.1 3.972 11.055 6.915 17.496 8.608a50.432 50.432 0 0027.527-.549c8.915-2.733 16.767-7.883 22.562-14.802 3.933-4.695 6.799-10.062 8.46-15.768 1.308-4.494 5.294-8.024 9.962-7.687z" />
          </mask>
          <path
            d="M178.213 126.527c4.734.342 8.341 4.507 7.245 9.125-2.089 8.797-6.256 17.082-12.24 24.226-7.881 9.409-18.56 16.414-30.686 20.13a68.578 68.578 0 01-37.439.747c-9.341-2.456-17.933-6.845-25.164-12.804-3.697-3.047-3.248-8.623.486-11.625 3.414-2.744 8.335-2.293 11.791.399 5.1 3.972 11.055 6.915 17.496 8.608a50.432 50.432 0 0027.527-.549c8.915-2.733 16.767-7.883 22.562-14.802 3.933-4.695 6.799-10.062 8.46-15.768 1.308-4.494 5.294-8.024 9.962-7.687z"
            stroke="url(#i)"
            strokeWidth={22}
            strokeLinejoin="round"
            mask="url(#j)"
          />
        </g>
      </g>
      <defs>
        <filter
          id="b"
          x={-11}
          y={-24}
          width={278}
          height={326}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius={8}
            in="SourceAlpha"
            result="effect1_innerShadow_397_2943"
          />
          <feOffset dx={21} dy={73} />
          <feGaussianBlur stdDeviation={24} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 0.682806 0 0 0 0 0.0652778 0 0 0 0 0.783333 0 0 0 0.14 0" />
          <feBlend in2="shape" result="effect1_innerShadow_397_2943" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={-24} />
          <feGaussianBlur stdDeviation={15.5} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 0.943639 0 0 0 0 0.223611 0 0 0 0 0.958333 0 0 0 0.44 0" />
          <feBlend
            in2="effect1_innerShadow_397_2943"
            result="effect2_innerShadow_397_2943"
          />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={-11} dy={30} />
          <feGaussianBlur stdDeviation={15.5} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.766722 0 0 0 0 0.693056 0 0 0 0.68 0" />
          <feBlend
            in2="effect2_innerShadow_397_2943"
            result="effect3_innerShadow_397_2943"
          />
        </filter>
        <filter
          id="d"
          x={40.8352}
          y={81}
          width={67.5018}
          height={34.5}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius={26.45}
            operator="dilate"
            in="SourceAlpha"
            result="effect1_innerShadow_397_2943"
          />
          <feOffset dx={9.2} dy={-7} />
          <feGaussianBlur stdDeviation={10.35} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 0.462111 0 0 0 0 0.203767 0 0 0 0 0.504167 0 0 0 0.35 0" />
          <feBlend in2="shape" result="effect1_innerShadow_397_2943" />
        </filter>
        <filter
          id="e"
          x={137.835}
          y={81}
          width={67.5018}
          height={34.5}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius={26.45}
            operator="dilate"
            in="SourceAlpha"
            result="effect1_innerShadow_397_2943"
          />
          <feOffset dx={9.2} dy={-9} />
          <feGaussianBlur stdDeviation={10.35} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 0.462111 0 0 0 0 0.203767 0 0 0 0 0.504167 0 0 0 0.35 0" />
          <feBlend in2="shape" result="effect1_innerShadow_397_2943" />
        </filter>
        <filter
          id="f"
          x={132.234}
          y={134.175}
          width={73.1166}
          height={62.3635}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4.35512} />
          <feGaussianBlur stdDeviation={5.4439} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="shape" result="effect1_innerShadow_397_2943" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={-3.26634} dy={4.35512} />
          <feGaussianBlur stdDeviation={2.17756} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.29 0" />
          <feBlend
            in2="effect1_innerShadow_397_2943"
            result="effect2_innerShadow_397_2943"
          />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={-10.8878} />
          <feGaussianBlur stdDeviation={5.4439} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 0.828932 0 0 0 0 0.0596354 0 0 0 0 0.954167 0 0 0 0.6 0" />
          <feBlend
            in2="effect2_innerShadow_397_2943"
            result="effect3_innerShadow_397_2943"
          />
        </filter>
        <filter
          id="h"
          x={77.3744}
          y={126.505}
          width={108.281}
          height={56.4954}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius={26.45}
            operator="dilate"
            in="SourceAlpha"
            result="effect1_innerShadow_397_2943"
          />
          <feOffset dy={-20} />
          <feGaussianBlur stdDeviation={7} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 0.3625 0 0 0 0 0.3625 0 0 0 0 0.3625 0 0 0 0.97 0" />
          <feBlend in2="shape" result="effect1_innerShadow_397_2943" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius={26.45}
            operator="dilate"
            in="SourceAlpha"
            result="effect2_innerShadow_397_2943"
          />
          <feOffset dx={9.2} dy={-9} />
          <feGaussianBlur stdDeviation={10.35} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 0.462111 0 0 0 0 0.203767 0 0 0 0 0.504167 0 0 0 0.35 0" />
          <feBlend
            in2="effect1_innerShadow_397_2943"
            result="effect2_innerShadow_397_2943"
          />
        </filter>
        <radialGradient
          id="c"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(86.517 45.998 65.918) scale(230.426)"
        >
          <stop offset={0.576389} stopColor="#FFBB0C" />
          <stop offset={1} stopColor="#FFC907" />
        </radialGradient>
        <radialGradient
          id="g"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(21.30728 45.3923 -37.5538 17.62787 158.989 162.419)"
        >
          <stop stopColor="#FC4141" />
          <stop offset={1} stopColor="#FF0F0F" />
        </radialGradient>
        <linearGradient
          id="i"
          x1={87.398}
          y1={115.298}
          x2={127.504}
          y2={179.893}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#402C41" />
          <stop offset={1} stopColor="#0C0B0E" />
        </linearGradient>
        <clipPath id="a">
          <path fill="#fff" d="M0 0H246V246H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function LiveIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="#FF2C2C"
      {...props}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M16 4a1 1 0 011 1v4.2l5.213-3.65a.5.5 0 01.787.41v12.08a.5.5 0 01-.787.41L17 14.8V19a1 1 0 01-1 1H2a1 1 0 01-1-1V5a1 1 0 011-1h14zM7.4 8.829a.4.4 0 00-.392.32L7 9.228v5.542a.4.4 0 00.542.374l.073-.036 4.355-2.772a.4.4 0 00.063-.624l-.063-.05L7.615 8.89a.4.4 0 00-.215-.06z" />
    </svg>
  )
}

export function GroupIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 6a3 3 0 100 6 3 3 0 000-6zm-5 3a5 5 0 118.654 3.413 8.095 8.095 0 014.172 3.12 1 1 0 01-1.652 1.126C21.198 15.227 19.418 14 17 14c-3.834 0-6 3.074-6 5a1 1 0 11-2 0c0-.692.158-1.43.46-2.157a1.003 1.003 0 01-.211-.183C8.428 15.726 7.154 15 5.5 15s-2.928.726-3.749 1.66A1 1 0 01.25 15.34a6.872 6.872 0 012.108-1.62 4.5 4.5 0 116.286 0 6.871 6.871 0 011.865 1.358 8.1 8.1 0 012.484-2.083A4.992 4.992 0 0111 9zm-8 1.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z"
        fill="#000"
      />
    </svg>
  )
}

export function SaveIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15 19.893c2.172-.158 3.799-.47 4.111-.782.445-.444.889-3.555.889-7.111 0-.631-.038-1.576-.068-2.236a1.975 1.975 0 00-.58-1.305l-3.811-3.812a1.976 1.976 0 00-1.305-.579C13.576 4.038 12.631 4 12 4c-3.556 0-6.667.444-7.111.889C4.444 5.333 4 8.444 4 12c0 3.556.444 6.667.889 7.111.312.312 1.939.624 4.111.782m6 0A41.72 41.72 0 0112 20a41.72 41.72 0 01-3-.107m6 0V18s0-3-3-3-3 3-3 3v1.893"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function MemoriesIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g stroke="#1C274C" strokeWidth={1.5} strokeLinecap="round">
        <path d="M12 8v4l2.5 2.5" strokeLinejoin="round" />
        <path d="M7 3.338A9.954 9.954 0 0112 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5" />
      </g>
    </svg>
  )
}

export function DropdownArrow(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.707 14.707a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L12 12.586l4.293-4.293a1 1 0 111.414 1.414l-5 5z"
        fill="#000"
      />
    </svg>
  )
}

export function BellIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.313 12.463C6.2 9.293 8.61 6.625 11.701 6.5c3.091.125 5.501 2.792 5.388 5.963 0 1.317 1.395 2.6 1.436 3.92v.056c.03.846-.613 1.557-1.437 1.59h-3.112a2.583 2.583 0 01-.666 1.747 2.162 2.162 0 01-1.609.724 2.162 2.162 0 01-1.609-.724 2.582 2.582 0 01-.666-1.747H6.313c-.824-.033-1.467-.744-1.437-1.59v-.056c.042-1.316 1.437-2.602 1.437-3.92z"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.426 17.279a.75.75 0 000 1.5v-1.5zm4.55 1.5a.75.75 0 000-1.5v1.5zm-1.3-13.529a.75.75 0 000-1.5v1.5zm-1.95-1.5a.75.75 0 000 1.5v-1.5zm-1.3 15.029h4.55v-1.5h-4.55v1.5zm3.25-15.029h-1.95v1.5h1.95v-1.5z"
        fill="#000"
      />
    </svg>
  )
}


export function MsgIcon(props) {
  return (
    <svg
      viewBox="0 0 192 192"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <g
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={12}
        clipPath="url(#a)"
      >
        <path d="M148.326 43.674c-28.899-28.899-75.753-28.899-104.652 0-25.014 25.014-28.377 63.481-10.087 92.112l-4.336 22.272c-.542 2.784 1.907 5.233 4.691 4.691l22.272-4.336c28.631 18.29 67.098 14.927 92.112-10.087 28.899-28.899 28.899-75.753 0-104.652z" />
        <path
          strokeLinecap="round"
          d="M131.355 83.272l-24.041 24.042-21.92-21.92-24.042 24.041"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h192v192H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function MenuIcon(props) {
  return (
    <svg viewBox="0 -0.5 21 21" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M101.9 57.009c0 .551-.518.991-1.097.991h-3.15a.98.98 0 01-1.003-.991v-3A.994.994 0 0197.653 53h3.15c.58 0 1.097.458 1.097 1.009v3zM100.803 51h-3.15c-1.74 0-3.103 1.352-3.103 3.009v3c0 1.657 1.363 2.991 3.103 2.991h3.15c1.74 0 3.197-1.334 3.197-2.991v-3c0-1.657-1.457-3.009-3.197-3.009zM90.35 57.009c0 .551-.518.991-1.097.991h-3.15a.98.98 0 01-1.003-.991v-3A.994.994 0 0186.103 53h3.15c.58 0 1.097.458 1.097 1.009v3zM89.253 51h-3.15C84.363 51 83 52.352 83 54.009v3C83 58.666 84.363 60 86.103 60h3.15c1.74 0 3.197-1.334 3.197-2.991v-3c0-1.657-1.457-3.009-3.197-3.009zm12.647-4.991c0 .551-.518.991-1.097.991h-3.15a.98.98 0 01-1.003-.991v-3A.994.994 0 0197.653 42h3.15c.58 0 1.097.458 1.097 1.009v3zM100.803 40h-3.15c-1.74 0-3.103 1.352-3.103 3.009v3c0 1.657 1.363 2.991 3.103 2.991h3.15c1.74 0 3.197-1.334 3.197-2.991v-3c0-1.657-1.457-3.009-3.197-3.009zM90.35 46.009c0 .551-.518.991-1.097.991h-3.15a.98.98 0 01-1.003-.991v-3A.994.994 0 0186.103 42h3.15c.58 0 1.097.458 1.097 1.009v3zM89.253 40h-3.15C84.363 40 83 41.352 83 43.009v3C83 47.666 84.363 49 86.103 49h3.15c1.74 0 3.197-1.334 3.197-2.991v-3c0-1.657-1.457-3.009-3.197-3.009z"
        transform="translate(-139 -200) translate(56 160)"
        fill="#000"
        stroke="none"
        strokeWidth={1}
        fillRule="evenodd"
      />
    </svg>
  )
}

export function FriendIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 18a6.002 6.002 0 018.018-5.652c.343.122.671.275.982.455A5.965 5.965 0 0115 12a6.002 6.002 0 016 6v3h-5.25v-1.5h3.75V18a4.5 4.5 0 00-6.188-4.172A5.98 5.98 0 0115 18v3H3v-3zm6-6.75A3.748 3.748 0 015.25 7.5 3.75 3.75 0 0112 5.25a3.75 3.75 0 110 4.5 3.733 3.733 0 01-3 1.5zM13.5 18v1.5h-9V18a4.5 4.5 0 119 0zM11.25 7.5a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zM15 5.25a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
        fill="#080341"
      />
    </svg>
  )
}

export function MarketIcon(props) {
  return (
    <svg
      fill="#000"
      viewBox="0 0 200 200"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M181.75 42.5c-3-13-15-22.5-29-22.5h-105a30.6 30.6 0 00-29.5 22.5l-10.5 40c-2 7 1 14 7 18l2 1.5c3 1.5 5.5 3 8.5 3.5V160a20.06 20.06 0 0020 20h23.5a20.06 20.06 0 0020-20v-20h27.5v20a20.06 20.06 0 0020 20h19a20.06 20.06 0 0020-20v-54.5a22.09 22.09 0 008-3l2-1.5a16.87 16.87 0 007-18.5zM156.25 160h-20v-20a20.06 20.06 0 00-20-20h-27.5a20.06 20.06 0 00-20 20v20h-23.5v-60c6.5-2.5 13.5-1.5 19.5 2a21.07 21.07 0 0024 0 21.07 21.07 0 0124 0 21.07 21.07 0 0024 0 20.87 20.87 0 0119.5-2zm14.5-74.5a40.69 40.69 0 00-46 0 .94.94 0 01-1.5 0 40.69 40.69 0 00-46 0 .94.94 0 01-1.5 0 40.69 40.69 0 00-46 0 .94.94 0 01-1.5 0l9.5-38c1-4.5 5-7.5 10-7.5h105.5a9.64 9.64 0 019.5 7.5l9.5 38s-1 .5-1.5 0z" />
    </svg>
  )
}

export function PlayIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3 12v6.967c0 2.31 2.534 3.769 4.597 2.648l3.203-1.742M3 8V5.033c0-2.31 2.534-3.769 4.597-2.648l12.812 6.968a2.998 2.998 0 010 5.294l-6.406 3.484"
        stroke="#1C274C"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  )
}




export function HomeIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g stroke="#1C274C" strokeWidth={1.5}>
        <path
          d="M22 22H2M2 11l8.126-6.5a3 3 0 013.748 0L22 11"
          strokeLinecap="round"
        />
        <path
          opacity={0.5}
          d="M15.5 5.5v-2A.5.5 0 0116 3h2.5a.5.5 0 01.5.5v5"
          strokeLinecap="round"
        />
        <path d="M4 22V9.5M20 22V9.5" strokeLinecap="round" />
        <path
          opacity={0.5}
          d="M15 22v-5c0-1.414 0-2.121-.44-2.56C14.122 14 13.415 14 12 14c-1.414 0-2.121 0-2.56.44C9 14.878 9 15.585 9 17v5M14 9.5a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </g>
    </svg>
  )
}



export function SearchIcon(props) {
  return (
    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"   {...props}>
      <g
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="2.5"
        fill="none"
        stroke="currentColor"

      >
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.3-4.3"></path>
      </g>
    </svg>
  )

}


export function FakebookLogo(props) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={16} cy={16} r={14} fill="url(#a)" />
      <path
        d="M21.214 20.282l.622-3.952h-3.89v-2.563c0-1.081.542-2.136 2.284-2.136H22V8.267S20.395 8 18.86 8c-3.205 0-5.298 1.893-5.298 5.318v3.012H10v3.952h3.562v9.552a14.468 14.468 0 004.383 0v-9.552h3.269z"
        fill="#fff"
      />
      <defs>
        <linearGradient
          id="a"
          x1={16}
          y1={2}
          x2={16}
          y2={29.917}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#18ACFE" />
          <stop offset={1} stopColor="#0163E0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export const FakebookTitle = (props) => {
  return (
    <svg
      width="300"
      height="50"
      viewBox="0 0 300 50"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <text
        x="0"
        y="40"
        fontFamily="Arial, sans-serif"
        fontSize="40"
        fontWeight="bold"
        fill="#1877F2"
      >
        Fakebook CC20
      </text>
    </svg>
  );
};
