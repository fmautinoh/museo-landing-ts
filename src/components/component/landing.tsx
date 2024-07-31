import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { JSX, SVGProps } from "react"
import { useTranslations } from "next-intl"

export function Landing() {
  const t = useTranslations('landing');
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="w-full bg-gray-900 text-white py-12 md:py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                {t('explore_wonders')}
              </h1>
              <p className="text-gray-300 max-w-md">
                {t('immerse_yourself')}
              </p>
              <Button size="lg" className="w-full sm:w-auto bg-slate-700">
                {t('book_visit')}
              </Button>
            </div>
            <img src="/placeholder.svg" width={600} height={400} alt="Museum Exterior" className="rounded-xl" />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-8 md:mb-12">{t('explore_our_musam')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              <Link
                href="#"
                className="group rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl"
                prefetch={false}
              >
                <img
                  src="/placeholder.svg"
                  width={400}
                  height={300}
                  alt="Art Gallery"
                  className="aspect-[4/3] object-cover"
                />
                <div className="p-4 md:p-6">
                  <h3 className="text-lg font-semibold group-hover:underline">{t('art_gallery')}</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {t('art_gallery_desc')}
                  </p>
                </div>
              </Link>
              <Link
                href="#"
                className="group rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl"
                prefetch={false}
              >
                <img
                  src="/placeholder.svg"
                  width={400}
                  height={300}
                  alt="History Exhibits"
                  className="aspect-[4/3] object-cover"
                />
                <div className="p-4 md:p-6">
                  <h3 className="text-lg font-semibold group-hover:underline">{t('history_exhibits')}</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {t('history_exhibits_desc')}
                  </p>
                </div>
              </Link>
              <Link
                href="#"
                className="group rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl"
                prefetch={false}
              >
                <img
                  src="/placeholder.svg"
                  width={400}
                  height={300}
                  alt="Science Center"
                  className="aspect-[4/3] object-cover"
                />
                <div className="p-4 md:p-6">
                  <h3 className="text-lg font-semibold group-hover:underline">{t('science_center')}</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {t('science_center_desc')}
                  </p>
                </div>
              </Link>
              <Link
                href="#"
                className="group rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl"
                prefetch={false}
              >
                <img
                  src="/placeholder.svg"
                  width={400}
                  height={300}
                  alt="Cultural Exhibits"
                  className="aspect-[4/3] object-cover"
                />
                <div className="p-4 md:p-6">
                  <h3 className="text-lg font-semibold group-hover:underline">{t('cultural_exhibits')}</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {t('cultural_exhibits_desc')}
                  </p>
                </div>
              </Link>
              <Link
                href="#"
                className="group rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl"
                prefetch={false}
              >
                <img
                  src="/placeholder.svg"
                  width={400}
                  height={300}
                  alt="Educational Programs"
                  className="aspect-[4/3] object-cover"
                />
                <div className="p-4 md:p-6">
                  <h3 className="text-lg font-semibold group-hover:underline">{t('educational_programs')}</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {t('educational_programs_desc')}
                  </p>
                </div>
              </Link>
              <Link
                href="#"
                className="group rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl"
                prefetch={false}
              >
                <img
                  src="/placeholder.svg"
                  width={400}
                  height={300}
                  alt="Special Exhibitions"
                  className="aspect-[4/3] object-cover"
                />
                <div className="p-4 md:p-6">
                  <h3 className="text-lg font-semibold group-hover:underline">{t('special_exhibitions')}</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {t('special_exhibitions_desc')}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 dark:bg-gray-800 py-12 md:py-14">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-8 md:mb-12 text-gray-200">{t('plan_your_visit')}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-300">{t('book_your_visit')}</h3>
                <form className="space-y-4">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="flex-col items-start w-full h-auto">
                        <span className="font-semibold uppercase text-[0.65rem]">{t('visit_date')}</span>
                        <span className="font-normal">{t('select_date')}</span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0 max-w-[276px]">
                      <Calendar />
                    </PopoverContent>
                  </Popover>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="flex-col items-start w-full h-auto">
                        <span className="font-semibold uppercase text-[0.65rem]">{t('visit_time')}</span>
                        <span className="font-normal">{t('select_time')}</span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0 max-w-[276px]">
                      <div className="grid grid-cols-3 gap-2 p-4">
                        <Button variant="ghost" size="sm">
                          9:00 AM
                        </Button>
                        <Button variant="ghost" size="sm">
                          11:00 AM
                        </Button>
                        <Button variant="ghost" size="sm">
                          1:00 PM
                        </Button>
                        <Button variant="ghost" size="sm">
                          3:00 PM
                        </Button>
                        <Button variant="ghost" size="sm">
                          5:00 PM
                        </Button>
                        <Button variant="ghost" size="sm">
                          7:00 PM
                        </Button>
                      </div>
                    </PopoverContent>
                  </Popover>
                  <Input type="text" placeholder={t('name')} required />
                  <Input type="email" placeholder={t('email')} required />
                  <Textarea placeholder={t('additional_info')} rows={3} />
                  <Button type="submit" className="w-full">
                    {t('book_visit')}
                  </Button>
                </form>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-300">{t('visitor_info')}</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <ClockIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                    <div>
                      <div className="font-semibold text-gray-300">{t('musam_hours')}</div>
                      <div className="text-gray-500 dark:text-gray-400">{t('hours_desc')}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <LocateIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                    <div>
                      <div className="font-semibold text-gray-300">{t('musam_location')}</div>
                      <div className="text-gray-500 dark:text-gray-400">{t('location_desc')}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <TicketIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                    <div>
                      <div className="font-semibold text-gray-300">{t('admission_fees')}</div>
                      <div className="text-gray-500 dark:text-gray-400">
                        {t('fees_desc')}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <AccessibilityIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                    <div>
                      <div className="font-semibold text-gray-300">{t('accessibility')}</div>
                      <div className="text-gray-500 dark:text-gray-400">
                        {t('accessibility_desc')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MountainIcon className="w-6 h-6" />
            <span className="text-sm">MUSAM</span>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
            {t('privacy')}
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
            {t('terms')}
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
            {t('contact')}
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function AccessibilityIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="16" cy="4" r="1" />
      <path d="m18 19 1-7-6 1" />
      <path d="m5 8 3-3 5.5 3-2.36 3.5" />
      <path d="M4.24 14.5a5 5 0 0 0 6.88 6" />
      <path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
    </svg>
  )
}


function ClockIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}


function LocateIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}


function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function TicketIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M13 5v2" />
      <path d="M13 17v2" />
      <path d="M13 11v2" />
    </svg>
  )
}


function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
