// Ukol FIT e-mail

const jmeno = prompt("Zadej své jméno bez diakritiky").trim()
const prijmeni = prompt("Zadej své příjmení bez diakritiky").trim()

const email = prijmeni.toLowerCase().slice(0, 5) + jmeno.toLowerCase().slice(0, 3) + "@fit.cvut.cz"
document.body.innerHTML += `
<p>Váš nový e-mail je ${email}.</p>
`
