import splitbee from '@splitbee/web'
import StyledLink from './StyledLink'
import Link from 'next/link'
import Image from 'next/image'
import Ad from './Ad'

interface AdSpaceProps {
  isMobile?: boolean
}

export default function AdSpace(props: AdSpaceProps ) {
  return (
    <>
      <Link href="https://rewise.ie/" className={props.isMobile ? "border-b-2 hover:border-b-2 border-transparent hover:border-white" : "border-transparent"} >
        <Ad />
        {!props.isMobile && <div className="flex justify-center">
          <span className="translate-y-5 rounded-lg bg-transparent px-4 font-semibold text-white shadow-xl shadow-stone-900 group-hover:translate-y-0">
            Learn More
          </span>
        </div>}
      </Link>
    </>
  )
}
