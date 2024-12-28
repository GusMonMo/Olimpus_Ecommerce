import { Hepta_Slab} from 'next/font/google'
import { Xanh_Mono } from 'next/font/google'

export const hepta_slab = Hepta_Slab({
    subsets: ['latin'],
     variable: '--font-logo',
     weight: '300'
  })

export const xanh_mono = Xanh_Mono({
    weight: '400',
    subsets: ['latin'],
     variable: '--font-logo',
  })