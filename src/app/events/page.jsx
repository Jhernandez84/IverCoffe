"use client";

import React, { Children, useEffect, useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "@/Context/ThemeContext/ThemeContext";
import { AuthContext } from "@/Context/UserContext/UserContext";
import { ProductContext } from "@/Context/ProductContext/ProductContext";
import {
  CreateRecord,
  UpdateRecord,
} from "@/Components/Firebase/DataManager/DataOperations";
import TableViewer from "./mainEvents/tableViewer/table";

import Link from "next/link";
import "./styles.css";

const EventPage = () => {
  const { userThemePreference } = useContext(ThemeContext);
  const { authUser } = useContext(AuthContext);

  const events = [
    {
      eventId: "2146sfy435634@@325wgdfag",
      eventName: "Conferencia de Tecnología 2024",
      eventDescription:
        "Un evento anual que reúne a los mejores expertos en tecnología para discutir las tendencias futuras.",
      eventDate: "2024-09-15T09:00",
      eventLocation: "Centro de Convenciones, Ciudad de México",
      organizerName: "Tech Innovators Group",
      organizerContact: "contacto@techinnovators.com",
      attendeeCapacity: 500,
      eventType: "Conferencia",
      registrationCost: 150,
      eventImage:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDw8PDxANDQ0NDg4NDQ0PDxAODQ0NFREWFhURFRUYHSkgGBolHRUVIjEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OFw8QFSslHR0tLS0tLS0tLS0tLS0tLS0rLS0tKystLS0rKysrLS0rLS0rLS0tLSstLSstLS0tKy0tLf/AABEIAKsBJgMBEQACEQEDEQH/xAAcAAADAAMBAQEAAAAAAAAAAAABAgMABAUGBwj/xAA7EAACAQMCAwQIBAQGAwAAAAABAgADERIEIQUxQSJRYXEGEzKBkaGxwSNSctFCYoKyFEODosLwFpPh/8QAGwEAAwEBAQEBAAAAAAAAAAAAAAECAwQFBgf/xAA3EQEBAAIBAgQCCAUDBAMAAAAAAQIRAwQxEiFBUQVhEyIygZGhsdFCccHh8AYUUhWCkvEjM2L/2gAMAwEAAhEDEQA/APl9p67h2OMZsxgY4x6DMYKHGBhjGbMYHGYwMMYKZjAwIgqARAFIgYEQMpEFARA9FIgZSIApEABEDKRECmA0EWgyBBaLRaLAtMgWgiIIBkWiCBBENBBLIAIgy8QehxmziHGM2YxqHGBjjA4zGBsxgpmMYDGCmYwUGMDDGCgKwMuMDArAylYKhSsDKRAFKwMpEAUiB6KRENARAykQLRSIhoLQ0QREBEC0Foi0EC0ERMgQEREEQCBBAmRB6bGbOEcYzHGCoOMDHGM2YwUzGBxmMDDGCgxgoMY9GGMNKArDRgVhoylYKKVhpRSsNApWGjKVhoykQMhEQKRAFIgZSIiKRAFIgAtEWghogiICIi0EE6CIggQEREEQCBBAnrMZs4RCwA4xqHGBwcYKZjA4zGCmYx6M1Cg1RxTpgvUY4qii7Me4CVJs7ZJukKQ16LhcYaVAKxGBWNTHQbWJO3auLWa52Hf038Y7IcTKxaWUrDQKVho9FK/HrttDRkKw0ZSsDIViBSItAhWGjKRECEQIpEQC0AFoEW0SdBEQERFoDBIREECAiIgiAQJ7HGbPPMFjMcYGOMFRmMDHCNUZjGqNvhuiFQ1iTYafT1dSRa4cpayHcbEsAT3XipuvxbV1DSNFqnrKejdKdSkdPSpKpIZQ9Jl7Rtv7XPY99ljNXc7qkcXi2iFCvUpA5qjDB+RamwDIT4lWEqXfmpqFZSoUrBRSsDArBUKVgohWBlKwUUrAEKwMhWBkKwPRSItDRCIgQiGgUiLQ0QiItFIgAIiIpECAiItBEkpECCItBEkIEBERBFQ9tjN3mmCwMcYGOMZwcY1xmEFRmMam1w6q9NmZVDhqdSjUQ+yyOpBB+R8wIWbaYceWf2Zt1Qj+oa+qp1aTJ6s6aqhNfoAQv5l5qctreJEWvk0nDyeuLk69qlao1V1AZsbhdlAVQoA37gJWlfRZ+zrejfo7T1SO1Q1QyVMQqFQCMQeoPjJyy08vr+q5unzxxwxnnPX/ANu5R9EKCXNqjXDIQ5RrXFr2K7HfY9IY8muzz8vifUX2/D+7Ur+ilBeSt76v/wBl4WXu14/iPPe9n4OfX9HqY5IP/bf7zoxx476fq7MOr5L6/k5Wr0VOm2JCqT1LG3xvN5w4WbkdWHLnfVoVUQXC+rYnuJJHjsZnlxY+jox3bL4r/Ly/bf5tQgW5b3O/h3fX4zldBCsRkKwPRXUdL2sOexvbf53hdehplYj0QiBkIgCERaBCIhohENDRSIi0QiItAREkpECAiItBEkpECCJIGIggQGInvMZs8s2EFCFjMcIzHCC4zGNUYVgqCB3E+Nto1zLKdq26Dv6itTsCGai9yO0LMRs3T2hBfjvu1a+mZGZWG6EqbdoXB6Ec4DxT3em9B+VdTbnSIB2BJyH2EnJ4vxjw24Xfv/R6KpRxOWaU/G5sPC9ot79HjeU9Y19TXp2OVdyf5HZR/bLwl35Yuji5MJ3yjjas0muFq1mb+aq6qPjadeHineT8Hfx9RxzvlGgWKX7FKqSBbNweXcbG5nR39/weh0/xHpuPdysv+fyaWsoVjv6pAvcvK/fuIb9nTPjvR77z8L+zmamk6AFkCgmw5c7Tgu56Ovp/ivB1Gdw4vO9+1ajOe4ROv6S+xalJwAxVgrcmKkKfIwsut6F3rdQKxJIVgaZEQIRAaIREEyIAhEWgQiIFIi0WikRJsLAgIiSUiBWBJSUiIgMEliJkLCfQsZq8kQsZmCxqghYKYFvGY4QW9RwYKNMhxBIaoCbC/tX5++OSW18t8az5MOeeHKyX9h1jFQCUYAi43tcfCVqezzePlzyv/wBlcvXU6mNwhYEZXDObDnvFqezr4ubd1c68vrqx37IHvb95Us9nr8Mv/Kt30Grfj115XohwOnZcC/8Aul3z9HN8Yw/+HDL5/rP7PZFbm53+kl8/vU1CVgv5E+BMvFWO/drOtv8ALXr/AADpzm8/m1l//X5gedmRrrtiq2YHyFpc7eVOdtymVuqowH5muLeW8r7ys9Ll/n4Of6Q0zUpoBu2YA5Dnt95x5Tzs+b2v9O3XWeH/AJS/v/Rw9LoyzrkOyWdbAi5ZUJt9N4scfPzffYYW3zb9ThTijm9XJh+I1Et+GVG5UeNr/wDd5t4L4d2/c6PocvDu37nF1mnwqOgvZXZR5A7TDKatjDLCy2NVlklohENDSbCIJsIgRhAaIwiCZEBohESdFIk6IpESbCwICIklIiKhEkpERUpgmhET6RjNnjGCxqELBUbum0tqTVzbs1qdFVK5Asysxbn0xHgYW+ehvz07PEadc1aLVquVMVKaiqlJaNbTlmBDAD9OxBI2PUSMbPQsdauo4tXh1VWqLg7+rqvSZlVmXNTuLj4zTxS+e28s07PCaTLpyHVk/Ga2QI2Kr+xjxvm+b+PY/Xwy/wA9WzxfE01/FVigsFA3blz7pdfPdL4pnfqa20Bw+tVprjSZlZeZr4q39N9o94+zr+m48M7vPX/a5ms9ENVUHZSgh72qsT8gYWy+jt4vivBh3yt+7+7W4R6OajQ6tHrNRK16VakvqmdiGGL73UflPwj35aX1XxHh6vp8seOXeNl85PnPS33emieOX1iqTlexW1gOe4l4xXhtk0nV4ipJJVrm3UHrZvioA901xwq8enynlL/np+FaWq1WbZWxNgGsSQSOR38LfCbYY6mnRx8Xgmtpq80O4tziGqpnTFTclQhIAIOzDracHJjZyWvpfg3WcXHz8ONvn27fLTzbasBgy3GJGPhblDxPuf8AcYptXpYnsP6y+xyATztz74bmuyLzY+zTqVL3JFyTfIne/WTtF5JfRrOImdTZYDSbLEE2EAmwiGiMIiTIiBCIAhESdFIkpKREmwpiSUiBFMRUIklMSaESa+nYzd4hgkFQwSCm3pqv4b0GAxqvSYOSR6p1JGXvDEQ157PXnv2dHUGqqK719LURirihSKMxNw+JVQMRdd+657zeJretHjr2crU1mqM7MT+JUaqy3OObG5NvfNJNNsW9U4nR0yVBUpnTZVEZEAqu26Hnfwt3c4SWXzryPivS59RhjePz05Op9I9P09a3kn7maPK4vhvN8vxadT0tqKoWn/iVUcgAoAi07cPgeWV8WWMv3X9nI1npPq2vZ9WP9V1+kHfxfBcJ345/4tPhnHatPVUq1f8AxNREzupd6h7SFbgMbdY9/J0dT8IuXBlx8eEluv4ddrv0j0renVHpQ1J/Vgv3MNvGn+nOp9cp+f7NWv6ahvZ07D9VUD6Aysc9Lx+B5Yfa5Py/uj/5Kzf5aj+on7TWc19l/wDTccf4laPFajmwVbnoAxP1j+nyT/sZbrHdroUKlY81I/pt9YfT5Jy6Dkn8Fbb0XalVBH+U56cwt/tIzz351HT9PycfUcWVx7ZY/q4r0zIfofgvqnYA7i432vbpHE6RZYjTZYBNlgabLENJsIDSbCIJsIiTYRAjCIkyIAhElNgERVNIYk2AREkpgRTFU0DERYkPqgSbPCMEgqGCQVBwjXKOEFRWjUxJJVH7DIA4uFuOY8Re4lSq1tu6tQdIHILEY3IXI7NjuY8fteb6/wCF4YXhw+rO1cmpUpHmSvwt7rXlrzsjl6tqPQufJXP/ABj8nLyZYuRqtRYWUVQv6CB85Xikna/g5supzxnhxvk4GtqOTzf4mZ5XfZxcnNy5X7Vawy/mPxkarGzO+61MHuMrw32Y5YX2dLhunNVsQQpAy37tv3hdw+n6TLqM7hLry27mm0DUyGFRQRyNv3htvfhWfFl4pyec+TrUKdUi+bsO8ILGNyc/Dyzvy38JG9p6NS9iXswZTc22KkSvLTwOqvg+tcr5efdw7GwvcGwNjz3F46+/vdlPTs5IRSxAubC9hCY29jxxt7IOnl3W6w0NeqTLEek2EQ0kywGk2EBpNhEEmERaTYQLSbCIEYSSIRAiESU2FIiTSmJFKYipTBNCSkpERV9aCTZ89swSCjBILghI1QzU7W3BuL7dPA+MFymAZGB3VlIYXG4PMGxj7Klljp1Up1NBWd2IqqSQiggNvcsSPpCW+OeXk+o+DZ5eHjxk8t3zcGvTTBSqK+SqTmzgDYdx3mvq6efyysc6tqKiiyrRUdBZ2t8496cv02WHlJHJ1esqG+WB7sUCx+O+rn5Or5Pl+Dg63UOetvcJNyrh5Oq5N/ac56rdWMjxX3R9LnfV3tRwNKftVy1vBV+5j+94+HxDk5O2H60/BlprWsGyurDmDfr08o7I9v4Pnlepm53ldxzSNrU3FvyhUv8AEyPL0j3uoxxvotp9Rh7NOodrdusCLeVtpTw+pwbui1N6ilkUEuu+TGwuB4S/R811/H9TLz9K1/VX2YhVDtTVz0Kk3FuZH0vNJjuTb6/pM/Hwced9ZPzm1KVBez7RGKEqGtdiSCT8B8JeOEdeOkarYnKkcWyqUb/mVkCkb9O0R5GF8vPH3/b+ouMy1J7ufVQgkG1wSDYgi4mVmjuOrZfRFhESbCASYRBJhEE2ERJMIDSbCJKZEREIkkQiKkUxIIRJTYUwSUxJKYk0IifYAk1fOHCQVKISCpRxjVKzGOLlNWLt23LMW2za5ysALXPdtA5ZPKNuguWlrr4VP7BF2sfS/Bc/qfyy/ZydAy+rpM6l0wIK3tc4kDfztNc97unodX5cmX82vrK9IqR6oXIsGFgR2QO7vuffCPP5ObDGfW089xGmXZiqFQeSgGw+UdeZz9Vw3K3xSffHE1Wjqfkb37Sa4cuo47fLJzK+nYcxb3iTWmHJL2a4ibV0uCvavT8yPiDG6fh/l1WH+ej1gaN9Fz4upotVpFA9bSqVHAFyHIVjc3uL/p+PhvOUzvavG6jFp06vaBA5NkALm297TaPneswmrKvxBQKtUX5VHsLd5v8AeaY+eMep8K5Jl0XFbf4ZPw8mulW1r3YC4sGKkA9PnKnzeljklUa52Fh0F72iq9pMJKpU2EFJsItGmwiPSTCItJMIgkwiJNhAkmEREYSUkIiIhiqaUyakhiRSmJNKYJoSUvswSaPmpThYK2OMapWYwPYFZStqPqCaS0rLijM4a3aubXF+7aMpPPbWdmCsoZlDAg2JHSGnRx8+eH2crP5V8+4TxLClTzq/iU2PZZiSCHJFxKxssY9b9PycmW7lZfnfZu1eP1DyqgeSKPtHuPPx6DCd8fzaVXiTtzrW/qA+knx4+7px6bHHth+TWYB+da/lm8Xixvq1m8e2H6QycKpv/HVb9NK31lSb7S/gV6rPH+Gfj+ze0vovRbG/ryDyLVKSKflNPob31+jm5PifJjvt5fK13dB6H6cWcBAUYc67swN+4HeRqT0cGXxzqOPOXDKyzzn1Z/V6Kh6PUr2YISADshb6xOfm/wBTfEM5u82X4yfppv0OD0FA7Ox/lRftB5fL8U6vk34uS377f6t1NFSHJf8AcYacOXPyXvXB9IuBbmvSBPI1aY5sB/EvjYcv+nTDLXlX1X+n/j04tdN1F+r6Xtr5X5X0vpe/l28qfDl067TbT72UhiaygCRyuPI2g0lNWWmVZlJVs7LSILWS3tZ+fS3WFk1tpllLl9WajVIkHCMIlJMIgkwiJJhENJMIkpsIiTIiJMiJJCIklMlNKRJRSGCSmJJYql9tCyny2zBI1bHGCtsxjPZSsqHsjLHD2mRKh7eB1nDFoalqbKGRiatI29qmTuPNf2mUkxy1ezTnyyyw8eN+V/n/AHbFfg62uqrZhdTYW5c9zOu8GOtyPOw6y71b2c6tordACNrbXJt0tzmVw068ebbWakwuN+/rJ1Z5NZljTU9SwIJ8t9xb4wmVnmV4pW9puIW5H2eXLL6bzXDl19zm5On397taLi7DqbH2vaxba3LabzKZd3ncvST2/R3NJxy47e5B35FwOfZJPy90i8MvZ53L0Or9X+336n+d3XTidLmXRA47LFlA8iAOcxyxuPdwZdNydvDbr/PdZeL0eQqLta1s2DeElnek5O/h/RenxGmeRJv4WsYM8unznd570h4MN69FSL3apSA597qO/vHv89cM9eVfWfAfjn0eum6jLy7Y5e3yvy9r6du3bzfuuCNj9xN33mNIRJaQpETSEIk2LibCJSbCI0mEQRYREmwiKpMIkpMIipGkppDEkhiqaUyaghiTSmJNKYk19zCSnyezhIKjMIHthSVtUpCkcURljCbUzYmxsLAnoL8pcDn8Y4E2qp2pNTFeijaikWOIDLe9Mk/mAt7xFlNxWHLMdzKfVvlXL4RrEagCVcjooChkb+JGuL7GacXNZHi9ZwZ4c1x3+vn7Vqa2oDkPVtubqS5uvwHfKy5tzt+bXhx1r635ORqSxN8EHuJv85jlyXvqO/j171pKO1ZrAHuFrGRhn56vZ0W+XkpU0pHf85vcNJx5ZSK7Lzi7KuMrc0+vI8Jrjyac/J0+3Tp8RDqUbcH5HvE2+kmc1k48umuN8WLXGsam1ibjoe8Tiznhuq1+hxzm46Wk4t4xbcfL0jr0OMAc2A8yBDccOfR5XtHP4s1E/iU3Tc9qmGuASd2W3Lc7j3980w58Z9W19V8D6rqcNdPz4ZeH0y1fL5X5e19O3btoFZ0Pq5CkRNJCMIlxNhJUmwiPSLCIaSYREkwiJJhEVSYRJTYSamkMSaQxVJTJRSGSmlMSCwJ95VY3yGzhIKlHCCozCBwhSPa4RklSqSZZUp6SZJcp6ec1dEaXVCpy02tYJV7qWq/hfwDcj4zPL6t37seu4LzcHix+3h+ePrPu7xuavRKOZVfMgSnz/FzZXs4+po0vzofIgn5SLlj7vT4sefLtx5fhXJ1IpDmyjz7P1k3LGvR4+n6i/wAH6Mp6tcQuPrCNgwJbb+kGbY891rw2r/6dy3Le5Cf4arU9mi9u/Aj+8r9498uXbB0YdHMftZiOC1z/AAY+dRF+gaH0PNfWRvOHjnrVV4HV27SDvGbn5gD6R/7bk/5rnBxX+FUcCfYs623scajfMvb5Sv8AaW/azrTHg4/TFVeDAc6jnwC0x/xvHOkw9bW2PBh/xOOFUx1qn/UcD4AgS503FP4XRjxz2EcNog39WhPeRkfiZU48J2jbHjnssVjraYkKxNJCMsSpEmEStJMIj0kwiLSLCKpqTCSSLCIk2ESakYk0jSU0hiTSGSilMVTSmJBTEl9/VYPjdqBIKlNhBcDCC4UpBpAAIvba4IPiD0jVraLU5UrSRJqcuVcxafENAlam9KoLpUFjbmO4jxB3j7zTTDeN3HP0XAKNFswalVsWX8YrUWxFr42tfxttJ+hwvo3nJl6SL8T4bp69T1jaeiDiqBQpKgKLciZfHx4YTUgl5PWopw2knsUqS/pRR9pvNex+HK96Y0ZcpziI1GVK0nEQ0o/E1nEQ0o9tZxi5YqELMUUsyrfsqxtcgeNh8IbaY8XntE0obbTAr0iCQQQQSCDzBHSLbXHBMpFa0mKbJEuYpssS/CkyxHpJhFT0i4iJFhESLCBItJSk0lKTCIqm0SU2iTSGSghiqaUyaikMSaUxIr9DKsHxW1AkFSmCxNJRwi21hSke2sIyRtcYmyQ21kTZJUrWYptTlStJim1OVK1mCbUpcrScaZpSpWs4yNSlStJxpmlKlazjIaUrbWcSZpR7aTjTanBpONNqca5xpskFzBJkiVMUmWB+FFlgekXEQQcQJFxEVQeJKTxEiwiTUWk1KTREm0SU2iTUzJRSmKppDJQUyUUsSX6LRYPhtqqslUpsYmkrCsGuNKVg3xIRBviUrKb4plY2+MIUjb4whSVK2xxIUlytscCGnK22xwIacqVtMCGnKlazjIacrbWcabU49tJgkySleBF0grwIusY8KDiA0g4gNIOIJsQcREg8CQeBIuJKai8SUXipVFokpNJTUmiTU2iqSGSikaJJTJRSGSmlMSX6QQRPg9rqsk5TYwaY0pEG+JCIN8SEQdGJDG6MSERt8SERujEpjdGJCJcb4lIlR0YwpEpvjCkSo2xhGWXGsiTLKXpFxHD0g4jJruIw13ECQcQS13gSDwSg8SUHgSLxFUGkpSaCai0lNSaSlJoiqTRVJDJRSmJFIZKaQyUUpiS/R9MxV8HWzTMkhYwa4kJg6MUyYOjEhMbowITB0YkJlN8Skxt8SExujECZUdGJCZUb4gTKjfEpMuOjEpMqNok5lKQcyg13MCQcwLbXcxkg8EtdzAqg8SKg8E2oPESLxFUXiSi8Wy2k0lFSaSSTRJTIiqamREilIkpIREilIkopLRJf/9k=",
      registrationLink: "https://eventreg.com/register",
      eventCategory: "Tecnología",
      eventDuration: "8 horas",
      tags: ["tecnología", "innovación", "conferencia"],
      eventVisibility: "Público",
      requireRSVP: true,
      eventLanguage: "Español",
      sendAutomaticReminder: true,
      emailTemplates: {
        confirmation:
          "Gracias por registrarte a la Conferencia de Tecnología 2024.",
        reminder:
          "Este es un recordatorio para la Conferencia de Tecnología 2024 el 15 de septiembre.",
      },
      cancellationPolicy:
        "Las cancelaciones se aceptan hasta 7 días antes del evento.",
      socialMediaLinks: {
        twitter: "https://twitter.com/techconference",
        facebook: "https://facebook.com/techconference",
      },
      registrationDeadline: "2024-09-10",
    },
    {
      eventId: "564fad6f128712@@325wgdfag",
      eventName: "Taller de Fotografía",
      eventDescription:
        "Aprende las técnicas básicas y avanzadas de la fotografía en este taller intensivo.",
      eventDate: "2024-10-05T14:00",
      eventLocation: "Estudio de Arte, Buenos Aires",
      organizerName: "FotoArte",
      organizerContact: "info@fotoarte.com",
      attendeeCapacity: 25,
      eventType: "Taller",
      registrationCost: 75,
      eventImage:
        "https://cdn2.hubspot.net/hubfs/53/como-hacer-una-pagina-web-en-html.jpg",
      registrationLink: "https://eventreg.com/photo-workshop",
      eventCategory: "Arte",
      eventDuration: "4 horas",
      tags: ["fotografía", "arte", "taller"],
      eventVisibility: "Privado",
      requireRSVP: false,
      eventLanguage: "Español",
      sendAutomaticReminder: false,
      emailTemplates: {
        confirmation: "Gracias por registrarte al Taller de Fotografía.",
        reminder: "Recordatorio: Tu taller de fotografía es el 5 de octubre.",
      },
      cancellationPolicy: "No se aceptan cancelaciones.",
      socialMediaLinks: {
        instagram: "https://instagram.com/fotoarte",
      },
      registrationDeadline: "2024-10-01",
    },
  ];

  return (
    <>
      <section
        className={
          userThemePreference === "Dark"
            ? "coffemanager-container Dark"
            : "coffemanager-container"
        }
      >
        <section className="coffemanager-header">
          <div
            className="NewOrderEntry"
            onClick={() => {
              alert("creando evento nuevo");
            }}
          >
            Nuevo Evento
          </div>
          <div className="NavMenu">
            <p
              className="POS-nav-content Active"
              onClick={() => setPosViewer("POS")}
            >
              Lista General de Eventos
            </p>
            <p
              className="POS-nav-content" /*</div>onClick={() => setPosViewer("OMP")}*/
            >
              Vista por Eventos
            </p>
            <p className="POS-nav-content" onClick={() => setPosViewer("PRO")}>
              Configuraciones
            </p>
          </div>
          <div>Resumen de caja</div>
        </section>
        <section>
          <section className="coffe-manager-body-container">
            <section className="coffe-manager-body-products-navigation">
              <section className="coffe-manager-body-menu-container"></section>
            </section>
          </section>
          <section>
            <table cellPadding="10">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Event Name</th>
                  <th>Event ID</th>
                  {/* <th>Description</th> */}
                  {/* <th>Date & Time</th> */}
                  <th>Location</th>
                  <th>Organizer</th>
                  <th>Capacity</th>
                  <th>Type</th>
                  <th>Cost</th>
                  <th>Category</th>
                  <th>Duration</th>
                  {/* <th>Tags</th> */}
                  <th>Visibility</th>
                  {/* <th>RSVP Required</th>
                  <th>Language</th>
                  <th>Reminder</th>
                  <th>Cancellation Policy</th>
                  <th>Registration Link</th>
                  <th>Social Media</th> */}
                  <th>Registration Deadline</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event, index) => (
                  <TableViewer event={event} key={event.eventId} />
                ))}
              </tbody>
            </table>
          </section>
        </section>
      </section>
    </>
  );
};

export default EventPage;
