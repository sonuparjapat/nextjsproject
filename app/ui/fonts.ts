import { Inter,Roboto_Mono,Lusitana  } from 'next/font/google';

export const inter=Inter({subsets:["latin"]})
export const lusitana=Lusitana({subsets:["latin"],weight:["400"]})
export const roboto_mono = Roboto_Mono({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto-mono',
  })