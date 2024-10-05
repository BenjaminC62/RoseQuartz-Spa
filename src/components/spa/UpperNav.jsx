import React from "react";
import "../../styles/UpperNav.css";

function UpperNav() {
  return (
    <div className="upperNav-bloc-info">
      <div className="upperNav-bloc-info-left">
        <div className="upperNav-bloc-phone">
          <img width="20px" height="20px" alt="phone" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADh0lEQVR4nO2ZS0hVURSGt70Mo5TK0rQig0ZChYM0aVBEkygIqSARUxKFXsNoLI4qjMJKqEnNKjIregyiaGAPQRMiegx6UBFUWlloD/ti4Tq4Mc+559TxtoX7D+/99z7/Pnuvtf69jjEppPD/AKwH2oF+oAsoMWMJwCSgiT/RA+SZsQAgE7iuwvuAHcBMoFV/u2xcB5AD3FfBr4GiYf+91/+qjasApgEdKvQhMH8ETrn+/xGYZ1wDkA7cUpEPgBkB3BZnjxjQoOJeAPkJuHLEPii/0rgEoFuFrQzJr1C+jMs1roDBOiHIijDmko5pMa4AeKqiCiOMydegF2w2LoChAC6POK5Gxz02LoDBoic4GXGcFErBTyBt9BSGBLAQ+AV8BqZGGLdVF9JuXAFDtqQuJH8y8Ny5NAxs8s47MCEEf6/yO4FxxhUA49WaCGoTcGcBn5S72rgGoEzFvQEyAnjNyms1LgJIA+6qyH0BsdGrnG3GVQBLge/AALDCh7PLumgtMK4CqLcCP8Nn5y4q517QMXThqtulQpt8OFlWcjgvycK4CGCJXnUFVQGF9J1ymp2o7iNBFqAiZUHLfDglVvA3GlcBHLJS8ogdFGCVtXsHjIsAJgI3VGSbX2AD6zTbCRqMiwCygWcq8ookAx/eRmsxjU7GDLAIeKsiT/tlKd0Z75gdczKbAYu1CAqO+71xjZleKzVn+Hi7KjWdA8ATMa5JWYgKWA58SRTYQLGVmtvtPpkYTatODcdZYHayFrMG+OYtJmBnCqyi2a1XY88RoHFXqTfNGstRS0dzS7IWs8FazImAmBEHcGHYWxfBe8SADuPO1WTiQXoJOcnaGe+YnQnIZuLNdmrcHJX7TIJ5q61YlGZgxagtwnpoqfXQqwnuMekR5s2zemfokZwTm/AAX+al5ttxdh8ZjCGvE9rjZ5XirjNeM+JVnA8Ecq0k0RnXvIkcwE19YL+fa/7LuafrvF/jmjOMNztsne0jcVy8gN06X1s8SsM/uMpqjkvVLv2HuYqtVL82XqXhk4BXwcWG7AemRJyjwEokB0dPbbhrs/QAflj3mtqQTcBs4JGOuybHNjmqg0UVAXes2JHGRp1fr5nBKu/Zm44oPelRh1b4Musto43zU/qhtVA/j4t7fuml26SZyKiQYyUfh7RxLl8B/CCpPNOMBWgwbwfOaXbrU/dbH8XSpJCCiRe/AQGfCXGn/vU8AAAAAElFTkSuQmCC" />
          <span className="upperNav-bloc-info-left-text-phone">+33 6 12 34 56 78</span>
        </div>
        <div className="upperNav-bloc-mail">
          <img id="mail-img" width="20px" height="20px" alt="mail" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABtUlEQVR4nO3WMWgUQRTG8UkUAooREbGINkJAsBAsBAsFxUbB0jalrZ22lnbB0k4sbcVKLCwEC0FBEARBCIIgIihINEF/svCE4Qzxbm/vbrLMHw6W23nvfd++2beTUqVSqVRmgZ6Q9M1I2qGoRgpD7zuCuVQ4Mo3bGXmBc6lQcBrPhjHyl4c4lgoBR3Efv7fSu5WRVWzE3+u4jcUZGlgMDY0WoW31v0bi5jIeZN35jOvYNUUD81jBx0zHY5wYeWrhPF5mid7g8hRMXMCrgbqXxhq/wz6Zjgwsj7oThjaSBezFrYG9eheHOjBwIN6DH5H7J+5g/xCxoxnJAo/k0wNfcBMLLQzsxjV8ajsttTUyOM8zAW9xdYT4i3idxTffr7MtdIxnJJLMNeLxPhP0BCe3iTmOR9n6D9GV+ZYaxjeSJdsT2+tbpPsV2+9wtuZg7PvNWPM93ot9Y9bu/tCIJdwLIw1fcSN+zbW416xZ6qjm5E6/OIWn/uU5znRca/LHeFzBO6zFt6jzk7VpGIlCC21Gc3FGJo1qpDDUjhSG2pHCUDtSGGpHCkNvO7LTSXpCqlQqlUqaAX8AyspfT6jtlz0AAAAASUVORK5CYII=" />
          <span className="upperNav-bloc-info-left-text-mail">spa-club@gmail.com</span>
        </div>
      </div>
      <div className="upperNav-bloc-info-right">
        <img width="20px" height="20px" alt="linkedin" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA4UlEQVR4nO2WPQ4BQRiGZ4XOT6HRuYBGRUUlscEt9K6hcg4H0OmIqNxAtSuiFIWIsI9sMpLJNDbMrL99ki2+93s3T2aaXSES/g6gA2wwhw+4UcRh0TReFLEVxBPiPTAHjnGKD0BZ5lXgEpd4qe28uMQnoCbzHhDEJQ65AlteRDwhHspnJOedkk2ANTAAukAfWJgSOzLPynmldOtAQXs/BUytiu8ARW1u2T6xA8xkPlbykm1xRemdgbTMM7bFDa2bU3aBTXFT6+YT8VdetRHEJ4v9d/36uIbl4Te8/VCc8HPcAEWeg13wQBOQAAAAAElFTkSuQmCC"/>
        <img width="20px" height="20px" alt="linkedin" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA5ElEQVR4nO2TQQ6CMBBFew3gSOB1BNcSbyUkGg+ksHH1TMmQoLbTWlzyVqSdmd/5PxizkQKwA3pgJIyt6YAqdviJdNqYl1uewB7IIx6UA7X0oG4itljqqHXN1HMDrkAjvWeteJCiXMlkXHouwy+yieWhCUz8kEkb6lcFXJlonqcI9L5MXJ6nCAxylDlqs0/P1wjkjtpC7u5rBDo5ahy1h39YVC1CbiTgQobPIZfJAnLW4ucY6o/90SprhdwP8l16MlF/NK/nIVyZuIq+PDfhwd5MfA2a5yHeMgltMnsewpnJhonlBVpHISIiUnwrAAAAAElFTkSuQmCC" />
        <img width="20px" height="20px" alt="facebook" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABdUlEQVR4nO2Wu0oDQRhG06hgZ6PivY6FhdjpA1h4Q6zVIpUm+jpG1F6081ZaWGofA75AvIBZ0RATjwyMMFl2//x7EVLkg2mWOXN27pPJdNNpASaAPHADlIAPW0r22y4wnqZwFDgAGrRPEzgFppJKVwGP6KkCy3Gle7YHcWPYQpyeNiNI3oGvELmu58CYcngrwDYw4LB9wF3AsI9oxEcK6ScwHcLfBtQ/1GwZzeot+rgeYAaYBR4C6jfMSEpis0812XCYfqCsYHYk8bVSPO8wi0rmUhI/KhuZc5hNJVOSxF4M8ZaS8SSxOXvDshAKtrYRNt9VCXpKIgZ6ge8QviyBVwnFWYG/kMB9ATTX370tWYdZcr5LizMviSeBOukvrnrbuxo4+Qdxsd00/R2bbymKX8Xj0idfB35SEJs2VlRSp8GccCdrxIbNRZL6ev4SQ/wMrGWSBBgGjoGaQlyz9/lQImnADxSAc/cRYJ9JZ/aNNtgCddMJ+QUhA1R3vgYpAAAAAABJRU5ErkJggg==" />
      </div>
    </div>
  );
}

export default UpperNav;
