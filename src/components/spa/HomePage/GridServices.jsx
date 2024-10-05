import React from "react";
import "./../../../styles/GridServices.css";

function GridServices() {
  return (
    <section>
      <div className="grid-services" id="#grid-services">
        <div className="service">
          <div className="services-icon-text">
            <span className="service-title">Massages Relaxants</span>
            <img
              className="service-icon"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADS0lEQVR4nNWZO2hUQRSGv2jcgGiiYpI1IVpoZRRBECsRxEYsohEUX4VgpdHCCGJna5EUdoJaKLEQBFFsRMQQTeITzdNHJRpFhSCJaDTqlYE/MCx7szv33t2d/WHYvTtzzj3/zJwzc85C8VAFHAP6ge9qfUAbkKJM0Ai8AIKQ9hxowHNUWSSGgRZgodoOYFR9z3xfmeMydASoydJfY5E5isd4JCPNSoRhp8b04TEmZaTZSmGo1pgJPMZEHkRqyoFIv4w0jh2GVo3pxWO0ycjREGdfBLzWmCN4jJTOCWPoKzl2tVqrReIpMA/P0WCRydYMiWWUCVI6J3oVyUx7qO1kVqIJ6ADeidxX4BqwnjLBOuAK8NtaIfv7FLAbj7ECuJVh/GVgI1CprdapvkmN9w7GyDHr7OjQ1sqGSxrXhWeoAO7KuG6gLsf4JuAX8AdYhUfYKxIfgaV5ylyQjPn0Auaa8kFG7XeQWwlMy4+88JUOkejRFnPBVcmeo8RYrRmdVsiNIv8X+Fnqw/OeZtSE1Ki4IR1nKRH2WQ5u7lg25jro2WCF7CWUwMHHQhx8S4Qb7x3pOkOJHLw7w8HN6T0IvAHmOOjbLH3jOZK1RNE8i4OfsK4n5jrvgh7JnaLEDp4GvllEHjvq3Sa5z8B8iuTgn7I4eJf6rgNf9H2Tg+4K1cEClZuK4uAHMvqMwf8UeRrltGbcTcd37JLc+0IW9jpDTnDj4C/Vd1K/1QI/RK7Z4R0VChZG12EKgDVybtPWZvS1W1VHOz8/r98vOr7roOTeJl09N7N0f5bcvJAtser5YuB2iUgESVXPK61kyfjAdmAB8RDMNtOFqp4fskjEJZAYkSjV8wd6NiuBL0QmI1TPx/Wc1GokQiRK9Tz2S7MgiKszSvXcSyJtEarnXhJJOVbP074Scamep61QbMJ1kgiSmpxc1XObxKiebaRFriBXj6RQDwxZ2y/zulJn9ReVSIuytCnHl2RbiXpdbWa2W2Z/vghciexRLuA6UyM5SAzHIBGJiJ3oxMm07O00LFIUk8i0BOIk8bVWtjaUAIlIRJ5I4HTEFVkODEjHYB7/dxSMyFYVh+NGl4EESRA1uhkyxpCZbebSzM3X5NomQ0wSTnb8ByQ58+B0vvq+AAAAAElFTkSuQmCC"
              alt="massage-table"
            />
          </div>
          <span className="service-sub-title">
            Détendez-vous avec nos massages apaisants
          </span>
        </div>
        <div className="service">
          <div className="services-icon-text">
            <span className="service-title">Soins du Visage</span>
            <img
              className="service-icon"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD6ElEQVR4nO2aW2gWRxTHf9bUKgaqeWkfFBXpBTWFWu8+qNWHYqWtFUGIiAHrJTaiSdUH8YKioIIvXlARREFtaxERRVCwUG9Q1NZYCDbVGKsQpSYGNaaN+snI/4Nh2d1vPzOz+R76hwPL7Myc+e/MmXPmzML/iMTHwArgDPAX8Fhink8CSyhwfAacBTI55DoFireBgwkIZGW52pUD9cA2oF8nc2AAcCMPEr8BPdX2glXeCszrLBL9gVt5kKgB+qjtzJD3L4Bv0ybxFvB7QgJXgAq1MRgNPImo+y/wQZpEtuQY/J/AGuBDq00RsAB4mqPt1rRIvA88CxnAfQ1iVKD+O1oy1xPOYG1aRPZZSp8DR4ApwJuBnczsSqciSMfJkzRI9AL+01repdnJwtjAVOBwguUTJw/TIDJDX9k2SENmO9DUgcEHdzfv6Gs9DwGOaXllHMpm9T9N4g1m/e8A2h0TMGL6HCQ9hxSjveeDxEdAnQcCWdkkPf1ki6bsuGsS42IcmQsxkXHWaR4JePxSVySMQT/wSMIsox7StTDk/WoXJN5QmOGDwF2gzNI1K2Lz+MUFka89EKiRt+8uHd2AjVpGYfUbXBA57GDgjcBRYJm1K2XxKfBHjvZtLog0vMbAjeITwOKQgaOZmA6cS9jfYxdE2vIg0AxsAN6N6a8LUA205NHvbRdEkm65exWLJUVvYGeMXWQsOe2CSK7w+xHwRQf6/zzB7Kx1QWRvjIJ/gBGOUkj3YvQMd6CDSRGdm1B+LO4wUkmIMF9j7MqJQwzLlFTiHtUhekyyzxmCTvFXEURf6xvgmjYG4+zmRHzFXHWLAlFES54bSN6O8UurfGnE0jNfN4gkdSdb5VV4QLF1hDXPuRymyXkFkaRuscpaNUNeUC8l/T0SGaiym3jERSmxUz7f5bG0ktQdozKjyxuyyeq5IQZcIwO+msDY4+rOl44DPoksssIRX9gvHeaA5Q3DUrjjqJOOTzzqeJVNbJaisPA8CPvixzznwhDVbQpkLr1gj5Sty5NIkuPqetXdTQqYKGV1rmKgkFBoPCmgq+UPvnLYr8kqZuSrsuGPd2RTNpcjZsVExT+JcJukQWVhEXMXK8ZaQIowZ+47MbMSl9A2+bEgpurd31aSLjVUWOeFksC7+RH3Iu0hl54l6iP12bBt5ZIG8H2Ez/lRqaBGPZuyIH5QHz+naRtBDLaSE69zI1tpXe50+l17mTIhzxVHJcU8tXmhC6SCQJVlB9utnwLCUKz7lYxImCReQaFcCYmMbGIlMFSkeip2WmVlS0zd2RQoSgO/ZkTJecVVBY+Jipdqrd+canUTPKGzB0ch4yXy+dZWz6gt4AAAAABJRU5ErkJggg=="
              alt="visage-soin"
            />
          </div>
          <span className="service-sub-title">
            Ravivez l'éclat de votre peau avec des soins personnalisés
          </span>
        </div>
        <div className="service">
          <div className="services-icon-text">
            <span className="service-title">Thérapie aux Pierres Chaudes</span>
            <img
              className="service-icon"
              width="50px"
              alt="hot-stones"
              src="data:image/png;base64,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"
            />
          </div>
          <span className="service-sub-title">
            Relaxation profonde avec nos pierres chaudes
          </span>
        </div>
        <div className="service">
          <div className="services-icon-text">
            <span className="service-title">Manucure & Pédicure</span>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABtklEQVR4nO2Zv0oDQRCHv0JEorZR0SJN1HewEX0E0UKbFOIDWNr5B4xPkV7UVxBsVUTUxiaVqRSNaKdEFubgOHY3lyB7k7AfDLd7O5ndX2bn9kIgMvyMAidAC+hk7AWoi4966hYBWTtmAGjlEGJ81NPJaerpRCHKiBnRRsyINmJGtBEzoo2hyUiWgV14lihEA1PAIXALlMRMe1/GBoIN4N2ypZK+GVtDOevAr+PplL73o1nMNND2PGaz9z+AMgo56nJe2MYOUMh9H0LuUMh3H0K+UMasY6HNlE/T4WM+q4Iy8ORYZCPl13D4PAMzFMwIcON5MaylfGsev2uJVRi7qS1kW2Al5VvxbL+OxCqECeBTFrHSpT4m5WoTvCpXE8vEDM6WLOBS+r762PPUieFK2psUwIVMvi19V32MAa/yV4KtTgw70j4vQsijTD7vEJLUx7L0lxx1YliU9kMRQpL3qpJDSF4zjKfqJDh5Tu68QmzxghGFEDMSZmslh2Mv9uGJF4zsxMm50oudeeIFIzvxAvDWgwjjW/XEC4Zt4jng1PHbPbG2ZKKaI14Q/nviKETbNxgzEkEhf5qM7a8OO2D0AAAAAElFTkSuQmCC"
              alt="manucure"
            />
          </div>
          <span className="service-sub-title">
            Prenez soin de vos mains et pieds
          </span>
        </div>
        <div className="service">
          <div className="services-icon-text">
            <span className="service-title">Sauna & Hammam</span>
            <img
              className="service-icon"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEX0lEQVR4nO2Ya6hVRRTHf2lpZIWPrLz2oTQqiPpiwSUflWaCJogWUUH1oSh7qRWWUunFSnqBN1JLRVFBPxhlJUHSTcvqlhEUvYgoU7sZ+Ui9YubrxpL/HIbN7H3m7HPuOR64Pxg48581e9acPXvNmoEuuqg7xgEtwH6VD4Gx1BnPAh0ppYk64SY5fAh4HGhQmQ78p7a6eDMfyVmbRJIn1WbL7KSnXc6eH2gbqLZ91PlELlDb3s52YgawE7gkUg+xoYJLa0Zef5o10AuReojxiY99gIr/sVtojqE5rz/jZPBFpJ7Gcxnhd07kM8ry5xwZtEXqxd6MRbADKi0lvImy/WmQwZZIvbNpyOvPBBmsi9R9hgIfALszlpUrfwPvAVcVmciEvP68KYPJkbrDdurDERNIlsNaghX150LgKPAv0D9Cd/QEtunBLwJ9KE5f4Gn12QP0DthclDJuml5gth68PFJ33Kr2rymdder7aKCtKWXcNL3AdzK4PlJ3rFL71NLnwc3q+1mg7fuUcdP0Aodk0CdSN04D/lH7oBwTORM4CBxTJCrXnxPslMHASN0YpTb7l/KyVs94MKHvShk3TS/wtgxmRup+qvC86qdot/0qw/HXgK1AP9Xv1DPWV8CfE1wng/ZEMubrlyb6bFFbo+qXR2QAb8nmHtX7a2lZFDojYtwsfwqskNE3EfqV0nYA3aQ9Im1lxkTulY0tKceXKSfHFdK/jdQL9AJaA0ujl5aMDeh4Sg9b7GnvekvN9pcQtraPK/86PRFSm0vwJ6Tnwv2L/s78k7drm6PvK5UfAtwIvAL84NmMUL9G1X+kBhzU4Gd52hXAS1qCxzNSEzshrgbOVr8esj9Si4n8LKfuB7oH2s8DbgOWeEHBpTGnJmxvz3FMqBgPec616/japCXk/unQYWitos3dwBvAL95znqDKWJj9U4MfCyydo1petmfcoUTPHYHTii2tPGlOWbgLhlaF4XN1RnhZeZM7m6eVNqXi04BrgFe9b2pquc5tynGesCMn3q5+NTAX+DWjz24FhEb1cdyVY/xNlZrIYK9/S+AUuESb3EhgvrccXbE+/hmlo8TySblvb31gDzkgbYHSiFAkswxgmCbl9hrHcGmbqSLzNKjdVTl+C7ylNC6WrS1Bhx1bTVtKFblPgy7ztFZp9vEWY6hsP/c0i3CmPUYVGRG4IHtHmkWvYkySrWXCyUg4hirSz7tVd5FnkTR7W8V4QLYLPc2CQ4cuuqtKcuA5qj8T0ddlu3axgfYhl4P5IbkqbNTgoxMpi0WkYryeuJcamXEJ0eks1OBTVL9F9TUlnNMnqv6w6ouoAe40aP+ucW0Jm5SLcBa9/Dc0hRpwgwb/WPXLVLf0vhhuz7H9xPhU9VHUAHcjbtdF6J7Jr2exV7Yu3d+j+gBqxF/eJjhMv3+P6LdDtkO8fpaH1QwXRv0yK6Lf3EA/u9SuGd20F/wBbNck3NVQFt1109KmMjuyXxddUGX+B1DHEykzzVW/AAAAAElFTkSuQmCC"
              alt="sauna-hammam"
            />
          </div>
          <span className="service-sub-title">
            Purifiez votre corps dans notre espace sauna
          </span>
        </div>
        <div className="service">
          <div className="services-icon-text">
            <span className="service-title">Épilation</span>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADb0lEQVR4nO2ZaUhUURTHf5pOi5RZWRCl0GJgVB+0fQWjoIKKiiAKwg9tX/xQH4zM7EMlZIsRtEgZCQXRBkXQStEGhhJGSLaQRLRSadE21MSFv/B4PGdGHWfei/nBgfHe+8Z3zj3n3HPuQJw4cWJNN4nnuQ5c4z+gWuJJ0oEKoAzIkpRpzMx5hlzgB/Ae6CX5oDEz5ym6Az7gsMSnsagyBpgJjAUGd/AF6iRRJw34CwRs8kVBWwVsApYA2UBiiO+bDcwiRswD1gBFQDlwArgtn7cr2ARcBUqAKUAyHiENmACsBPYAdxXELYo1A6eB6XiQZGAqsBW4Z3HNc0A/PMwo4IyUaQSG4HFWaXeqw0gKrqdcO2NiytMMkCKfgAw8TALwR8qYFN4FD9NkSc+bo/VPE4ECIE/WjASvgHqVKn6VQFE58L7Leg3APmAZMFF1V5okQ7XYHAXyDqVck6Fm2L7zCfBIla9fh2ikjBSU4cAu4I1DSRJMWmLB1GNWjEEe6vNOrcknyozQjhRqdw5JzAttVE22ABgJdAUeA+9sNddzoFafe8pApj/pjYspkcUXWcbM6f7A8ne+1mzBxQwEvgJPLbcnppC8ZUsoJvg/A6m4mAJZfLuUCSgRWFmh8eIwvm8+MJQYYCx+X8G/Vi98wLYmCXjhEE92fMp0R4gRwxTQfimywWFNoeYWhjBKg9bGjEmWpstkNqc67BdwwWFuKfARuKQzZzTwWmeSyXwRxdxX9Qix5rgUyXRICuflfn6HGBgvJYq1u1mKs2Nyy4iRAvwESkOsa+kYV1vGTNf4TOM3pOipVp5PUhbcTyeRIrfZFmLdOB2IATVaPqXigBIBci2jlCmDnBRpUl8TUcx912XdsGToSuiitry1LjBdvm12sEZKVFrms0PUYIM640Z/ubJRlXqLXFW3NbJ2a+QoWJv10jdt8wel4GKijKmr3gLr2/FshV56si2DNasiCGaQiJOqjLO3Hc/mSBFT+lsp0vgdZaqoMVdptK0k6grWWn8ZfKqwTeB/A9ZFq2/pCPVyIyfyVDGb3bmiZOBa6nSWBHPdSkvTVqsWoQ8u43eYvy1OA47KFQPqa1zjbgmKAXuMBMMcjGelTHvistM4abnoLg1DdqtUeem2ny76K5DbcrnRqJLHlfTVbX0oyXRTbMSJg8f4B2CM99xGtJUrAAAAAElFTkSuQmCC"
              alt="epilation"
            />
          </div>
          <span className="service-sub-title">
            Des soins d'épilation pour une peau douce
          </span>
        </div>
      </div>
    </section>
  );
}

export default GridServices;
