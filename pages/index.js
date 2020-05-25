import SelectorIcon from 'heroicons/solid/selector.svg'
import DotsHorizontalIcon from 'heroicons/solid/dots-horizontal.svg'
import Link from 'next/link'

function VercelLogo({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 116 100"
      fill="#000"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        cliprule="evenodd"
        d="M57.5 0L115 100H0L57.5 0z"
      />
    </svg>
  )
}

function GithubLogo({ className }) {
  return (
    <svg
    viewBox="0 0 16 16"
    fill="currentColor"
    className={ className }
  >
    <path
      fillRule="evenodd"
      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
    >
    </path>
  </svg>
  )
}

function Avatar({ src, alt = '' }) {
  return (
    <img
      className="h-8 w-8 rounded-full border border-gray-200"
      src={ src }
      alt={ alt }
    />
  )
}

export default function Home() {
  return (
    <div>
      <div className="bg-white">
        <header className="border-b border-gray-200 space-y-2">

          {/* navbar first */}
          <nav className="max-w-5xl mx-auto pt-4 px-6 flex justify-between items-center">
            <div className="flex items-center">
              <Link href="#">
                <a>
                  <VercelLogo className="h-6" />
                </a>
              </Link>
              <span>
                <svg viewBox="0 0 32 32" stroke="currentColor" className="h-8 w-8 text-gray-300">
                  <line x1="10" y1="28" x2="22" y2="4" />
                </svg>
              </span>
              <span className="inline-flex items-center space-x-2 text-sm leading-5 font-medium">
                <Link href="#">
                  <a href="#" className="inline-flex items-center space-x-2">
                    <span>
                      <Avatar
                        src="https://pbs.twimg.com/profile_images/1142761839085834241/DZe_LyGW_400x400.jpg"
                        alt=""
                      />
                    </span>
                    <span>ervinismu</span>
                  </a>
                </Link>

                <button
                  type="button"
                  className="inline-flex border-transparent border rounded p-0.5 hover:border-gray-200 hover:bg-gray-50 ease-in-out duration-200"
                >
                  <SelectorIcon className="h-5 w-5 text-gray-400" />
                </button>

              </span>

            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-5">
                <button
                  type="button"
                  href="#"
                  className="border border-gray-200 rounded p-0.5 text-sm leading-5 text-gray-500 px-3 py-1.5 hover:border-black transition ease-in-out duration-150"
                >
                  <a>Feedback</a>
                </button>
                <Link href="#">
                  <a className="text-sm leading-5 text-gray-500 hover:text-black transition ease-in-out duration-150">Blog</a>
                </Link>
                <Link href="#">
                  <a className="text-sm leading-5 text-gray-500 hover:text-black transition ease-in-out duration-150">Support</a>
                </Link>
                <Link href="#">
                  <a className="text-sm leading-5 text-gray-500 hover:text-black transition ease-in-out duration-150">Docs</a>
                </Link>
              </div>
              <button type="button">
                <DotsHorizontalIcon className="h-5 w-5 text-gray-400" />
              </button>

              <Avatar
                src="https://pbs.twimg.com/profile_images/1142761839085834241/DZe_LyGW_400x400.jpg"
                alt=""
              />

            </div>
          </nav>

          {/* navbar second */}
          <div className="max-w-5xl mx-auto px-6">
            <nav className="-mb-px flex text-sm space-x-5 leading-5">
              <Link href="#">
                <a className="border-b-2 border-black px-0.5 py-3 text-black">Overview</a>
              </Link>
              <Link href="#">
                <a className="border-b-2 border-transparent px-0.5 py-3 text-gray-500 hover:text-black transition ease-in-out duration-150">Projects</a>
              </Link>
              <Link href="#">
                <a className="border-b-2 border-transparent px-0.5 py-3 text-gray-500 hover:text-black transition ease-in-out duration-150">Integrations</a>
              </Link>
              <Link href="#">
                <a className="border-b-2 border-transparent px-0.5 py-3 text-gray-500 hover:text-black transition ease-in-out duration-150">Activity</a>
              </Link>
              <Link href="#">
                <a className="border-b-2 border-transparent px-0.5 py-3 text-gray-500 hover:text-black transition ease-in-out duration-150">Domains</a>
              </Link>
              <Link href="#">
                <a className="border-b-2 border-transparent px-0.5 py-3 text-gray-500 hover:text-black transition ease-in-out duration-150">Usage</a>
              </Link>
              <Link href="#">
                <a className="border-b-2 border-transparent px-0.5 py-3 text-gray-500 hover:text-black transition ease-in-out duration-150">Settings</a>
              </Link>
            </nav>
          </div>
        </header>

        <div className="max-w-5xl mx-auto px-6 mt-12 flex justify-between items-start">

          <div className="grid grid-cols-2 col-gap-6">
            <div>
              <img
                className="h-24 w-24 rounded-full"
                src="https://pbs.twimg.com/profile_images/1142761839085834241/DZe_LyGW_400x400.jpg"
              />
            </div>
            <div className="flex flex-col justify-between space-y-4">
              <div className="flex items-center space-x-3">
                <h1 className="text-4xl font-bold leading-10">
                  ervinismu
                </h1>
                <span
                  className="mt-1 inline-flex rounded-full text-xs leading-5 font-medium text-black bg-gray-50 border border-gray-200 px-2 uppercase tracking-wide"
                >
                  Hobby
                </span>
              </div>

              <div>
                <dl>
                  <dt className="text-xs leading-5 text-gray-500 uppercase tracking-wide font-medium">
                    Git Integration
                  </dt>
                  <dd className="flex items-center space-x-2 text-sm leading-5 font-medium">
                    {/* github logo */}
                    <GithubLogo className="h-4 w-4" />
                    <span>ervinismu</span>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          
          <div className="flex space-x-6">
            <Link href="#">
              <a className="inline-flex justify-center py-2 rounded border border-gray-200 inline-flex px-6 text-sm leading-5 text-gray-500 bg-white font-medium hover:border-black hover:text-black transition ease-in-out duration-150 ">Invit Team</a>
            </Link>
            <Link href="#">
              <a className="inline-flex justify-center py-2 rounded border-transparent border inline-flex px-6 text-sm leading-5 text-white bg-black font-medium hover:border-black hover:text-black hover:bg-white transition ease-in-out duration-150">Import Project</a>
            </Link>
          </div>

        </div>

      </div>
    </div>
  )
}
