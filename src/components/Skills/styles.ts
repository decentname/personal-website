import styled from 'styled-components';
import tw from 'tailwind.macro';

// export const Skills = styled.div`
//   ${tw`flex flex-wrap w-full`};
// `;

// export const Skill = styled.div`
//   ${tw`w-full sm:w-1/3 center`};
// `;

export const Skills = styled.div`
${tw`flex items-center justify-center w-full flex-wrap`};
`;

export const Skill = styled.span`
  ${tw`flex items-center justify-center w-40 h-10 text-indigo-500 border border-teal-400 rounded-full mb-2 mx-2`};
`;
