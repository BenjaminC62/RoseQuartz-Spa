import React from "react";
import "./../../../styles/GridServices.css";

function GridServices() {
  return (
    <div className="grid-services">
      <div className="service">
        <span className="service-title">Service 1</span>
        <img
          className="service-icon"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD6ElEQVR4nO2aW2gWRxTHf9bUKgaqeWkfFBXpBTWFWu8+qNWHYqWtFUGIiAHrJTaiSdUH8YKioIIvXlARREFtaxERRVCwUG9Q1NZYCDbVGKsQpSYGNaaN+snI/4Nh2d1vPzOz+R76hwPL7Myc+e/MmXPmzML/iMTHwArgDPAX8Fhink8CSyhwfAacBTI55DoFireBgwkIZGW52pUD9cA2oF8nc2AAcCMPEr8BPdX2glXeCszrLBL9gVt5kKgB+qjtzJD3L4Bv0ybxFvB7QgJXgAq1MRgNPImo+y/wQZpEtuQY/J/AGuBDq00RsAB4mqPt1rRIvA88CxnAfQ1iVKD+O1oy1xPOYG1aRPZZSp8DR4ApwJuBnczsSqciSMfJkzRI9AL+01repdnJwtjAVOBwguUTJw/TIDJDX9k2SENmO9DUgcEHdzfv6Gs9DwGOaXllHMpm9T9N4g1m/e8A2h0TMGL6HCQ9hxSjveeDxEdAnQcCWdkkPf1ki6bsuGsS42IcmQsxkXHWaR4JePxSVySMQT/wSMIsox7StTDk/WoXJN5QmOGDwF2gzNI1K2Lz+MUFka89EKiRt+8uHd2AjVpGYfUbXBA57GDgjcBRYJm1K2XxKfBHjvZtLog0vMbAjeITwOKQgaOZmA6cS9jfYxdE2vIg0AxsAN6N6a8LUA205NHvbRdEkm65exWLJUVvYGeMXWQsOe2CSK7w+xHwRQf6/zzB7Kx1QWRvjIJ/gBGOUkj3YvQMd6CDSRGdm1B+LO4wUkmIMF9j7MqJQwzLlFTiHtUhekyyzxmCTvFXEURf6xvgmjYG4+zmRHzFXHWLAlFES54bSN6O8UurfGnE0jNfN4gkdSdb5VV4QLF1hDXPuRymyXkFkaRuscpaNUNeUC8l/T0SGaiym3jERSmxUz7f5bG0ktQdozKjyxuyyeq5IQZcIwO+msDY4+rOl44DPoksssIRX9gvHeaA5Q3DUrjjqJOOTzzqeJVNbJaisPA8CPvixzznwhDVbQpkLr1gj5Sty5NIkuPqetXdTQqYKGV1rmKgkFBoPCmgq+UPvnLYr8kqZuSrsuGPd2RTNpcjZsVExT+JcJukQWVhEXMXK8ZaQIowZ+47MbMSl9A2+bEgpurd31aSLjVUWOeFksC7+RH3Iu0hl54l6iP12bBt5ZIG8H2Ez/lRqaBGPZuyIH5QHz+naRtBDLaSE69zI1tpXe50+l17mTIhzxVHJcU8tXmhC6SCQJVlB9utnwLCUKz7lYxImCReQaFcCYmMbGIlMFSkeip2WmVlS0zd2RQoSgO/ZkTJecVVBY+Jipdqrd+canUTPKGzB0ch4yXy+dZWz6gt4AAAAABJRU5ErkJggg=="
          alt="massage-mask"
        ></img>
        <br />
        <span className="service-sub-title">lorem ispum dolor sit amet</span>
      </div>
      <div className="service">
        <span className="service-title">Service 2</span>
        <br />
        <span className="service-sub-title">lorem ispum dolor sit amet</span>
      </div>
      <div className="service">
        <span className="service-title">Service 3</span>
        <br />
        <span className="service-sub-title">lorem ispum dolor sit amet</span>
      </div>
      <div className="service">
        <span className="service-title">Service 4</span>
        <br />
        <span className="service-sub-title">lorem ispum dolor sit amet</span>
      </div>
      <div className="service">
        <span className="service-title">Service 5</span>
        <img
          className="service-icon"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADS0lEQVR4nNWZO2hUQRSGv2jcgGiiYpI1IVpoZRRBECsRxEYsohEUX4VgpdHCCGJna5EUdoJaKLEQBFFsRMQQTeITzdNHJRpFhSCJaDTqlYE/MCx7szv33t2d/WHYvTtzzj3/zJwzc85C8VAFHAP6ge9qfUAbkKJM0Ai8AIKQ9hxowHNUWSSGgRZgodoOYFR9z3xfmeMydASoydJfY5E5isd4JCPNSoRhp8b04TEmZaTZSmGo1pgJPMZEHkRqyoFIv4w0jh2GVo3pxWO0ycjREGdfBLzWmCN4jJTOCWPoKzl2tVqrReIpMA/P0WCRydYMiWWUCVI6J3oVyUx7qO1kVqIJ6ADeidxX4BqwnjLBOuAK8NtaIfv7FLAbj7ECuJVh/GVgI1CprdapvkmN9w7GyDHr7OjQ1sqGSxrXhWeoAO7KuG6gLsf4JuAX8AdYhUfYKxIfgaV5ylyQjPn0Auaa8kFG7XeQWwlMy4+88JUOkejRFnPBVcmeo8RYrRmdVsiNIv8X+Fnqw/OeZtSE1Ki4IR1nKRH2WQ5u7lg25jro2WCF7CWUwMHHQhx8S4Qb7x3pOkOJHLw7w8HN6T0IvAHmOOjbLH3jOZK1RNE8i4OfsK4n5jrvgh7JnaLEDp4GvllEHjvq3Sa5z8B8iuTgn7I4eJf6rgNf9H2Tg+4K1cEClZuK4uAHMvqMwf8UeRrltGbcTcd37JLc+0IW9jpDTnDj4C/Vd1K/1QI/RK7Z4R0VChZG12EKgDVybtPWZvS1W1VHOz8/r98vOr7roOTeJl09N7N0f5bcvJAtser5YuB2iUgESVXPK61kyfjAdmAB8RDMNtOFqp4fskjEJZAYkSjV8wd6NiuBL0QmI1TPx/Wc1GokQiRK9Tz2S7MgiKszSvXcSyJtEarnXhJJOVbP074Scamep61QbMJ1kgiSmpxc1XObxKiebaRFriBXj6RQDwxZ2y/zulJn9ReVSIuytCnHl2RbiXpdbWa2W2Z/vghciexRLuA6UyM5SAzHIBGJiJ3oxMm07O00LFIUk8i0BOIk8bVWtjaUAIlIRJ5I4HTEFVkODEjHYB7/dxSMyFYVh+NGl4EESRA1uhkyxpCZbebSzM3X5NomQ0wSTnb8ByQ58+B0vvq+AAAAAElFTkSuQmCC"
          alt="massage-table"
        />
        <br />
        <span className="service-sub-title">lorem ispum dolor sit amet</span>
      </div>
      <div className="service">
        <span className="service-title">Service 6</span>
        <br />
        <span className="service-sub-title">lorem ispum dolor sit amet</span>
      </div>
    </div>
  );
}

export default GridServices;
