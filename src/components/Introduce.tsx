import React from 'react';
import SmoothLink from '@/src/components/Atoms/SmoothLink';

const Introduce = () => {
  return (
    <div id="introduce" className={'flex flex-col w-full items-center bg-black px-72 py-60 gap-[52px]'}>
      <div className={'flex text-white text-6xl whitespace-pre-line leading-tight text-center font-bold'}>
        {'가격도 결과물도 천차만별인 개발 외주\n 시행착오 없이, 한 번에 하이퍼디.'}
      </div>
      {/*<Link*/}
      {/*  href="#contact"*/}
      {/*  className={*/}
      {/*    'flex cursor-pointer bg-white text-[#2D6DE4] text-base whitespace-pre-line py-[12px] px-[24px] rounded-3xl'*/}
      {/*  }*/}
      {/*  onClick={handleClick}>*/}
      {/*  문의하기*/}
      {/*</Link>*/}
      <SmoothLink
        href="#contact"
        className={
          'flex cursor-pointer bg-white text-[#2D6DE4] text-base whitespace-pre-line py-[12px] px-[24px] rounded-3xl'
        }
        scrollPosition={'start'}>
        문의하기
      </SmoothLink>
    </div>
  );
};
export default Introduce;
