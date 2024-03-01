import Image from 'next/image'

export default function HeroImage() {
  return (
    <figure className='md:rounded-lg overflow-hidden'>
        <Image src="/image-omelette.jpeg" width={744} height={512} alt='omelette image'/>
    </figure>
  )
}
