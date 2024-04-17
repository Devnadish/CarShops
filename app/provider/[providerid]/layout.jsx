import { ProviderNav } from "./ProviderNav"
import { FlaotHome } from "./FlaotHome"
import ProviderFooter from "./ProviderFooter"

export default function providerLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section className="flex w-full h-scrren items-center justify-center flex-col">
        <ProviderNav/>
        {/* <FlaotHome/> */}
        {children}
        <ProviderFooter/>
      </section>
    )
  }



