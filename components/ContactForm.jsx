"use client"
import { useEffect, useState } from "react";

export default function ContactForm({messageStatus, STATUSES, changeMessageStatus}) {

	const initialFormValues = {fullName: '', email: '', mobile: '', message: ''}

	const [formValues, setFormValues] = useState(initialFormValues)
	const [errors, setErrors] = useState([])
	const [successCount, setSuccessCount] = useState(0)

	function handleChange(e) {
		setFormValues(oldValues => {
			return {...oldValues, [e.target.name]: e.target.value}
		})
	}

	function sendEmail() {
		Email.send({
			Host : "smtp.elasticemail.com",
			Port: 2525,
			Username : process.env.API_LOGIN,
			Password : process.env.API_PASSWORD,
			To : 'biuro@elbig.com.pl',
			From : "biuro@elbig.com.pl",
			Subject : "Nowa zapytanie ze strony Elbig.com.pl",
			Body : `<p style="font-size: 28px; font-weight: bold">Nowa wiadomość od ${formValues.fullName}</p>
			<br>
			<span style="font-weight: bold">Adres e-mail:</span> ${formValues.email}
			<br>
			<span style="font-weight: bold">Numer telefonu:</span> ${formValues.mobile}
			<br>
			<span style="font-weight: bold">Wiadomość:</span>
			<br>
			<blockquote style="padding: 4px">${formValues.message}</blockquote>
			`
		}).then(
		  message => 
		  {
			if(message==='OK')
			{
				changeMessageStatus(STATUSES.SENT)
			}
			else {
				changeMessageStatus(STATUSES.ERROR)
			}
			setTimeout(() => {
				changeMessageStatus(STATUSES.INITIAL)
			}, 5000)
		  }
		)
	}

	function validMail(mail)
	{
    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(mail);
	}

	useEffect(() => {
	if(successCount===4) {
		changeMessageStatus(STATUSES.SENDING)
		sendEmail()
		setFormValues(initialFormValues)
	}
	}, [successCount])

	function checkAllFields() {
		setErrors([])
		setSuccessCount(0)
		if(formValues.fullName==='') {
			setErrors(oldValues => {
				return [...oldValues, 'Pole imię nie może być puste!']
			})
		}
		else {
		setSuccessCount(oldValue => oldValue + 1)
		}
		if(!validMail(formValues.email)) {
			setErrors(oldValues => {
				return [...oldValues, 'Podaj poprawny adres e-mail!']
			})
		}
		else {
		setSuccessCount(oldValue => oldValue + 1)
		}
		if(formValues.mobile==='') {
			setErrors(oldValues => {
				return [...oldValues, 'Pole numer telefonu nie może być puste!']
			})
		}
		else {
		setSuccessCount(oldValue => oldValue + 1)
		}
		if(formValues.message==='') {
			setErrors(oldValues => {
				return [...oldValues, 'Pole wiadomość nie może być puste!']
			})
		}
		else {
		setSuccessCount(oldValue => oldValue + 1)
		}
	}

	async function handleSubmit(event) {
		event.preventDefault()
		checkAllFields()
	}

		if (messageStatus === STATUSES.INITIAL)
			return (
				<form 
				onSubmit={(event) => handleSubmit(event)}
                className="relative bg-white z-50 flex flex-col gap-4 min-h-[35rem] justify-center w-full p-6 lg:p-10 border-[1px] border-gray-100/75  sm:w-3/4 md:w-3/5 lg:w-11/12 mx-auto shadow-md rounded-xl text-sm">
					<input type="text" placeholder="Imię i nazwisko"
					value={formValues.fullName} name="fullName" onChange={(e) => handleChange(e)}
						className="border-[1px] px-4 rounded-lg py-3 focus:outline-none focus:shadow-md focus:bg-gray-50 outline-none" />
					<input type="text" placeholder="Adres e-mail"
					value={formValues.email} name="email" onChange={(e) => handleChange(e)}
						className="border-[1px] px-4 rounded-lg py-3 focus:outline-none focus:shadow-md focus:bg-gray-50 transition-all duration-200 outline-none" />
					<input type="text" placeholder="Numer telefonu"
					value={formValues.mobile} name="mobile" onChange={(e) => handleChange(e)}
						className="border-[1px] px-4 rounded-lg py-3 focus:outline-none focus:shadow-md focus:bg-gray-50 transition-all duration-200 outline-none" />
					<textarea rows="7" placeholder="Napisz wiadomość.."
					value={formValues.message} name="message" onChange={(e) => handleChange(e)}
						className="resize-none border-[1px] px-4 rounded-xl py-3 focus:outline-none  focus:shadow-md focus:bg-gray-50 transition-all duration-200 outline-none" />
					<p className={errors.length > 0 ?
						"text-center text-red-500 h-full visible opacity-100 transition-all duration-300 flex flex-col gap-1 mb-2"
						:
						"text-center text-red-500 opacity-0 invisible h-0 transition-all duration-300"}>{errors.map(error => {
							return <span>{error}</span>
						})} </p>
					<p className="text-[0.7rem] -mt-3 text-center">Wyrażam zgodę na przetwarzanie danych osobowych zgodnie z ustawą o ochronie danych osobowych w związku z wysłaniem zapytania przez formularz kontaktowy. Dane będą przetwarzane w celu odpowiedzi na zapytanie oraz realizację usługi. Administratorem danych jest El-Big Jarosław Wręczycki, ul. Nakielska 42/44, 42-600 Tarnowskie Góry</p>
					<button className="py-3 font-semibold text-white transition-colors duration-200 bg-red-500 rounded-lg hover:bg-red-600 active:outline-none">Wyślij wiadomość</button>
				</form>
			)
		else if (messageStatus === STATUSES.SENDING)
			return (
				<form 
                className="relative bg-white z-50 text-center font-bold w-full  border-[1px] border-gray-100/75  sm:w-3/4 md:w-3/5 lg:w-11/12 mx-auto shadow-md rounded-xl text-lg">
					<div className="flex flex-col items-center justify-center text-blue-500 min-h-[35rem] p-6 lg:p-10 animate-pulse">
						<img src="/message.png" alt="Sending Email Icon" className="" />
						Wysyłanie wiadomości..
					</div>
				</form>)
		else if (messageStatus === STATUSES.SENT)
			return (
				<form 
                className="relative bg-white z-50 text-center font-bold w-full  border-[1px] border-gray-100/75  sm:w-3/4 md:w-3/5 lg:w-11/12 mx-auto shadow-md rounded-xl text-lg">
					<div className="flex flex-col items-center gap-4 justify-center text-green-600 min-h-[35rem] p-6 lg:p-10 ">
						<img src="/cute.png" alt="Email Sent Icon" className="" />
						Wiadomość została wysłana! Wkrótce się do ciebie odezwiemy!
					</div>
				</form>)
		else
			return (
				<form 
                className="relative bg-white z-50 text-center font-bold w-full  border-[1px] border-gray-100/75  sm:w-3/4 md:w-3/5 lg:w-11/12 mx-auto shadow-md rounded-xl text-lg">
					<div className="flex flex-col items-center gap-4 justify-center text-red-500 min-h-[35rem] p-6 lg:p-10 ">
						<img src="/email-blocker.png" alt="Email Sent Icon" className="w-24 md:w-32" />
						Wystąpił błąd! Spróbuj ponownie później, bądź napisz do nas bezpośrednio na biuro@elbig.com.pl
					</div>
				</form>)
    
  
}
