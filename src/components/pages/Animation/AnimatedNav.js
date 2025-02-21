// "use client";

// import Link from 'next/link';

// const CustomLink = ({href, title, className=""}) => {
//   const router = useRouter();

//   return (
//     <Link href={href} className={`${className} relative group`}>
//       {title} 
//       <span className={`h-[1px] inline-block bg-light absolute
//        left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
//       </Link>
//   )
// }

// export const AnimatedNav = () => {
//   return (
//     <div className="flex gap-5 justify-center items-center text-white lg:hidden text-2xl font-semibold">
//       <CustomLink href="/" title="Home" />
//       <CustomLink href="/about" title="About" />
//       <CustomLink href="/projects" title="Projects" />
//     </div>
  
//   );
// };
